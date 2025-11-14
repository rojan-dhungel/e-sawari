"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"

interface PackageType {
  id: number
  name: string
  maxWeight: string
  baseCharge: number
  description: string
}

export default function PackageTypesPage() {
  const [packageTypes] = useState<PackageType[]>([
    {
      id: 1,
      name: "Small Package",
      maxWeight: "5 kg",
      baseCharge: 100,
      description: "For small parcels",
    },
    {
      id: 2,
      name: "Medium Package",
      maxWeight: "15 kg",
      baseCharge: 200,
      description: "For medium parcels",
    },
    {
      id: 3,
      name: "Large Package",
      maxWeight: "50 kg",
      baseCharge: 400,
      description: "For large parcels",
    },
  ])

  return (
    <div className="bg-light p-6">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <PageHeader title="Package Types" description="Manage parcel package types" />
        <Button className="bg-primary-green transition-all duration-200 hover:bg-[#1a5a2f] hover:shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Add Package Type
        </Button>
      </div>

      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {packageTypes.length > 0 ? (
          packageTypes.map((type) => (
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
                  <span className="font-medium text-dark-heading">Max Weight:</span>
                  {type.maxWeight}
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium text-dark-heading">Base Charge:</span>
                  Rs. {type.baseCharge}
                </p>
                <p className="italic">{type.description}</p>
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
            <p className="text-paragraph">No package types found</p>
          </div>
        )}
      </div>
    </div>
  )
}