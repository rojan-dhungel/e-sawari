"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"

export default function PromoRidesPage() {
  const [promoRides] = useState([
    {
      id: 1,
      rideId: "PROMO_001",
      promoCode: "SAVE20",
      discount: 20,
      userName: "Priya Sharma",
      driverName: "Ram Kumar",
      date: "11/11/2025",
      originalFare: 450,
      discountAmount: 90,
      finalFare: 360,
      status: "Completed",
    },
    {
      id: 2,
      rideId: "PROMO_002",
      promoCode: "FIRST10",
      discount: 10,
      userName: "Aman Patel",
      driverName: "Hari Shrestha",
      date: "10/11/2025",
      originalFare: 280,
      discountAmount: 28,
      finalFare: 252,
      status: "Completed",
    },
    {
      id: 3,
      rideId: "PROMO_003",
      promoCode: "SAVE15",
      discount: 15,
      userName: "Sunil Hitang",
      driverName: "Rajesh Maharjan",
      date: "09/11/2025",
      originalFare: 320,
      discountAmount: 48,
      finalFare: 272,
      status: "Completed",
    },
    {
      id: 4,
      rideId: "PROMO_004",
      promoCode: "STUDENT25",
      discount: 25,
      userName: "John Doe",
      driverName: "-",
      date: "12/11/2025",
      originalFare: 500,
      discountAmount: 125,
      finalFare: 375,
      status: "Pending",
    },
  ])

  return (
    <div className="p-6">
      <div className="mb-6">
        <PageHeader title="Promo Rides" description="View all rides with promotional discounts applied" />
      </div>

      {/* Search and Filter Section */}
      <div className="mb-6 bg-white rounded-lg p-4 flex gap-3">
        <input
          type="text"
          placeholder="Search by ride ID or promo code..."
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
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Promo Code</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Discount %</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Driver</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Original Fare</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Discount Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Final Fare</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {promoRides.map((ride) => (
              <tr key={ride.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-3 text-sm font-medium text-gray-900">{ride.id}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{ride.rideId}</td>
                <td className="px-6 py-3 text-sm font-medium text-[#247C3F]">{ride.promoCode}</td>
                <td className="px-6 py-3 text-sm font-medium text-red-600">{ride.discount}%</td>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">{ride.userName}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{ride.driverName}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{ride.date}</td>
                <td className="px-6 py-3 text-sm text-gray-600">Rs {ride.originalFare}</td>
                <td className="px-6 py-3 text-sm text-green-600 font-medium">-Rs {ride.discountAmount}</td>
                <td className="px-6 py-3 text-sm font-bold text-gray-900">Rs {ride.finalFare}</td>
                <td className="px-6 py-3 text-sm">
                  <span
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{
                      backgroundColor: ride.status === "Completed" ? "#D1FAE5" : "#FEF3C7",
                      color: ride.status === "Completed" ? "#065F46" : "#92400E",
                    }}
                  >
                    {ride.status}
                  </span>
                </td>
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
