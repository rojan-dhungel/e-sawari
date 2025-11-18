"use client"

import { useState, useEffect } from "react"
import PageHeader from "@/components/admin/page-header"
import { Edit2, Trash2, Eye, X } from 'lucide-react'


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
  const [viewingId, setViewingId] = useState<number | null>(null)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState<{
    name: string
    category: string
    cuisine: string
    zone: string
    status: "Active" | "Inactive"
  }>({
    name: "",
    category: "",
    cuisine: "",
    zone: "",
    status: "Active"
  })
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    const loadRestaurants = () => {
      const saved = localStorage.getItem("restaurantsList")
      if (saved) {
        const parsed = JSON.parse(saved)
        setRestaurants(parsed)
      } else {
        const defaultRestaurants: Restaurant[] = [
          { id: 1, name: "Taj Express", category: "Fast Food", rating: 4.5, items: 25, status: "Active", cuisine: "Indian", zone: "Kathmandu" },
          { id: 2, name: "Nepali Kitchen", category: "Restaurants", rating: 4.8, items: 45, status: "Active", cuisine: "Nepali", zone: "Patan" },
          { id: 3, name: "Pizza Palace", category: "Fast Food", rating: 4.2, items: 18, status: "Inactive", cuisine: "Italian", zone: "Bhaktapur" },
        ]
        setRestaurants(defaultRestaurants)
        localStorage.setItem("restaurantsList", JSON.stringify(defaultRestaurants))
      }
    }
    
    loadRestaurants()
    
    // Listen for storage changes (when restaurant is added from another tab/page)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "restaurantsList") {
        loadRestaurants()
      }
    }
    
    window.addEventListener("storage", handleStorageChange)
    
    // Listen for custom event when restaurant is added in same window
    const handleRestaurantsUpdated = () => {
      loadRestaurants()
    }
    
    window.addEventListener("restaurantsUpdated", handleRestaurantsUpdated)
    
    // Also check on focus (when navigating back to this page)
    const handleFocus = () => {
      loadRestaurants()
    }
    
    window.addEventListener("focus", handleFocus)
    
    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("restaurantsUpdated", handleRestaurantsUpdated)
      window.removeEventListener("focus", handleFocus)
    }
  }, [])

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
  }

  const handleSave = () => {
    if (!formData.name.trim()) {
      alert("Restaurant name is required")
      return
    }

    if (editingId) {
      const updated = restaurants.map(r => r.id === editingId ? { ...r, ...formData, rating: r.rating, items: r.items } : r)
      setRestaurants(updated)
      localStorage.setItem("restaurantsList", JSON.stringify(updated))
    }
    handleCloseModal()
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this restaurant?")) {
      const updated = restaurants.filter(r => r.id !== id)
      setRestaurants(updated)
      localStorage.setItem("restaurantsList", JSON.stringify(updated))
    }
  }

  const handleCloseModal = () => {
    setViewingId(null)
    setEditingId(null)
  }

  const handleResetFilters = () => {
    setSearchTerm("")
    setStatusFilter("All")
  }

  return (
    <div>
      <div className="mb-4 sm:mb-6">
        <PageHeader title="Restaurants" description="Manage all restaurants" />
      </div>

      {/* Search and Filter Section */}
      <div 
        className="mb-4 sm:mb-6 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-3"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <input
          type="text"
          placeholder="Search by name or cuisine..."
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
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
          style={{ 
            borderColor: '#E5E5E5',
            fontFamily: 'var(--font-body)'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
          onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
        >
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <button 
          onClick={handleResetFilters} 
          className="px-3 sm:px-4 py-2 border rounded-lg transition-all active:scale-95"
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
                  Restaurant Name
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Cuisine
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
                  Menu Items
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
              {filteredRestaurants.length === 0 ? (
                <tr>
                  <td 
                    colSpan={6} 
                    className="px-3 sm:px-4 md:px-6 py-8 sm:py-12 text-center text-xs sm:text-sm"
                    style={{ 
                      color: 'var(--text-dark)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    No restaurants found matching your criteria
                  </td>
                </tr>
              ) : (
                filteredRestaurants.map((restaurant) => (
                  <tr 
                    key={restaurant.id} 
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
                      {restaurant.name}
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                      style={{ 
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {restaurant.cuisine}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm">
                      <span 
                        className="font-medium"
                        style={{ 
                          color: '#D97706',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        ★ {restaurant.rating}
                      </span>
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                      style={{ 
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {restaurant.items}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm">
                      <span 
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{ 
                          backgroundColor: restaurant.status === "Active" ? '#D1FAE5' : '#FEE2E2',
                          color: restaurant.status === "Active" ? '#065F46' : '#991B1B',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        {restaurant.status}
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-center">
                      <div className="flex justify-center gap-1 sm:gap-2">
                        <button 
                          onClick={() => handleViewRestaurant(restaurant)} 
                          className="p-1.5 hover:shadow-sm rounded transition active:scale-95"
                          style={{ backgroundColor: '#DBEAFE' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BFDBFE'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DBEAFE'}
                          title="View"
                        >
                          <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: 'var(--primary-green)' }} />
                        </button>
                        <button 
                          onClick={() => handleEditRestaurant(restaurant)} 
                          className="p-1.5 hover:shadow-sm rounded transition active:scale-95"
                          style={{ backgroundColor: '#DBEAFE' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BFDBFE'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DBEAFE'}
                          title="Edit"
                        >
                          <Edit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#2563EB' }} />
                        </button>
                        <button 
                          onClick={() => handleDelete(restaurant.id)} 
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

      {/* View Modal */}
      {viewingId && !editingId && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => setViewingId(null)}
        >
          <div 
            className="bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
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
                Restaurant Details
              </h2>
              <button 
                onClick={() => setViewingId(null)} 
                className="text-gray-500 hover:text-gray-700 transition p-1"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div 
              className="space-y-3 mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <p>
                <span 
                  className="font-medium"
                  style={{ color: 'var(--dark-heading)' }}
                >
                  Name:
                </span>{' '}
                <span style={{ color: 'var(--text-dark)' }}>{formData.name}</span>
              </p>
              <p>
                <span 
                  className="font-medium"
                  style={{ color: 'var(--dark-heading)' }}
                >
                  Category:
                </span>{' '}
                <span style={{ color: 'var(--text-dark)' }}>{formData.category}</span>
              </p>
              <p>
                <span 
                  className="font-medium"
                  style={{ color: 'var(--dark-heading)' }}
                >
                  Cuisine:
                </span>{' '}
                <span style={{ color: 'var(--text-dark)' }}>{formData.cuisine}</span>
              </p>
              <p>
                <span 
                  className="font-medium"
                  style={{ color: 'var(--dark-heading)' }}
                >
                  Zone:
                </span>{' '}
                <span style={{ color: 'var(--text-dark)' }}>{formData.zone}</span>
              </p>
              <p>
                <span 
                  className="font-medium"
                  style={{ color: 'var(--dark-heading)' }}
                >
                  Status:
                </span>{' '}
                <span 
                  className="px-2 py-1 rounded text-xs font-medium"
                  style={{ 
                    backgroundColor: formData.status === "Active" ? '#D1FAE5' : '#FEE2E2',
                    color: formData.status === "Active" ? '#065F46' : '#991B1B'
                  }}
                >
                  {formData.status}
                </span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => setViewingId(null)} 
                className="flex-1 px-4 py-2 border rounded-lg transition-all active:scale-95"
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
              <button 
                onClick={() => handleEditRestaurant(restaurants.find(r => r.id === viewingId)!)} 
                className="flex-1 px-4 py-2 rounded-lg transition-all active:scale-95"
                style={{ 
                  backgroundColor: 'var(--primary-green)',
                  color: 'var(--text-light)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingId && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => setEditingId(null)}
        >
          <div 
            className="bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
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
                Edit Restaurant
              </h2>
              <button 
                onClick={() => setEditingId(null)} 
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
                  Restaurant Name
                </label>
                <input 
                  type="text" 
                  value={formData.name} 
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
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
                  Category
                </label>
                <input 
                  type="text" 
                  value={formData.category} 
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })} 
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
                  Cuisine
                </label>
                <input 
                  type="text" 
                  value={formData.cuisine} 
                  onChange={(e) => setFormData({ ...formData, cuisine: e.target.value })} 
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
                  Zone
                </label>
                <input 
                  type="text" 
                  value={formData.zone} 
                  onChange={(e) => setFormData({ ...formData, zone: e.target.value })} 
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
                  Status
                </label>
                <select 
                  value={formData.status} 
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as "Active" | "Inactive" })} 
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
              <button 
                onClick={() => setEditingId(null)} 
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
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}