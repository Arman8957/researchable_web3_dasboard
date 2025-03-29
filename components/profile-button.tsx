"use client"

import { useState } from "react"
import ProfilePopup from "./profile-popup"

export default function ProfileButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center"
      >
        <span className="text-xs font-bold">JD</span>
      </button>
      <ProfilePopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

