"use client"

import { useEffect, useState } from "react"

export function Confetti() {
  const [confetti, setConfetti] = useState<Array<{
    id: number
    x: number
    y: number
    color: string
    rotation: number
    velocityX: number
    velocityY: number
    size: number
  }>>([])

  useEffect(() => {
    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F7DC6F", "#BB8FCE", "#FFD93D"]
    const newConfetti = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -5 - Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      velocityX: (Math.random() - 0.5) * 3,
      velocityY: Math.random() * 4 + 3,
      size: Math.random() * 4 + 3,
    }))
    setConfetti(newConfetti)

    const interval = setInterval(() => {
      setConfetti((prev) =>
        prev.map((piece) => ({
          ...piece,
          y: piece.y + piece.velocityY * 0.5,
          x: piece.x + piece.velocityX * 0.5,
          rotation: piece.rotation + 8,
        })).filter((piece) => piece.y < 120)
      )
    }, 30)

    // Auto-cleanup after 5 seconds
    const timeout = setTimeout(() => {
      setConfetti([])
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  if (confetti.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute rounded-sm"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            boxShadow: `0 0 ${piece.size}px ${piece.color}`,
          }}
        />
      ))}
    </div>
  )
}

