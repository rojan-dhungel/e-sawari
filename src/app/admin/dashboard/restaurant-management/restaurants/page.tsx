"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, Eye, X } from 'lucide-react'

interface Restaurant {
  id: number
  name: string
  category: string
  rating: number
  items: number
  status: "Active" | "Inactive"
  cuisine: string
  zone: string
}

export default function RestaurantsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [showModal, setShowModal] = useState(false)
  const [viewingId, setViewingId] = useState<number | null>(null)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: "", category: "", cuisine: "", zone: "", status: "Active" as const })
  
  const [restaurants, setRestaurants] = useState<Restaurant[]>([
    { id: 1, name: "Taj Express", category: "Fast Food", rating: 4.5, items: 25, status: "Active", cuisine: "Indian", zone: "Kathmandu" },
    { id: 2, name: "Nepali Kitchen", category: "Restaurants", rating: 4.8, items: 45, status: "Active", cuisine: "Nepali", zone: "Patan" },
    { id: 3, name: "Pizza Palace", category: "Fast Food", rating: 4.2, items: 18, status: "Inactive", cuisine: "Italian", zone: "Bhaktapur" },
  ])

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) || restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "All" || restaurant.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleViewRestaurant = (restaurant: Restaurant) => {
    setViewingId(restaurant.id)
    setFormData({ name: restaurant.name, category: restaurant.category, cuisine: restaurant.cuisine, zone: restaurant.zone, status: restaurant.status })
  }

  const handleEditRestaurant = (restaurant: Restaurant) => {
    setEditingId(restaurant.id)
    setFormData({ name: restaurant.name, category: restaurant.category, cuisine: restaurant.cuisine, zone: restaurant.zone, status: restaurant.status })
    setViewingId(null)
    setShowModal(true)
  }

  const handleOpenAddModal = () => {
    setEditingId(null)
    setViewingId(null)
    setFormData({ name: "", category: "", cuisine: "", zone: "", status: "Active" })
    setShowModal(true)
  }

  const handleSave = () => {
    if (!formData.name.trim()) {
      alert("Restaurant name is required")
      return
    }

    if (editingId) {
      setRestaurants(restaurants.map(r => r.id === editingId ? { ...r, ...formData, rating: r.rating, items: r.items } : r))
    } else {
      setRestaurants([...restaurants, { id: Math.max(...restaurants.map(r => r.id), 0) + 1, ...formData, rating: 0, items: 0 }])
    }
    setShowModal(false)
    setEditingId(null)
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure?")) {
      setRestaurants(restaurants.filter(r => r.id !== id))
    }
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setViewingId(null)
    setEditingId(null)
  }

  const handleResetFilters = () => {
    setSearchTerm("")
    setStatusFilter("All")
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <PageHeader title="Restaurants" description="Manage all restaurants" />
        <Button className="bg-[#247C3F] hover:bg-[#1a5a2f]" onClick={handleOpenAddModal}>
          <Plus className="w-4 h-4 mr-2" />
          Add Restaurant
        </Button>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-6 bg-white rounded-lg p-4 flex gap-3 items-center flex-wrap">
        <input
          type="text"
          placeholder="Search by name or cuisine..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
          style={{ borderColor: "#E5E5E5", minWidth: "200px" }}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
          style={{ borderColor: "#E5E5E5" }}
        >
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <Button variant="outline" onClick={handleResetFilters} className="border-gray-300">Reset</Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Restaurant Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Cuisine</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Rating</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Menu Items</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRestaurants.map((restaurant) => (
              <tr key={restaurant.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-3 text-sm font-medium text-gray-900">{restaurant.name}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{restaurant.cuisine}</td>
                <td className="px-6 py-3 text-sm text-yellow-600 font-medium">★ {restaurant.rating}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{restaurant.items}</td>
                <td className="px-6 py-3 text-sm">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${restaurant.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {restaurant.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button onClick={() => handleViewRestaurant(restaurant)} className="p-1 hover:bg-gray-200 rounded transition" title="View">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                    <button onClick={() => handleEditRestaurant(restaurant)} className="p-1 hover:bg-gray-200 rounded transition" title="Edit">
                      <Edit2 className="w-4 h-4 text-blue-600" />
                    </button>
                    <button onClick={() => handleDelete(restaurant.id)} className="p-1 hover:bg-gray-200 rounded transition" title="Delete">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredRestaurants.length === 0 && (
          <div className="text-center py-8 text-gray-500">No restaurants found matching your criteria</div>
        )}
      </div>

      {viewingId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Restaurant Details</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 mb-4">
              <p><span className="font-medium">Name:</span> {formData.name}</p>
              <p><span className="font-medium">Category:</span> {formData.category}</p>
              <p><span className="font-medium">Cuisine:</span> {formData.cuisine}</p>
              <p><span className="font-medium">Zone:</span> {formData.zone}</p>
              <p><span className="font-medium">Status:</span> {formData.status}</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handleCloseModal} className="flex-1 border-gray-300">Close</Button>
              <Button onClick={() => handleEditRestaurant(restaurants.find(r => r.id === viewingId)!)} className="flex-1 bg-[#247C3F] hover:bg-[#1a5a2f]">Edit</Button>
            </div>
          </div>
        </div>
      )}

      {showModal && !viewingId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">{editingId ? "Edit Restaurant" : "Add Restaurant"}</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{ borderColor: "#E5E5E5" }} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <input type="text" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{ borderColor: "#E5E5E5" }} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine</label>
                <input type="text" value={formData.cuisine} onChange={(e) => setFormData({ ...formData, cuisine: e.target.value })} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{ borderColor: "#E5E5E5" }} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Zone</label>
                <input type="text" value={formData.zone} onChange={(e) => setFormData({ ...formData, zone: e.target.value })} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{ borderColor: "#E5E5E5" }} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value as "Active" | "Inactive" })} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{ borderColor: "#E5E5E5" }}>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button variant="outline" onClick={handleCloseModal} className="flex-1 border-gray-300">Cancel</Button>
              <Button onClick={handleSave} className="flex-1 bg-[#247C3F] hover:bg-[#1a5a2f]">{editingId ? "Update" : "Add"}</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
