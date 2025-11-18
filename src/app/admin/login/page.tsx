"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock, LogIn } from "lucide-react"

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // Static admin credentials
  const ADMIN_EMAIL = "admin@sawari.com"
  const ADMIN_PASSWORD = "admin123"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Simple validation
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Set auth cookie
      document.cookie = "admin_authenticated=true; path=/admin"
      router.push("/admin/dashboard")
    } else {
      setError("Invalid email or password")
    }

    setLoading(false)
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: 'var(--light-background)' }}
    >
      <div className="w-full max-w-md">
        <div 
          className="rounded-lg shadow-lg p-6 sm:p-8 border"
          style={{ 
            backgroundColor: '#FFFFFF',
            borderColor: '#E5E5E5'
          }}
        >
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center mb-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md"
                style={{ backgroundColor: 'var(--primary-green)' }}
              >
                <Lock className="w-6 h-6" style={{ color: 'var(--text-light)' }} />
              </div>
            </div>
            <h1 
              className="text-2xl sm:text-3xl font-bold"
              style={{ 
                color: 'var(--dark-heading)',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Sawari Admin
            </h1>
            <p 
              className="text-sm sm:text-base mt-2"
              style={{ 
                color: 'var(--text-dark)',
                fontFamily: 'var(--font-body)'
              }}
            >
              Secure Administration Portal
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div 
              className="mb-4 p-3 rounded-lg border"
              style={{ 
                backgroundColor: '#FEF2F2',
                borderColor: '#FECACA'
              }}
            >
              <p className="text-sm" style={{ color: '#DC2626', fontFamily: 'var(--font-body)' }}>
                {error}
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border transition-all focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  borderColor: '#D1D5DB',
                  fontFamily: 'var(--font-body)'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
                placeholder="Enter your email"
                disabled={loading}
              />
            </div>

            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border transition-all focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  borderColor: '#D1D5DB',
                  fontFamily: 'var(--font-body)'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
                placeholder="Enter your password"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 sm:py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
              style={{ 
                backgroundColor: 'var(--primary-green)',
                color: 'var(--text-light)',
                fontFamily: 'var(--font-body)'
              }}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Sign In</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p 
          className="text-center text-xs sm:text-sm mt-6"
          style={{ 
            color: 'var(--text-dark)',
            fontFamily: 'var(--font-body)',
            opacity: 0.7
          }}
        >
          © 2025 Sawari Admin Panel. All rights reserved.
        </p>
      </div>
    </div>
  )
}