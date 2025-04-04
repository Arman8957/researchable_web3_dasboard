"use client"

import { useEffect, useRef } from "react"

export default function MarketOverview() {
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
      const percentage = Math.round(50 - i * (50 / gridCount))
      ctx.fillText(`${percentage}K`, 5, y - 5)
    }

    // Generate random data for three lines
    const dataPoints = 20
    const generateData = () => {
      const data = []
      let value = Math.random() * 30 + 10
      for (let i = 0; i < dataPoints; i++) {
        value += Math.random() * 10 - 5
        value = Math.max(5, Math.min(45, value))
        data.push(value)
      }
      return data
    }

    const data1 = generateData()
    const data2 = generateData()
    const data3 = generateData()

    // Draw lines
    const drawLine = (data: number[], color: string) => {
      ctx.strokeStyle = color
      ctx.lineWidth = 2
      ctx.beginPath()

      const stepX = rect.width / (data.length - 1)
      const maxValue = 50 // Fixed max for percentage scale

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
    }

    // Draw highlight point (purple dot in the middle of the chart)
    const highlightIndex = Math.floor(data1.length / 2)
    const highlightX = highlightIndex * (rect.width / (data1.length - 1))
    const highlightY = rect.height - (data1[highlightIndex] / 50) * rect.height

    // Draw the three lines
    drawLine(data1, "#8B5CF6") // Purple
    drawLine(data2, "#06B6D4") // Cyan
    drawLine(data3, "#EC4899") // Pink

    // Draw highlight point
    ctx.fillStyle = "#8B5CF6"
    ctx.beginPath()
    ctx.arc(highlightX, highlightY, 5, 0, Math.PI * 2)
    ctx.fill()

    // Add glow effect to highlight point
    ctx.shadowColor = "#8B5CF6"
    ctx.shadowBlur = 10
    ctx.beginPath()
    ctx.arc(highlightX, highlightY, 5, 0, Math.PI * 2)
    ctx.fill()
    ctx.shadowBlur = 0
  }, [])

  return (
    <div className="w-full h-40">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  )
}

