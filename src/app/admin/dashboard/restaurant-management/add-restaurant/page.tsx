"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { MapPin, Upload } from 'lucide-react'

export default function AddRestaurantPage() {
  const [formData, setFormData] = useState({
    nameEnglish: "",
    longAddress: "",
    shortAddress: "",
    vatTax: "",
    location: "",
    cuisine: "",
    zone: "",
    latitude: "",
    longitude: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <div className="p-6">
      <PageHeader title="Add Restaurant" description="Add a new restaurant to the system" />

      <form onSubmit={handleSubmit} className="mt-8 max-w-4xl space-y-8">
        {/* Basic Information */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-gray-400">📝</span> Basic Information
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium"
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
                name="nameEnglish"
                placeholder="Enter Name"
                value={formData.nameEnglish}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Long address</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Short address</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <div className="border-2 border-dashed border-blue-400 rounded-lg p-8 text-center cursor-pointer hover:bg-blue-50 transition">
                <div className="flex flex-col items-center gap-2">
                  <Upload className="w-8 h-8 text-gray-400" />
                  <p className="text-sm text-gray-500">Drag file here or</p>
                  <p className="text-sm text-gray-500">click to upload</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                COVER Image <span className="text-red-600">*</span>
              </label>
              <div className="border-2 border-dashed border-blue-400 rounded-lg p-8 text-center cursor-pointer hover:bg-blue-50 transition">
                <div className="flex flex-col items-center gap-2">
                  <Upload className="w-8 h-8 text-gray-400" />
                  <p className="text-sm text-gray-500">Drag file here or</p>
                  <p className="text-sm text-gray-500">click to upload</p>
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
                  Search <span className="text-red-600">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter a location"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button type="button" className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <MapPin className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cuisine <span className="text-red-600">*</span>
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zone <span className="text-red-600">*</span>
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Latitude</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Longitude</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button variant="outline">Reset</Button>
          <Button className="bg-[#247C3F] hover:bg-[#1a5a2f]">Submit</Button>
        </div>
      </form>
    </div>
  )
}
