"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { MapPin, Upload, ArrowLeft } from 'lucide-react'

interface Restaurant {
  id: number
  name: string
  category: string
  rating: number
  items: number
  status: "Active" | "Inactive"
  cuisine: string
  zone: string
  address?: string
  shortAddress?: string
  vat?: string
}

export default function AddRestaurantPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<{
    name: string
    longAddress: string
    shortAddress: string
    vatTax: string
    location: string
    cuisine: string
    zone: string
    latitude: string
    longitude: string
    category: string
    rating: number
    items: number
    status: "Active" | "Inactive"
  }>({
    name: "",
    longAddress: "",
    shortAddress: "",
    vatTax: "",
    location: "",
    cuisine: "",
    zone: "",
    latitude: "",
    longitude: "",
    category: "Restaurants",
    rating: 4.5,
    items: 0,
    status: "Active",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      alert("Restaurant name is required")
      return
    }

    const saved = localStorage.getItem("restaurantsList")
    const existing: Restaurant[] = saved ? JSON.parse(saved) : []
    const newRestaurant: Restaurant = {
      id: Math.max(...existing.map((r) => r.id), 0) + 1,
      name: formData.name,
      category: formData.category,
      rating: formData.rating,
      items: formData.items,
      status: formData.status,
      cuisine: formData.cuisine,
      zone: formData.zone,
      address: formData.longAddress,
      shortAddress: formData.shortAddress,
      vat: formData.vatTax,
    }
    existing.push(newRestaurant)
    localStorage.setItem("restaurantsList", JSON.stringify(existing))
    
    // Trigger a custom event to notify other components
    window.dispatchEvent(new Event("restaurantsUpdated"))

    // Navigate to the restaurants list page
    router.push("/admin/dashboard/restaurant-management/restaurants")
  }

  const handleReset = () => {
    setFormData({
      name: "",
      longAddress: "",
      shortAddress: "",
      vatTax: "",
      location: "",
      cuisine: "",
      zone: "",
      latitude: "",
      longitude: "",
      category: "Restaurants",
      rating: 4.5,
      items: 0,
      status: "Active",
    })
  }

  return (
    <div>
      <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
        <button 
          onClick={() => router.back()} 
          className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--text-dark)' }} />
        </button>
        <PageHeader title="Add Restaurant" description="Add a new restaurant to the system" />
      </div>

      <form onSubmit={handleSubmit} className="mt-4 sm:mt-8 max-w-4xl space-y-4 sm:space-y-6 md:space-y-8">
        {/* Basic Information */}
        <div 
          className="rounded-lg shadow-sm p-4 sm:p-6"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <h2 
            className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center gap-2"
            style={{ 
              color: 'var(--dark-heading)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            <span>📝</span> Basic Information
          </h2>

          <div className="space-y-3 sm:space-y-4">
            <div>
              <label 
                className="block text-xs sm:text-sm font-medium mb-2"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                Language
              </label>
              <div className="flex gap-2 sm:gap-4">
                <button
                  type="button"
                  className="px-3 sm:px-4 py-2 border-b-2 font-medium transition-all"
                  style={{ 
                    borderColor: 'var(--primary-green)',
                    color: 'var(--primary-green)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  English
                </button>
              </div>
            </div>

            <div>
              <label 
                className="block text-xs sm:text-sm font-medium mb-2"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                Name (English) <span style={{ color: '#DC2626' }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter restaurant name"
                value={formData.name}
                onChange={handleInputChange}
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
                className="block text-xs sm:text-sm font-medium mb-2"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                Long address
              </label>
              <input
                type="text"
                name="longAddress"
                placeholder="Enter full address"
                value={formData.longAddress}
                onChange={handleInputChange}
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
                className="block text-xs sm:text-sm font-medium mb-2"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                Short address
              </label>
              <input
                type="text"
                name="shortAddress"
                placeholder="Enter short address"
                value={formData.shortAddress}
                onChange={handleInputChange}
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
        </div>

        {/* Logo & Cover Image */}
        <div 
          className="rounded-lg shadow-sm p-4 sm:p-6"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <h2 
            className="text-base sm:text-lg font-semibold mb-4 sm:mb-6"
            style={{ 
              color: 'var(--dark-heading)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Store LOGO & Cover Image
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label 
                className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                Logo <span style={{ color: '#DC2626' }}>*</span>
              </label>
              <div 
                className="border-2 border-dashed rounded-lg p-4 sm:p-6 md:p-8 text-center cursor-pointer transition-all active:scale-95"
                style={{ 
                  borderColor: 'var(--primary-green)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0FDF4'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <div className="flex flex-col items-center gap-2">
                  <Upload className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: 'var(--primary-green)' }} />
                  <p 
                    className="text-xs sm:text-sm"
                    style={{ 
                      color: 'var(--text-dark)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    Drag file here or
                  </p>
                  <p 
                    className="text-xs sm:text-sm font-medium"
                    style={{ 
                      color: 'var(--primary-green)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    click to upload
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label 
                className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                COVER Image <span style={{ color: '#DC2626' }}>*</span>
              </label>
              <div 
                className="border-2 border-dashed rounded-lg p-4 sm:p-6 md:p-8 text-center cursor-pointer transition-all active:scale-95"
                style={{ 
                  borderColor: 'var(--primary-green)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0FDF4'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <div className="flex flex-col items-center gap-2">
                  <Upload className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: 'var(--primary-green)' }} />
                  <p 
                    className="text-xs sm:text-sm"
                    style={{ 
                      color: 'var(--text-dark)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    Drag file here or
                  </p>
                  <p 
                    className="text-xs sm:text-sm font-medium"
                    style={{ 
                      color: 'var(--primary-green)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    click to upload
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store Info */}
        <div 
          className="rounded-lg shadow-sm p-4 sm:p-6"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <h2 
            className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center gap-2"
            style={{ 
              color: 'var(--dark-heading)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            <span>🏪</span> Store Info
          </h2>

          <div className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-2"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  VAT/Tax (%) <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <input
                  type="text"
                  name="vatTax"
                  placeholder="Enter tax(%)"
                  value={formData.vatTax}
                  onChange={handleInputChange}
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
                  className="block text-xs sm:text-sm font-medium mb-2"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Location <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter a location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="flex-1 px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      borderColor: '#E5E5E5',
                      fontFamily: 'var(--font-body)'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                  />
                  <button 
                    type="button" 
                    className="p-2 border rounded-lg transition-all active:scale-95"
                    style={{ 
                      borderColor: '#E5E5E5'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--primary-green)' }} />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-2"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Cuisine <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <select 
                  name="cuisine" 
                  value={formData.cuisine} 
                  onChange={handleInputChange} 
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                >
                  <option value="">Select</option>
                  <option value="Indian">Indian</option>
                  <option value="Nepali">Nepali</option>
                  <option value="Italian">Italian</option>
                  <option value="Chinese">Chinese</option>
                </select>
              </div>

              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-2"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Zone <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <select 
                  name="zone" 
                  value={formData.zone} 
                  onChange={handleInputChange} 
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                >
                  <option value="">Select</option>
                  <option value="Kathmandu">Kathmandu</option>
                  <option value="Patan">Patan</option>
                  <option value="Bhaktapur">Bhaktapur</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-2"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Latitude
                </label>
                <input
                  type="text"
                  name="latitude"
                  placeholder="Enter latitude"
                  value={formData.latitude}
                  onChange={handleInputChange}
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
                  className="block text-xs sm:text-sm font-medium mb-2"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Longitude
                </label>
                <input
                  type="text"
                  name="longitude"
                  placeholder="Enter longitude"
                  value={formData.longitude}
                  onChange={handleInputChange}
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
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pb-4 sm:pb-6">
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleReset} 
            className="w-full sm:w-auto transition-all active:scale-95"
            style={{ 
              borderColor: '#D1D5DB',
              color: 'var(--dark-heading)',
              fontFamily: 'var(--font-body)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Reset
          </Button>
          <Button 
            type="submit" 
            className="w-full sm:w-auto transition-all active:scale-95"
            style={{ 
              backgroundColor: 'var(--primary-green)',
              color: 'var(--text-light)',
              fontFamily: 'var(--font-body)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}