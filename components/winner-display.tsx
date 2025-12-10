  "use client"

  import { useState } from "react"
  import { Button } from "@/components/ui/button"
  import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
  } from "@/components/ui/dialog"
  import { X } from "lucide-react"
  import type { Winner } from "@/components/random-picker"
  import { Confetti } from "@/components/confetti"
  import * as XLSX from "xlsx"
  
  interface WinnerDisplayProps {
    winner: Winner | Winner[]
    onClose: () => void
    onRemove?: () => void
  }
  
  export function WinnerDisplay({ winner, onClose, onRemove }: WinnerDisplayProps) {
    const [showConfetti, setShowConfetti] = useState(true)
    const winners = Array.isArray(winner) ? winner : [winner]
    const isMultipleWinners = winners.length > 1
    const handleDownloadResults = (format: "txt" | "excel") => {
      const currentWinner = winners[0]
      const dateStr = currentWinner.timestamp.toLocaleDateString()
      const timeStr = currentWinner.timestamp.toLocaleTimeString()
      const fullDateTime = currentWinner.timestamp.toLocaleString()

      if (format === "txt") {
        const result = `🎉 WINNER ANNOUNCEMENT 🎉
        
  Winner Name: ${currentWinner.winnerName}
  Prize: ${currentWinner.prizeName}
  Date: ${dateStr}
  Time: ${timeStr}
  Full Timestamp: ${fullDateTime}

  Congratulations to the winner!`

        const blob = new Blob([result], { type: "text/plain" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `winner-${currentWinner.prizeName.replace(/\s+/g, "-")}-${currentWinner.timestamp.toISOString().split("T")[0]}.txt`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      } else if (format === "excel") {
        const data = [
          ["Random Picker - Winner Results"],
          [],
          ["Winner Name", currentWinner.winnerName],
          ["Prize", currentWinner.prizeName],
          ["Date", dateStr],
          ["Time", timeStr],
          ["Full Timestamp", fullDateTime],
        ]

        const ws = XLSX.utils.aoa_to_sheet(data)
        ws["!cols"] = [{ width: 20 }, { width: 30 }]

        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, "Winner")

        XLSX.writeFile(
          wb,
          `winner-${currentWinner.prizeName.replace(/\s+/g, "-")}-${currentWinner.timestamp.toISOString().split("T")[0]}.xlsx`,
        )
      }
    }

    return (
      <>
        {showConfetti && <Confetti />}
        <Dialog open={true} onOpenChange={(open) => {
          if (!open) {
            setShowConfetti(false)
            onClose()
          }
        }}>
          <DialogContent className={`${isMultipleWinners ? "sm:max-w-2xl" : "sm:max-w-md"} bg-gray-800 text-white border-gray-700 p-0 overflow-hidden`}>
            <DialogHeader className="bg-green-600 text-white p-4 flex flex-row items-center justify-between rounded-t-lg">
              <DialogTitle className="text-xl font-bold m-0">
                {isMultipleWinners ? `We have ${winners.length} winners!` : "We have a winner!"}
              </DialogTitle>
              <button
                onClick={() => {
                  setShowConfetti(false)
                  onClose()
                }}
                className="text-white hover:text-gray-200 transition-colors rounded-sm opacity-70 hover:opacity-100"
              >
                <X className="h-5 w-5" />
              </button>
            </DialogHeader>
            
            {isMultipleWinners ? (
              // Multiple winners - show in list format like All Winners List
              <div className="p-6 bg-gray-800 max-h-[500px] overflow-y-auto">
                <div className="space-y-3">
                  {winners.map((w, index) => (
                    <div
                      key={`${w.winnerName}-${w.timestamp.getTime()}-${index}`}
                      className="group relative bg-gradient-to-r from-gray-700/60 to-gray-700/40 border border-gray-600/50 rounded-xl px-5 py-4 hover:from-gray-700/80 hover:to-gray-700/60 hover:border-green-500/30 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        {/* Rank Badge */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-green-500/30 to-green-500/20 text-white font-bold text-base flex-shrink-0 border-2 border-green-500/40 shadow-sm">
                          {index + 1}
                        </div>
                        
                        {/* Winner Info */}
                        <div className="flex flex-col flex-1 min-w-0 gap-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-lg text-white truncate">{w.winnerName}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-green-500/20 text-green-300">
                              <span className="font-medium truncate">Won: {w.prizeName}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Timestamp */}
                        <div className="flex flex-col items-end flex-shrink-0 ml-4">
                          <span className="text-xs font-medium text-gray-400 whitespace-nowrap">
                            {w.timestamp.toLocaleDateString()}
                          </span>
                          <span className="text-xs text-gray-500 whitespace-nowrap">
                            {w.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Single winner - show large display
              <div className="p-8 text-center bg-gray-800">
                <div className="text-5xl font-bold text-white mb-2">
                  {winners[0].winnerName}
                </div>
                <p className="text-gray-400 text-sm">
                  Won: {winners[0].prizeName}
                </p>
              </div>
            )}

            <DialogFooter className="bg-gray-800 p-4 flex flex-row justify-end gap-2 rounded-b-lg border-t border-gray-700">
              <Button
                variant="outline"
                onClick={() => {
                  setShowConfetti(false)
                  onClose()
                }}
                className="bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
              >
                Close
              </Button>
              {onRemove && (
                <Button
                  onClick={() => {
                    setShowConfetti(false)
                    onRemove()
                    onClose()
                  }}
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Remove
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    )
  }
