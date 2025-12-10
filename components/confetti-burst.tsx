import React, { useEffect, useRef } from "react";

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string) {
  ctx.save();
  ctx.beginPath();
  ctx.translate(x, y);
  ctx.moveTo(0, 0 - r);
  for (let i = 0; i < 5; i++) {
    ctx.rotate(Math.PI / 5);
    ctx.lineTo(0, 0 - (r * 0.5));
    ctx.rotate(Math.PI / 5);
    ctx.lineTo(0, 0 - r);
  }
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = 10;
  ctx.fill();
  ctx.restore();
}

export const ConfettiBurst: React.FC<{ trigger: boolean }> = ({ trigger }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!trigger) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width = window.innerWidth;
    const H = canvas.height = window.innerHeight;
    const confettiCount = 100;
    const sparkleCount = 30;
    const confetti: any[] = [];
    const sparkles: any[] = [];
    const shapes = ["circle", "rect", "star"];
    for (let i = 0; i < confettiCount; i++) {
      confetti.push({
        x: Math.random() * W,
        y: Math.random() * H / 2,
        r: Math.random() * 8 + 4,
        d: Math.random() * confettiCount,
        color: `hsl(${Math.random() * 360}, 90%, 60%)`,
        tilt: Math.random() * 10 - 10,
        tiltAngle: 0,
        tiltAngleIncremental: Math.random() * 0.07 + 0.05,
        shape: shapes[Math.floor(Math.random() * shapes.length)]
      });
    }
    for (let i = 0; i < sparkleCount; i++) {
      sparkles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 3 + 2,
        color: `rgba(255,255,255,${Math.random() * 0.7 + 0.3})`,
        alpha: 1,
        decay: Math.random() * 0.02 + 0.01
      });
    }
    let frame = 0;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      // Glow overlay
      ctx.save();
      ctx.globalAlpha = 0.15;
      ctx.fillStyle = "#ffe066";
      ctx.fillRect(0, 0, W, H);
      ctx.restore();
      // Confetti
      confetti.forEach((c) => {
        ctx.save();
        ctx.globalAlpha = 0.95;
        if (c.shape === "circle") {
          ctx.beginPath();
          ctx.arc(c.x + c.tilt, c.y, c.r, 0, 2 * Math.PI);
          ctx.fillStyle = c.color;
          ctx.shadowColor = c.color;
          ctx.shadowBlur = 8;
          ctx.fill();
        } else if (c.shape === "rect") {
          ctx.beginPath();
          ctx.rect(c.x + c.tilt, c.y, c.r, c.r * 0.6);
          ctx.fillStyle = c.color;
          ctx.shadowColor = c.color;
          ctx.shadowBlur = 8;
          ctx.fill();
        } else if (c.shape === "star") {
          drawStar(ctx, c.x + c.tilt, c.y, c.r, c.color);
        }
        ctx.restore();
      });
      // Sparkles
      sparkles.forEach((s) => {
        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = s.color;
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      });
      update();
      frame++;
      if (frame < 70) requestAnimationFrame(draw);
      else ctx.clearRect(0, 0, W, H);
    }
    function update() {
      confetti.forEach((c) => {
        c.y += Math.cos(c.d) + 2 + c.r / 2;
        c.x += Math.sin(frame) * 2;
        c.tiltAngle += c.tiltAngleIncremental;
        c.tilt = Math.sin(c.tiltAngle - (frame / 3)) * 15;
      });
      sparkles.forEach((s) => {
        s.alpha -= s.decay;
        if (s.alpha < 0) {
          s.x = Math.random() * W;
          s.y = Math.random() * H;
          s.alpha = 1;
        }
      });
    }
    draw();
  }, [trigger]);

  return (
    <canvas ref={canvasRef} style={{
      position: "fixed",
      top: 0,
      left: 0,
      pointerEvents: "none",
      width: "100vw",
      height: "100vh",
      zIndex: 50,
    }} />
  );
};
