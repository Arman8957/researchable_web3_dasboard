"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface MonthlyDropdownProps {
  className?: string
}

export default function MonthlyDropdown({ className }: MonthlyDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState("Monthly")

  const options = ["Daily", "Weekly", "Monthly", "Yearly", "All Time"]

  const handleSelect = (option: string) => {
    setSelected(option)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 bg-gray-900   font-bold px-3 py-1">
        <span className="text-sm rounded-lg p-2">{selected}</span>
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute top-full p-4  right-0 mt-1 w-36 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-10">
          <ul className="py-1">
            {options.map((option) => (
              <li key={option}>
                <button
                  onClick={() => handleSelect(option)}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-700 ${
                    selected === option ? "bg-gray-700/50 font-medium" : ""
                  }`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

