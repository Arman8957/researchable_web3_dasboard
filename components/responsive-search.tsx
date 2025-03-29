"use client"

import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"

export default function ResponsiveSearch() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Focus input when expanded
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isExpanded])

  // Handle click outside to collapse search on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node) && isExpanded) {
        setIsExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isExpanded])

  const toggleSearch = () => {
    setIsExpanded(!isExpanded)
    if (!isExpanded) {
      setQuery("")
    }
  }

  return (
    <div ref={containerRef} className={`relative ${isExpanded ? "md:w-64 w-full" : "w-auto"}`}>
      {isExpanded ? (
        <div className="flex items-center w-full">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="bg-[#3C354A] rounded-xl py-2 pl-10 pr-8 text-sm w-full focus:outline-none focus:ring-1 focus:ring-gray-300 border border-[#3C354A]"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <button
            onClick={toggleSearch}
            className="md:hidden ml-2 p-2 rounded-full bg-[#3C354A] text-gray-400 border border-gray-400"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <button
          onClick={toggleSearch}
          className="p-2 rounded-full bg-[#3C354A] text-gray-400 hover:text-white transition-colors border border-gray-400"
        >
          <Search className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}

