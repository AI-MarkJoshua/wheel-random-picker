"use client"

import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Trophy, Award } from "lucide-react"
import type { Prize } from "@/components/random-picker"

interface WinnersListProps {
  prizes: Prize[]
}

export function WinnersList({ prizes }: WinnersListProps) {
  // Consolidate all winners into one list, sorted by timestamp (newest first)
  const allWinners = prizes
    .flatMap((prize) =>
      prize.winners.map((winner) => ({
        ...winner,
        prizeName: prize.name,
      }))
    )
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())

  if (allWinners.length === 0) {
    return null
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Trophy className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">All Winners List</h3>
              <p className="text-sm text-muted-foreground">{allWinners.length} winner{allWinners.length !== 1 ? "s" : ""} total</p>
            </div>
          </div>
        </div>
        
        <ScrollArea className="h-[350px] pr-4">
          <div className="space-y-3">
            {allWinners.map((winner, index) => (
              <div
                key={`${winner.winnerName}-${winner.timestamp.getTime()}-${index}`}
                className="group relative bg-gradient-to-r from-muted/60 to-muted/40 border border-border/50 rounded-xl px-5 py-4 hover:from-muted/80 hover:to-muted/60 hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  {/* Rank Badge */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 text-primary font-bold text-base flex-shrink-0 border-2 border-primary/40 shadow-sm">
                    {index + 1}
                  </div>
                  
                  {/* Winner Info */}
                  <div className="flex flex-col flex-1 min-w-0 gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg text-foreground truncate">{winner.winnerName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-primary/10 text-primary">
                        <Award className="h-3.5 w-3.5 flex-shrink-0" />
                        <span className="font-medium truncate">{winner.prizeName}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timestamp */}
                  <div className="flex flex-col items-end flex-shrink-0 ml-4">
                    <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                      {winner.timestamp.toLocaleDateString()}
                    </span>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {winner.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </Card>
  )
}

