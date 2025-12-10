import { RandomPicker } from "@/components/random-picker"

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 py-8">
        <RandomPicker />
      </div>
    </main>
  )
}
