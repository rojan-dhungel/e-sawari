"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { X } from "lucide-react"

const STATUS_STYLES = {
  Completed: { bg: "#D1FAE5", text: "#065F46" },
  Pending: { bg: "#FEF3C7", text: "#92400E" },
}

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
    <div>
      <div className="mb-4 sm:mb-6">
        <PageHeader title="Promo Rides" description="View all rides with promotional discounts applied" />
      </div>

      <div
        className="mb-4 sm:mb-6 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-3"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <input
          type="text"
          placeholder="Search by ride ID or promo code..."
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
          onClick={() => setSearchTerm("")}
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
          <table className="w-full min-w-[860px]">
            <thead
              className="border-b"
              style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E5E5" }}
            >
              <tr>
                {[
                  "S.No",
                  "Ride ID",
                  "Promo Code",
                  "Discount %",
                  "Customer",
                  "Driver",
                  "Date",
                  "Original Fare",
                  "Discount Amount",
                  "Final Fare",
                  "Status",
                  "Action",
                ].map((header) => (
                  <th
                    key={header}
                    className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold whitespace-nowrap ${
                      header === "Action" ? "text-center" : "text-left"
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
              {filteredRides.length === 0 ? (
                <tr>
                  <td
                    colSpan={12}
                    className="px-3 sm:px-4 md:px-6 py-8 sm:py-12 text-center text-xs sm:text-sm"
                    style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                  >
                    No promo rides found
                  </td>
                </tr>
              ) : (
                filteredRides.map((ride, index) => (
                  <tr
                    key={ride.id}
                    className="transition-colors duration-200"
                    style={{ backgroundColor: "#FFFFFF" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
                  >
                    <td
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium"
                      style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
                    >
                      {index + 1}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                      {ride.rideId}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium" style={{ color: "var(--primary-green)", fontFamily: "var(--font-body)" }}>
                      {ride.promoCode}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium" style={{ color: "#DC2626", fontFamily: "var(--font-body)" }}>
                      {ride.discount}%
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}>
                      {ride.userName}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                      {ride.driverName}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                      {ride.date}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                      Rs {ride.originalFare}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium" style={{ color: "#047857", fontFamily: "var(--font-body)" }}>
                      -Rs {ride.discountAmount}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-semibold" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}>
                      Rs {ride.finalFare}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm">
                      <span
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{
                          backgroundColor: STATUS_STYLES[ride.status as "Completed" | "Pending"].bg,
                          color: STATUS_STYLES[ride.status as "Completed" | "Pending"].text,
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {ride.status}
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-center">
                      <button
                        onClick={() => setSelectedRide(ride)}
                        className="px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm transition-all active:scale-95"
                        style={{
                          backgroundColor: "var(--primary-green)",
                          color: "var(--text-light)",
                          fontFamily: "var(--font-body)",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a5a2f")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--primary-green)")}
                      >
                        View
                      </button>
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
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { label: "Ride ID", value: selectedRide.rideId },
                { label: "Promo Code", value: selectedRide.promoCode },
                { label: "Discount", value: `${selectedRide.discount}%` },
                { label: "Status", value: selectedRide.status },
                { label: "Original Fare", value: `Rs ${selectedRide.originalFare}` },
                { label: "Discount Amount", value: `-Rs ${selectedRide.discountAmount}` },
                { label: "Final Fare", value: `Rs ${selectedRide.finalFare}` },
                { label: "Customer", value: selectedRide.userName },
                { label: "Driver", value: selectedRide.driverName || "—" },
                { label: "Date", value: selectedRide.date },
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
