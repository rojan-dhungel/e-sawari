"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import DashboardContent from "@/components/admin/dashboard-content"

export default function AdminDashboardPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated
    const cookies = document.cookie.split(";").map((c) => c.trim())
    const isAuth = cookies.some((c) => c.startsWith("admin_authenticated=true"))

    if (!isAuth) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [router])

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (!isAuthenticated) {
    return null
  }

  return <DashboardContent />
}
