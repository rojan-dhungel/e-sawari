"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from 'lucide-react'

export default function StoreToppingsPage() {
  const [toppings] = useState([
    { id: 1, name: "Extra Cheese", price: "₹ 50", status: "Active" },
    { id: 2, name: "Bacon", price: "₹ 40", status: "Active" },
    { id: 3, name: "Jalapenos", price: "₹ 30", status: "Active" },
    { id: 4, name: "Mushrooms", price: "₹ 35", status: "Active" },
  ])

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <PageHeader title="Store Toppings" description="Manage available toppings for food items" />
        <Button className="bg-[#247C3F] hover:bg-[#1a5a2f]">
          <Plus className="w-4 h-4 mr-2" />
          Add Topping
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">S.No</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Topping Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {toppings.map((topping, idx) => (
              <tr key={topping.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-3 text-sm text-gray-600">{idx + 1}</td>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">{topping.name}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{topping.price}</td>
                <td className="px-6 py-3 text-sm">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                    {topping.status}
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
