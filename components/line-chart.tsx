"use client"

import { useEffect, useRef } from "react"

interface LineChartProps {
  data: number[]
  color: string
  secondaryData?: number[]
  secondaryColor?: string
}

export default function LineChart({ data, color, secondaryData, secondaryColor }: LineChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Draw grid lines
    ctx.strokeStyle = "#333"
    ctx.lineWidth = 0.5

    // Horizontal grid lines
    const gridCount = 5
    for (let i = 0; i <= gridCount; i++) {
      const y = (rect.height / gridCount) * i
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(rect.width, y)
      ctx.stroke()

      // Add percentage labels
      ctx.fillStyle = "#666"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "left"
      const percentage = Math.round(100 - i * (100 / gridCount))
      ctx.fillText(`${percentage}k`, 5, y - 5)
    }

    // Draw secondary data line if provided
    if (secondaryData && secondaryColor) {
      ctx.strokeStyle = secondaryColor
      ctx.lineWidth = 2
      ctx.beginPath()

      const stepX = rect.width / (secondaryData.length - 1)
      const maxValue = Math.max(...secondaryData)

      secondaryData.forEach((value, index) => {
        const x = index * stepX
        const y = rect.height - (value / maxValue) * rect.height

        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      ctx.stroke()
    }

    // Draw primary data line
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.beginPath()

    const stepX = rect.width / (data.length - 1)
    const maxValue = Math.max(...data)

    data.forEach((value, index) => {
      const x = index * stepX
      const y = rect.height - (value / maxValue) * rect.height

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()
  }, [data, color, secondaryData, secondaryColor])

  return (
    <div className="w-full h-40">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  )
}

