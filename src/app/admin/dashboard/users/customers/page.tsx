"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"

interface Customer {
  id: number
  name: string
  email: string
  phone: string
  status: string
  totalRides: number
}

export default function CustomersPage() {
  const [customers] = useState<Customer[]>([
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@example.com",
      phone: "9841234567",
      status: "Active",
      totalRides: 45,
    },
    {
      id: 2,
      name: "Arjun Patel",
      email: "arjun@example.com",
      phone: "9845678901",
      status: "Active",
      totalRides: 23,
    },
  ])

  return (
    <div className="bg-light p-6">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <PageHeader title="Customers" description="Manage all customers" />
        <Button className="bg-primary-green transition-all duration-200 hover:bg-[#1a5a2f] hover:shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      {/* Table Section */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="w-full">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Total Rides
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-dark-heading">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {customers.length > 0 ? (
              customers.map((customer) => (
                <tr key={customer.id} className="transition-colors duration-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-dark-heading">
                    {customer.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-paragraph">
                    {customer.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-paragraph">
                    {customer.phone}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-dark-heading">
                    {customer.totalRides} ride{customer.totalRides !== 1 ? 's' : ''}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        className="rounded p-1.5 transition-colors duration-200 hover:bg-blue-50"
                        aria-label={`Edit ${customer.name}`}
                      >
                        <Edit2 className="h-4 w-4 text-blue-600" />
                      </button>
                      <button
                        className="rounded p-1.5 transition-colors duration-200 hover:bg-red-50"
                        aria-label={`Delete ${customer.name}`}
                      >
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-sm text-paragraph">
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}