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

    router.push("/admin/dashboard/food/restaurants")
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
    <div className="p-6">
      <div className="mb-6 flex items-center gap-3">
        <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-lg transition">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <PageHeader title="Add Restaurant" description="Add a new restaurant to the system" />
      </div>

      <form onSubmit={handleSubmit} className="mt-8 max-w-4xl space-y-8">
        {/* Basic Information */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span>📝</span> Basic Information
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="px-4 py-2 border-b-2 border-[#247C3F] text-[#247C3F] font-medium"
                >
                  English
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name (English) <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter restaurant name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Long address</label>
              <input
                type="text"
                name="longAddress"
                placeholder="Enter full address"
                value={formData.longAddress}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Short address</label>
              <input
                type="text"
                name="shortAddress"
                placeholder="Enter short address"
                value={formData.shortAddress}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
              />
            </div>
          </div>
        </div>

        {/* Logo & Cover Image */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Store LOGO & Cover Image</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Logo <span className="text-red-600">*</span>
              </label>
              <div className="border-2 border-dashed border-[#247C3F] rounded-lg p-8 text-center cursor-pointer hover:bg-green-50 transition">
                <div className="flex flex-col items-center gap-2">
                  <Upload className="w-8 h-8 text-[#247C3F]" />
                  <p className="text-sm text-gray-500">Drag file here or</p>
                  <p className="text-sm text-[#247C3F] font-medium">click to upload</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                COVER Image <span className="text-red-600">*</span>
              </label>
              <div className="border-2 border-dashed border-[#247C3F] rounded-lg p-8 text-center cursor-pointer hover:bg-green-50 transition">
                <div className="flex flex-col items-center gap-2">
                  <Upload className="w-8 h-8 text-[#247C3F]" />
                  <p className="text-sm text-gray-500">Drag file here or</p>
                  <p className="text-sm text-[#247C3F] font-medium">click to upload</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store Info */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span>🏪</span> Store Info
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  VAT/Tax (%) <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="vatTax"
                  placeholder="Enter tax(%)"
                  value={formData.vatTax}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location <span className="text-red-600">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter a location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
                  />
                  <button type="button" className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <MapPin className="w-5 h-5 text-[#247C3F]" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cuisine <span className="text-red-600">*</span>
                </label>
                <select name="cuisine" value={formData.cuisine} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]">
                  <option value="">Select</option>
                  <option value="Indian">Indian</option>
                  <option value="Nepali">Nepali</option>
                  <option value="Italian">Italian</option>
                  <option value="Chinese">Chinese</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zone <span className="text-red-600">*</span>
                </label>
                <select name="zone" value={formData.zone} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]">
                  <option value="">Select</option>
                  <option value="Kathmandu">Kathmandu</option>
                  <option value="Patan">Patan</option>
                  <option value="Bhaktapur">Bhaktapur</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Latitude</label>
                <input
                  type="text"
                  name="latitude"
                  placeholder="Enter latitude"
                  value={formData.latitude}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Longitude</label>
                <input
                  type="text"
                  name="longitude"
                  placeholder="Enter longitude"
                  value={formData.longitude}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pb-6">
          <Button type="button" variant="outline" onClick={handleReset} className="border-gray-300">Reset</Button>
          <Button type="submit" className="bg-[#247C3F] hover:bg-[#1a5a2f] text-white">Submit</Button>
        </div>
      </form>
    </div>
  )
}