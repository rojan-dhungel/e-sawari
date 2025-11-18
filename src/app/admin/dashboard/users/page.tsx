"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, X, Eye } from 'lucide-react'

export default function DriversPage() {
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: "Ram Kumar",
      email: "ram@example.com",
      phone: "9841234567",
      vehicle: "Sedan",
      status: "Active",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Hari Shrestha",
      email: "hari@example.com",
      phone: "9845678901",
      vehicle: "SUV",
      status: "Active",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Rajesh Maharjan",
      email: "rajesh@example.com",
      phone: "9849876543",
      vehicle: "Hatchback",
      status: "Active",
      rating: 4.9,
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDriver, setSelectedDriver] = useState<typeof drivers[0] | null>(null)
  const [editingDriver, setEditingDriver] = useState<typeof drivers[0] | null>(null)
  const [editForm, setEditForm] = useState<typeof drivers[0] | null>(null)
  const [isAddingDriver, setIsAddingDriver] = useState(false)
  const [newDriver, setNewDriver] = useState({ name: "", email: "", phone: "", vehicle: "", status: "Active", rating: 0 })
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null)

  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.phone.includes(searchTerm)
  )

  const handleEdit = (driver: typeof drivers[0]) => {
    setEditingDriver(driver)
    setEditForm({ ...driver })
  }

  const handleSaveEdit = () => {
    if (editForm) {
      setDrivers(drivers.map((d) => (d.id === editForm.id ? editForm : d)))
      setEditingDriver(null)
      setEditForm(null)
    }
  }

  const handleAddDriver = () => {
    if (newDriver.name && newDriver.email && newDriver.phone && newDriver.vehicle) {
      const driver = {
        id: Math.max(...drivers.map(d => d.id), 0) + 1,
        ...newDriver,
      }
      setDrivers([...drivers, driver])
      setIsAddingDriver(false)
      setNewDriver({ name: "", email: "", phone: "", vehicle: "", status: "Active", rating: 0 })
    }
  }

  const handleDeleteDriver = (id: number) => {
    setDrivers(drivers.filter((d) => d.id !== id))
    setSelectedDriver(null)
    setDeleteConfirm(null)
  }

  return (
    <div>
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader title="Drivers" description="Manage all drivers" />
        <Button 
          onClick={() => setIsAddingDriver(true)}
          className="transition-all duration-200 hover:shadow-md active:scale-95 w-full sm:w-auto"
          style={{ 
            backgroundColor: 'var(--primary-green)',
            color: 'var(--text-light)',
            fontFamily: 'var(--font-body)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Driver
        </Button>
      </div>

      <div 
        className="mb-4 sm:mb-6 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-3"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <input
          type="text"
          placeholder="Search by name, email, or phone..."
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
          className="px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95"
          style={{ 
            backgroundColor: '#F3F4F6',
            color: 'var(--dark-heading)',
            fontFamily: 'var(--font-body)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E5E7EB'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
        >
          Reset
        </button>
      </div>

      <div 
        className="rounded-lg shadow-sm overflow-hidden -mx-3 sm:mx-0"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
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
                  Name
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Email
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Phone
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Vehicle
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
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Status
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Actions
                </th>
            </tr>
          </thead>
            <tbody className="divide-y" style={{ borderColor: '#E5E5E5' }}>
              {filteredDrivers.length === 0 ? (
                <tr>
                  <td 
                    colSpan={7} 
                    className="px-3 sm:px-4 md:px-6 py-8 sm:py-12 text-center text-xs sm:text-sm"
                    style={{ 
                      color: 'var(--text-dark)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    No drivers found
                  </td>
                </tr>
              ) : (
                filteredDrivers.map((driver) => (
                  <tr 
                    key={driver.id} 
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
                      {driver.name}
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                      style={{ 
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {driver.email}
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                      style={{ 
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {driver.phone}
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                      style={{ 
                        color: 'var(--dark-heading)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {driver.vehicle}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm">
                      <span 
                        className="font-medium"
                        style={{ 
                          color: '#D97706',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        ★ {driver.rating}
                      </span>
                </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm">
                      <span 
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{ 
                          backgroundColor: '#D1FAE5',
                          color: '#065F46',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                    {driver.status}
                  </span>
                </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-center">
                      <div className="flex justify-center gap-1 sm:gap-2">
                    <button
                      onClick={() => setSelectedDriver(driver)}
                          className="p-1.5 hover:shadow-sm rounded transition active:scale-95"
                          style={{ backgroundColor: '#DBEAFE' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BFDBFE'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DBEAFE'}
                      title="View"
                    >
                          <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: 'var(--primary-green)' }} />
                    </button>
                    <button
                      onClick={() => handleEdit(driver)}
                          className="p-1.5 hover:shadow-sm rounded transition active:scale-95"
                          style={{ backgroundColor: '#DBEAFE' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BFDBFE'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DBEAFE'}
                          title="Edit"
                        >
                          <Edit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#2563EB' }} />
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(driver.id)}
                          className="p-1.5 hover:shadow-sm rounded transition active:scale-95"
                          style={{ backgroundColor: '#FEE2E2' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FECACA'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FEE2E2'}
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#DC2626' }} />
                    </button>
                  </div>
                </td>
              </tr>
                ))
              )}
          </tbody>
        </table>
        </div>
      </div>

      {selectedDriver && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => setSelectedDriver(null)}
        >
          <div 
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div 
              className="border-b p-4 sm:p-6 flex justify-between items-center sticky top-0 bg-white"
              style={{ borderColor: '#E5E5E5' }}
            >
              <h2 
                className="text-lg sm:text-xl font-bold"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Driver Details
              </h2>
              <button
                onClick={() => setSelectedDriver(null)}
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
                  Name
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {selectedDriver.name}
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
                  Email
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {selectedDriver.email}
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
                  Phone
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {selectedDriver.phone}
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
                  Vehicle
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {selectedDriver.vehicle}
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
                  ★ {selectedDriver.rating}
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
                  Status
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: '#059669',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {selectedDriver.status}
                </p>
              </div>
            </div>
            <div 
              className="border-t p-4 sm:p-6 flex justify-end gap-3"
              style={{ borderColor: '#E5E5E5' }}
            >
              <button
                onClick={() => setSelectedDriver(null)}
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

      {editingDriver && editForm && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => {
            setEditingDriver(null)
            setEditForm(null)
          }}
        >
          <div 
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div 
              className="border-b p-4 sm:p-6 flex justify-between items-center sticky top-0 bg-white"
              style={{ borderColor: '#E5E5E5' }}
            >
              <h2 
                className="text-lg sm:text-xl font-bold"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Edit Driver
              </h2>
              <button
                onClick={() => {
                  setEditingDriver(null)
                  setEditForm(null)
                }}
                className="text-gray-500 hover:text-gray-700 transition p-1"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-4">
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                />
              </div>
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                />
              </div>
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Phone
                </label>
                <input
                  type="text"
                  value={editForm.phone}
                  onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                />
              </div>
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Vehicle
                </label>
                <input
                  type="text"
                  value={editForm.vehicle}
                  onChange={(e) => setEditForm({ ...editForm, vehicle: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                />
              </div>
            </div>
            <div 
              className="border-t p-4 sm:p-6 flex flex-col sm:flex-row justify-end gap-3"
              style={{ borderColor: '#E5E5E5' }}
            >
              <button
                onClick={() => {
                  setEditingDriver(null)
                  setEditForm(null)
                }}
                className="px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95 w-full sm:w-auto"
                style={{ 
                  borderColor: '#D1D5DB',
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95 w-full sm:w-auto"
                style={{ 
                  backgroundColor: 'var(--primary-green)',
                  color: 'var(--text-light)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {isAddingDriver && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => {
            setIsAddingDriver(false)
            setNewDriver({ name: "", email: "", phone: "", vehicle: "", status: "Active", rating: 0 })
          }}
        >
          <div 
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div 
              className="border-b p-4 sm:p-6 flex justify-between items-center sticky top-0 bg-white"
              style={{ borderColor: '#E5E5E5' }}
            >
              <h2 
                className="text-lg sm:text-xl font-bold"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Add New Driver
              </h2>
              <button
                onClick={() => {
                  setIsAddingDriver(false)
                  setNewDriver({ name: "", email: "", phone: "", vehicle: "", status: "Active", rating: 0 })
                }}
                className="text-gray-500 hover:text-gray-700 transition p-1"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-4">
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  value={newDriver.name}
                  onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                  placeholder="Enter driver name"
                />
              </div>
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={newDriver.email}
                  onChange={(e) => setNewDriver({ ...newDriver, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Phone
                </label>
                <input
                  type="text"
                  value={newDriver.phone}
                  onChange={(e) => setNewDriver({ ...newDriver, phone: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Vehicle
                </label>
                <input
                  type="text"
                  value={newDriver.vehicle}
                  onChange={(e) => setNewDriver({ ...newDriver, vehicle: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                  placeholder="Enter vehicle type"
                />
              </div>
            </div>
            <div 
              className="border-t p-4 sm:p-6 flex flex-col sm:flex-row justify-end gap-3"
              style={{ borderColor: '#E5E5E5' }}
            >
              <button
                onClick={() => {
                  setIsAddingDriver(false)
                  setNewDriver({ name: "", email: "", phone: "", vehicle: "", status: "Active", rating: 0 })
                }}
                className="px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95 w-full sm:w-auto"
                style={{ 
                  borderColor: '#D1D5DB',
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Cancel
              </button>
              <button
                onClick={handleAddDriver}
                className="px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95 w-full sm:w-auto"
                style={{ 
                  backgroundColor: 'var(--primary-green)',
                  color: 'var(--text-light)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
              >
                Add Driver
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteConfirm !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => setDeleteConfirm(null)}
        >
          <div 
            className="bg-white rounded-lg shadow-lg max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div className="p-4 sm:p-6">
              <h2 
                className="text-base sm:text-lg font-bold mb-2"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Delete Driver?
              </h2>
              <p 
                className="text-sm sm:text-base mb-6"
                style={{ 
                  color: 'var(--text-dark)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                Are you sure you want to delete this driver? This action cannot be undone.
              </p>
            </div>
            <div 
              className="border-t p-4 sm:p-6 flex flex-col sm:flex-row justify-end gap-3"
              style={{ borderColor: '#E5E5E5' }}
            >
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95 w-full sm:w-auto"
                style={{ 
                  borderColor: '#D1D5DB',
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteDriver(deleteConfirm)}
                className="px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95 w-full sm:w-auto"
                style={{ 
                  backgroundColor: '#DC2626',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B91C1C'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DC2626'}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
