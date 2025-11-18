"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, X } from "lucide-react"

interface Cuisine {
  id: number
  name: string
  description: string
  status: "Active" | "Inactive"
}

interface CuisineFormData {
  name: string
  description: string
  status: "Active" | "Inactive"
}

const STATUS_STYLES = {
  Active: { bg: "#D1FAE5", text: "#065F46" },
  Inactive: { bg: "#FEE2E2", text: "#991B1B" },
}

export default function CuisinesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState<CuisineFormData>({
    name: "",
    description: "",
    status: "Active",
  })

  const [cuisines, setCuisines] = useState<Cuisine[]>([
    { id: 1, name: "Indian", description: "Indian cuisine", status: "Active" },
    { id: 2, name: "Chinese", description: "Chinese cuisine", status: "Active" },
    { id: 3, name: "Continental", description: "Continental cuisine", status: "Active" },
    { id: 4, name: "Italian", description: "Italian cuisine", status: "Active" },
    { id: 5, name: "Thai", description: "Thai cuisine", status: "Inactive" },
  ])

  const filteredCuisines = cuisines.filter(
    (cuisine) =>
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
      setCuisines((prev) =>
        prev.map((cuisine) => (cuisine.id === editingId ? { ...cuisine, ...formData } : cuisine))
      )
    } else {
      setCuisines((prev) => [
        ...prev,
        {
          id: Math.max(...prev.map((c) => c.id), 0) + 1,
          ...formData,
        },
      ])
    }
    handleCloseModal()
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this cuisine?")) {
      setCuisines((prev) => prev.filter((cuisine) => cuisine.id !== id))
    }
  }

  const handleResetSearch = () => setSearchTerm("")

  return (
    <div>
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader title="Cuisines" description="Manage restaurant cuisines" />
        <Button
          onClick={() => handleOpenModal()}
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
          Add Cuisine
        </Button>
      </div>

      <div
        className="mb-4 sm:mb-6 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-3"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <input
          type="text"
          placeholder="Search cuisines..."
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
          onClick={handleResetSearch}
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

      <div
        className="rounded-lg shadow-sm overflow-hidden -mx-3 sm:mx-0"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead
              className="border-b"
              style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E5E5" }}
            >
              <tr>
                {["S.No", "Cuisine Name", "Description", "Status", "Actions"].map((header) => (
                  <th
                    key={header}
                    className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                    style={{
                      color: "var(--dark-heading)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {header === "Actions" ? <span className="flex justify-center">{header}</span> : header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: "#E5E5E5" }}>
              {filteredCuisines.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-3 sm:px-4 md:px-6 py-8 sm:py-12 text-center text-xs sm:text-sm"
                    style={{
                      color: "var(--text-dark)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    No cuisines found
                  </td>
                </tr>
              ) : (
                filteredCuisines.map((cuisine, index) => (
                  <tr
                    key={cuisine.id}
                    className="transition-colors duration-200"
                    style={{ backgroundColor: "#FFFFFF" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
                  >
                    <td
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                      style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                    >
                      {index + 1}
                    </td>
                    <td
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium"
                      style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
                    >
                      {cuisine.name}
                    </td>
                    <td
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                      style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                    >
                      <span className="line-clamp-2 sm:line-clamp-none">{cuisine.description}</span>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm">
                      <span
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{
                          backgroundColor: STATUS_STYLES[cuisine.status].bg,
                          color: STATUS_STYLES[cuisine.status].text,
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {cuisine.status}
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3">
                      <div className="flex justify-center gap-1 sm:gap-2">
                        <button
                          onClick={() => handleOpenModal(cuisine)}
                          className="p-1.5 hover:shadow-sm rounded transition active:scale-95"
                          style={{ backgroundColor: "#DBEAFE" }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#BFDBFE")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#DBEAFE")}
                          title="Edit"
                        >
                          <Edit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: "#2563EB" }} />
                        </button>
                        <button
                          onClick={() => handleDelete(cuisine.id)}
                          className="p-1.5 hover:shadow-sm rounded transition active:scale-95"
                          style={{ backgroundColor: "#FEE2E2" }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FECACA")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FEE2E2")}
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: "#DC2626" }} />
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

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={handleCloseModal}
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
                {editingId ? "Edit Cuisine" : "Add Cuisine"}
              </h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700 transition p-1">
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div>
                <label
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
                >
                  Cuisine Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: "#E5E5E5", fontFamily: "var(--font-body)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-green)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E5E5")}
                  placeholder="Enter cuisine name"
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
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: "#E5E5E5", fontFamily: "var(--font-body)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-green)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E5E5")}
                  placeholder="Enter description"
                  rows={3}
                />
              </div>

              <div>
                <label
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
                >
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as "Active" | "Inactive" })}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: "#E5E5E5", fontFamily: "var(--font-body)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-green)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E5E5")}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div
              className="border-t p-4 sm:p-6 flex flex-col sm:flex-row gap-3 sticky bottom-0 bg-white"
              style={{ borderColor: "#E5E5E5" }}
            >
              <button
                onClick={handleCloseModal}
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
                disabled={!formData.name.trim()}
                className="flex-1 px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: formData.name.trim() ? "var(--primary-green)" : "#E5E7EB",
                  color: formData.name.trim() ? "var(--text-light)" : "#9CA3AF",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => {
                  if (formData.name.trim()) e.currentTarget.style.backgroundColor = "#1a5a2f"
                }}
                onMouseLeave={(e) => {
                  if (formData.name.trim()) e.currentTarget.style.backgroundColor = "var(--primary-green)"
                }}
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