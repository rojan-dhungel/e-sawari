"use client"

import type { ReactNode } from "react"
import "@/styles/globals.css";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div className="admin-layout">{children}</div>
      </body>
    </html>
  )
}
