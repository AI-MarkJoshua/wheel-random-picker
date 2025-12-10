"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, Upload, Trash2, Users } from "lucide-react"
import * as XLSX from "xlsx"

interface ParticipantsManagerProps {
  participants: string[]
  onAddParticipant: (name: string) => void
  onRemoveParticipant: (index: number) => void
  onImportParticipants: (names: string[]) => void
}

export function ParticipantsManager({
  participants,
  onAddParticipant,
  onRemoveParticipant,
  onImportParticipants,
}: ParticipantsManagerProps) {
  const [participantName, setParticipantName] = useState<string>("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (participantName.trim()) {
      onAddParticipant(participantName.trim())
      setParticipantName("")
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
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-bold">Global Participants</h3>
          <Badge variant="secondary">{participants.length}</Badge>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
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
          <ScrollArea className="h-[200px] border rounded-lg p-3">
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
          No participants yet. Add or import names to get started!
        </p>
      )}
    </div>
  )
}

