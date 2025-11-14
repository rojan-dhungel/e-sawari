"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"

export default function CompletedRidesPage() {
  const [completedRides] = useState([
    {
      id: 1,
      rideId: "RIDE_001",
      userName: "Priya Sharma",
      driverName: "Ram Kumar",
      date: "11/11/2025",
      pickupLocation: "Thamel, Kathmandu",
      dropLocation: "Bhaktapur",
      fare: 450,
      rating: 4.8,
    },
    {
      id: 2,
      rideId: "RIDE_002",
      userName: "Aman Patel",
      driverName: "Hari Shrestha",
      date: "10/11/2025",
      pickupLocation: "Garden of Dreams",
      dropLocation: "Patan",
      fare: 280,
      rating: 4.5,
    },
    {
      id: 3,
      rideId: "RIDE_003",
      userName: "Sunil Hitang",
      driverName: "Rajesh Maharjan",
      date: "09/11/2025",
      pickupLocation: "Swayambhu",
      dropLocation: "Lalitpur",
      fare: 320,
      rating: 4.9,
    },
  ])

  return (
    <div className="p-6">
      <div className="mb-6">
        <PageHeader title="Completed Rides" description="View all successfully completed rides" />
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
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">S.No</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Ride ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Driver</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Pickup Location</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Drop Location</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Fare</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Rating</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {completedRides.map((ride) => (
              <tr key={ride.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-3 text-sm font-medium text-gray-900">{ride.id}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{ride.rideId}</td>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">{ride.userName}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{ride.driverName}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{ride.date}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{ride.pickupLocation}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{ride.dropLocation}</td>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">Rs {ride.fare}</td>
                <td className="px-6 py-3 text-sm text-yellow-600 font-medium">★ {ride.rating}</td>
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
