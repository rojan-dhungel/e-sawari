"use client"

import { useState, useEffect } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, X } from "lucide-react"

interface MenuCategory {
  id: number
  name: string
  description: string
}

export default function MenuCategoryPage() {
  const [categories, setCategories] = useState<MenuCategory[]>([])
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: "", description: "" })
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem("menuCategories")
    if (saved) {
      setCategories(JSON.parse(saved))
    } else {
      const defaults = [
        { id: 1, name: "Appetizers", description: "Starters and appetizers" },
        { id: 2, name: "Main Course", description: "Main dishes" },
        { id: 3, name: "Desserts", description: "Sweet desserts" },
        { id: 4, name: "Beverages", description: "Drinks and beverages" },
      ]
      setCategories(defaults)
      localStorage.setItem("menuCategories", JSON.stringify(defaults))
    }
  }, [])

  useEffect(() => {
    if (categories.length > 0) {
      localStorage.setItem("menuCategories", JSON.stringify(categories))
    }
  }, [categories])

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const openModal = (category?: MenuCategory) => {
    if (category) {
      setEditingId(category.id)
      setFormData({ name: category.name, description: category.description })
    } else {
      setEditingId(null)
      setFormData({ name: "", description: "" })
    }
    setShowModal(true)
  }

  const handleSave = () => {
    if (!formData.name.trim()) {
      alert("Category name is required")
      return
    }

    if (editingId) {
      setCategories((prev) => prev.map((category) => (category.id === editingId ? { ...category, ...formData } : category)))
    } else {
      setCategories((prev) => [...prev, { id: Date.now(), ...formData }])
    }
    setShowModal(false)
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setCategories((prev) => prev.filter((category) => category.id !== id))
    }
  }

  return (
    <div>
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader title="Menu Categories" description="Manage menu categories for restaurants" />
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
          Add Category
        </Button>
      </div>

      <div
        className="mb-4 sm:mb-6 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-3"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <input
          type="text"
          placeholder="Search categories..."
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
                {[
                  "Category Name",
                  "Description",
                  "Actions",
                ].map((header) => (
                  <th
                    key={header}
                    className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold whitespace-nowrap ${
                      header === "Actions" ? "text-center" : "text-left"
                    }`}
                    style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: "#E5E5E5" }}>
              {filteredCategories.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-3 sm:px-4 md:px-6 py-8 sm:py-12 text-center text-xs sm:text-sm"
                    style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                  >
                    No categories found
                  </td>
                </tr>
              ) : (
                filteredCategories.map((category) => (
                  <tr
                    key={category.id}
                    className="transition-colors duration-200"
                    style={{ backgroundColor: "#FFFFFF" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
                  >
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}>
                      {category.name}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                      <span className="line-clamp-2 sm:line-clamp-none">{category.description}</span>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-center">
                      <div className="flex justify-center gap-1 sm:gap-2">
                        <button
                          onClick={() => openModal(category)}
                          className="p-1.5 rounded-lg transition active:scale-95"
                          style={{ backgroundColor: "#DBEAFE" }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#BFDBFE")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#DBEAFE")}
                          title="Edit"
                        >
                          <Edit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: "#2563EB" }} />
                        </button>
                        <button
                          onClick={() => handleDelete(category.id)}
                          className="p-1.5 rounded-lg transition active:scale-95"
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
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div className="border-b p-4 sm:p-6 flex justify-between items-center sticky top-0 bg-white" style={{ borderColor: "#E5E5E5" }}>
              <h2 className="text-lg sm:text-xl font-bold" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-heading)" }}>
                {editingId ? "Edit Category" : "Add Category"}
              </h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700 transition p-1">
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}>
                  Category Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter category name"
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: "#E5E5E5", fontFamily: "var(--font-body)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-green)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E5E5")}
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}>
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
            <div className="border-t p-4 sm:p-6 flex gap-3" style={{ borderColor: "#E5E5E5" }}>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95"
                style={{ borderColor: "#D1D5DB", color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95"
                style={{ backgroundColor: "var(--primary-green)", color: "var(--text-light)", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a5a2f")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--primary-green)")}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
