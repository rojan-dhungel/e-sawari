'use client'

import { useState, useEffect } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, X } from 'lucide-react'

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

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("menuCategories")
    if (saved) {
      setCategories(JSON.parse(saved))
    } else {
      const defaultCategories = [
        { id: 1, name: "Appetizers", description: "Starters and appetizers" },
        { id: 2, name: "Main Course", description: "Main dishes" },
        { id: 3, name: "Desserts", description: "Sweet desserts" },
        { id: 4, name: "Beverages", description: "Drinks and beverages" },
      ]
      setCategories(defaultCategories)
      localStorage.setItem("menuCategories", JSON.stringify(defaultCategories))
    }
  }, [])

  // Save to localStorage whenever categories change
  useEffect(() => {
    if (categories.length > 0) {
      localStorage.setItem("menuCategories", JSON.stringify(categories))
    }
  }, [categories])

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAdd = () => {
    setEditingId(null)
    setFormData({ name: "", description: "" })
    setShowModal(true)
  }

  const handleEdit = (category: MenuCategory) => {
    setEditingId(category.id)
    setFormData({ name: category.name, description: category.description })
    setShowModal(true)
  }

  const handleSave = () => {
    if (!formData.name.trim()) return

    if (editingId) {
      setCategories(categories.map(cat =>
        cat.id === editingId ? { ...cat, ...formData } : cat
      ))
    } else {
      setCategories([...categories, {
        id: Date.now(),
        ...formData
      }])
    }
    setShowModal(false)
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter(cat => cat.id !== id))
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <PageHeader title="Menu Categories" description="Manage menu categories for restaurants" />
        <Button onClick={handleAdd} className="bg-[#247C3F] hover:bg-[#1a5a2f]">
          <Plus className="w-4 h-4 mr-2" />
          Add Category
        </Button>
      </div>

      {/* Search */}
      <div className="mb-6 bg-white rounded-lg p-4 flex gap-3">
        <input
          type="text"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
          style={{ borderColor: "#E5E5E5" }}
        />
        <button
          onClick={() => setSearchTerm("")}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
          Reset
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Category Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((category) => (
              <tr key={category.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-3 text-sm font-medium text-gray-900">{category.name}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{category.description}</td>
                <td className="px-6 py-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(category)}
                      className="p-2 hover:bg-blue-100 rounded transition text-blue-600"
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(category.id)}
                      className="p-2 hover:bg-red-100 rounded transition text-red-600"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredCategories.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No categories found
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            <div className="border-b p-6 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                {editingId ? "Edit Category" : "Add Category"}
              </h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
                  style={{ borderColor: "#E5E5E5" }}
                  placeholder="Enter category name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
                  style={{ borderColor: "#E5E5E5" }}
                  placeholder="Enter description"
                  rows={3}
                />
              </div>
            </div>
            <div className="border-t p-6 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-[#247C3F] text-white rounded-lg hover:bg-[#1a5a2f] transition"
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
