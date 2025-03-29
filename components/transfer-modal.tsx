"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface TransferModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TransferModal({ isOpen, onClose }: TransferModalProps) {
  const [amount, setAmount] = useState("3.25")
  const [recipient, setRecipient] = useState("0x71C7...976F")
  const [isLoading, setIsLoading] = useState(false)

  const handleTransfer = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onClose()
      // You could show a success notification here
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#3C354A] rounded-xl w-full max-w-md shadow-lg border border-[#3C354A] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="font-medium text-lg">Confirm Transfer</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-1">Amount</label>
            <div className="flex items-center justify-between bg-gray-700 rounded-md p-3">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent text-xl font-bold w-full focus:outline-none"
              />
              <div className="flex items-center gap-1">
                <div className="h-5 w-5 rounded-full bg-purple-500"></div>
                <span className="text-sm">ETH</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-1">Recipient</label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full bg-gray-700 rounded-md p-3 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Network Fee</span>
              <span>0.0012 ETH</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Total Amount</span>
              <span className="font-medium">{(Number.parseFloat(amount) + 0.0012).toFixed(4)} ETH</span>
            </div>
          </div>

          <button
            onClick={handleTransfer}
            disabled={isLoading}
            className="w-full bg-purple-600 hover:bg-purple-700 transition-colors py-3 rounded-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="font-medium">Processing...</span>
            ) : (
              <>
                <div className="h-5 w-5 rounded-full bg-purple-400 flex items-center justify-center">
                  <span className="text-xs">↑</span>
                </div>
                <span className="font-medium">Confirm Transfer</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

