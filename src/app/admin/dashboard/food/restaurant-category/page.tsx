"use client"

import { useState, useEffect } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, X } from 'lucide-react'

interface Category {
  id: number
  name: string
  description: string
}

export default function RestaurantCategoryPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [addingNew, setAddingNew] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: "", description: "" })

  useEffect(() => {
    const saved = localStorage.getItem("restaurantCategories")
    if (saved) {
      setCategories(JSON.parse(saved))
    } else {
      const defaultCategories: Category[] = [
        { id: 1, name: "Fast Food", description: "Quick bites and fast food" },
        { id: 2, name: "Restaurants", description: "Full-service restaurants" },
        { id: 3, name: "Cafes", description: "Cafes and coffee shops" },
      ]
      setCategories(defaultCategories)
      localStorage.setItem("restaurantCategories", JSON.stringify(defaultCategories))
    }
  }, [])

  const handleAddNew = () => {
    setAddingNew(true)
    setFormData({ name: "", description: "" })
  }

  const handleEdit = (category: Category) => {
    setEditingId(category.id)
    setFormData({ name: category.name, description: category.description })
  }

  const handleSave = () => {
    if (!formData.name.trim()) {
      alert("Category name is required")
      return
    }

    if (editingId) {
      const updated = categories.map(c =>
        c.id === editingId ? { ...c, name: formData.name, description: formData.description } : c
      )
      setCategories(updated)
      localStorage.setItem("restaurantCategories", JSON.stringify(updated))
    } else if (addingNew) {
      const newCategory: Category = {
        id: Math.max(...categories.map(c => c.id), 0) + 1,
        name: formData.name,
        description: formData.description,
      }
      const updated = [...categories, newCategory]
      setCategories(updated)
      localStorage.setItem("restaurantCategories", JSON.stringify(updated))
    }

    handleCloseModal()
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this category?")) {
      const updated = categories.filter(c => c.id !== id)
      setCategories(updated)
      localStorage.setItem("restaurantCategories", JSON.stringify(updated))
    }
  }

  const handleCloseModal = () => {
    setAddingNew(false)
    setEditingId(null)
    setFormData({ name: "", description: "" })
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <PageHeader title="Restaurant Categories" description="Manage food service categories" />
        <Button onClick={handleAddNew} className="bg-[#247C3F] hover:bg-[#1a5a2f]">
          <Plus className="w-4 h-4 mr-2" />
          Add Category
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{category.description}</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(category)}
                className="flex-1 p-2 hover:bg-gray-100 rounded transition flex items-center justify-center gap-1"
              >
                <Edit2 className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 text-sm">Edit</span>
              </button>
              <button
                onClick={() => handleDelete(category.id)}
                className="flex-1 p-2 hover:bg-gray-100 rounded transition flex items-center justify-center gap-1"
              >
                <Trash2 className="w-4 h-4 text-red-600" />
                <span className="text-red-600 text-sm">Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {(addingNew || editingId) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {editingId ? "Edit Category" : "Add New Category"}
              </h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter category name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
                  style={{ borderColor: "#E5E5E5" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Enter category description"
                  rows={3}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
                  style={{ borderColor: "#E5E5E5" }}
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleCloseModal}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-4 py-2 bg-[#247C3F] text-white rounded-lg hover:bg-[#1a5a2f]"
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
