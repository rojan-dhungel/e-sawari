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
    <header 
      className="flex items-center justify-between border-b px-3 sm:px-4 md:px-6 py-3 sm:py-4 shadow-sm"
      style={{ 
        backgroundColor: 'var(--light-background)',
        borderColor: '#E5E5E5'
      }}
    >
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0 flex-1">
        <button 
          onClick={onMenuClick} 
          className="rounded p-1.5 sm:p-2 transition-colors duration-200 hover:bg-gray-100 active:bg-gray-200 flex-shrink-0"
          aria-label="Toggle menu"
        >
          <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-dark-heading" />
        </button>
        <h1 
          className="text-base sm:text-lg md:text-xl font-semibold truncate"
          style={{ 
            color: 'var(--dark-heading)',
            fontFamily: 'var(--font-heading)'
          }}
        >
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
        {/* Admin Profile */}
        <div className="hidden sm:flex items-center gap-2 md:gap-3">
          <div 
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-xs sm:text-sm font-semibold shadow-sm flex-shrink-0"
            style={{ 
              backgroundColor: 'var(--primary-green)',
              color: 'var(--text-light)',
              fontFamily: 'var(--font-body)'
            }}
          >
            A
          </div>
          <div className="hidden md:block min-w-0">
            <p 
              className="text-xs sm:text-sm font-medium truncate"
              style={{ 
                color: 'var(--dark-heading)',
                fontFamily: 'var(--font-body)'
              }}
            >
              Admin
            </p>
            <p 
              className="text-xs truncate"
              style={{ 
                color: 'var(--text-dark)',
                fontFamily: 'var(--font-body)'
              }}
            >
              admin@sawari.com
            </p>
          </div>
        </div>

        {/* Mobile Avatar Only */}
        <div className="flex sm:hidden items-center">
          <div 
            className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold shadow-sm"
            style={{ 
              backgroundColor: 'var(--primary-green)',
              color: 'var(--text-light)',
              fontFamily: 'var(--font-body)'
            }}
          >
            A
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 sm:gap-2 rounded-lg px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 transition-all duration-200 hover:shadow-sm active:scale-95"
          style={{ 
            backgroundColor: '#F3F4F6',
            color: 'var(--dark-heading)',
            fontFamily: 'var(--font-body)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E5E7EB'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
        >
          <LogOut className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  )
}