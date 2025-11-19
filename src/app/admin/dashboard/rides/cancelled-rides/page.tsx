"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { X } from 'lucide-react'

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

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRide, setSelectedRide] = useState<typeof cancelledRides[0] | null>(null)

  const filteredRides = cancelledRides.filter(
    (ride) =>
      ride.rideId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ride.userName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleReset = () => setSearchTerm("")

  return (
    <div>
      <div className="mb-4 sm:mb-6">
        <PageHeader title="Cancelled Rides" description="View all cancelled ride requests" />
      </div>

      <div
        className="mb-4 sm:mb-6 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-3"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <input
          type="text"
          placeholder="Search by ride ID or customer name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
          style={{
            borderColor: "#E5E5E5",
            fontFamily: "var(--font-body)",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-green)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E5E5")}
        />
        <button
          className="px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95"
          style={{
            backgroundColor: "var(--primary-green)",
            color: "var(--text-light)",
            fontFamily: "var(--font-body)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a5a2f")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--primary-green)")}
        >
          Go
        </button>
        <button
          onClick={handleReset}
          className="px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95"
          style={{
            borderColor: "#D1D5DB",
            color: "var(--dark-heading)",
            fontFamily: "var(--font-body)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          Reset
        </button>
      </div>

      <div
        className="rounded-lg shadow-sm overflow-hidden -mx-3 sm:mx-0"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px]">
            <thead
              className="border-b"
              style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E5E5" }}
            >
              <tr>
                {[
                  "S.No",
                  "Ride ID",
                  "Date",
                  "Customer",
                  "Driver",
                  "Pickup Location",
                  "Drop Location",
                  "Cancelled By",
                  "Cancellation Reason",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
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
              {filteredRides.length === 0 ? (
                <tr>
                  <td
                    colSpan={9}
                    className="px-3 sm:px-4 md:px-6 py-8 sm:py-12 text-center text-xs sm:text-sm"
                    style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                  >
                    No cancelled rides found
                  </td>
                </tr>
              ) : (
                filteredRides.map((ride, index) => (
                  <tr
                    key={ride.id}
                    className="transition-colors duration-200 cursor-pointer"
                    style={{ backgroundColor: "#FFFFFF" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
                    onClick={() => setSelectedRide(ride)}
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
                      {ride.rideId}
                    </td>
                    <td
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                      style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                    >
                      {ride.date}
                    </td>
                    <td
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                      style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                    >
                      {ride.userName}
                    </td>
                    <td
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                      style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                    >
                      {ride.driverName}
                    </td>
                    <td
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm max-w-[180px]"
                      style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                    >
                      <span className="truncate block">{ride.pickupLocation}</span>
                    </td>
                    <td
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm max-w-[180px]"
                      style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                    >
                      <span className="truncate block">{ride.dropLocation}</span>
                    </td>
                    <td
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                      style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                    >
                      {ride.cancelledBy}
                    </td>
                    <td
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm max-w-[220px] font-medium"
                      style={{ color: "#DC2626", fontFamily: "var(--font-body)" }}
                    >
                      <span className="line-clamp-2 sm:line-clamp-none">{ride.reason}</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedRide && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => setSelectedRide(null)}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div
              className="border-b p-4 sm:p-6 flex justify-between items-center sticky top-0 bg-white"
              style={{ borderColor: "#E5E5E5" }}
            >
              <h2
                className="text-lg sm:text-xl font-bold"
                style={{ color: "var(--dark-heading)", fontFamily: "var(--font-heading)" }}
              >
                Ride Details
              </h2>
              <button
                onClick={() => setSelectedRide(null)}
                className="text-gray-500 hover:text-gray-700 transition p-1"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { label: "Ride ID", value: selectedRide.rideId },
                  { label: "Date", value: selectedRide.date },
                  { label: "Customer", value: selectedRide.userName },
                  { label: "Driver", value: selectedRide.driverName || "—" },
                  { label: "Pickup Location", value: selectedRide.pickupLocation },
                  { label: "Drop Location", value: selectedRide.dropLocation },
                ].map((item) => (
                  <div key={item.label}>
                    <p
                      className="text-xs uppercase tracking-wide"
                      style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-base sm:text-lg font-semibold mt-1"
                      style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-wide"
                  style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                >
                  Cancelled By
                </p>
                <p
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
                >
                  {selectedRide.cancelledBy}
                </p>
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-wide"
                  style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                >
                  Cancellation Reason
                </p>
                <p
                  className="text-sm sm:text-base mt-1 font-medium"
                  style={{ color: "#DC2626", fontFamily: "var(--font-body)" }}
                >
                  {selectedRide.reason}
                </p>
              </div>
            </div>
            <div
              className="border-t p-4 sm:p-6 flex justify-end"
              style={{ borderColor: "#E5E5E5" }}
            >
              <button
                onClick={() => setSelectedRide(null)}
                className="px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95"
                style={{
                  backgroundColor: "var(--primary-green)",
                  color: "var(--text-light)",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a5a2f")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--primary-green)")}
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
