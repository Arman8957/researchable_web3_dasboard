"use client"

import { useState } from "react"
import { X, LogOut } from "lucide-react"

interface LogoutConfirmationProps {
  isOpen: boolean
  onClose: () => void
}

export default function LogoutConfirmation({ isOpen, onClose }: LogoutConfirmationProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = () => {
    setIsLoggingOut(true)
    // Simulate logout process
    setTimeout(() => {
      setIsLoggingOut(false)
      onClose()
      // In a real app, you would redirect to login page or perform actual logout
      // window.location.href = "/login"
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#3C354A] rounded-xl w-full max-w-md shadow-lg border border-[#3C354A] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="font-medium text-lg">Confirm Logout</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-gray-700 flex items-center justify-center">
              <LogOut className="h-8 w-8 text-gray-400" />
            </div>
          </div>

          <p className="text-center mb-6">Are you sure you want to log out of your account?</p>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2 px-4 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>

            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex-1 bg-purple-600 hover:bg-purple-700 transition-colors py-2 px-4 rounded-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoggingOut ? "Logging out..." : "Logout"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

