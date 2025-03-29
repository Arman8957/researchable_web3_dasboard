import { TrendingUp, TrendingDown } from "lucide-react"

interface CryptoCardProps {
  name: string
  fullName: string
  price: string
  change: string
  isPositive: boolean
  chartData: number[]
  chartColor: string
}

export default function CryptoCard({
  name,
  fullName,
  price,
  change,
  isPositive,
  chartData,
  chartColor,
}: CryptoCardProps) {
  return (
    <div className="bg-[#3C354A] rounded-xl p-4 border border-[#3C354A]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="font-medium">{name}</span>
          <span className="text-gray-400 text-xs">USD</span>
        </div>
        <div className={`flex items-center gap-1 ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
          <span className="text-xs font-medium">{change}</span>
        </div>
      </div>
      <div className="text-2xl font-bold mb-4">{price}</div>
      <div className="h-16">
        <svg width="100%" height="100%" viewBox="0 0 100 40">
          <polyline
            points={chartData
              .map(
                (value, index) =>
                  `${index * (100 / (chartData.length - 1))},${40 - value * (40 / Math.max(...chartData))}`,
              )
              .join(" ")}
            fill="none"
            stroke={chartColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

