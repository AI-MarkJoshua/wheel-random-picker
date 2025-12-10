"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, Upload, Trash2, Users, Trophy, ArrowRight } from "lucide-react"
import * as XLSX from "xlsx"

interface SetupManagerProps {
  participants: string[]
  onAddParticipant: (name: string) => void
  onRemoveParticipant: (index: number) => void
  onImportParticipants: (names: string[]) => void
  onAddPrize: (prizeName: string, winnerSlots: number) => void
  prizeCount: number
}

export function SetupManager({
  participants,
  onAddParticipant,
  onRemoveParticipant,
  onImportParticipants,
  onAddPrize,
  prizeCount,
}: SetupManagerProps) {
  const [participantName, setParticipantName] = useState<string>("")
  const [prizeName, setPrizeName] = useState<string>("")
  const [winnerSlots, setWinnerSlots] = useState<string>("1")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleAddParticipant = (e: React.FormEvent) => {
    e.preventDefault()
    if (participantName.trim()) {
      onAddParticipant(participantName.trim())
      setParticipantName("")
    }
  }

  const handleAddPrize = (e: React.FormEvent) => {
    e.preventDefault()
    const slots = Number.parseInt(winnerSlots)
    if (prizeName.trim() && slots > 0) {
      onAddPrize(prizeName.trim(), slots)
      setPrizeName("")
      setWinnerSlots("1")
    }
  }

  const handleFileImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
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

        jsonData.forEach((row: (string | number)[]) => {
          row.forEach((cell) => {
            if (typeof cell === "string" && cell.trim()) {
              names.push(cell.trim())
            } else if (typeof cell === "number") {
              names.push(cell.toString())
            }
          })
        })

        onImportParticipants(names)
      } else if (fileExtension === "csv" || fileExtension === "txt") {
        const text = await file.text()
        const names = text
          .split(/[\n,;]/)
          .map((name) => name.trim())
          .filter((name) => name.length > 0)

        onImportParticipants(names)
      }
    } catch (error) {
      console.error("Error importing file:", error)
      alert("Error importing file. Please make sure the file format is correct.")
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-6">
      {/* Step 1: Participants */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
              1
            </div>
            <Users className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold">Add Participants</h3>
            <Badge variant="secondary">{participants.length}</Badge>
          </div>
        </div>

        <form onSubmit={handleAddParticipant} className="flex gap-2">
          <Input
            placeholder="Enter participant name"
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
          />
          <Button type="submit" size="sm">
            <Plus className="h-4 w-4" />
          </Button>
        </form>

        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv,.txt,.xlsx,.xls"
            className="hidden"
            onChange={handleFileImport}
          />
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="h-4 w-4 mr-2" />
            Import Names (Excel/CSV/TXT)
          </Button>
        </div>

        {participants.length > 0 && (
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Participant List</Label>
            <ScrollArea className="h-[150px] border rounded-lg p-3">
              <div className="space-y-2">
                {participants.map((participant, index) => (
                  <div key={index} className="flex items-center justify-between bg-muted/50 px-3 py-2 rounded">
                    <span className="text-sm">{participant}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => onRemoveParticipant(index)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}

        {participants.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-4">
            Add or import participant names to get started!
          </p>
        )}
      </div>

      {/* Divider */}
      {participants.length > 0 && (
        <div className="flex items-center gap-2 py-2">
          <div className="flex-1 h-px bg-border"></div>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1 h-px bg-border"></div>
        </div>
      )}

      {/* Step 2: Create Prize */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
            2
          </div>
          <Trophy className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-bold">Create Prize</h3>
        </div>

        <form onSubmit={handleAddPrize} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="prize">Prize Name</Label>
            <Input
              id="prize"
              type="text"
              placeholder="e.g., Grand Prize, First Place, iPad Pro"
              value={prizeName}
              onChange={(e) => setPrizeName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="winners">How Many Can Win?</Label>
            <Input
              id="winners"
              type="number"
              min="1"
              max={participants.length || undefined}
              placeholder="Enter number (e.g., 5)"
              value={winnerSlots}
              onChange={(e) => {
                const value = e.target.value
                const numValue = Number.parseInt(value)
                if (value === "" || (numValue > 0 && (!participants.length || numValue <= participants.length))) {
                  setWinnerSlots(value)
                }
              }}
              className="text-lg font-semibold"
            />
            <p className="text-xs text-muted-foreground">
              {participants.length > 0 
                ? `Set how many of the ${participants.length} participants can win this prize`
                : "Add participants first to set the maximum"}
            </p>
            {participants.length > 0 && winnerSlots && Number.parseInt(winnerSlots) > participants.length && (
              <p className="text-xs text-destructive">
                Cannot exceed {participants.length} participants
              </p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={!prizeName.trim() || !winnerSlots || Number.parseInt(winnerSlots) < 1 || participants.length === 0}
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Prize & Ready to Spin
          </Button>
        </form>

        {prizeCount > 0 && (
          <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
            <strong className="text-foreground">{prizeCount}</strong> prize
            {prizeCount !== 1 ? "s" : ""} created
          </div>
        )}
      </div>
    </div>
  )
}

