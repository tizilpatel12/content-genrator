"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: '/dashboard'
    },
    {
      name: "History",
      icon: FileClock,
      path: '/dashboard/history'
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: '/dashboard/billing'
    },
    {
      name: "Settings",
      icon: Settings,
      path: '/dashboard/settings'
    },
  ]

  const path = usePathname()

  useEffect(() => {
    console.log(path)
  }, [path])

  return (
    <div className='h-screen p-5 shadow-sm border'>
      <div className='flex justify-center'>
        <Image src='/logo.svg' alt='logo' width={65} height={65} />
      </div>
      <hr className='my-6 border' />
      <div className="mt-3">
        {MenuList.map((menu, index) => {
          const isActive = path === menu.path
          const Icon = menu.icon
          return (
            <div
              key={index}
              className={`flex gap-2 mb-2 p-3 rounded-lg cursor-pointer items-center 
                ${isActive ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
            >
              <Icon className='h-6 w-6' />
              <h2>{menu.name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SideNav
