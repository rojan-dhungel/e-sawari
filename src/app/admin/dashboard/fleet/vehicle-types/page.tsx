'use client'

import { useState, useEffect } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, X } from 'lucide-react'

interface VehicleType {
  id: number
  name: string
  capacity: number
  baseFare: number
}

export default function VehicleTypesPage() {
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([])
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: "", capacity: 0, baseFare: 0 })
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem("vehicleTypes")
    if (saved) {
      setVehicleTypes(JSON.parse(saved))
    } else {
      const defaults = [
        { id: 1, name: "Sedan", capacity: 4, baseFare: 150 },
        { id: 2, name: "SUV", capacity: 6, baseFare: 200 },
        { id: 3, name: "Minivan", capacity: 8, baseFare: 250 },
      ]
      setVehicleTypes(defaults)
      localStorage.setItem("vehicleTypes", JSON.stringify(defaults))
    }
  }, [])

  useEffect(() => {
    if (vehicleTypes.length > 0) {
      localStorage.setItem("vehicleTypes", JSON.stringify(vehicleTypes))
    }
  }, [vehicleTypes])

  const filteredVehicles = vehicleTypes.filter(v =>
    v.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleOpenAdd = () => {
    setEditingId(null)
    setFormData({ name: "", capacity: 0, baseFare: 0 })
    setShowModal(true)
  }

  const handleEdit = (type: VehicleType) => {
    setEditingId(type.id)
    setFormData({ name: type.name, capacity: type.capacity, baseFare: type.baseFare })
    setShowModal(true)
  }

  const handleSave = () => {
    if (!formData.name.trim() || formData.capacity <= 0 || formData.baseFare <= 0) {
      alert("Please fill all fields with valid values")
      return
    }

    if (editingId) {
      setVehicleTypes(vehicleTypes.map(t => t.id === editingId ? { id: t.id, ...formData } : t))
    } else {
      setVehicleTypes([...vehicleTypes, { id: Date.now(), ...formData }])
    }
    setShowModal(false)
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this vehicle type?")) {
      setVehicleTypes(vehicleTypes.filter(t => t.id !== id))
    }
  }

  return (
    <div>
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader title="Vehicle Types" description="Manage vehicle categories and pricing" />
        <Button 
          className="transition-all duration-200 hover:shadow-md active:scale-95 w-full sm:w-auto"
          onClick={handleOpenAdd}
          style={{ 
            backgroundColor: 'var(--primary-green)',
            color: 'var(--text-light)',
            fontFamily: 'var(--font-body)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Vehicle Type
        </Button>
      </div>

      {/* Search Bar */}
      <div 
        className="mb-4 sm:mb-6 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-3"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <input
          type="text"
          placeholder="Search vehicle types..."
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

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {filteredVehicles.length > 0 ? (
          filteredVehicles.map((type) => (
            <div 
              key={type.id} 
              className="rounded-lg shadow-sm hover:shadow-md transition border p-4 sm:p-5"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderColor: '#E5E5E5'
              }}
            >
              <h3 
                className="text-base sm:text-lg font-semibold mb-3"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {type.name}
              </h3>
              <div 
                className="space-y-2 text-xs sm:text-sm mb-4 p-3 rounded"
                style={{ backgroundColor: '#F9FAFB' }}
              >
                <p>
                  <span 
                    className="font-medium"
                    style={{ 
                      color: 'var(--dark-heading)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    Capacity:
                  </span>{' '}
                  <span style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}>
                    {type.capacity} passengers
                  </span>
                </p>
                <p>
                  <span 
                    className="font-medium"
                    style={{ 
                      color: 'var(--dark-heading)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    Base Fare:
                  </span>{' '}
                  <span style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}>
                    Rs. {type.baseFare}
                  </span>
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(type)}
                  className="flex-1 p-2 rounded transition flex items-center justify-center gap-1 border active:scale-95"
                  style={{ 
                    borderColor: '#BFDBFE',
                    backgroundColor: '#DBEAFE'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BFDBFE'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DBEAFE'}
                >
                  <Edit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#2563EB' }} />
                  <span 
                    className="text-xs sm:text-sm font-medium"
                    style={{ 
                      color: '#2563EB',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    Edit
                  </span>
                </button>
                <button
                  onClick={() => handleDelete(type.id)}
                  className="flex-1 p-2 rounded transition flex items-center justify-center gap-1 border active:scale-95"
                  style={{ 
                    borderColor: '#FECACA',
                    backgroundColor: '#FEE2E2'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FECACA'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FEE2E2'}
                >
                  <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#DC2626' }} />
                  <span 
                    className="text-xs sm:text-sm font-medium"
                    style={{ 
                      color: '#DC2626',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    Delete
                  </span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div 
            className="col-span-full text-center py-8 sm:py-12"
            style={{ 
              color: 'var(--text-dark)',
              fontFamily: 'var(--font-body)'
            }}
          >
            <p className="text-base sm:text-lg">No vehicle types found</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div 
              className="flex justify-between items-center mb-4 sticky top-0 bg-white pb-4 border-b"
              style={{ borderColor: '#E5E5E5' }}
            >
              <h2 
                className="text-lg sm:text-xl font-bold"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {editingId ? "Edit Vehicle Type" : "Add Vehicle Type"}
              </h2>
              <button 
                onClick={() => setShowModal(false)} 
                className="text-gray-500 hover:text-gray-700 transition p-1"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Vehicle Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                  placeholder="e.g., Sedan"
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
                  Passenger Capacity
                </label>
                <input
                  type="number"
                  value={formData.capacity || ""}
                  onChange={(e) => setFormData({...formData, capacity: parseInt(e.target.value) || 0})}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                  placeholder="e.g., 4"
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
                  Base Fare (Rs.)
                </label>
                <input
                  type="number"
                  value={formData.baseFare || ""}
                  onChange={(e) => setFormData({...formData, baseFare: parseInt(e.target.value) || 0})}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                  placeholder="e.g., 150"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
              <button 
                onClick={() => setShowModal(false)} 
                className="flex-1 px-4 py-2 border rounded-lg transition-all active:scale-95"
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
                onClick={handleSave} 
                className="flex-1 px-4 py-2 rounded-lg transition-all active:scale-95"
                style={{ 
                  backgroundColor: 'var(--primary-green)',
                  color: 'var(--text-light)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
              >
                {editingId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
