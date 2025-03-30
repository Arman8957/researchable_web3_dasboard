"use client"

import { useState } from "react"
import { Bell } from "lucide-react"

interface NotificationBellProps {
  initialCount?: number
}

export default function NotificationBell({ initialCount = 3 }: NotificationBellProps) {
  const [count, setCount] = useState(initialCount)
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "ETH Transfer Complete",
      message: "Your transfer of 0.5 ETH has been completed",
      time: "10 min ago",
      read: false,
    },
    {
      id: 2,
      title: "Price Alert: BTC",
      message: "Bitcoin has increased by 5% in the last hour",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      title: "New Feature Available",
      message: "Check out the new portfolio analytics tools",
      time: "3 hours ago",
      read: false,
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
    setCount((prev) => Math.max(0, prev - 1))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
    setCount(0)
  }

  return (
    <div className="relative">
      <button
        className="p-2 rounded-full bg-[#3C354A] relative border border-[#3C354A]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="h-5 w-5 text-gray-400" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-purple-600 text-white text-xs font-medium rounded-full">
            {count}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 w-80 bg-white rounded-xl shadow-lg border border-[#3C354A] z-50">
          <div className="flex items-center justify-between p-3 border-b border-gray-700">
            <h3 className="font-medium text-purple-950">Notifications</h3>
            {count > 0 && (
              <button onClick={markAllAsRead} className="text-xs text-purple-600 hover:text-purple-400">
                Mark all as read
              </button>
            )}
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.length > 0 ? (
              <div className="divide-y divide-gray-700">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 hover:bg-gray-700/50 transition-colors ${notification.read ? "opacity-70" : ""}`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-sm text-purple-950">{notification.title}</h4>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                    <p className="text-sm text-purple-950 mb-2">{notification.message}</p>
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-xs text-purple-500 hover:text-purple-400"
                      >
                        Mark as read
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500 text-sm">No new notifications</div>
            )}
          </div>
          <div className="p-3 border-t border-gray-700">
            <button className="w-full text-center text-sm text-purple-600 hover:text-purple-500">
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

