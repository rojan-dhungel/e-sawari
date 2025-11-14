"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Eye, Edit2, Trash2 } from "lucide-react"

interface Order {
  id: string
  customer: string
  restaurant: string
  total: number
  status: "Delivered" | "In Progress" | "Cancelled" | "Pending"
  date: string
}

export default function OrdersPage() {
  const [orders] = useState<Order[]>([
    {
      id: "ORD001",
      customer: "Priya Sharma",
      restaurant: "Taj Express",
      total: 850,
      status: "Delivered",
      date: "2024-01-10",
    },
    {
      id: "ORD002",
      customer: "Arjun Patel",
      restaurant: "Nepali Kitchen",
      total: 1200,
      status: "In Progress",
      date: "2024-01-09",
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-yellow-100 text-yellow-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="bg-light p-6">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <PageHeader title="Orders" description="Manage all food orders" />
      </div>

      {/* Table Section */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="w-full">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Restaurant
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Total
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Date
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-dark-heading">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id} className="transition-colors duration-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-dark-heading">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-paragraph">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 text-sm text-paragraph">
                    {order.restaurant}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-dark-heading">
                    Rs. {order.total}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-paragraph">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        className="rounded p-1.5 transition-colors duration-200 hover:bg-gray-200"
                        aria-label={`View order ${order.id}`}
                      >
                        <Eye className="h-4 w-4 text-paragraph" />
                      </button>
                      <button
                        className="rounded p-1.5 transition-colors duration-200 hover:bg-blue-50"
                        aria-label={`Edit order ${order.id}`}
                      >
                        <Edit2 className="h-4 w-4 text-blue-600" />
                      </button>
                      <button
                        className="rounded p-1.5 transition-colors duration-200 hover:bg-red-50"
                        aria-label={`Delete order ${order.id}`}
                      >
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-8 text-center text-sm text-paragraph">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}