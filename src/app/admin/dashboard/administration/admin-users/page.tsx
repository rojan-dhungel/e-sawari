"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"

interface AdminUser {
  id: number
  name: string
  email: string
  status: string
  joinDate: string
}

export default function AdminUsersPage() {
  const [adminUsers] = useState<AdminUser[]>([
    {
      id: 1,
      name: "Admin",
      email: "admin@sawari.com",
      status: "Active",
      joinDate: "2024-01-15",
    },
  ])

  return (
    <div>
      {/* Header Section */}
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader title="Admin Users" description="Manage administrator accounts" />
        <Button 
          className="transition-all duration-200 hover:shadow-md active:scale-95 w-full sm:w-auto"
          style={{ 
            backgroundColor: 'var(--primary-green)',
            color: 'var(--text-light)',
            fontFamily: 'var(--font-body)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Admin User
        </Button>
      </div>

      {/* Table Section */}
      <div 
        className="overflow-hidden rounded-lg border shadow-sm"
        style={{ 
          borderColor: '#E5E5E5',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead 
              className="border-b"
              style={{ 
                borderColor: '#E5E5E5',
                backgroundColor: '#F9FAFB'
              }}
            >
              <tr>
                <th 
                  className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Name
                </th>
                <th 
                  className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Email
                </th>
                <th 
                  className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Status
                </th>
                <th 
                  className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Join Date
                </th>
                <th 
                  className="px-4 sm:px-6 py-3 text-center text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: '#E5E5E5' }}>
              {adminUsers.length > 0 ? (
                adminUsers.map((user) => (
                  <tr 
                    key={user.id} 
                    className="transition-colors duration-200"
                    style={{ backgroundColor: '#FFFFFF' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
                  >
                    <td 
                      className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-medium"
                      style={{ 
                        color: 'var(--dark-heading)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {user.name}
                    </td>
                    <td 
                      className="px-4 sm:px-6 py-4 text-xs sm:text-sm"
                      style={{ 
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {user.email}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm">
                      <span 
                        className="inline-flex rounded-full px-3 py-1 text-xs font-medium"
                        style={{ 
                          backgroundColor: '#D1FAE5',
                          color: '#065F46',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td 
                      className="px-4 sm:px-6 py-4 text-xs sm:text-sm"
                      style={{ 
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {user.joinDate}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-center">
                      <div className="flex justify-center gap-2">
                        <button 
                          className="rounded p-1.5 transition-colors duration-200 hover:shadow-sm active:scale-95"
                          style={{ backgroundColor: '#DBEAFE' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BFDBFE'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DBEAFE'}
                          aria-label="Edit user"
                        >
                          <Edit2 className="h-4 w-4" style={{ color: '#2563EB' }} />
                        </button>
                        <button 
                          className="rounded p-1.5 transition-colors duration-200 hover:shadow-sm active:scale-95"
                          style={{ backgroundColor: '#FEE2E2' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FECACA'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FEE2E2'}
                          aria-label="Delete user"
                        >
                          <Trash2 className="h-4 w-4" style={{ color: '#DC2626' }} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td 
                    colSpan={5} 
                    className="px-4 sm:px-6 py-8 text-center text-xs sm:text-sm"
                    style={{ 
                      color: 'var(--text-dark)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    No admin users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}