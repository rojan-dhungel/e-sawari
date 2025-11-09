"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"

interface MenuCategory {
  id: number
  name: string
  restaurants: number
}

export default function MenuCategoryPage() {
  const [menuCategories] = useState<MenuCategory[]>([
    { id: 1, name: "Appetizers", restaurants: 12 },
    { id: 2, name: "Main Course", restaurants: 15 },
    { id: 3, name: "Desserts", restaurants: 8 },
    { id: 4, name: "Beverages", restaurants: 20 },
  ])

  return (
    <div className="bg-light p-6">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <PageHeader title="Menu Categories" description="Manage menu categories across restaurants" />
        <Button className="bg-primary-green transition-all duration-200 hover:bg-[#1a5a2f] hover:shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Add Menu Category
        </Button>
      </div>

      {/* Table Section */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="w-full">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Category Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Restaurants Using
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-dark-heading">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {menuCategories.length > 0 ? (
              menuCategories.map((category) => (
                <tr key={category.id} className="transition-colors duration-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-dark-heading">
                    {category.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-paragraph">
                    {category.restaurants} restaurant{category.restaurants !== 1 ? 's' : ''}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        className="rounded p-1.5 transition-colors duration-200 hover:bg-blue-50"
                        aria-label={`Edit ${category.name}`}
                      >
                        <Edit2 className="h-4 w-4 text-blue-600" />
                      </button>
                      <button
                        className="rounded p-1.5 transition-colors duration-200 hover:bg-red-50"
                        aria-label={`Delete ${category.name}`}
                      >
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-6 py-8 text-center text-sm text-paragraph">
                  No menu categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}