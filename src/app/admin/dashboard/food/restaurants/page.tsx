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
    { id: 1, name: "Taj Express", category: "Fast Food", rating: 4.5, items: 25, status: "Active" },
    { id: 2, name: "Nepali Kitchen", category: "Restaurants", rating: 4.8, items: 45, status: "Active" },
  ])

  return (
    <div>
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader title="Restaurants" description="Manage all restaurants" />
        <Button
          className="w-full sm:w-auto transition-all duration-200 hover:shadow-md active:scale-95"
          style={{
            backgroundColor: "var(--primary-green)",
            color: "var(--text-light)",
            fontFamily: "var(--font-body)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a5a2f")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--primary-green)")}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Restaurant
        </Button>
      </div>

      <div
        className="rounded-lg shadow-sm overflow-hidden -mx-3 sm:mx-0"
        style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E5E5" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead
              className="border-b"
              style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E5E5" }}
            >
              <tr>
                {[
                  "Restaurant Name",
                  "Category",
                  "Rating",
                  "Menu Items",
                  "Status",
                  "Actions",
                ].map((header) => (
                  <th
                    key={header}
                    className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold whitespace-nowrap ${
                      header === "Actions" ? "text-center" : "text-left"
                    }`}
                    style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: "#E5E5E5" }}>
              {restaurants.length > 0 ? (
                restaurants.map((restaurant) => (
                  <tr
                    key={restaurant.id}
                    className="transition-colors duration-200"
                    style={{ backgroundColor: "#FFFFFF" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
                  >
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}>
                      {restaurant.name}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                      {restaurant.category}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm">
                      <span className="flex items-center gap-1 font-medium" style={{ color: "#B45309", fontFamily: "var(--font-body)" }}>
                        <Star className="h-4 w-4 fill-current" />
                        {restaurant.rating}
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                      {restaurant.items} item{restaurant.items !== 1 ? "s" : ""}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm">
                      <span
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{
                          backgroundColor: restaurant.status === "Active" ? "#D1FAE5" : "#FEE2E2",
                          color: restaurant.status === "Active" ? "#065F46" : "#991B1B",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {restaurant.status}
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-center">
                      <div className="flex justify-center gap-1 sm:gap-2">
                        <button
                          className="rounded-lg p-1.5 transition active:scale-95"
                          style={{ backgroundColor: "#DBEAFE" }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#BFDBFE")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#DBEAFE")}
                          aria-label={`Edit ${restaurant.name}`}
                        >
                          <Edit2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{ color: "#2563EB" }} />
                        </button>
                        <button
                          className="rounded-lg p-1.5 transition active:scale-95"
                          style={{ backgroundColor: "#FEE2E2" }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FECACA")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FEE2E2")}
                          aria-label={`Delete ${restaurant.name}`}
                        >
                          <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{ color: "#DC2626" }} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-3 sm:px-4 md:px-6 py-8 sm:py-12 text-center text-xs sm:text-sm"
                    style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                  >
                    No restaurants found
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
