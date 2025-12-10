"use client"

import { Button } from "@/components/ui/button"
import { Play, Loader2, Users, Sparkles } from "lucide-react"
import type { Prize, Winner } from "@/components/random-picker"
import { cn } from "@/lib/utils"
import { useEffect, useState, useCallback } from "react"
import { ConfettiBurst } from "@/components/confetti-burst"

interface NameRevealerProps {
  selectedPrize: Prize | null
  isSpinning: boolean
  onSpin: () => void
  onPickAll: () => void
  winner: Winner | Winner[] | null
  displayedName?: string | null
  pickingMultiple?: boolean
}

export function NameRevealer({ selectedPrize, isSpinning, onSpin, onPickAll, winner, displayedName, pickingMultiple }: NameRevealerProps) {
  const canSpin = selectedPrize && selectedPrize.participants.length > 0 && !isSpinning
  const remainingSlots = selectedPrize ? selectedPrize.winnerSlots - selectedPrize.winners.length : 0
  const canPickAll = canSpin && remainingSlots > 0
  const isMultipleWinner = Array.isArray(winner)
  const winnerCount = isMultipleWinner ? winner.length : (winner ? 1 : 0)
  const [confettiTrigger, setConfettiTrigger] = useState(false)

  const playSpinSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const gainNode = audioContext.createGain()
    const oscillator = audioContext.createOscillator()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.type = 'sine'

    const now = audioContext.currentTime
    oscillator.frequency.setValueAtTime(200, now)
    oscillator.frequency.exponentialRampToValueAtTime(800, now + 0.5)

    gainNode.gain.setValueAtTime(1.0, now)
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 2.0)

    oscillator.start(now)
    oscillator.stop(now + 2.0)
  }

  const playWinSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const now = audioContext.currentTime
    
    const notes = [523.25, 659.25, 783.99]
    
    notes.forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.setValueAtTime(frequency, now)
      gainNode.gain.setValueAtTime(0.5, now + index * 0.1)
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + index * 0.1 + 0.3)
      
      oscillator.start(now + index * 0.1)
      oscillator.stop(now + index * 0.1 + 0.3)
    })
  }

  // Play sounds
  useEffect(() => {
    if (isSpinning) {
      playSpinSound()
    }
  }, [isSpinning])

  useEffect(() => {
    if (winner) {
      playWinSound()
    }
  }, [winner])

  const openWinnerTab = useCallback((name: string) => {
    const html = `<!DOCTYPE html><html><head><title>Winner</title><style>body{margin:0;background:#0a3761;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:serif;}h1{font-size:5rem;margin:0 0 1rem 0;}@keyframes pop{0%{transform:scale(0.7);}60%{transform:scale(1.1);}100%{transform:scale(1);}}h1{animation:pop 0.7s cubic-bezier(.68,-0.55,.27,1.55);}div.confetti{position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:10;}</style></head><body><div class='confetti'></div><h1>${name}</h1><p style='font-size:2rem;opacity:0.7;'>Winner!</p><script>function confetti(){const c=document.querySelector('.confetti');for(let i=0;i<80;i++){const e=document.createElement('span');e.style.position='absolute';e.style.left=Math.random()*100+'vw';e.style.top=Math.random()*100+'vh';e.style.width=e.style.height=Math.random()*12+8+'px';e.style.background='hsl('+Math.random()*360+',90%,60%)';e.style.borderRadius=Math.random()>0.5?'50%':'20%';e.style.opacity=0.8;e.style.transform='rotate('+Math.random()*360+'deg)';e.style.transition='all 1.2s cubic-bezier(.68,-0.55,.27,1.55)';c.appendChild(e);setTimeout(()=>{e.style.top=(parseFloat(e.style.top)+Math.random()*60+40)+'px';e.style.opacity=0;},100);setTimeout(()=>c.removeChild(e),1400);}}confetti();</script></body></html>`;
    const w = window.open('', '_blank')
    if (w) {
      w.document.write(html)
      w.document.close()
    }
  }, [])

  useEffect(() => {
    if (winner) {
      setConfettiTrigger(true)
      const timeout = setTimeout(() => setConfettiTrigger(false), 1200)
      return () => clearTimeout(timeout)
    }
  }, [winner])

  return (
    <div className="space-y-6">
      <ConfettiBurst trigger={confettiTrigger} />
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-black bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
          {"Winner Selection"}
        </h2>
        {selectedPrize ? (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              {"Drawing for: "}
              <strong className="text-foreground text-base">{selectedPrize.name}</strong>
            </p>
            <div className="flex justify-center gap-4">
              <div className="px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                <p className="text-xs text-primary font-semibold">
                  {selectedPrize.participants.length} participant{selectedPrize.participants.length !== 1 ? "s" : ""}
                </p>
              </div>
              {remainingSlots > 0 && (
                <div className="px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                  <p className="text-xs text-emerald-600 font-semibold">
                    {remainingSlots} slot{remainingSlots !== 1 ? "s" : ""} left
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">{"Select a prize category to continue!"}</p>
        )}
      </div>

      {/* Name Display Container */}
      <div className="relative flex items-center justify-center">
        <div className="relative w-full max-w-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-xl blur opacity-75" />
          <div className="relative rounded-lg border-2 border-primary/30 shadow-2xl bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden p-8">
            {/* Display Area */}
            <div className="text-center space-y-6 min-h-64 flex flex-col items-center justify-center">
              {isSpinning && !displayedName && !isMultipleWinner ? (
                <div className="space-y-6">
                  <div className="inline-block">
                    <p className="text-lg text-primary font-bold tracking-wider">
                      {"DRAWING..."}
                    </p>
                  </div>
                  <div className="flex justify-center gap-3">
                    <div className="w-4 h-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                    <div className="w-4 h-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    <div className="w-4 h-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                  </div>
                </div>
              ) : pickingMultiple && isSpinning && displayedName ? (
                <div className="space-y-4 animate-in fade-in zoom-in duration-500 w-full">
                  <div className="inline-block mx-auto">
                    <div className="flex items-center gap-2 justify-center">
                      <Sparkles className="h-6 w-6 text-yellow-500 animate-spin" />
                      <p className="text-sm text-primary font-bold uppercase tracking-widest">
                        {"Winner"}
                      </p>
                      <Sparkles className="h-6 w-6 text-yellow-500 animate-spin" />
                    </div>
                  </div>
                  <p className="text-4xl font-black text-primary break-words leading-tight">
                    {displayedName}
                  </p>
                </div>
              ) : pickingMultiple && isSpinning && !displayedName ? (
                <div className="space-y-6">
                  <div className="inline-block">
                    <p className="text-lg text-primary font-bold tracking-wider">
                      {"PICKING ALL WINNERS..."}
                    </p>
                  </div>
                  <div className="flex justify-center gap-3">
                    <div className="w-4 h-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                    <div className="w-4 h-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    <div className="w-4 h-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                  </div>
                </div>
              ) : displayedName && !isMultipleWinner ? (
                <div className="space-y-4 animate-in fade-in zoom-in duration-500 w-full">
                  <div className="inline-block mx-auto">
                    <div className="flex items-center gap-2 justify-center">
                      <Sparkles className="h-6 w-6 text-yellow-500 animate-spin" />
                      <p className="text-sm text-primary font-bold uppercase tracking-widest">
                        {displayedName.includes("Winner") ? "Drawing" : "Winner"}
                      </p>
                      <Sparkles className="h-6 w-6 text-yellow-500 animate-spin" />
                    </div>
                  </div>
                  <p className="text-4xl font-black text-primary break-words leading-tight animate-bounce cursor-pointer" onClick={() => openWinnerTab(displayedName!)}>
                    {displayedName}
                  </p>
                </div>
              ) : isMultipleWinner ? (
                <div className="space-y-6 w-full animate-in fade-in duration-500">
                  <div className="inline-block">
                    <div className="flex items-center gap-2 justify-center mb-4">
                      <Sparkles className="h-6 w-6 text-yellow-500 animate-spin" />
                      <p className="text-lg text-primary font-bold uppercase tracking-widest">
                        {winnerCount} Winner{winnerCount !== 1 ? "s" : ""}
                      </p>
                      <Sparkles className="h-6 w-6 text-yellow-500 animate-spin" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    {winner.map((w, index) => (
                      <div
                        key={index}
                        className="p-3 bg-primary/10 border border-primary/30 rounded-lg animate-in fade-in slide-in-from-bottom duration-500 cursor-pointer"
                        style={{ animationDelay: `${index * 150}ms` }}
                        onClick={() => openWinnerTab(w.winnerName)}
                      >
                        <p className="text-2xl font-bold text-primary">
                          {index + 1}. {w.winnerName}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <Sparkles className="h-12 w-12 text-muted-foreground/50 mx-auto" />
                  <p className="text-lg text-muted-foreground font-semibold">
                    {"Ready to draw a winner?"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Participants List */}
      {selectedPrize && selectedPrize.participants.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-center flex-1">Available Participants ({selectedPrize.participants.length})</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center max-h-40 overflow-y-auto p-4 bg-gradient-to-br from-muted/50 to-muted/20 rounded-lg border border-muted/50">
            {[...selectedPrize.participants]
              .sort((a, b) => a.localeCompare(b))
              .map((participant, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gradient-to-r from-primary/15 to-primary/10 text-primary rounded-full text-xs font-medium border border-primary/30 whitespace-nowrap hover:bg-primary/20 transition-colors"
                  title={participant}
                >
                  {participant.length > 12 ? participant.substring(0, 10) + '...' : participant}
                </span>
              ))}
          </div>
        </div>
      )}

      {/* Draw Buttons */}
      <div className="flex flex-col gap-3 pt-2">
        <Button 
          size="lg" 
          onClick={onSpin} 
          disabled={!canSpin} 
          className="text-base px-8 py-6 font-bold w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg"
        >
          {isSpinning && !pickingMultiple ? ( 
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Drawing Winner...
            </>
          ) : (
            <>
              <Play className="h-5 w-5 mr-2" />
              Draw One Winner
            </>
          )}
        </Button>
        {canPickAll && remainingSlots > 1 && (
          <Button 
            size="lg" 
            onClick={onPickAll} 
            disabled={!canPickAll || isSpinning} 
            variant="outline"
            className="text-base px-8 py-6 font-bold w-full border-2 border-primary/30 hover:bg-primary/5 hover:border-primary/50 shadow-lg"
          >
            {pickingMultiple && isSpinning ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Picking {remainingSlots} Winners...
              </>
            ) : (
              <>
                <Users className="h-5 w-5 mr-2" />
                Draw All {remainingSlots} Winners
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  )
}
