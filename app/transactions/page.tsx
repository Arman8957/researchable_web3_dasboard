"use client"

import { useState } from "react"
import { ArrowUpRight, ArrowDownRight, Download, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import Sidebar from "@/components/sidebar"
import ProfileButton from "@/components/profile-button"
import NotificationBell from "@/components/notification-bell"
import ResponsiveSearch from "@/components/responsive-search"

export default function Transactions() {
  const [currentPage, setCurrentPage] = useState(1)
  const [filterOpen, setFilterOpen] = useState(false)

  const transactions = [
    {
      id: "TX123456789",
      type: "buy",
      asset: "Bitcoin",
      symbol: "BTC",
      amount: "0.05",
      value: "$1,842.95",
      date: "Apr 12, 2023",
      time: "10:45 AM",
      status: "completed",
    },
    {
      id: "TX123456788",
      type: "sell",
      asset: "Ethereum",
      symbol: "ETH",
      amount: "1.5",
      value: "$3,521.67",
      date: "Apr 11, 2023",
      time: "2:30 PM",
      status: "completed",
    },
    {
      id: "TX123456787",
      type: "buy",
      asset: "Cardano",
      symbol: "ADA",
      amount: "500",
      value: "$625.50",
      date: "Apr 10, 2023",
      time: "9:15 AM",
      status: "completed",
    },
    {
      id: "TX123456786",
      type: "transfer",
      asset: "Bitcoin",
      symbol: "BTC",
      amount: "0.02",
      value: "$736.42",
      date: "Apr 9, 2023",
      time: "3:22 PM",
      status: "completed",
    },
    {
      id: "TX123456785",
      type: "buy",
      asset: "Solana",
      symbol: "SOL",
      amount: "10",
      value: "$1,250.30",
      date: "Apr 8, 2023",
      time: "11:05 AM",
      status: "completed",
    },
    {
      id: "TX123456784",
      type: "sell",
      asset: "Litecoin",
      symbol: "LTC",
      amount: "5",
      value: "$875.25",
      date: "Apr 7, 2023",
      time: "4:45 PM",
      status: "completed",
    },
    {
      id: "TX123456783",
      type: "transfer",
      asset: "Ethereum",
      symbol: "ETH",
      amount: "0.75",
      value: "$1,760.83",
      date: "Apr 6, 2023",
      time: "1:30 PM",
      status: "pending",
    },
  ]

  return (
    <div className="flex h-screen bg-[#261E35] text-white">
      <Sidebar activePage="transactions" />
      <main className="flex-1 overflow-auto w-full">
        <header className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1 className="text-xl font-medium ml-10 md:ml-0">Transactions</h1>
          <div className="flex items-center gap-4">
            <ResponsiveSearch />
            <NotificationBell />
            <ProfileButton />
          </div>
        </header>

        <div className="p-4">
          {/* Transactions Header */}
          <div className="bg-[#3C354A] rounded-xl p-6 mb-4 border border-[#3C354A]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">Transaction History</h2>
                <p className="text-gray-400">View and manage your transaction history</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-lg">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </button>
                <button
                  onClick={() => setFilterOpen(!filterOpen)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    filterOpen ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Filter Panel */}
          {filterOpen && (
            <div className="bg-[#3C354A] rounded-xl p-4 mb-4 border border-[#3C354A]">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Transaction Type</label>
                  <select className="w-full bg-gray-700 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500">
                    <option value="">All Types</option>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                    <option value="transfer">Transfer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Asset</label>
                  <select className="w-full bg-gray-700 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500">
                    <option value="">All Assets</option>
                    <option value="BTC">Bitcoin (BTC)</option>
                    <option value="ETH">Ethereum (ETH)</option>
                    <option value="ADA">Cardano (ADA)</option>
                    <option value="SOL">Solana (SOL)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Date Range</label>
                  <select className="w-full bg-gray-700 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500">
                    <option value="7">Last 7 days</option>
                    <option value="30">Last 30 days</option>
                    <option value="90">Last 90 days</option>
                    <option value="365">Last year</option>
                    <option value="custom">Custom range</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Status</label>
                  <select className="w-full bg-gray-700 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500">
                    <option value="">All Statuses</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-lg mr-2">
                  Reset
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-2 rounded-lg">
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Transactions Table */}
          <div className="bg-[#3C354A] rounded-xl overflow-hidden border border-[#3C354A]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="text-left p-4 font-medium">Transaction ID</th>
                    <th className="text-left p-4 font-medium">Type</th>
                    <th className="text-left p-4 font-medium">Asset</th>
                    <th className="text-left p-4 font-medium">Amount</th>
                    <th className="text-left p-4 font-medium">Value</th>
                    <th className="text-left p-4 font-medium">Date & Time</th>
                    <th className="text-left p-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-gray-700/50 transition-colors">
                      <td className="p-4">
                        <span className="font-mono text-sm">{tx.id}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-6 w-6 rounded-full flex items-center justify-center ${
                              tx.type === "buy" ? "bg-green-500" : tx.type === "sell" ? "bg-red-500" : "bg-blue-500"
                            }`}
                          >
                            {tx.type === "buy" && <ArrowUpRight className="h-3 w-3 text-white" />}
                            {tx.type === "sell" && <ArrowDownRight className="h-3 w-3 text-white" />}
                            {tx.type === "transfer" && <span className="text-xs text-white">↔</span>}
                          </div>
                          <span className="capitalize">{tx.type}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>
                          <div>{tx.asset}</div>
                          <div className="text-xs text-gray-400">{tx.symbol}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        {tx.amount} {tx.symbol}
                      </td>
                      <td className="p-4">{tx.value}</td>
                      <td className="p-4">
                        <div>
                          <div>{tx.date}</div>
                          <div className="text-xs text-gray-400">{tx.time}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            tx.status === "completed"
                              ? "bg-green-500/20 text-green-400"
                              : tx.status === "pending"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-4 border-t border-gray-700">
              <div className="text-sm text-gray-400">
                Showing <span className="font-medium text-white">1</span> to{" "}
                <span className="font-medium text-white">7</span> of <span className="font-medium text-white">42</span>{" "}
                transactions
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex items-center">
                  <button
                    onClick={() => setCurrentPage(1)}
                    className={`h-8 w-8 flex items-center justify-center rounded-md ${
                      currentPage === 1 ? "bg-purple-600" : "hover:bg-gray-700"
                    }`}
                  >
                    1
                  </button>
                  <button
                    onClick={() => setCurrentPage(2)}
                    className={`h-8 w-8 flex items-center justify-center rounded-md ${
                      currentPage === 2 ? "bg-purple-600" : "hover:bg-gray-700"
                    }`}
                  >
                    2
                  </button>
                  <button
                    onClick={() => setCurrentPage(3)}
                    className={`h-8 w-8 flex items-center justify-center rounded-md ${
                      currentPage === 3 ? "bg-purple-600" : "hover:bg-gray-700"
                    }`}
                  >
                    3
                  </button>
                  <span className="mx-1">...</span>
                  <button
                    onClick={() => setCurrentPage(6)}
                    className={`h-8 w-8 flex items-center justify-center rounded-md ${
                      currentPage === 6 ? "bg-purple-600" : "hover:bg-gray-700"
                    }`}
                  >
                    6
                  </button>
                </div>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
                  disabled={currentPage === 6}
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

