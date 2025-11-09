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
    <div className="bg-light p-6">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <PageHeader title="Admin Users" description="Manage administrator accounts" />
        <Button className="bg-primary-green transition-all duration-200 hover:bg-[#1a5a2f] hover:shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Add Admin User
        </Button>
      </div>

      {/* Table Section */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="w-full">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">Join Date</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-dark-heading">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {adminUsers.length > 0 ? (
              adminUsers.map((user) => (
                <tr key={user.id} className="transition-colors duration-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-dark-heading">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-paragraph">{user.email}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-paragraph">{user.joinDate}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button 
                        className="rounded p-1.5 transition-colors duration-200 hover:bg-blue-50"
                        aria-label="Edit user"
                      >
                        <Edit2 className="h-4 w-4 text-blue-600" />
                      </button>
                      <button 
                        className="rounded p-1.5 transition-colors duration-200 hover:bg-red-50"
                        aria-label="Delete user"
                      >
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-sm text-paragraph">
                  No admin users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}