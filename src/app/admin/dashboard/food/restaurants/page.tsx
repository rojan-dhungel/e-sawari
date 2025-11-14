"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, Star } from "lucide-react"

interface Restaurant {
  id: number
  name: string
  category: string
  rating: number
  items: number
  status: string
}

export default function RestaurantsPage() {
  const [restaurants] = useState<Restaurant[]>([
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
    <div className="bg-light p-6">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <PageHeader title="Restaurants" description="Manage all restaurants" />
        <Button className="bg-primary-green transition-all duration-200 hover:bg-[#1a5a2f] hover:shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Add Restaurant
        </Button>
      </div>

      {/* Table Section */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="w-full">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Restaurant Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Rating
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Menu Items
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Status
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-dark-heading">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {restaurants.length > 0 ? (
              restaurants.map((restaurant) => (
                <tr key={restaurant.id} className="transition-colors duration-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-dark-heading">
                    {restaurant.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-paragraph">
                    {restaurant.category}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-1 font-medium text-yellow-600">
                      <Star className="h-4 w-4 fill-yellow-600" />
                      {restaurant.rating}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-paragraph">
                    {restaurant.items} item{restaurant.items !== 1 ? 's' : ''}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      {restaurant.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        className="rounded p-1.5 transition-colors duration-200 hover:bg-blue-50"
                        aria-label={`Edit ${restaurant.name}`}
                      >
                        <Edit2 className="h-4 w-4 text-blue-600" />
                      </button>
                      <button
                        className="rounded p-1.5 transition-colors duration-200 hover:bg-red-50"
                        aria-label={`Delete ${restaurant.name}`}
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
                  No restaurants found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}