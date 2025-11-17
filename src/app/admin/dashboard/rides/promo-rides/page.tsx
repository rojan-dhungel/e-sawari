"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { X } from 'lucide-react'

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

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRide, setSelectedRide] = useState<typeof promoRides[0] | null>(null)

  const filteredRides = promoRides.filter(
    (ride) =>
      ride.rideId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ride.promoCode.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
          style={{ borderColor: "#E5E5E5" }}
        />
        <button className="px-6 py-2 bg-[#247C3F] text-white rounded-lg hover:bg-[#1a5a2f] transition">
          Go
        </button>
        <button
          onClick={() => setSearchTerm("")}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
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
            {filteredRides.map((ride) => (
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
                  <button
                    onClick={() => setSelectedRide(ride)}
                    className="px-4 py-1.5 bg-[#247C3F] text-white rounded text-sm hover:bg-[#1a5a2f] transition"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedRide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Ride Details</h2>
              <button
                onClick={() => setSelectedRide(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Ride ID</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">{selectedRide.rideId}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Promo Code</p>
                <p className="text-lg font-semibold text-[#247C3F] mt-1">{selectedRide.promoCode}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Discount</p>
                <p className="text-lg font-semibold text-red-600 mt-1">{selectedRide.discount}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Status</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">{selectedRide.status}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Original Fare</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">Rs {selectedRide.originalFare}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Discount Amount</p>
                <p className="text-lg font-semibold text-green-600 mt-1">-Rs {selectedRide.discountAmount}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Final Fare</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">Rs {selectedRide.finalFare}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Customer</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">{selectedRide.userName}</p>
              </div>
            </div>
            <div className="border-t p-6 flex justify-end gap-3">
              <button
                onClick={() => setSelectedRide(null)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
