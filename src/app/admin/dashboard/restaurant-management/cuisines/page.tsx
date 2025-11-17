"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, X } from 'lucide-react'

interface Cuisine {
  id: number
  name: string
  description: string
  status: "Active" | "Inactive"
}

export default function CuisinesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: "", description: "", status: "Active" as const })
  
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
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <PageHeader title="Cuisines" description="Manage restaurant cuisines" />
        <Button className="bg-[#247C3F] hover:bg-[#1a5a2f]" onClick={() => handleOpenModal()}>
          <Plus className="w-4 h-4 mr-2" />
          Add Cuisine
        </Button>
      </div>

      {/* Search Section */}
      <div className="mb-6 bg-white rounded-lg p-4 flex gap-3">
        <input
          type="text"
          placeholder="Search cuisines..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
          style={{ borderColor: "#E5E5E5" }}
        />
        <Button 
          variant="outline" 
          onClick={handleResetSearch}
          className="border-gray-300"
        >
          Reset
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
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
            {filteredCuisines.map((cuisine, idx) => (
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
            ))}
          </tbody>
        </table>
        {filteredCuisines.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No cuisines found
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {editingId ? "Edit Cuisine" : "Add Cuisine"}
              </h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
                  style={{ borderColor: "#E5E5E5" }}
                  placeholder="Enter cuisine name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
                  style={{ borderColor: "#E5E5E5" }}
                  placeholder="Enter description"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as "Active" | "Inactive" })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
                  style={{ borderColor: "#E5E5E5" }}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                variant="outline"
                onClick={handleCloseModal}
                className="flex-1 border-gray-300"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                className="flex-1 bg-[#247C3F] hover:bg-[#1a5a2f]"
              >
                {editingId ? "Update" : "Add"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
