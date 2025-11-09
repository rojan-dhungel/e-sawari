"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"

interface MenuItem {
  id: number
  name: string
  restaurant: string
  category: string
  price: number
  status: string
}

export default function MenuItemsPage() {
  const [menuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: "Butter Chicken",
      restaurant: "Taj Express",
      category: "Main Course",
      price: 450,
      status: "Active",
    },
    {
      id: 2,
      name: "Momos",
      restaurant: "Nepali Kitchen",
      category: "Appetizers",
      price: 200,
      status: "Active",
    },
  ])

  return (
    <div className="bg-light p-6">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <PageHeader title="Menu Items" description="Manage all menu items" />
        <Button className="bg-primary-green transition-all duration-200 hover:bg-[#1a5a2f] hover:shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Add Menu Item
        </Button>
      </div>

      {/* Table Section */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="w-full">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Item Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Restaurant
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Price
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
            {menuItems.length > 0 ? (
              menuItems.map((item) => (
                <tr key={item.id} className="transition-colors duration-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-dark-heading">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-paragraph">
                    {item.restaurant}
                  </td>
                  <td className="px-6 py-4 text-sm text-paragraph">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-dark-heading">
                    Rs. {item.price}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        className="rounded p-1.5 transition-colors duration-200 hover:bg-blue-50"
                        aria-label={`Edit ${item.name}`}
                      >
                        <Edit2 className="h-4 w-4 text-blue-600" />
                      </button>
                      <button
                        className="rounded p-1.5 transition-colors duration-200 hover:bg-red-50"
                        aria-label={`Delete ${item.name}`}
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
                  No menu items found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}