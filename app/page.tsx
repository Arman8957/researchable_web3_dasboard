"use client"

import { useState } from "react"
import { Plus, TrendingUp, TrendingDown } from "lucide-react"
import Sidebar from "@/components/sidebar"
import CryptoCard from "@/components/crypto-card"
import LineChart from "@/components/line-chart"
import MarketOverview from "@/components/market-overview"
import ProfileButton from "@/components/profile-button"
import MonthlyDropdown from "@/components/monthly-dropdown"
import TransferModal from "@/components/transfer-modal"
import NotificationBell from "@/components/notification-bell"
import ResponsiveSearch from "@/components/responsive-search"

export default function Home() {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false)

  return (
    <div className="flex h-screen bg-[#261E35] text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto w-full">
        <header className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1 className="text-xl font-medium ml-10 md:ml-0">Home</h1>
          <div className="flex items-center gap-4">
            <ResponsiveSearch />
            <NotificationBell />
            <ProfileButton />
          </div>
        </header>

        <div className="p-4 grid grid-cols-2 lg:grid-cols-2 gap-4 ">
          {/* Hero Section */}
          <div className="col-span-1 lg:col-span-2 bg-gradient-to-r from-[#2A0FD3] to-[#FF7A7A8F] rounded-xl p-6 relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-xs font-medium text-purple-200 mb-1">ETHEREUM 2.0</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Your Gateway
                <br />
                into Blockchain
              </h2>
              <p className="text-sm text-purple-200 mb-4">
                Paronia is a blockchain platform.
                <br />
                We make blockchain accessible.
              </p>
              <button className="bg-gray-700 text-white px-4 py-2  text-sm font-medium rounded-xl">Learn More</button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
              {/* 3D Objects */}
              {/* <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-purple-400 rounded-full opacity-80 "></div>
              <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-blue-400 rounded-md transform rotate-45 opacity-80 "></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-12 bg-cyan-400 rounded-full opacity-80  transform -rotate-12"></div> */}
            </div>
          </div>

          {/* ETH/USD Chart */}
          <div className="col-span-1 bg-[#3C354A] rounded-xl p-4  border border-gray-400">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                  <span className="text-xs font-bold text-black">Ξ</span>
                </div>
                <span className="font-medium">ETH/USD</span>
              </div>
              <div className="flex gap-1">
                <button className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">1D</button>
                <button className="bg-gray-900 px-2 py-1 rounded text-xs font-medium">1W</button>
                <button className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">1M</button>
              </div>
            </div>
            <LineChart
              data={[10, 25, 15, 30, 20, 35, 45, 40, 50, 60, 55, 70, 65, 80]}
              color="#8B5CF6"
              secondaryData={[50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 95, 100, 90, 85]}
              secondaryColor="#06B6D4"
            />
          </div>

          {/* Crypto Price Cards */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <CryptoCard
              name="BTC"
              fullName="Bitcoin"
              price="8442.55"
              change="+6.2%"
              isPositive={true}
              chartData={[20, 25, 18, 30, 20, 35, 25, 40, 30, 50]}
              chartColor="#22C55E"
            />
            <CryptoCard
              name="ETH"
              fullName="Ethereum"
              price="4772.18"
              change="-3.8%"
              isPositive={false}
              chartData={[40, 35, 50, 45, 60, 55, 65, 60, 75, 70]}
              chartColor="#EF4444"
            />
            <CryptoCard
              name="LTC"
              fullName="Litecoin"
              price="3612.61"
              change="+2.4%"
              isPositive={true}
              chartData={[30, 40, 35, 50, 45, 55, 50, 60, 55, 65]}
              chartColor="#22C55E"
              
            />
          </div>

          {/* Market Overview */}
          <div className="col-span-1 lg:col-span-2 bg-[#3C354A] rounded-xl p-4 border border-gray-400">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Market Overview</h3>
              <MonthlyDropdown />
            </div>
            <MarketOverview />
          </div>

          {/* Quick Transfer */}
          <div className="col-span-1 bg-[#3C354A] rounded-xl p-4 border border-gray-400">
            <h3 className="font-medium mb-4">Quick Transfer</h3>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <span className="text-xs font-bold">JD</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 flex items-center justify-center">
                <span className="text-xs font-bold">TS</span>
              </div>
              <button className="h-10 w-10 rounded-full border-2 border-dashed border-gray-600 flex items-center justify-center">
                <Plus className="h-5 w-5 text-gray-400" />
              </button>
            </div>
            <div className="mb-6">
              <div className="text-sm text-gray-400 mb-2">Amount:</div>
              <div className="flex items-center justify-between bg-gray-700 rounded-md p-3">
                <span className="text-2xl font-bold">3.25</span>
                <div className="flex items-center gap-1">
                  <div className="h-5 w-5 rounded-full bg-purple-500"></div>
                  <span className="text-sm">$</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsTransferModalOpen(true)}
              className="w-full bg-purple-600 hover:bg-purple-700 transition-colors py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <div className="h-5 w-5 rounded-full bg-purple-400 flex items-center justify-center">
                <span className="text-xs">↑</span>
              </div>
              <span className="font-medium">Transfer Now</span>
            </button>

            <TransferModal isOpen={isTransferModalOpen} onClose={() => setIsTransferModalOpen(false)} />
          </div>

          {/* Profit Section */}
          <div className="col-span-1 bg-[#3C354A] rounded-xl p-4 border border-gray-400">
            <h3 className="font-medium mb-4">Profit</h3>
            <div className="bg-gray-700 rounded-md p-3 mb-3 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xl font-bold">1892.25</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">Income</div>
              </div>
            </div>
            <div className="bg-gray-700 rounded-md p-3 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center">
                    <TrendingDown className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xl font-bold">387.47</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">Expenses</div>
              </div>
            </div>
          </div>

          {/* Market Trend */}
          <div className="col-span-1 bg-[#3C354A] rounded-xl p-4 border border-gray-400">
            <h3 className="font-medium mb-4">Market Trend</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400">
                    <th className="text-left pb-2">Name</th>
                    <th className="text-right pb-2">Last Price</th>
                    <th className="text-right pb-2">24h Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">BTC</span>
                        <span className="text-gray-400 text-xs">Bitcoin</span>
                      </div>
                    </td>
                    <td className="text-right py-2">$8564</td>
                    <td className="text-right py-2 text-green-500">2.54%</td>
                  </tr>
                  <tr>
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">BNB</span>
                        <span className="text-gray-400 text-xs">Binance</span>
                      </div>
                    </td>
                    <td className="text-right py-2">$57707</td>
                    <td className="text-right py-2 text-green-500">2.30%</td>
                  </tr>
                  <tr>
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">ETH</span>
                        <span className="text-gray-400 text-xs">Ethereum</span>
                      </div>
                    </td>
                    <td className="text-right py-2">$71123</td>
                    <td className="text-right py-2 text-red-500">1.32%</td>
                  </tr>
                  <tr>
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">LTC</span>
                        <span className="text-gray-400 text-xs">Litecoin</span>
                      </div>
                    </td>
                    <td className="text-right py-2">$10601</td>
                    <td className="text-right py-2 text-green-500">2.14%</td>
                  </tr>
                  <tr>
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">ADA</span>
                        <span className="text-gray-400 text-xs">Cardano</span>
                      </div>
                    </td>
                    <td className="text-right py-2">$27159</td>
                    <td className="text-right py-2 text-green-500">1.97%</td>
                  </tr>
                  <tr>
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">CAKE</span>
                        <span className="text-gray-400 text-xs">Pancake</span>
                      </div>
                    </td>
                    <td className="text-right py-2">$72550</td>
                    <td className="text-right py-2 text-red-500">1.03%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Assets */}
          <div className="col-span-1 bg-[#3C354A] rounded-xl p-4 border border-gray-400">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Assets</h3>
              <button className="p-1 rounded bg-gray-700">
                <ResponsiveSearch />
              </button>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-700 rounded-md p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-md bg-orange-500 flex items-center justify-center">
                    <span className="text-xs font-bold">₿</span>
                  </div>
                  <div>
                    <div className="font-medium">Bitcoin</div>
                    <div className="text-xs text-gray-400">BTC</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">0.14</div>
                  <div className="text-xs text-gray-400">$4,325.95</div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-md p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-md bg-blue-500 flex items-center justify-center">
                    <span className="text-xs font-bold">Ξ</span>
                  </div>
                  <div>
                    <div className="font-medium">Ethereum</div>
                    <div className="text-xs text-gray-400">ETH</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">4.65</div>
                  <div className="text-xs text-gray-400">$21,035.43</div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-md p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-md bg-orange-500 flex items-center justify-center">
                    <span className="text-xs font-bold">₿</span>
                  </div>
                  <div>
                    <div className="font-medium">Bitcoin</div>
                    <div className="text-xs text-gray-400">BTC</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">0.14</div>
                  <div className="text-xs text-gray-400">$4,325.95</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

