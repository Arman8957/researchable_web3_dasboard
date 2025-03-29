"use client";

import { useState, useEffect } from "react";
import {
  Home,
  BarChart2,
  Wallet,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LogoutConfirmation from "./logout-confirmation";
import Logo  from "../public/Researchableads_logo.png";

interface SidebarProps {
  activePage?: string;
}

export default function Sidebar({ activePage = "home" }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        // Default to open on desktop/tablet
        setIsOpen(true);
      }
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileOpen(!isMobileOpen);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const menuItems = [
    { icon: Home, label: "Home", href: "/", active: activePage === "home" },
    {
      icon: BarChart2,
      label: "Analytics",
      href: "/analytics",
      active: activePage === "analytics",
    },
    {
      icon: Wallet,
      label: "Wallet",
      href: "#",
      active: activePage === "wallet",
    },
    {
      icon: FileText,
      label: "Transactions",
      href: "/transactions",
      active: activePage === "transactions",
    },
    {
      icon: Settings,
      label: "Settings",
      href: "/settings",
      active: activePage === "settings",
    },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-gray-800 text-white"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static h-screen z-50 transition-all duration-300 ease-in-out
          ${isMobileOpen ? "left-0" : "-left-80 md:left-0"}
          ${isOpen ? "md:w-64" : "md:w-20"}
          bg-[#3C354A] flex flex-col py-6 border-r-2 border-violet-300 border-opacity-5`}
      >
        {/* Close button for mobile */}
        <button
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden absolute top-4 right-4 p-1 rounded-md text-gray-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center px-2 mb-4">
          {/* <div className="h-10 w-10  flex items-center justify-center"> */}
          {/* <img src={Logo} alt="Researchable_ads" height={30} width={30} className="flex items-center justify-center"/> */}
          <div className="h-10 w-10 flex items-center justify-center">
            <Image
              src={Logo}
              alt="Crypto Logo"
              width={25}
              height={25}
              priority
            />
          </div>
          {/* <div className="h-6 w-6 bg-white rounded-sm transform rotate-45"></div> */}
          {/* </div> */}
          <span
            className={`ml-3 font-bold text-lg text-white transition-opacity duration-200 ${
              isOpen ? "opacity-100" : "opacity-0 md:hidden"
            }`}
          >
            Crypto
          </span>

         
          <button
            onClick={toggleSidebar}
            className="hidden md:flex ml-auto p-1 rounded-md text-gray-400 hover:text-white"
          >
            {isOpen ? (
              <ChevronLeft className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
        </div>

        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center p-3 rounded-xl transition-colors
                    ${
                      item.active
                        ? "bg-gray-800 text-purple-500"
                        : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/50"
                    }`}
                >
                  <item.icon className="h-5 w-5 min-w-5" />
                  <span
                    className={`ml-3 transition-all duration-200 ${
                      isOpen ? "opacity-100" : "opacity-0 md:hidden"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-4 mt-auto">
          <button
            onClick={() => setShowLogoutConfirmation(true)}
            className="flex items-center w-full p-3 rounded-xl text-gray-500 hover:text-gray-300 hover:bg-gray-800/50 transition-colors"
          >
            <LogOut className="h-5 w-5 min-w-5" />
            <span
              className={`ml-3 transition-all duration-200 ${
                isOpen ? "opacity-100" : "opacity-0 md:hidden"
              }`}
            >
              Logout
            </span>
          </button>
        </div>
      </div>

     
      <LogoutConfirmation
        isOpen={showLogoutConfirmation}
        onClose={() => setShowLogoutConfirmation(false)}
      />
    </>
  );
}
