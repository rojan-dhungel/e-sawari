"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Plus, Edit2, Trash2, X, Eye } from 'lucide-react'

interface Driver {
  id: number
  name: string
  email: string
  phone: string
  vehicle: string
  status: string
  rating: number
}

interface NewDriverForm {
  name: string
  email: string
  phone: string
  vehicle: string
  status: string
  rating: number
}

export default function DriversPage() {
  const router = useRouter()
  const [drivers, setDrivers] = useState<Driver[]>([
    {
      id: 1,
      name: "Ram Kumar",
      email: "ram@example.com",
      phone: "9841234567",
      vehicle: "Sedan",
      status: "Active",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Hari Shrestha",
      email: "hari@example.com",
      phone: "9845678901",
      vehicle: "SUV",
      status: "Active",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Rajesh Maharjan",
      email: "rajesh@example.com",
      phone: "9849876543",
      vehicle: "Hatchback",
      status: "Active",
      rating: 4.9,
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null)
  const [editingDriver, setEditingDriver] = useState<Driver | null>(null)
  const [editForm, setEditForm] = useState<Driver | null>(null)
  const [isAddingDriver, setIsAddingDriver] = useState(false)
  const [newDriver, setNewDriver] = useState<NewDriverForm>({ 
    name: "", 
    email: "", 
    phone: "", 
    vehicle: "", 
    status: "Active", 
    rating: 5.0 
  })
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null)

  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.phone.includes(searchTerm)
  )

  const handleEdit = (driver: Driver) => {
    router.push(`/admin/dashboard/users/riders?edit=${driver.id}`)
  }

  const handleSaveEdit = () => {
    if (editForm && editForm.name && editForm.email && editForm.phone && editForm.vehicle) {
      setDrivers(drivers.map((d) => (d.id === editForm.id ? editForm : d)))
      setEditingDriver(null)
      setEditForm(null)
    }
  }

  const handleAddDriver = () => {
    router.push("/admin/dashboard/users/riders")
  }

  const handleDeleteDriver = (id: number) => {
    setDrivers(drivers.filter((d) => d.id !== id))
    setSelectedDriver(null)
    setDeleteConfirm(null)
  }

  return (
    <div className="min-h-screen p-4 sm:p-6" style={{ backgroundColor: 'var(--light-background)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold admin-header">Drivers</h1>
            <p className="text-paragraph mt-1 text-sm sm:text-base">Manage all drivers in your fleet</p>
          </div>
          <button 
            onClick={() => router.push("/admin/dashboard/users/riders")}
            className="admin-button-primary px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 transition text-sm sm:text-base"
          >
            <Plus className="w-4 h-4" />
            Add Driver
          </button>
        </div>

        <div className="mb-6 admin-card p-3 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-3 sm:px-4 py-2 border rounded-lg admin-input focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          <button 
            onClick={() => setSearchTerm("")}
            className="px-4 sm:px-6 py-2 border rounded-lg hover:bg-gray-50 transition text-xs sm:text-sm"
            style={{ borderColor: '#D1D5DB', color: 'var(--text-dark)' }}
          >
            Reset
          </button>
        </div>

        <div className="admin-card rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="admin-table-header border-b">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Name</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Email</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Phone</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Vehicle</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Rating</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Status</th>
                  <th className="px-4 sm:px-6 py-3 text-center text-xs sm:text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDrivers.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 sm:px-6 py-12 text-center text-paragraph text-sm sm:text-base">
                      No drivers found
                    </td>
                  </tr>
                ) : (
                  filteredDrivers.map((driver) => (
                    <tr key={driver.id} className="border-b admin-table-row">
                      <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm font-medium" style={{ color: 'var(--dark-heading)' }}>{driver.name}</td>
                      <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm text-paragraph">{driver.email}</td>
                      <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm text-paragraph">{driver.phone}</td>
                      <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm" style={{ color: 'var(--dark-heading)' }}>{driver.vehicle}</td>
                      <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm">
                        <span className="text-yellow-600 font-medium">★ {driver.rating}</span>
                      </td>
                      <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                          {driver.status}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-3 text-center">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => setSelectedDriver(driver)}
                            className="p-1.5 hover:bg-gray-200 rounded transition text-green-700 text-xs sm:text-base"
                            title="View"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleEdit(driver)}
                            className="p-1.5 hover:bg-gray-200 rounded transition text-blue-600 text-xs sm:text-base"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(driver.id)}
                            className="p-1.5 hover:bg-gray-200 rounded transition text-red-600 text-xs sm:text-base"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
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
      </div>

      {selectedDriver && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full">
            <div className="border-b p-4 sm:p-6 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl font-bold admin-header">Driver Details</h2>
              <button
                onClick={() => setSelectedDriver(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <p className="text-xs text-paragraph uppercase tracking-wide">Name</p>
                <p className="text-base sm:text-lg font-semibold admin-header mt-1">{selectedDriver.name}</p>
              </div>
              <div>
                <p className="text-xs text-paragraph uppercase tracking-wide">Email</p>
                <p className="text-base sm:text-lg font-semibold admin-header mt-1">{selectedDriver.email}</p>
              </div>
              <div>
                <p className="text-xs text-paragraph uppercase tracking-wide">Phone</p>
                <p className="text-base sm:text-lg font-semibold admin-header mt-1">{selectedDriver.phone}</p>
              </div>
              <div>
                <p className="text-xs text-paragraph uppercase tracking-wide">Vehicle</p>
                <p className="text-base sm:text-lg font-semibold admin-header mt-1">{selectedDriver.vehicle}</p>
              </div>
              <div>
                <p className="text-xs text-paragraph uppercase tracking-wide">Rating</p>
                <p className="text-base sm:text-lg font-semibold text-yellow-600 mt-1">★ {selectedDriver.rating}</p>
              </div>
              <div>
                <p className="text-xs text-paragraph uppercase tracking-wide">Status</p>
                <p className="text-base sm:text-lg font-semibold text-primary-green mt-1">{selectedDriver.status}</p>
              </div>
            </div>
            <div className="border-t p-4 sm:p-6 flex justify-end gap-3">
              <button
                onClick={() => setSelectedDriver(null)}
                className="px-4 sm:px-6 py-2 border border-gray-300 rounded-lg text-paragraph hover:bg-gray-50 transition text-sm sm:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {editingDriver && editForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full">
            <div className="border-b p-6 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Edit Driver</h2>
              <button
                onClick={() => {
                  setEditingDriver(null)
                  setEditForm(null)
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input
                  type="text"
                  value={editForm.phone}
                  onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle *</label>
                <input
                  type="text"
                  value={editForm.vehicle}
                  onChange={(e) => setEditForm({ ...editForm, vehicle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  value={editForm.rating}
                  onChange={(e) => setEditForm({ ...editForm, rating: Number(e.target.value) || 0 })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={editForm.status}
                  onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="On Leave">On Leave</option>
                </select>
              </div>
            </div>
            <div className="border-t p-6 flex justify-end gap-3">
              <button
                onClick={() => {
                  setEditingDriver(null)
                  setEditForm(null)
                }}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {isAddingDriver && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full">
            <div className="border-b p-6 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Add New Driver</h2>
              <button
                onClick={() => {
                  setIsAddingDriver(false)
                  setNewDriver({ name: "", email: "", phone: "", vehicle: "", status: "Active", rating: 5.0 })
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  value={newDriver.name}
                  onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Enter driver name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  value={newDriver.email}
                  onChange={(e) => setNewDriver({ ...newDriver, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input
                  type="text"
                  value={newDriver.phone}
                  onChange={(e) => setNewDriver({ ...newDriver, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle *</label>
                <input
                  type="text"
                  value={newDriver.vehicle}
                  onChange={(e) => setNewDriver({ ...newDriver, vehicle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Enter vehicle type"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Initial Rating</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  value={newDriver.rating}
                  onChange={(e) => setNewDriver({ ...newDriver, rating: Number(e.target.value) || 5.0 })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="5.0"
                />
              </div>
            </div>
            <div className="border-t p-6 flex justify-end gap-3">
              <button
                onClick={() => {
                  setIsAddingDriver(false)
                  setNewDriver({ name: "", email: "", phone: "", vehicle: "", status: "Active", rating: 5.0 })
                }}
                className="px-6 py-2 border border-gray-300 rounded-lg text-paragraph hover:bg-gray-50 transition text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleAddDriver}
                disabled={!newDriver.name || !newDriver.email || !newDriver.phone || !newDriver.vehicle}
                className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed text-sm sm:text-base"
                style={{ 
            backgroundColor: 'var(--primary-green)',
            color: 'var(--text-light)',
            fontFamily: 'var(--font-body)'
          }}
              >
                Add Driver
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteConfirm !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full">
            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2">Delete Driver?</h2>
              <p className="text-gray-600 mb-6">Are you sure you want to delete this driver? This action cannot be undone.</p>
            </div>
            <div className="border-t p-6 flex justify-end gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-paragraph hover:bg-gray-50 transition text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteDriver(deleteConfirm)}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm sm:text-base"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
