"use client"

import { useState, useEffect } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, X } from "lucide-react"

interface PackageType {
  id: number
  name: string
  maxWeight: string
  baseCharge: number
  description: string
}

export default function PackageTypesPage() {
  const [packageTypes, setPackageTypes] = useState<PackageType[]>([])
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: "", maxWeight: "", baseCharge: 0, description: "" })
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem("packageTypes")
    if (saved) {
      setPackageTypes(JSON.parse(saved))
    } else {
      const defaults = [
        { id: 1, name: "Small Package", maxWeight: "5 kg", baseCharge: 100, description: "For small parcels up to 5kg" },
        { id: 2, name: "Medium Package", maxWeight: "15 kg", baseCharge: 200, description: "For medium parcels up to 15kg" },
        { id: 3, name: "Large Package", maxWeight: "50 kg", baseCharge: 400, description: "For large parcels up to 50kg" },
      ]
      setPackageTypes(defaults)
      localStorage.setItem("packageTypes", JSON.stringify(defaults))
    }
  }, [])

  useEffect(() => {
    if (packageTypes.length > 0) {
      localStorage.setItem("packageTypes", JSON.stringify(packageTypes))
    }
  }, [packageTypes])

  const filteredTypes = packageTypes.filter((type) =>
    type.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const openModal = (type?: PackageType) => {
    if (type) {
      setEditingId(type.id)
      setFormData({
        name: type.name,
        maxWeight: type.maxWeight,
        baseCharge: type.baseCharge,
        description: type.description,
      })
    } else {
      setEditingId(null)
      setFormData({ name: "", maxWeight: "", baseCharge: 0, description: "" })
    }
    setShowModal(true)
  }

  const handleSave = () => {
    if (!formData.name.trim() || !formData.maxWeight.trim() || formData.baseCharge <= 0) {
      alert("Please fill all required fields")
      return
    }

    if (editingId) {
      setPackageTypes((prev) =>
        prev.map((type) => (type.id === editingId ? { ...type, ...formData } : type))
      )
    } else {
      setPackageTypes((prev) => [...prev, { id: Date.now(), ...formData }])
    }
    setShowModal(false)
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this package type?")) {
      setPackageTypes((prev) => prev.filter((type) => type.id !== id))
    }
  }

  return (
    <div>
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader title="Package Types" description="Manage parcel package categories" />
        <Button
          onClick={() => openModal()}
          className="w-full sm:w-auto transition-all duration-200 hover:shadow-md active:scale-95"
          style={{
            backgroundColor: "var(--primary-green)",
            color: "var(--text-light)",
            fontFamily: "var(--font-body)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a5a2f")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--primary-green)")}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Package Type
        </Button>
      </div>

      <div
        className="mb-4 sm:mb-6 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-3"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <input
          type="text"
          placeholder="Search package types..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
          style={{
            borderColor: "#E5E5E5",
            fontFamily: "var(--font-body)",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-green)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E5E5")}
        />
        <button
          onClick={() => setSearchTerm("")}
          className="px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95"
          style={{
            borderColor: "#D1D5DB",
            color: "var(--dark-heading)",
            fontFamily: "var(--font-body)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredTypes.length > 0 ? (
          filteredTypes.map((type) => (
            <div
              key={type.id}
              className="rounded-lg border shadow-sm p-4 sm:p-5 flex flex-col gap-4"
              style={{ borderColor: "#E5E5E5", backgroundColor: "#FFFFFF" }}
            >
              <div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--dark-heading)", fontFamily: "var(--font-heading)" }}
                >
                  {type.name}
                </h3>
                <p
                  className="text-xs uppercase tracking-wide mt-1"
                  style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                >
                  {type.maxWeight}
                </p>
              </div>
              <div
                className="rounded-md p-3"
                style={{ backgroundColor: "#F9FAFB" }}
              >
                <p className="text-xs text-gray-500" style={{ fontFamily: "var(--font-body)" }}>
                  Base Charge
                </p>
                <p className="text-lg font-semibold" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}>
                  Rs {type.baseCharge}
                </p>
              </div>
              <p className="text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                {type.description}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => openModal(type)}
                  className="flex-1 p-2.5 rounded-lg border flex items-center justify-center gap-1 text-xs sm:text-sm font-medium"
                  style={{
                    borderColor: "#BFDBFE",
                    color: "#2563EB",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <Edit2 className="w-4 h-4" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(type.id)}
                  className="flex-1 p-2.5 rounded-lg border flex items-center justify-center gap-1 text-xs sm:text-sm font-medium"
                  style={{
                    borderColor: "#FECACA",
                    color: "#DC2626",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
            No package types found
          </div>
        )}
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div
              className="border-b p-4 sm:p-6 flex justify-between items-center sticky top-0 bg-white"
              style={{ borderColor: "#E5E5E5" }}
            >
              <h2
                className="text-lg sm:text-xl font-bold"
                style={{ color: "var(--dark-heading)", fontFamily: "var(--font-heading)" }}
              >
                {editingId ? "Edit Package Type" : "Add Package Type"}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 transition p-1"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              {[
                { label: "Package Name", name: "name", placeholder: "e.g., Small Package" },
                { label: "Max Weight", name: "maxWeight", placeholder: "e.g., 5 kg" },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    className="block text-xs sm:text-sm font-medium mb-1"
                    style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type="text"
                    value={formData[field.name as "name" | "maxWeight"]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    placeholder={field.placeholder}
                    className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: "#E5E5E5", fontFamily: "var(--font-body)" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-green)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E5E5")}
                  />
                </div>
              ))}
              <div>
                <label
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
                >
                  Base Charge (Rs.)
                </label>
                <input
                  type="number"
                  value={formData.baseCharge || ""}
                  onChange={(e) => setFormData({ ...formData, baseCharge: parseInt(e.target.value) || 0 })}
                  placeholder="e.g., 100"
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: "#E5E5E5", fontFamily: "var(--font-body)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-green)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E5E5")}
                />
              </div>
              <div>
                <label
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
                >
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Enter description"
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: "#E5E5E5", fontFamily: "var(--font-body)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-green)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E5E5")}
                />
              </div>
            </div>
            <div
              className="border-t p-4 sm:p-6 flex flex-col sm:flex-row gap-3"
              style={{ borderColor: "#E5E5E5" }}
            >
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95"
                style={{
                  borderColor: "#D1D5DB",
                  color: "var(--dark-heading)",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95"
                style={{
                  backgroundColor: "var(--primary-green)",
                  color: "var(--text-light)",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a5a2f")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--primary-green)")}
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
