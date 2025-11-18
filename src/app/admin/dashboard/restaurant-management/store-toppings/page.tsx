"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"

const STATUS_STYLES = {
  Active: { bg: "#D1FAE5", text: "#065F46" },
  Inactive: { bg: "#FEE2E2", text: "#991B1B" },
}

export default function StoreToppingsPage() {
  const [toppings] = useState([
    { id: 1, name: "Extra Cheese", price: "₹ 50", status: "Active" },
    { id: 2, name: "Bacon", price: "₹ 40", status: "Active" },
    { id: 3, name: "Jalapenos", price: "₹ 30", status: "Active" },
    { id: 4, name: "Mushrooms", price: "₹ 35", status: "Active" },
  ])

  return (
    <div>
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader title="Store Toppings" description="Manage available toppings for food items" />
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
          <Plus className="w-4 h-4 mr-2" />
          Add Topping
        </Button>
      </div>

      <div
        className="rounded-lg shadow-sm overflow-hidden -mx-3 sm:mx-0"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead
              className="border-b"
              style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E5E5" }}
            >
              <tr>
                {["S.No", "Topping Name", "Price", "Status", "Actions"].map((header) => (
                  <th
                    key={header}
                    className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold whitespace-nowrap ${
                      header === "Actions" ? "text-center" : "text-left"
                    }`}
                    style={{
                      color: "var(--dark-heading)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: "#E5E5E5" }}>
              {toppings.map((topping, index) => (
                <tr
                  key={topping.id}
                  className="transition-colors duration-200"
                  style={{ backgroundColor: "#FFFFFF" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
                >
                  <td
                    className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                    style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                  >
                    {index + 1}
                  </td>
                  <td
                    className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium"
                    style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
                  >
                    {topping.name}
                  </td>
                  <td
                    className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                    style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                  >
                    {topping.price}
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm">
                    <span
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{
                        backgroundColor: STATUS_STYLES[topping.status as "Active" | "Inactive"]?.bg,
                        color: STATUS_STYLES[topping.status as "Active" | "Inactive"]?.text,
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {topping.status}
                    </span>
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 text-center">
                    <div className="flex justify-center gap-1 sm:gap-2">
                      <button
                        className="p-1.5 hover:shadow-sm rounded transition active:scale-95"
                        style={{ backgroundColor: "#DBEAFE" }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#BFDBFE")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#DBEAFE")}
                        title="Edit"
                      >
                        <Edit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: "#2563EB" }} />
                      </button>
                      <button
                        className="p-1.5 hover:shadow-sm rounded transition active:scale-95"
                        style={{ backgroundColor: "#FEE2E2" }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FECACA")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FEE2E2")}
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: "#DC2626" }} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
