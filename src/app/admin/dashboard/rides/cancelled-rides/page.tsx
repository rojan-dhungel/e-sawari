"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"

export default function CancelledRidesPage() {
  const [cancelledRides] = useState([
    {
      id: 1,
      rideId: "RIDE_101",
      userName: "Krishna Tharu",
      driverName: "-",
      date: "11/11/2025",
      pickupLocation: "Thamel, Kathmandu",
      dropLocation: "Bhaktapur",
      cancelledBy: "Automatic",
      reason: "No driver response",
    },
    {
      id: 2,
      rideId: "RIDE_102",
      userName: "Aman",
      driverName: "-",
      date: "05/11/2025",
      pickupLocation: "Garden of Dreams",
      dropLocation: "Patan",
      cancelledBy: "User",
      reason: "Customer requested cancellation",
    },
    {
      id: 3,
      rideId: "RIDE_103",
      userName: "Sunil Hitang",
      driverName: "-",
      date: "30/10/2025",
      pickupLocation: "Swayambhu",
      dropLocation: "Lalitpur",
      cancelledBy: "User",
      reason: "Found alternative transport",
    },
  ])

  return (
    <div className="p-6">
      <div className="mb-6">
        <PageHeader title="Cancelled Rides" description="View all cancelled ride requests" />
      </div>

      {/* Search and Filter Section */}
      <div className="mb-6 bg-white rounded-lg p-4 flex gap-3">
        <input
          type="text"
          placeholder="Search by ride ID or customer name..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
          style={{ borderColor: "#E5E5E5" }}
        />
        <button className="px-6 py-2 bg-[#247C3F] text-white rounded-lg hover:bg-[#1a5a2f] transition">
          Go
        </button>
        <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
          Reset
        </button>
        <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
          Filter Request
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">S.No</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Ride ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Driver</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Pickup Location</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Drop Location</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Cancelled By</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Cancellation Reason</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {cancelledRides.map((ride) => (
              <tr key={ride.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-3 text-sm font-medium text-gray-900">{ride.id}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{ride.rideId}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{ride.date}</td>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">{ride.userName}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{ride.driverName}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{ride.pickupLocation}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{ride.dropLocation}</td>
                <td className="px-6 py-3 text-sm">
                  <span
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{
                      backgroundColor: ride.cancelledBy === "Automatic" ? "#FEE2E2" : "#FEF3C7",
                      color: ride.cancelledBy === "Automatic" ? "#DC2626" : "#D97706",
                    }}
                  >
                    {ride.cancelledBy}
                  </span>
                </td>
                <td className="px-6 py-3 text-sm text-gray-600">{ride.reason}</td>
                <td className="px-6 py-3 text-center">
                  <button className="px-4 py-1.5 bg-[#247C3F] text-white rounded text-sm hover:bg-[#1a5a2f] transition">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
