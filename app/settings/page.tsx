"use client"

import { useState } from "react"
import { User, Lock, Bell, Globe, CreditCard, Shield, Eye, EyeOff } from "lucide-react"
import Sidebar from "@/components/sidebar"
import ProfileButton from "@/components/profile-button"
import NotificationBell from "@/components/notification-bell"
import ResponsiveSearch from "@/components/responsive-search"

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile")
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="flex h-screen bg-[#261E35] text-white">
      <Sidebar activePage="settings" />
      <main className="flex-1 overflow-auto w-full">
        <header className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1 className="text-xl font-medium ml-10 md:ml-0">Settings</h1>
          <div className="flex items-center gap-4">
            <ResponsiveSearch />
            <NotificationBell />
            <ProfileButton />
          </div>
        </header>

        <div className="p-4">
          {/* Settings Header */}
          <div className="bg-[#3C354A] rounded-xl p-6 mb-4 border border-[#3C354A]">
            <h2 className="text-2xl font-bold mb-2">Account Settings</h2>
            <p className="text-gray-400">Manage your account settings and preferences</p>
          </div>

     
          <div className="bg-[#3C354A] rounded-xl overflow-hidden border border-[#3C354A]">
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="w-full md:w-64 bg-gray-700 p-4 md:p-0">
                <nav className="md:sticky md:top-0 space-y-1">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
                      activeTab === "profile" ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-600/50"
                    }`}
                  >
                    <User className="h-5 w-5" />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("password")}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
                      activeTab === "password" ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-600/50"
                    }`}
                  >
                    <Lock className="h-5 w-5" />
                    <span>Password</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("notifications")}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
                      activeTab === "notifications" ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-600/50"
                    }`}
                  >
                    <Bell className="h-5 w-5" />
                    <span>Notifications</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("preferences")}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
                      activeTab === "preferences" ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-600/50"
                    }`}
                  >
                    <Globe className="h-5 w-5" />
                    <span>Preferences</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("payment")}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
                      activeTab === "payment" ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-600/50"
                    }`}
                  >
                    <CreditCard className="h-5 w-5" />
                    <span>Payment Methods</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("security")}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
                      activeTab === "security" ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-600/50"
                    }`}
                  >
                    <Shield className="h-5 w-5" />
                    <span>Security</span>
                  </button>
                </nav>
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                {activeTab === "profile" && (
                  <div>
                    <h3 className="text-xl font-bold mb-6">Profile Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">First Name</label>
                        <input
                          type="text"
                          defaultValue="Md"
                          className="w-full bg-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                        <input
                          type="text"
                          defaultValue="Arman"
                          className="w-full bg-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                        <input
                          type="email"
                          defaultValue="mdarmanya.h@gmail.com"
                          className="w-full bg-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          defaultValue="+8801790138957"
                          className="w-full bg-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm text-gray-400 mb-2">Bio</label>
                        <textarea
                          defaultValue="Crypto enthusiast and developer."
                          rows={4}
                          className="w-full bg-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-2 rounded-lg">
                        Save Changes
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "password" && (
                  <div>
                    <h3 className="text-xl font-bold mb-6">Change Password</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Current Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your current password"
                            className="w-full bg-gray-700 rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">New Password</label>
                        <div className="relative">
                          <input
                            type={showNewPassword ? "text" : "password"}
                            placeholder="Enter your new password"
                            className="w-full bg-gray-700 rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                          >
                            {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          Password must be at least 8 characters long and include a number and a special character.
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Confirm New Password</label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your new password"
                            className="w-full bg-gray-700 rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                          >
                            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-2 rounded-lg">
                        Update Password
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "notifications" && (
                  <div>
                    <h3 className="text-xl font-bold mb-6">Notification Settings</h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                        <div>
                          <h4 className="font-medium">Email Notifications</h4>
                          <p className="text-sm text-gray-400">Receive email notifications for important updates</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-purple-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                        <div>
                          <h4 className="font-medium">Push Notifications</h4>
                          <p className="text-sm text-gray-400">Receive push notifications on your device</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-purple-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                        <div>
                          <h4 className="font-medium">Price Alerts</h4>
                          <p className="text-sm text-gray-400">Get notified when prices change significantly</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-purple-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                        <div>
                          <h4 className="font-medium">Transaction Notifications</h4>
                          <p className="text-sm text-gray-400">Get notified about your transactions</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-purple-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                        <div>
                          <h4 className="font-medium">Marketing Emails</h4>
                          <p className="text-sm text-gray-400">Receive promotional emails and offers</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-purple-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-2 rounded-lg">
                        Save Preferences
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "preferences" && (
                  <div>
                    <h3 className="text-xl font-bold mb-6">App Preferences</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Language</label>
                        <select className="w-full bg-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500">
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                          <option value="zh">Chinese</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Currency</label>
                        <select className="w-full bg-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500">
                          <option value="usd">USD ($)</option>
                          <option value="eur">EUR (€)</option>
                          <option value="gbp">GBP (£)</option>
                          <option value="jpy">JPY (¥)</option>
                          <option value="cny">CNY (¥)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Time Zone</label>
                        <select className="w-full bg-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500">
                          <option value="utc">UTC (GMT+0)</option>
                          <option value="est">Eastern Time (GMT-5)</option>
                          <option value="pst">Pacific Time (GMT-8)</option>
                          <option value="cet">Central European Time (GMT+1)</option>
                          <option value="jst">Japan Standard Time (GMT+9)</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                        <div>
                          <h4 className="font-medium">Dark Mode</h4>
                          <p className="text-sm text-gray-400">Use dark theme throughout the app</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-purple-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-2 rounded-lg">
                        Save Preferences
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

