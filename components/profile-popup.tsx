"use client"

import { useState } from "react"
import { Copy, ExternalLink, LogOut, ChevronRight, Check } from "lucide-react"

interface ProfilePopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProfilePopup({ isOpen, onClose }: ProfilePopupProps) {
  const [copied, setCopied] = useState(false)

  const copyAddress = () => {
    navigator.clipboard.writeText("0x71C7656EC7ab88b098defB751B7401B5f6d8976F")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isOpen) return null

  return (
    <div className="absolute top-14 right-4 w-80 bg-[#3C354A] rounded-xl shadow-lg border border-[#3C354A] z-50 overflow-hidden">
      <div className="p-4 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
            <span className="text-lg font-bold">JD</span>
          </div>
          <div>
            <h3 className="font-bold text-white">Md Arman</h3>
            <p className="text-sm text-purple-200">mdarmanya.h@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-700">
        <div className="mb-2 text-sm text-gray-400">Connected Wallet</div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-xs font-bold">M</span>
            </div>
            <span className="font-medium text-sm">MetaMask</span>
          </div>
          <span className="text-xs px-2 py-1 bg-green-900/30 text-green-400 rounded-full">Connected</span>
        </div>
        <div className="flex items-center justify-between bg-gray-700/50 rounded-md p-2 mb-3">
          <div className="text-sm font-mono text-gray-300 truncate">0x71C7...976F</div>
          <button onClick={copyAddress} className="text-gray-400 hover:text-white transition-colors">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-gray-700/50 rounded-md p-2">
            <div className="text-gray-400 mb-1">ETH Balance</div>
            <div className="font-medium">4.65 ETH</div>
          </div>
          <div className="bg-gray-700/50 rounded-md p-2">
            <div className="text-gray-400 mb-1">USD Value</div>
            <div className="font-medium">$21,035.43</div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2 text-sm text-gray-400">Transaction History</div>
        <ul className="space-y-2">
          <li>
            <button className="w-full flex items-center justify-between p-2 hover:bg-gray-700/50 rounded-md transition-colors">
              <div className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-gray-400" />
                <span>View on Explorer</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </button>
          </li>
          <li>
            <button className="w-full flex items-center justify-between p-2 hover:bg-gray-700/50 rounded-md transition-colors">
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 7V12L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Recent Transactions</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </button>
          </li>
          <li>
            <button className="w-full flex items-center justify-between p-2 hover:bg-gray-700/50 rounded-md transition-colors">
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Smart Contracts</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </button>
          </li>
          <li>
            <button className="w-full flex items-center justify-between p-2 hover:bg-gray-700/50 rounded-md transition-colors text-red-400">
              <div className="flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                <span>Disconnect Wallet</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

