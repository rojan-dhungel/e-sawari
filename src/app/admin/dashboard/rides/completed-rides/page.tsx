"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { X } from 'lucide-react'

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

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRide, setSelectedRide] = useState<typeof completedRides[0] | null>(null)

  const filteredRides = completedRides.filter(
    (ride) =>
      ride.rideId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ride.userName.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
            {filteredRides.map((ride) => (
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
                <p className="text-xs text-gray-500 uppercase tracking-wide">Date</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">{selectedRide.date}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Customer</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">{selectedRide.userName}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Driver</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">{selectedRide.driverName}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Pickup Location</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">{selectedRide.pickupLocation}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Drop Location</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">{selectedRide.dropLocation}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Fare</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">Rs {selectedRide.fare}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Rating</p>
                <p className="text-lg font-semibold text-yellow-600 mt-1">★ {selectedRide.rating}</p>
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
