"use client"

import { useState } from "react"
import { BarChart, LineChartIcon, PieChart, ArrowUpRight, ArrowDownRight } from "lucide-react"
import Sidebar from "@/components/sidebar"
import LineChart from "@/components/line-chart"
import ProfileButton from "@/components/profile-button"
import NotificationBell from "@/components/notification-bell"
import ResponsiveSearch from "@/components/responsive-search"

export default function Analytics() {
  const [activeChart, setActiveChart] = useState<"line" | "bar" | "pie">("line")

  return (
    <div className="flex h-screen bg-[#261E35] text-white">
      <Sidebar activePage="analytics" />
      <main className="flex-1 overflow-auto w-full">
        <header className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1 className="text-xl font-medium ml-10 md:ml-0">Analytics</h1>
          <div className="flex items-center gap-4">
            <ResponsiveSearch />
            <NotificationBell />
            <ProfileButton />
          </div>
        </header>

        <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Analytics Header */}
          <div className="col-span-1 lg:col-span-3 bg-[#3C354A] rounded-xl p-6 border border-[#3C354A]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">Portfolio Analytics</h2>
                <p className="text-gray-400">Track your crypto portfolio performance over time</p>
              </div>
              <div className="flex gap-2 bg-gray-700 p-1 rounded-lg">
                <button
                  onClick={() => setActiveChart("line")}
                  className={`p-2 rounded-md ${activeChart === "line" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-violet-200"}`}
                >
                  <LineChartIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setActiveChart("bar")}
                  className={`p-2 rounded-md ${activeChart === "bar" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-violet-200"}`}
                >
                  <BarChart className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setActiveChart("pie")}
                  className={`p-2 rounded-md ${activeChart === "pie" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-violet-200"}`}
                >
                  <PieChart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Performance Cards */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#3C354A] rounded-xl p-4 border border-[#3C354A]">
              <div className="text-gray-400 mb-2">Total Portfolio Value</div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">$34,567.89</div>
                <div className="flex items-center text-green-500">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>+12.5%</span>
                </div>
              </div>
            </div>
            <div className="bg-[#3C354A] rounded-xl p-4 border border-[#3C354A]">
              <div className="text-gray-400 mb-2">24h Change</div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">$1,245.32</div>
                <div className="flex items-center text-green-500">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>+3.7%</span>
                </div>
              </div>
            </div>
            <div className="bg-[#3C354A] rounded-xl p-4 border border-[#3C354A]">
              <div className="text-gray-400 mb-2">Total Profit/Loss</div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">$8,921.45</div>
                <div className="flex items-center text-red-500">
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                  <span>-2.1%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Chart */}
          <div className="col-span-1 lg:col-span-3 bg-[#3C354A] rounded-xl p-4 border border-[#3C354A]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Portfolio Performance</h3>
              <div className="flex gap-1">
                <button className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">1D</button>
                <button className="bg-purple-600 px-2 py-1 rounded text-xs font-medium">1W</button>
                <button className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">1M</button>
                <button className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">1Y</button>
                <button className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">All</button>
              </div>
            </div>
            <div className="h-80">
              <LineChart
                data={[20, 25, 30, 35, 25, 40, 35, 50, 45, 60, 55, 70, 65, 80]}
                color="#8B5CF6"
                secondaryData={[30, 35, 40, 45, 35, 50, 45, 60, 55, 70, 65, 80, 75, 90]}
                secondaryColor="#06B6D4"
              />
            </div>
          </div>

          {/* Asset Allocation */}
          <div className="col-span-1 lg:col-span-2 bg-[#3C354A] rounded-xl p-4 border border-[#3C354A]">
            <h3 className="font-medium mb-4">Asset Allocation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                    <span>Bitcoin (BTC)</span>
                  </div>
                  <span>45%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                    <span>Ethereum (ETH)</span>
                  </div>
                  <span>30%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-green-500"></div>
                    <span>Cardano (ADA)</span>
                  </div>
                  <span>15%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                    <span>Others</span>
                  </div>
                  <span>10%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Trading Activity */}
          <div className="col-span-1 bg-[#3C354A] rounded-xl p-4 border border-[#3C354A]">
            <h3 className="font-medium mb-4">Trading Activity</h3>
            <div className="space-y-4">
              <div className="bg-gray-700 rounded-md p-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                      <ArrowUpRight className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Buy BTC</div>
                      <div className="text-xs text-gray-400">Today, 10:45 AM</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">+0.05 BTC</div>
                    <div className="text-xs text-gray-400">$1,842.95</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-md p-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center">
                      <ArrowDownRight className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Sell ETH</div>
                      <div className="text-xs text-gray-400">Yesterday, 2:30 PM</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">-1.5 ETH</div>
                    <div className="text-xs text-gray-400">$3,521.67</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-md p-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                      <ArrowUpRight className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Buy ADA</div>
                      <div className="text-xs text-gray-400">Mar 21, 9:15 AM</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">+500 ADA</div>
                    <div className="text-xs text-gray-400">$625.50</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

