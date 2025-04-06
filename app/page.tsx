"use client";

import { useState } from "react";
import {
  Plus,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import Sidebar from "@/components/sidebar";
import CryptoCard from "@/components/crypto-card";
import LineChart from "@/components/line-chart";
import MarketOverview from "@/components/market-overview";
import ProfileButton from "@/components/profile-button";
import MonthlyDropdown from "@/components/monthly-dropdown";
import TransferModal from "@/components/transfer-modal";
import NotificationBell from "@/components/notification-bell";
import ResponsiveSearch from "@/components/responsive-search";
import Image from "next/image";
import arman from "../public/arman.png";

export default function Home() {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

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

        <div className="p-8 grid grid-cols-2  lg:grid-cols-2 gap-4 ">
          {/* Hero Section */}
          <div className="col-span-1 lg:row-span-2 lg:col-span-1 bg-gradient-to-r from-[#2A0FD3] to-[#FF7A7A8F] rounded-xl p-6 relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-xs font-medium text-purple-200 mb-1">
                ETHEREUM 2.0
              </div>
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
              <button className="bg-gray-700 text-white px-4 py-2  text-sm font-medium rounded-xl">
                Learn More
              </button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
              {/* 3D Objects */}
              {/* <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-purple-400 rounded-full opacity-80 "></div>
              <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-blue-400 rounded-md transform rotate-45 opacity-80 "></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-12 bg-cyan-400 rounded-full opacity-80  transform -rotate-12"></div> */}
            </div>
          </div>

          {/* ETH/USD Chart */}
          <div className="col-span-1 lg:row-span-2 bg-[#3C354A] rounded-xl p-4  border border-gray-400">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 bg-slate-900 rounded-xl px-4 py-2">
                <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                  {/* <span className="text-xs font-bold text-black">Ξ</span> */}
                  <span className="text-xs font-bold text-blue-400">♦</span>
                </div>
                <span className="font-medium">ETH/USD ▼</span>
              </div>
              <div className="flex gap-1">
                <button className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">
                  1D
                </button>
                <button className="bg-gray-900 px-2 py-1 rounded text-xs font-medium">
                  1W
                </button>
                <button className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">
                  1M
                </button>
              </div>
            </div>
            <LineChart
              data={[10, 25, 15, 30, 20, 35, 45, 40, 50, 60, 55, 70, 65, 80]}
              color="#8B5CF6"
              secondaryData={[
                50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 95, 100, 90, 85,
              ]}
              secondaryColor="#06B6D4"
            />
          </div>

          {/* new div to change */}
          <div className="">
            {/* Crypto Price Cards */}
            {/* <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
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
            </div> */}

            <div className="">
              {/* Crypto Price Cards with Vertical Slider */}
              <div className="col-span-1 lg:col-span-3 pb-4">
                <div className="relative">
                  {/* Slider container with overflow hidden */}
                  <div className="overflow-hidden">
                    {/* Slider track */}
                    <div className="flex transition-transform duration-300 gap-4">
                      {/* Crypto Cards - now slideable */}
                      <div className="min-w-full md:min-w-[calc(33.333%-1rem)] flex-shrink-0">
                        <CryptoCard
                          name="BTC"
                          fullName="Bitcoin"
                          price="8442.55"
                          change="+6.2%"
                          isPositive={true}
                          chartData={[20, 25, 18, 30, 20, 35, 25, 40, 30, 50]}
                          chartColor="#22C55E"
                        />
                      </div>
                      <div className="min-w-full md:min-w-[calc(33.333%-1rem)] flex-shrink-0">
                        <CryptoCard
                          name="ETH"
                          fullName="Ethereum"
                          price="4772.18"
                          change="-3.8%"
                          isPositive={false}
                          chartData={[40, 35, 50, 45, 60, 55, 65, 60, 75, 70]}
                          chartColor="#EF4444"
                        />
                      </div>
                      <div className="min-w-full md:min-w-[calc(33.333%-1rem)] flex-shrink-0">
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
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#2D2346] rounded-full p-2 shadow-lg z-10 border border-violet-500 "
                    onClick={() => {
                      /* Add slide previous logic */
                    }}
                  >
                    <ChevronLeft className="h-10 w-10 p-2 " />
                  </button>
                  <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#2D2346] rounded-full p-2 shadow-lg z-10 border border-violet-500"
                    onClick={() => {
                      /* Add slide next logic */
                    }}
                  >
                    <ChevronRight className="h-10 w-10  " />
                  </button>
                </div>
              </div>
            </div>

            {/* Market Overview */}
            <div className="col-span-1  lg:col-span-2 row-span-3 bg-[#3C354A] rounded-xl p-4  border border-gray-400">
              <div className="flex items-center justify-between mb-4 ">
                <h3 className="font-bold">Market Overview</h3>
                <MonthlyDropdown />
              </div>
              <MarketOverview />
            </div>
          </div>
          {/* new div to change end*/}

          {/* another div start */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {/* Quick Transfer */}
            <div className="lg:col-span-2 bg-[#3C354A] rounded-xl p-4">
              <h3 className=" font-bold mb-4">Quick Transfer</h3>
              <div className="flex items-center gap-2 mb-6">
                <div className="">
                  <Image
                    src={arman}
                    alt="Crypto Logo"
                    width={30}
                    height={30}
                    className="rounded-full"
                    priority
                  />
                </div>
                <div className="">
                  <Image
                    src={arman}
                    alt="Crypto Logo"
                    width={30}
                    height={30}
                    className="rounded-full"
                    priority
                  />
                </div>
                <button className="h-10 w-10 rounded-full border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <Plus className="h-5 w-5 text-gray-400" />
                </button>
              </div>
              <div className="mb-6">
                <div className="flex items-center rounded-md p-3">
                  <div className="text-sm text-[#835dcf] mb-2">Amount: </div>

                  <span className="text-sm text-[#835dcf]"> $ </span>
                  <span className="text-2xl text-[#f8f7fa] font-bold">
                    {" "}
                    3.25
                  </span>
                  <div className="flex items-center gap-1"></div>
                </div>
              </div>
              <button
                onClick={() => setIsTransferModalOpen(true)}
                className="w-full bg-[#BB7FF5] hover:bg-purple-700 transition-colors py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <div className="h-5 w-5 rounded-full bg-purple-400 flex items-center justify-center">
                  <span className="text-xs">↑</span>
                </div>
                <span className="font-medium">Transfer Now</span>
              </button>
              <TransferModal
                isOpen={isTransferModalOpen}
                onClose={() => setIsTransferModalOpen(false)}
              />
            </div>

            {/* Market Trend */}
            <div className="lg:col-span-2 bg-[#3C354A] rounded-xl p-4">
              <h3 className="font-bold mb-4">Market Trend</h3>
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
                      <td className="text-right py-2">38584</td>
                      <td className="text-right py-2 text-green-500">2,540</td>
                    </tr>
                    <tr>
                      <td className="py-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">BNB</span>
                          <span className="text-gray-400 text-xs">BNB</span>
                        </div>
                      </td>
                      <td className="text-right py-2">357207</td>
                      <td className="text-right py-2 text-green-500">2,304</td>
                    </tr>
                    <tr>
                      <td className="py-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">ETH</span>
                          <span className="text-gray-400 text-xs">
                            Ethereum
                          </span>
                        </div>
                      </td>
                      <td className="text-right py-2">371129</td>
                      <td className="text-right py-2 text-green-500">1,320</td>
                    </tr>
                    <tr>
                      <td className="py-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">LTC</span>
                          <span className="text-gray-400 text-xs">
                            Litecoin
                          </span>
                        </div>
                      </td>
                      <td className="text-right py-2">319661</td>
                      <td className="text-right py-2 text-green-500">2,140</td>
                    </tr>
                    <tr>
                      <td className="py-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">ADA</span>
                          <span className="text-gray-400 text-xs">Cardano</span>
                        </div>
                      </td>
                      <td className="text-right py-2">337166</td>
                      <td className="text-right py-2 text-green-500">1,976</td>
                    </tr>
                    <tr>
                      <td className="py-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">CAKE</span>
                          <span className="text-gray-400 text-xs">Pancake</span>
                        </div>
                      </td>
                      <td className="text-right py-2">372650</td>
                      <td className="text-right py-2 text-green-500">1,903</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Profit Section */}

            <div className="lg:col-span-2 bg-[#3C354A] rounded-xl p-4">
              <h3 className="font-bold mb-4">Profit</h3>
              <div className=" rounded-md p-3 mb-3">
                <div className="text-2xl font-bold mb-1">
                  <span className="text-red-700 font-light inline-block align-top">
                    $
                  </span>
                  1892.25
                </div>
                <div className="text-xs text-gray-400">Income</div>
              </div>
              <div className="rounded-md p-3">
                <div className="text-2xl font-bold mb-1">
                  <span className="text-green-600 font-light inline-block align-top">
                    $
                  </span>
                  387.47
                </div>
                <div className="text-xs text-gray-400">Expenses</div>
              </div>
            </div>

            {/* Assets */}
            <div className="lg:col-span-2 bg-[#3C354A] rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">Assets</h3>
                <button className="p-1 rounded ">
                  <ResponsiveSearch />
                </button>
              </div>
              <div className="space-y-3">
                <div className=" rounded-md p-3">
                  <div className="font-medium">
                    {" "}
                    <span className="text-yellow-500 font-extrabold  ">
                      ₿
                    </span>{" "}
                    Bitcoin
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-400">0.14 BTC</span>
                    <span className="text-xs">34,455.2</span>
                  </div>
                </div>
                <div className=" rounded-md p-3">
                  <div className="font-medium">
                    {" "}
                    <span className="text-blue-400 font-extrabold">♦</span>{" "}
                    Ethereum
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-400">4.65 ETC</span>
                    <span className="text-xs">31,886.2</span>
                  </div>
                </div>
                <div className=" rounded-md p-3">
                  <div className="font-medium">
                    {" "}
                    <span className="text-yellow-500 font-extrabold">
                      ₿
                    </span>{" "}
                    Bitcoin
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-400">0.14 BTC</span>
                    <span className="text-xs">34,455.2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* end */}
          </div>
        </div>
      </main>
    </div>
  );
}
