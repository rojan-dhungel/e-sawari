"use client"

import { LogOut, Menu } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const router = useRouter()

  const handleLogout = () => {
    document.cookie = "admin_authenticated=; path=/admin; max-age=0"
    router.push("/admin/login")
  }

  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-light px-6 py-4">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick} 
          className="rounded p-2 transition-colors duration-200 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5 text-dark-heading" />
        </button>
        <h1 className="text-xl font-semibold text-dark-heading">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Admin Profile */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-green text-sm font-semibold text-light shadow-sm">
            A
          </div>
          <div>
            <p className="text-sm font-medium text-dark-heading">
              Admin
            </p>
            <p className="text-xs text-paragraph">
              admin@sawari.com
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-dark-heading transition-all duration-200 hover:bg-gray-200 hover:shadow-sm"
        >
          <LogOut className="h-4 w-4" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </header>
  )
}