"use client"

import { useState } from "react"
import { Plus, Edit2, Trash2, X } from 'lucide-react'

interface Cuisine {
  id: number
  name: string
  description: string
  status: "Active" | "Inactive"
}

interface CuisineFormData {
  name: string
  description: string
  status: "Active" | "Inactive"
}

export default function CuisinesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState<CuisineFormData>({ 
    name: "", 
    description: "", 
    status: "Active"
  })
  
  const [cuisines, setCuisines] = useState<Cuisine[]>([
    { id: 1, name: "Indian", description: "Indian cuisine", status: "Active" },
    { id: 2, name: "Chinese", description: "Chinese cuisine", status: "Active" },
    { id: 3, name: "Continental", description: "Continental cuisine", status: "Active" },
    { id: 4, name: "Italian", description: "Italian cuisine", status: "Active" },
    { id: 5, name: "Thai", description: "Thai cuisine", status: "Inactive" },
  ])

  const filteredCuisines = cuisines.filter((cuisine) =>
    cuisine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cuisine.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleOpenModal = (cuisine?: Cuisine) => {
    if (cuisine) {
      setEditingId(cuisine.id)
      setFormData({ name: cuisine.name, description: cuisine.description, status: cuisine.status })
    } else {
      setEditingId(null)
      setFormData({ name: "", description: "", status: "Active" })
    }
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setEditingId(null)
    setFormData({ name: "", description: "", status: "Active" })
  }

  const handleSave = () => {
    if (!formData.name.trim()) {
      alert("Cuisine name is required")
      return
    }

    if (editingId) {
      setCuisines(cuisines.map(c => 
        c.id === editingId 
          ? { ...c, ...formData }
          : c
      ))
    } else {
      setCuisines([...cuisines, {
        id: Math.max(...cuisines.map(c => c.id), 0) + 1,
        ...formData
      }])
    }
    handleCloseModal()
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this cuisine?")) {
      setCuisines(cuisines.filter(c => c.id !== id))
    }
  }

  const handleResetSearch = () => {
    setSearchTerm("")
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Cuisines</h1>
            <p className="text-gray-600 mt-1">Manage restaurant cuisines</p>
          </div>
          <button 
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
            onClick={() => handleOpenModal()}
          >
            <Plus className="w-4 h-4" />
            Add Cuisine
          </button>
        </div>

        {/* Search Section */}
        <div className="mb-6 bg-white rounded-lg p-4 shadow-sm flex gap-3">
          <input
            type="text"
            placeholder="Search cuisines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          <button 
            onClick={handleResetSearch}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            Reset
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">S.No</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Cuisine Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCuisines.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                      No cuisines found
                    </td>
                  </tr>
                ) : (
                  filteredCuisines.map((cuisine, idx) => (
                    <tr key={cuisine.id} className="border-b hover:bg-gray-50 transition">
                      <td className="px-6 py-3 text-sm text-gray-600">{idx + 1}</td>
                      <td className="px-6 py-3 text-sm font-medium text-gray-900">{cuisine.name}</td>
                      <td className="px-6 py-3 text-sm text-gray-600">{cuisine.description}</td>
                      <td className="px-6 py-3 text-sm">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          cuisine.status === "Active" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-red-100 text-red-800"
                        }`}>
                          {cuisine.status}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-center">
                        <div className="flex justify-center gap-2">
                          <button 
                            onClick={() => handleOpenModal(cuisine)}
                            className="p-1 hover:bg-gray-200 rounded transition"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4 text-blue-600" />
                          </button>
                          <button 
                            onClick={() => handleDelete(cuisine.id)}
                            className="p-1 hover:bg-gray-200 rounded transition" 
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4 text-red-600" />
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
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            <div className="border-b p-6 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                {editingId ? "Edit Cuisine" : "Add Cuisine"}
              </h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Enter cuisine name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Enter description"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as "Active" | "Inactive" })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="border-t p-6 flex gap-3">
              <button
                onClick={handleCloseModal}
                className="flex-1 px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={!formData.name.trim()}
                className="flex-1 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
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