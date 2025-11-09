"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"

interface VehicleType {
  id: number
  name: string
  capacity: number
  baseFare: number
}

export default function VehicleTypesPage() {
  const [vehicleTypes] = useState<VehicleType[]>([
    { id: 1, name: "Sedan", capacity: 4, baseFare: 150 },
    { id: 2, name: "SUV", capacity: 6, baseFare: 200 },
    { id: 3, name: "Minivan", capacity: 8, baseFare: 250 },
  ])

  return (
    <div className="bg-light p-6">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <PageHeader title="Vehicle Types" description="Manage vehicle categories" />
        <Button className="bg-primary-green transition-all duration-200 hover:bg-[#1a5a2f] hover:shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Add Vehicle Type
        </Button>
      </div>

      {/* Vehicle Cards Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {vehicleTypes.length > 0 ? (
          vehicleTypes.map((type) => (
            <div 
              key={type.id} 
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              {/* Card Header */}
              <h3 className="mb-3 text-lg font-semibold text-dark-heading">
                {type.name}
              </h3>

              {/* Card Details */}
              <div className="mb-4 space-y-2 text-sm text-paragraph">
                <p className="flex items-center gap-2">
                  <span className="font-medium text-dark-heading">Capacity:</span>
                  {type.capacity} passengers
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium text-dark-heading">Base Fare:</span>
                  Rs. {type.baseFare}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button 
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg p-2 transition-all duration-200 hover:bg-blue-50"
                  aria-label={`Edit ${type.name}`}
                >
                  <Edit2 className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">Edit</span>
                </button>
                <button 
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg p-2 transition-all duration-200 hover:bg-red-50"
                  aria-label={`Delete ${type.name}`}
                >
                  <Trash2 className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-red-600">Delete</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
            <p className="text-paragraph">No vehicle types found</p>
          </div>
        )}
      </div>
    </div>
  )
}