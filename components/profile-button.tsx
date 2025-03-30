"use client"

import { useState } from "react"
import ProfilePopup from "./profile-popup"
import Image from "next/image"
import arman from "../public/arman.png"

export default function ProfileButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center"
      >
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
      </button>
      <ProfilePopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

