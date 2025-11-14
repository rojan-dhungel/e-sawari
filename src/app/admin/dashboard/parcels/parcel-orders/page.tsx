"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Eye, Edit2, Trash2 } from "lucide-react"

interface ParcelOrder {
  id: string
  sender: string
  receiver: string
  packageType: string
  status: "Delivered" | "In Transit" | "Pending" | "Cancelled"
  date: string
}

export default function ParcelOrdersPage() {
  const [parcelOrders] = useState<ParcelOrder[]>([
    {
      id: "PARCEL001",
      sender: "Ram Kumar",
      receiver: "Sita Rai",
      packageType: "Small Package",
      status: "Delivered",
      date: "2024-01-08",
    },
    {
      id: "PARCEL002",
      sender: "Hari Shrestha",
      receiver: "Gita Ghimire",
      packageType: "Medium Package",
      status: "In Transit",
      date: "2024-01-09",
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800"
      case "In Transit":
        return "bg-blue-100 text-blue-800"
      case "Pending":
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
        <PageHeader title="Parcel Orders" description="Manage all parcel deliveries" />
      </div>

      {/* Table Section */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="w-full">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Parcel ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Sender
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Receiver
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-dark-heading">
                Type
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
            {parcelOrders.length > 0 ? (
              parcelOrders.map((order) => (
                <tr key={order.id} className="transition-colors duration-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-dark-heading">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-paragraph">
                    {order.sender}
                  </td>
                  <td className="px-6 py-4 text-sm text-paragraph">
                    {order.receiver}
                  </td>
                  <td className="px-6 py-4 text-sm text-paragraph">
                    {order.packageType}
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
                        aria-label={`View parcel ${order.id}`}
                      >
                        <Eye className="h-4 w-4 text-paragraph" />
                      </button>
                      <button
                        className="rounded p-1.5 transition-colors duration-200 hover:bg-blue-50"
                        aria-label={`Edit parcel ${order.id}`}
                      >
                        <Edit2 className="h-4 w-4 text-blue-600" />
                      </button>
                      <button
                        className="rounded p-1.5 transition-colors duration-200 hover:bg-red-50"
                        aria-label={`Delete parcel ${order.id}`}
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
                  No parcel orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}