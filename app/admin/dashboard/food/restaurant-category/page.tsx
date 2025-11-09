"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"

interface RestaurantCategory {
  id: number
  name: string
  description: string
}

export default function RestaurantCategoryPage() {
  const [categories] = useState<RestaurantCategory[]>([
    { id: 1, name: "Fast Food", description: "Quick bites and fast food" },
    { id: 2, name: "Restaurants", description: "Full-service restaurants" },
    { id: 3, name: "Cafes", description: "Cafes and coffee shops" },
  ])

  return (
    <div className="bg-light p-6">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <PageHeader title="Restaurant Categories" description="Manage food service categories" />
        <Button className="bg-primary-green transition-all duration-200 hover:bg-[#1a5a2f] hover:shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div
              key={category.id}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              {/* Card Header */}
              <h3 className="mb-2 text-lg font-semibold text-dark-heading">
                {category.name}
              </h3>

              {/* Card Description */}
              <p className="mb-4 text-sm text-paragraph">
                {category.description}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg p-2 transition-all duration-200 hover:bg-blue-50"
                  aria-label={`Edit ${category.name}`}
                >
                  <Edit2 className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">Edit</span>
                </button>
                <button
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg p-2 transition-all duration-200 hover:bg-red-50"
                  aria-label={`Delete ${category.name}`}
                >
                  <Trash2 className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-red-600">Delete</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
            <p className="text-paragraph">No restaurant categories found</p>
          </div>
        )}
      </div>
    </div>
  )
}