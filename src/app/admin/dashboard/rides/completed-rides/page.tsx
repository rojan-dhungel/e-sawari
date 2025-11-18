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
    <div>
      <div className="mb-4 sm:mb-6">
        <PageHeader title="Completed Rides" description="View all successfully completed rides" />
      </div>

      {/* Search and Filter Section */}
      <div 
        className="mb-4 sm:mb-6 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-3"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <input
          type="text"
          placeholder="Search by ride ID or customer name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
          style={{ 
            borderColor: '#E5E5E5',
            fontFamily: 'var(--font-body)'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
          onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
        />
        <button 
          className="px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95"
          style={{ 
            backgroundColor: 'var(--primary-green)',
            color: 'var(--text-light)',
            fontFamily: 'var(--font-body)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
        >
          Go
        </button>
        <button
          onClick={() => setSearchTerm("")}
          className="px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95"
          style={{ 
            borderColor: '#D1D5DB',
            color: 'var(--dark-heading)',
            fontFamily: 'var(--font-body)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Reset
        </button>
      </div>

      {/* Table */}
      <div 
        className="rounded-lg shadow-sm overflow-hidden -mx-3 sm:mx-0"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead 
              className="border-b"
              style={{ 
                backgroundColor: '#F9FAFB',
                borderColor: '#E5E5E5'
              }}
            >
              <tr>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  S.No
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Ride ID
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Customer
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Driver
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Date
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap hidden lg:table-cell"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Pickup
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap hidden lg:table-cell"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Drop
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Fare
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Rating
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Action
                </th>
            </tr>
          </thead>
            <tbody className="divide-y" style={{ borderColor: '#E5E5E5' }}>
              {filteredRides.length === 0 ? (
                <tr>
                  <td 
                    colSpan={10} 
                    className="px-3 sm:px-4 md:px-6 py-8 sm:py-12 text-center text-xs sm:text-sm"
                    style={{ 
                      color: 'var(--text-dark)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    No completed rides found
                  </td>
                </tr>
              ) : (
                filteredRides.map((ride) => (
                  <tr 
                    key={ride.id} 
                    className="transition-colors duration-200"
                    style={{ backgroundColor: '#FFFFFF' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
                  >
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium"
                      style={{ 
                        color: 'var(--dark-heading)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {ride.id}
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                      style={{ 
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {ride.rideId}
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium"
                      style={{ 
                        color: 'var(--dark-heading)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {ride.userName}
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                      style={{ 
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {ride.driverName}
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                      style={{ 
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {ride.date}
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm hidden lg:table-cell"
                      style={{ 
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {ride.pickupLocation}
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm hidden lg:table-cell"
                      style={{ 
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {ride.dropLocation}
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium"
                      style={{ 
                        color: 'var(--dark-heading)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      Rs {ride.fare}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm">
                      <span 
                        className="font-medium"
                        style={{ 
                          color: '#D97706',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        ★ {ride.rating}
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-center">
                      <button
                        onClick={() => setSelectedRide(ride)}
                        className="px-3 sm:px-4 py-1.5 rounded text-xs sm:text-sm transition-all active:scale-95"
                        style={{ 
                          backgroundColor: 'var(--primary-green)',
                          color: 'var(--text-light)',
                          fontFamily: 'var(--font-body)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
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
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div 
              className="sticky top-0 bg-white border-b p-4 sm:p-6 flex justify-between items-center"
              style={{ borderColor: '#E5E5E5' }}
            >
              <h2 
                className="text-lg sm:text-xl font-bold"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-heading)'
                }}
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
              <div>
                <p 
                  className="text-xs uppercase tracking-wide"
                  style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Ride ID
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {selectedRide.rideId}
                </p>
              </div>
              <div>
                <p 
                  className="text-xs uppercase tracking-wide"
                  style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Date
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {selectedRide.date}
                </p>
              </div>
              <div>
                <p 
                  className="text-xs uppercase tracking-wide"
                  style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Customer
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {selectedRide.userName}
                </p>
              </div>
              <div>
                <p 
                  className="text-xs uppercase tracking-wide"
                  style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Driver
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {selectedRide.driverName}
                </p>
              </div>
              <div>
                <p 
                  className="text-xs uppercase tracking-wide"
                  style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Pickup Location
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {selectedRide.pickupLocation}
                </p>
              </div>
              <div>
                <p 
                  className="text-xs uppercase tracking-wide"
                  style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Drop Location
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {selectedRide.dropLocation}
                </p>
              </div>
              <div>
                <p 
                  className="text-xs uppercase tracking-wide"
                  style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Fare
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Rs {selectedRide.fare}
                </p>
              </div>
              <div>
                <p 
                  className="text-xs uppercase tracking-wide"
                  style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Rating
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: '#D97706',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  ★ {selectedRide.rating}
                </p>
              </div>
            </div>
            <div 
              className="border-t p-4 sm:p-6 flex justify-end gap-3"
              style={{ borderColor: '#E5E5E5' }}
            >
              <button
                onClick={() => setSelectedRide(null)}
                className="px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95"
                style={{ 
                  borderColor: '#D1D5DB',
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
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
