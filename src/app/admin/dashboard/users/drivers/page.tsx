"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"

export default function DriversPage() {
  const [drivers] = useState([
    {
      id: 1,
      name: "Ram Kumar",
      email: "ram@example.com",
      phone: "9841234567",
      vehicle: "Sedan",
      status: "Active",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Hari Shrestha",
      email: "hari@example.com",
      phone: "9845678901",
      vehicle: "SUV",
      status: "Active",
      rating: 4.5,
    },
  ])

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <PageHeader title="Drivers" description="Manage all drivers" />
        <Button className="bg-primary-green hover:bg-[#1a5a2f]">
          <Plus className="w-4 h-4 mr-2" />
          Add Driver
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-light border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">Vehicle</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">Rating</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">Status</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-dark-heading">Actions</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id} className="border-b hover:bg-light transition">
                <td className="px-6 py-3 text-sm font-medium text-dark-heading">{driver.name}</td>
                <td className="px-6 py-3 text-sm text-paragraph">{driver.email}</td>
                <td className="px-6 py-3 text-sm text-paragraph">{driver.phone}</td>
                <td className="px-6 py-3 text-sm text-dark-heading">{driver.vehicle}</td>
                <td className="px-6 py-3 text-sm">
                  <span className="text-yellow-600 font-medium">★ {driver.rating}</span>
                </td>
                <td className="px-6 py-3 text-sm">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                    {driver.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="p-1 hover:bg-gray-200 rounded transition">
                      <Edit2 className="w-4 h-4 text-blue-600" />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded transition">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}