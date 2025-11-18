"use client"

import { useState, useEffect } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, X } from "lucide-react"

interface Category {
  id: number
  name: string
  description: string
}

export default function RestaurantCategoryPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: "", description: "" })

  useEffect(() => {
    const saved = localStorage.getItem("restaurantCategories")
    if (saved) {
      setCategories(JSON.parse(saved))
    } else {
      const defaults: Category[] = [
        { id: 1, name: "Fast Food", description: "Quick bites and fast food" },
        { id: 2, name: "Restaurants", description: "Full-service restaurants" },
        { id: 3, name: "Cafes", description: "Cafes and coffee shops" },
      ]
      setCategories(defaults)
      localStorage.setItem("restaurantCategories", JSON.stringify(defaults))
    }
  }, [])

  useEffect(() => {
    if (categories.length > 0) {
      localStorage.setItem("restaurantCategories", JSON.stringify(categories))
    }
  }, [categories])

  const openDialog = (category?: Category) => {
    if (category) {
      setEditingId(category.id)
      setFormData({ name: category.name, description: category.description })
    } else {
      setEditingId(null)
      setFormData({ name: "", description: "" })
    }
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    if (!formData.name.trim()) {
      alert("Category name is required")
      return
    }

    if (editingId) {
      setCategories((prev) => prev.map((category) => (category.id === editingId ? { ...category, ...formData } : category)))
    } else {
      setCategories((prev) => [...prev, { id: Math.max(...prev.map((c) => c.id), 0) + 1, ...formData }])
    }
    closeDialog()
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setCategories((prev) => {
        const updated = prev.filter((category) => category.id !== id)
        localStorage.setItem("restaurantCategories", JSON.stringify(updated))
        return updated
      })
    }
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setEditingId(null)
    setFormData({ name: "", description: "" })
  }

  return (
    <div>
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader title="Restaurant Categories" description="Manage food service categories" />
        <Button
          onClick={() => openDialog()}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-lg border shadow-sm p-4 sm:p-5 flex flex-col gap-4"
            style={{ borderColor: "#E5E5E5", backgroundColor: "#FFFFFF" }}
          >
            <div>
              <h3 className="text-lg font-semibold" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-heading)" }}>
                {category.name}
              </h3>
              <p className="text-sm mt-1" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                {category.description}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => openDialog(category)}
                className="flex-1 p-2.5 rounded-lg border flex items-center justify-center gap-1 text-xs sm:text-sm font-medium"
                style={{ borderColor: "#BFDBFE", color: "#2563EB", fontFamily: "var(--font-body)" }}
              >
                <Edit2 className="w-4 h-4" /> Edit
              </button>
              <button
                onClick={() => handleDelete(category.id)}
                className="flex-1 p-2.5 rounded-lg border flex items-center justify-center gap-1 text-xs sm:text-sm font-medium"
                style={{ borderColor: "#FECACA", color: "#DC2626", fontFamily: "var(--font-body)" }}
              >
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isDialogOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={closeDialog}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div className="border-b p-4 sm:p-6 flex justify-between items-center sticky top-0 bg-white" style={{ borderColor: "#E5E5E5" }}>
              <h2 className="text-lg sm:text-xl font-bold" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-heading)" }}>
                {editingId ? "Edit Category" : "Add New Category"}
              </h2>
              <button onClick={closeDialog} className="text-gray-500 hover:text-gray-700 transition p-1">
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
                  placeholder="Enter category description"
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
                onClick={closeDialog}
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
                {editingId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
