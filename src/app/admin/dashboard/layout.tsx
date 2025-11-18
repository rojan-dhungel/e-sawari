"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Sidebar from "@/components/admin/sidebar"
import Header from "@/components/admin/header"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)

  // Check screen size and set initial sidebar state
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      const mobile = width < 640
      const tablet = width >= 640 && width < 1024
      
      // Only set initial state on first load, not on resize
      if (!isInitialized) {
        if (mobile || tablet) {
          setSidebarOpen(false)
        } else {
          setSidebarOpen(true)
        }
        setIsInitialized(true)
      }
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [isInitialized])

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: 'var(--light-background)' }}>
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto" style={{ backgroundColor: 'var(--light-background)' }}>
          <div className="p-3 sm:p-4 md:p-6 max-w-[1920px] mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
