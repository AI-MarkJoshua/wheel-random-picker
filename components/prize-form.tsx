"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Trophy } from "lucide-react"

interface PrizeFormProps {
  onAddPrize: (prizeName: string, winnerSlots: number) => void
  prizeCount: number
}

export function PrizeForm({ onAddPrize, prizeCount }: PrizeFormProps) {
  const [prizeName, setPrizeName] = useState<string>("")
  const [winnerSlots, setWinnerSlots] = useState<string>("1")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const slots = Number.parseInt(winnerSlots)
    if (prizeName.trim() && slots > 0) {
      onAddPrize(prizeName.trim(), slots)
      setPrizeName("")
      setWinnerSlots("1")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Trophy className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">{"Create Prizes"}</h2>
      </div>
      <p className="text-sm text-muted-foreground">
        {"Get ready for the ultimate prize draw – input your prizes now!"}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
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
          <Label htmlFor="winners">Number of Winners</Label>
          <Input
            id="winners"
            type="number"
            min="1"
            placeholder="How many people can win this prize?"
            value={winnerSlots}
            onChange={(e) => setWinnerSlots(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">Set how many participants can win this prize</p>
        </div>

        <Button type="submit" className="w-full" size="lg">
          <Plus className="h-4 w-4 mr-2" />
          Add Prize
        </Button>
      </form>

      <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
        <strong className="text-foreground">{prizeCount}</strong> prize
        {prizeCount !== 1 ? "s" : ""} created
      </div>
    </div>
  )
}
