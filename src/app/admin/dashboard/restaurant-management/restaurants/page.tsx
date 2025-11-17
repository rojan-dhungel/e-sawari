"use client"

import { useState } from "react"
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

interface RestaurantFormData {
  name: string
  category: string
  cuisine: string
  zone: string
  status: "Active" | "Inactive"
}

export default function RestaurantsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [showModal, setShowModal] = useState(false)
  const [viewingId, setViewingId] = useState<number | null>(null)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState<RestaurantFormData>({ 
    name: "", 
    category: "", 
    cuisine: "", 
    zone: "", 
    status: "Active"
  })
  
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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Restaurants</h1>
            <p className="text-gray-600 mt-1">Manage all restaurants</p>
          </div>
          <button 
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
            onClick={handleOpenAddModal}
          >
            <Plus className="w-4 h-4" />
            Add Restaurant
          </button>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-6 bg-white rounded-lg p-4 shadow-sm flex gap-3 items-center flex-wrap">
          <input
            type="text"
            placeholder="Search by name or cuisine..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            style={{ minWidth: "200px" }}
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <button 
            onClick={handleResetFilters} 
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
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Restaurant Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Cuisine</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Rating</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Menu Items</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRestaurants.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      No restaurants found matching your criteria
                    </td>
                  </tr>
                ) : (
                  filteredRestaurants.map((restaurant) => (
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
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {viewingId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
            <div className="border-b p-6 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Restaurant Details</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Name</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">{formData.name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Category</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">{formData.category}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Cuisine</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">{formData.cuisine}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Zone</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">{formData.zone}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Status</p>
                <p className={`text-lg font-semibold mt-1 ${formData.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                  {formData.status}
                </p>
              </div>
            </div>
            <div className="border-t p-6 flex gap-3">
              <button 
                onClick={handleCloseModal} 
                className="flex-1 px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                Close
              </button>
              <button 
                onClick={() => handleEditRestaurant(restaurants.find(r => r.id === viewingId)!)} 
                className="flex-1 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && !viewingId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
            <div className="border-b p-6 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">{editingId ? "Edit Restaurant" : "Add Restaurant"}</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name *</label>
                <input 
                  type="text" 
                  value={formData.name} 
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Enter restaurant name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <input 
                  type="text" 
                  value={formData.category} 
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="e.g., Fast Food, Fine Dining"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine</label>
                <input 
                  type="text" 
                  value={formData.cuisine} 
                  onChange={(e) => setFormData({ ...formData, cuisine: e.target.value })} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="e.g., Italian, Chinese, Nepali"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Zone</label>
                <input 
                  type="text" 
                  value={formData.zone} 
                  onChange={(e) => setFormData({ ...formData, zone: e.target.value })} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="e.g., Kathmandu, Patan"
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