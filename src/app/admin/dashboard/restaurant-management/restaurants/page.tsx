"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"

export default function RestaurantsPage() {
  const [restaurants] = useState([
    {
      id: 1,
      name: "Taj Express",
      category: "Fast Food",
      rating: 4.5,
      items: 25,
      status: "Active",
    },
    {
      id: 2,
      name: "Nepali Kitchen",
      category: "Restaurants",
      rating: 4.8,
      items: 45,
      status: "Active",
    },
  ])

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <PageHeader title="Restaurants" description="Manage all restaurants" />
        <Button className="bg-[#247C3F] hover:bg-[#1a5a2f]">
          <Plus className="w-4 h-4 mr-2" />
          Add Restaurant
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Restaurant Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Rating</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Menu Items</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant) => (
              <tr key={restaurant.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-3 text-sm font-medium text-gray-900">{restaurant.name}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{restaurant.category}</td>
                <td className="px-6 py-3 text-sm text-yellow-600 font-medium">★ {restaurant.rating}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{restaurant.items}</td>
                <td className="px-6 py-3 text-sm">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                    {restaurant.status}
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
