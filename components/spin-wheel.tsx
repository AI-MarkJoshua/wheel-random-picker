"use client"

import { Button } from "@/components/ui/button"
import { Play, Loader2, Users } from "lucide-react"
import type { Prize, Winner } from "@/components/random-picker"
import { cn } from "@/lib/utils"
import { useEffect } from "react"

interface SpinWheelProps {
  selectedPrize: Prize | null
  isSpinning: boolean
  onSpin: () => void
  onPickAll: () => void
  winner: Winner | Winner[] | null
  rotation?: number | null
}

// Wheel colors similar to wheelofnames.com - vibrant and alternating
const wheelColors = [
  "#FF6B6B", // Red
  "#4ECDC4", // Teal
  "#45B7D1", // Blue
  "#FFA07A", // Light Salmon
  "#98D8C8", // Mint
  "#F7DC6F", // Yellow
  "#BB8FCE", // Purple
  "#85C1E2", // Sky Blue
]

export function SpinWheel({ selectedPrize, isSpinning, onSpin, onPickAll, winner, rotation }: SpinWheelProps) {
  const canSpin = selectedPrize && selectedPrize.participants.length > 0 && !isSpinning
  const remainingSlots = selectedPrize ? selectedPrize.winnerSlots - selectedPrize.winners.length : 0

  // Play spinning sound when wheel starts spinning
  useEffect(() => {
    if (isSpinning) {
      playSpinSound()
    }
  }, [isSpinning])

  const playSpinSound = () => {
    // Create a simple spinning wheel sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const gainNode = audioContext.createGain();
const oscillator = audioContext.createOscillator();

// Connect oscillator to gain node and then to audio context
oscillator.connect(gainNode);
gainNode.connect(audioContext.destination);

// Set oscillator type for a spinning sound effect (white noise or low-frequency sweep)
oscillator.type = 'sine'; // Change to 'square' for sharper sounds, 'sine' is smoother

// Frequency sweep for spinning effect
const now = audioContext.currentTime;
oscillator.frequency.setValueAtTime(200, now);  // Low frequency for start of the "whoosh"
oscillator.frequency.exponentialRampToValueAtTime(800, now + 0.5);  // Increase frequency gradually

// Increase the volume for louder sound (1.0 is maximum)
gainNode.gain.setValueAtTime(1.0, now); // Loud start
gainNode.gain.exponentialRampToValueAtTime(0.01, now + 2.0);  // Slow fade-out

// Start the sound effect and stop after 2 seconds
oscillator.start(now);
oscillator.stop(now + 2.0);
  }

  const playWinSound = () => {
    // Play a celebratory sound when winner is announced
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const now = audioContext.currentTime
    
    const notes = [523.25, 659.25, 783.99] // C5, E5, G5 (celebratory chord)
    
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

  // Play win sound when a winner is announced
  useEffect(() => {
    if (winner) {
      playWinSound()
    }
  }, [winner])
  const canPickAll = canSpin && remainingSlots > 0

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">{"The Wheel of Fortune"}</h2>
        {selectedPrize ? (
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              {"Spinning for: "}
              <strong className="text-foreground">{selectedPrize.name}</strong>
            </p>
            <p className="text-xs text-primary font-semibold">
              {selectedPrize.participants.length} participant{selectedPrize.participants.length !== 1 ? "s" : ""} on the wheel
            </p>
            {remainingSlots > 0 && (
              <p className="text-xs text-muted-foreground">
                {remainingSlots} winner{remainingSlots !== 1 ? "s" : ""} remaining
              </p>
            )}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">{"Select a prize category to automatically load all participants!"}</p>
        )}
      </div>

      {/* Wheel Container */}
      <div className="relative flex items-center justify-center">
        {/* Arrow pointer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[30px] border-l-transparent border-r-transparent border-t-foreground drop-shadow-lg" />
        </div>

        {/* Wheel */}
        <div className="relative w-full max-w-md aspect-square">
          <div
            className={cn(
                "w-full h-full rounded-full border-8 border-foreground shadow-2xl overflow-hidden relative",
                isSpinning && "spin-animation",
              )}
              style={
                isSpinning
                  ? {
                      // @ts-ignore
                      "--spin-rotation": `${rotation ?? (3600 + Math.random() * 360)}deg`,
                      "--spin-duration": "4s",
                    }
                  : undefined
              }
          >
            {!selectedPrize || selectedPrize.participants.length === 0 ? (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <p className="text-muted-foreground text-center px-8">
                  {!selectedPrize 
                    ? "Select a prize category to automatically load all global participants!" 
                    : "Add or import participants in the Global Participants section above!"}
                </p>
              </div>
            ) : (
              <>
                {/* Background segments with colors and participant names */}
                {selectedPrize.participants.map((participant, index) => {
                  const totalParticipants = selectedPrize.participants.length
                  const angle = (360 / totalParticipants) * index
                  const segmentAngle = 360 / totalParticipants
                  const segmentColor = wheelColors[index % wheelColors.length]
                  const startAngle = (angle - 90) * (Math.PI / 180)
                  const endAngle = (angle + segmentAngle - 90) * (Math.PI / 180)
                  
                  // Calculate clip path points
                  const x1 = 50 + 50 * Math.cos(startAngle)
                  const y1 = 50 + 50 * Math.sin(startAngle)
                  const x2 = 50 + 50 * Math.cos(endAngle)
                  const y2 = 50 + 50 * Math.sin(endAngle)

                  // Calculate optimal font size - make it bigger and more readable
                  const segmentRadius = 50 // percentage from center
                  const nameLength = participant.length
                  
                  // Dynamic font sizing based on participant count and name length
                  let fontSize = "1.8rem"
                  if (totalParticipants > 40) {
                    fontSize = nameLength > 10 ? "0.9rem" : "1rem"
                  } else if (totalParticipants > 35) {
                    fontSize = nameLength > 12 ? "1rem" : "1.1rem"
                  } else if (totalParticipants > 30) {
                    fontSize = nameLength > 15 ? "1.2rem" : "1.3rem"
                  } else if (totalParticipants > 25) {
                    fontSize = nameLength > 15 ? "1.3rem" : "1.4rem"
                  } else if (totalParticipants > 20) {
                    fontSize = nameLength > 15 ? "1.4rem" : "1.5rem"
                  } else if (totalParticipants > 15) {
                    fontSize = nameLength > 15 ? "1.5rem" : "1.7rem"
                  } else if (totalParticipants > 10) {
                    fontSize = nameLength > 15 ? "1.6rem" : "1.8rem"
                  } else {
                    fontSize = nameLength > 15 ? "1.7rem" : "2rem"
                  }

                  // Show full name or truncate if extremely long
                  const displayName = participant.length > 20 
                    ? participant.substring(0, 17) + "..." 
                    : participant

                  return (
                    <div key={`segment-${index}-${participant}`} className="absolute inset-0">
                      {/* Colored segment background */}
                      <div
                        className="absolute inset-0 origin-center"
                        style={{
                          backgroundColor: segmentColor,
                          clipPath: `polygon(50% 50%, ${x1}% ${y1}%, ${x2}% ${y2}%)`,
                          zIndex: 1,
                        }}
                      />
                      
                      {/* Participant name text - radial orientation around wheel */}
                      <div
                        className="absolute inset-0 origin-center"
                        style={{
                          zIndex: 10,
                        }}
                      >
                        <svg
                          className="absolute inset-0 w-full h-full"
                          viewBox="0 0 100 100"
                          style={{
                            zIndex: 10,
                          }}
                        >
                          <defs>
                            <path
                              id={`arc-${index}`}
                              d={`M ${50 + 32 * Math.cos(startAngle)},${50 + 32 * Math.sin(startAngle)} A 32,32 0 0,1 ${50 + 32 * Math.cos(endAngle)},${50 + 32 * Math.sin(endAngle)}`}
                              fill="none"
                            />
                          </defs>
                          <text
                            style={{
                              fontSize: "4px",
                              fontWeight: "900",
                              fill: "white",
                              textAnchor: "middle",
                              paintOrder: "stroke",
                              stroke: "rgba(0,0,0,0.9)",
                              strokeWidth: "0.15px",
                              letterSpacing: "0.05em",
                              fontFamily: "system-ui, -apple-system, sans-serif",
                            }}
                          >
                            <textPath
                              href={`#arc-${index}`}
                              startOffset="50%"
                              textAnchor="middle"
                            >
                              <title>{participant}</title>
                              {displayName}
                            </textPath>
                          </text>
                        </svg>
                      </div>

                      {/* Segment divider line */}
                      <div
                        className="absolute inset-0 origin-center"
                        style={{
                          transform: `rotate(${angle}deg)`,
                          borderLeft: "2px solid rgba(255,255,255,0.5)",
                          zIndex: 5,
                        }}
                      />
                    </div>
                  )
                })}
              </>
            )}

            {/* Center circle */}
            <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-foreground rounded-full border-4 border-background shadow-lg flex items-center justify-center">
              <div className="w-12 h-12 bg-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Participants List */}
      {selectedPrize && selectedPrize.participants.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-center flex-1">Participants on Wheel ({selectedPrize.participants.length})</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center max-h-40 overflow-y-auto p-3 bg-muted/30 rounded-lg border border-muted/50">
            {[...selectedPrize.participants]
              .sort((a, b) => a.localeCompare(b))
              .map((participant, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium border border-primary/30 whitespace-nowrap"
                  title={participant}
                >
                  {participant.length > 12 ? participant.substring(0, 10) + '...' : participant}
                </span>
              ))}
          </div>
        </div>
      )}

      {/* Spin Buttons */}
      <div className="flex flex-col gap-3">
        <Button size="lg" onClick={onSpin} disabled={!canSpin} className="text-lg px-8 py-6 font-bold w-full">
          {isSpinning ? ( 
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Spinning...
            </>
          ) : (
            <>
              <Play className="h-5 w-5 mr-2" />
              Spin for One Winner
            </>
          )}
        </Button>
        {canPickAll && remainingSlots > 1 && (
          <Button 
            size="lg" 
            onClick={onPickAll} 
            disabled={!canPickAll || isSpinning} 
            variant="outline"
            className="text-lg px-8 py-6 font-bold w-full"
          >
            {isSpinning ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Picking Winners...
              </>
            ) : (
              <>
                <Users className="h-5 w-5 mr-2" />
                Pick All {remainingSlots} Winners
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  )
}
