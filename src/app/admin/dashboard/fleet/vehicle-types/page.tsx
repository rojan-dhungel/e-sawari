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
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <PageHeader title="Vehicle Types" description="Manage vehicle categories and pricing" />
        <Button className="bg-[#247C3F] hover:bg-[#1a5a2f]" onClick={handleOpenAdd}>
          <Plus className="w-4 h-4 mr-2" />
          Add Vehicle Type
        </Button>
      </div>

      {/* Search Bar */}
      <div className="mb-6 bg-white rounded-lg p-4 flex gap-3">
        <input
          type="text"
          placeholder="Search vehicle types..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
          style={{ borderColor: "#E5E5E5" }}
        />
        <button
          onClick={() => setSearchTerm("")}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
          Reset
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVehicles.length > 0 ? (
          filteredVehicles.map((type) => (
            <div key={type.id} className="bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{type.name}</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4 bg-gray-50 p-3 rounded">
                <p><span className="font-medium text-gray-700">Capacity:</span> {type.capacity} passengers</p>
                <p><span className="font-medium text-gray-700">Base Fare:</span> Rs. {type.baseFare}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(type)}
                  className="flex-1 p-2 hover:bg-blue-50 rounded transition flex items-center justify-center gap-1 border border-blue-200"
                >
                  <Edit2 className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-600 text-sm font-medium">Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(type.id)}
                  className="flex-1 p-2 hover:bg-red-50 rounded transition flex items-center justify-center gap-1 border border-red-200"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                  <span className="text-red-600 text-sm font-medium">Delete</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            <p className="text-lg">No vehicle types found</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">{editingId ? "Edit Vehicle Type" : "Add Vehicle Type"}</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
                  style={{borderColor: "#E5E5E5"}}
                  placeholder="e.g., Sedan"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Passenger Capacity</label>
                <input
                  type="number"
                  value={formData.capacity || ""}
                  onChange={(e) => setFormData({...formData, capacity: parseInt(e.target.value) || 0})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
                  style={{borderColor: "#E5E5E5"}}
                  placeholder="e.g., 4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Base Fare (Rs.)</label>
                <input
                  type="number"
                  value={formData.baseFare || ""}
                  onChange={(e) => setFormData({...formData, baseFare: parseInt(e.target.value) || 0})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
                  style={{borderColor: "#E5E5E5"}}
                  placeholder="e.g., 150"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Cancel</button>
              <button onClick={handleSave} className="flex-1 px-4 py-2 bg-[#247C3F] text-white rounded-lg hover:bg-[#1a5a2f]">{editingId ? "Update" : "Add"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
