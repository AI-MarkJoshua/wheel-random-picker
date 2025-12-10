"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Trash2, Plus, X, Users, RotateCcw, Upload, Award, Edit2 } from "lucide-react"
import type { Prize } from "@/components/random-picker"
import { cn } from "@/lib/utils"
import * as XLSX from "xlsx"

interface PrizesListProps {
  prizes: Prize[]
  selectedPrize: Prize | null
  onSelectPrize: (prize: Prize) => void
  onRemovePrize: (id: string) => void
  onAddParticipant: (prizeId: string, participantName: string) => void
  onRemoveParticipant: (prizeId: string, participantIndex: number) => void
  onReset: () => void
  onResetPrizeWinners: (prizeId: string) => void
  onUpdateWinnerSlots?: (prizeId: string, winnerSlots: number) => void
  participantsHistory?: string[]
  onRemoveHistoryName?: (name: string) => void
  onClearHistory?: () => void
  onEditHistoryName?: (oldName: string, newName: string) => void
}

export function PrizesList({
  prizes,
  selectedPrize,
  onSelectPrize,
  onRemovePrize,
  onAddParticipant,
  onRemoveParticipant,
  onReset,
  onResetPrizeWinners,
  onUpdateWinnerSlots,
  participantsHistory = [],
  onRemoveHistoryName,
  onClearHistory,
  onEditHistoryName,
}: PrizesListProps) {
  const [expandedPrizeId, setExpandedPrizeId] = useState<string | null>(null)
  const [participantName, setParticipantName] = useState<string>("")
  const [editingWinnerSlots, setEditingWinnerSlots] = useState<{ [key: string]: string }>({})
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [editingHistoryIndex, setEditingHistoryIndex] = useState<number | null>(null)
  const [editingHistoryValue, setEditingHistoryValue] = useState<string>("")
  const [showParticipantsHistory, setShowParticipantsHistory] = useState(false)
  const [showWinnersHistory, setShowWinnersHistory] = useState(false)

  const handleAddParticipant = (prizeId: string, e: React.FormEvent) => {
    e.preventDefault()
    if (participantName.trim()) {
      onAddParticipant(prizeId, participantName.trim())
      setParticipantName("")
    }
  }

  const toggleExpand = (prizeId: string) => {
    setExpandedPrizeId(expandedPrizeId === prizeId ? null : prizeId)
  }

  const handleFileImport = async (prizeId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const fileExtension = file.name.split(".").pop()?.toLowerCase()

    try {
      if (fileExtension === "xlsx" || fileExtension === "xls") {
        const data = await file.arrayBuffer()
        const workbook = XLSX.read(data, { type: "array" })
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]]
        const jsonData: (string | number)[][] = XLSX.utils.sheet_to_json(firstSheet, { header: 1 })

        const names: string[] = []

        // Loop through each row and each cell properly
        jsonData.forEach((row: (string | number)[]) => {
          row.forEach((cell) => {
            if (typeof cell === "string" && cell.trim()) {
              names.push(cell.trim())
            } else if (typeof cell === "number") {
              names.push(cell.toString())
            }
          })
        })

        // Log the names to see what is being captured from the file
        console.log("Names from the Excel file:", names)

        // Add all participants correctly
        names.forEach((name) => {
          onAddParticipant(prizeId, name)
        })
      } else if (fileExtension === "csv" || fileExtension === "txt") {
        const text = await file.text()
        const names = text
          .split(/[\n,;]/)
          .map((name) => name.trim())
          .filter((name) => name.length > 0)

        console.log("Names from the text file:", names) // Log to see the names

        // Add participants correctly
        names.forEach((name) => {
          onAddParticipant(prizeId, name)
        })
      }
    } catch (error) {
      console.error("Error importing file:", error)
      alert("Error importing file. Please make sure the file format is correct.")
    }

    // Reset the input file after processing
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const triggerFileImport = (prizeId: string) => {
    if (fileInputRef.current) {
      fileInputRef.current.dataset.prizeId = prizeId
      fileInputRef.current.click()
    }
  }

  return (
    <div className="space-y-4">
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv,.txt,.xlsx,.xls"
        className="hidden"
        onChange={(e) => {
          const prizeId = e.target.dataset.prizeId
          if (prizeId) {
            handleFileImport(prizeId, e)
          }
        }}
      />

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{"Prize Categories"}</h2>
        {prizes.length > 0 && (
          <Button variant="ghost" size="sm" onClick={onReset}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset All
          </Button>
        )}
      </div>

      {/* History Panels - New Browser-like Design */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Participants History Panel */}
        {participantsHistory.length > 0 && (
          <div className="border rounded-lg overflow-hidden bg-card">
            <div className="bg-muted/50 border-b px-4 py-3 flex items-center justify-between">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowParticipantsHistory(!showParticipantsHistory)}
                className="font-semibold text-sm w-full justify-start"
              >
                {showParticipantsHistory ? <X className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                Participants History
              </Button>
              {showParticipantsHistory && onClearHistory && (
                <Button size="sm" variant="ghost" onClick={() => onClearHistory()} className="text-xs">
                  Clear
                </Button>
              )}
            </div>
            {showParticipantsHistory && (
              <ScrollArea className="h-64">
                <div className="space-y-2 p-4">
                  {participantsHistory.map((name, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-between bg-muted/30 hover:bg-muted/50 px-3 py-2 rounded-md transition-colors"
                    >
                      {editingHistoryIndex === i ? (
                        <div className="flex items-center gap-2 w-full">
                          <Input
                            value={editingHistoryValue}
                            onChange={(e) => setEditingHistoryValue(e.target.value)}
                            className="text-sm"
                            placeholder="Edit name..."
                          />
                          <div className="flex items-center gap-1">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => {
                                if (onEditHistoryName) onEditHistoryName(name, editingHistoryValue.trim())
                                setEditingHistoryIndex(null)
                                setEditingHistoryValue("")
                              }}
                              className="h-7 w-7 p-0"
                            >
                              ✓
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              onClick={() => { setEditingHistoryIndex(null); setEditingHistoryValue("") }}
                              className="h-7 w-7 p-0"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <span className="text-sm font-medium truncate flex-1">{name}</span>
                          <div className="flex items-center gap-1">
                            <Button 
                              size="sm"
                              variant="ghost" 
                              onClick={() => selectedPrize && onAddParticipant(selectedPrize.id, name)}
                              disabled={!selectedPrize}
                              className="h-7 w-7 p-0"
                              title="Add to selected prize"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button 
                              size="sm"
                              variant="ghost" 
                              onClick={() => { setEditingHistoryIndex(i); setEditingHistoryValue(name) }}
                              className="h-7 w-7 p-0"
                            >
                              <Edit2 className="h-3 w-3" />
                            </Button>
                            {onRemoveHistoryName && (
                              <Button 
                                size="sm"
                                variant="ghost" 
                                onClick={() => onRemoveHistoryName(name)}
                                className="h-7 w-7 p-0 hover:text-destructive"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>
        )}

        {/* Winners History Panel */}
        {prizes.some(p => p.winners.length > 0) && (
          <div className="border rounded-lg overflow-hidden bg-card">
            <div className="bg-muted/50 border-b px-4 py-3 flex items-center justify-between">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowWinnersHistory(!showWinnersHistory)}
                className="font-semibold text-sm w-full justify-start"
              >
                {showWinnersHistory ? <X className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                Winners History
              </Button>
            </div>
            {showWinnersHistory && (
              <ScrollArea className="h-64">
                <div className="space-y-2 p-4">
                  {prizes.flatMap(prize => 
                    prize.winners.map((winner, winnerIndex) => (
                      <div 
                        key={`${prize.id}-${winnerIndex}`}
                        className="flex items-center justify-between bg-muted/30 hover:bg-muted/50 px-3 py-2 rounded-md transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{winner.winnerName}</div>
                          <div className="text-xs text-muted-foreground">Won: {prize.name}</div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </ScrollArea>
            )}
          </div>
        )}
      </div>

      {prizes.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>{"No prizes yet. Create your first prize above!"}</p>
        </div>
      ) : (
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-3">
            {prizes.map((prize) => {
              const isExpanded = expandedPrizeId === prize.id
              const isSelected = selectedPrize?.id === prize.id
              const remainingSlots = prize.winnerSlots - prize.winners.length

              return (
                <div
                  key={prize.id}
                  className={cn("border rounded-lg p-4 transition-all", isSelected && "border-primary bg-primary/5")}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 flex-1 flex-wrap">
                      <Button
                        variant={isSelected ? "default" : "outline"}
                        size="sm"
                        onClick={() => onSelectPrize(prize)}
                        title="Click to select this prize and auto-load all participants to the wheel"
                      >
                        Select Prize
                      </Button>
                      <h3 className="font-semibold text-lg">{prize.name}</h3>
                      <Badge variant="secondary">
                        <Users className="h-3 w-3 mr-1" />
                        {prize.participants.length}
                      </Badge>
                      <Badge variant={remainingSlots === 0 ? "destructive" : "default"}>
                        <Award className="h-3 w-3 mr-1" />
                        {prize.winners.length}/{prize.winnerSlots} won
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" onClick={() => toggleExpand(prize.id)}>
                        {isExpanded ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => onRemovePrize(prize.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 space-y-3 border-t pt-3">
                      {isSelected && (
                        <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-sm">
                          <p className="text-primary font-semibold">✨ Auto-loaded participants</p>
                          <p className="text-muted-foreground text-xs mt-1">
                            All global participants ({prize.participants.length} total) are automatically loaded on the wheel. You can still add more manually below.
                          </p>
                        </div>
                      )}
                      
                      {onUpdateWinnerSlots && (
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold">How Many Can Win?</Label>
                          <div className="flex gap-2">
                            <Input
                              type="number"
                              min={Math.max(1, prize.winners.length)}
                              max={prize.participants.length}
                              placeholder={prize.winnerSlots.toString()}
                              value={editingWinnerSlots[prize.id] ?? prize.winnerSlots}
                              onChange={(e) => {
                                const value = e.target.value
                                const numValue = Number.parseInt(value)
                                if (value === "" || (numValue >= Math.max(1, prize.winners.length) && numValue <= prize.participants.length)) {
                                  setEditingWinnerSlots({ ...editingWinnerSlots, [prize.id]: value })
                                }
                              }}
                              onBlur={(e) => {
                                const value = e.target.value
                                const numValue = Number.parseInt(value)
                                if (value && numValue >= Math.max(1, prize.winners.length) && numValue <= prize.participants.length) {
                                  onUpdateWinnerSlots(prize.id, numValue)
                                  setEditingWinnerSlots({ ...editingWinnerSlots, [prize.id]: "" })
                                } else {
                                  setEditingWinnerSlots({ ...editingWinnerSlots, [prize.id]: "" })
                                }
                              }}
                              className="text-lg font-semibold"
                            />
                            <Button
                              type="button"
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                const value = editingWinnerSlots[prize.id] || prize.winnerSlots.toString()
                                const numValue = Number.parseInt(value)
                                if (numValue >= Math.max(1, prize.winners.length) && numValue <= prize.participants.length) {
                                  onUpdateWinnerSlots(prize.id, numValue)
                                  setEditingWinnerSlots({ ...editingWinnerSlots, [prize.id]: "" })
                                }
                              }}
                            >
                              Update
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Current: {prize.winners.length}/{prize.winnerSlots} won | Available: {prize.participants.length} participants
                          </p>
                        </div>
                      )}
                      
                      <form onSubmit={(e) => handleAddParticipant(prize.id, e)} className="flex gap-2">
                        <Input
                          placeholder="Enter participant name"
                          value={participantName}
                          onChange={(e) => setParticipantName(e.target.value)}
                        />
                        <Button type="submit" size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </form>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                        onClick={() => triggerFileImport(prize.id)}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Import Names (Excel/CSV/TXT)
                      </Button>

                      {prize.winners.length > 0 && (
                        <div className="space-y-2 bg-primary/5 p-3 rounded-lg">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-sm flex items-center gap-2">
                              <Award className="h-4 w-4" />
                              Winners ({prize.winners.length})
                            </h4>
                            <Button variant="ghost" size="sm" onClick={() => onResetPrizeWinners(prize.id)}>
                              <RotateCcw className="h-3 w-3 mr-1" />
                              Reset
                            </Button>
                          </div>
                          <div className="space-y-1">
                            {prize.winners.map((winner, index) => (
                              <div key={index} className="bg-background px-3 py-2 rounded text-sm">
                                {winner.winnerName}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {prize.participants.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Participants</h4>
                          {prize.participants.map((participant, index) => (
                            <div key={index} className="flex items-center justify-between bg-muted/50 px-3 py-2 rounded">
                              <span className="text-sm">{participant}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => onRemoveParticipant(prize.id, index)}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </ScrollArea>
      )}
    </div>
  )
}
