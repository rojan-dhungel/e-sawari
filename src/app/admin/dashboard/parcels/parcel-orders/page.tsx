'use client'

import { useState, useEffect } from "react"
import PageHeader from "@/components/admin/page-header"
import { Eye, Edit2, Trash2, X, Plus } from 'lucide-react'

interface ParcelOrder {
  id: string
  sender: string
  receiver: string
  packageType: string
  status: "Delivered" | "In Transit" | "Pending"
  date: string
}

export default function ParcelOrdersPage() {
  const [parcelOrders, setParcelOrders] = useState<ParcelOrder[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [viewingId, setViewingId] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editData, setEditData] = useState<ParcelOrder | null>(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newParcel, setNewParcel] = useState<{
    sender: string
    receiver: string
    packageType: string
    status: "Delivered" | "In Transit" | "Pending"
  }>({
    sender: "",
    receiver: "",
    packageType: "",
    status: "Pending"
  })

  useEffect(() => {
    const saved = localStorage.getItem("parcelOrders")
    if (saved) {
      setParcelOrders(JSON.parse(saved))
    } else {
      const defaults: ParcelOrder[] = [
        { id: "PARCEL001", sender: "Ram Kumar", receiver: "Sita Rai", packageType: "Small Package", status: "Delivered", date: "2024-01-08" },
        { id: "PARCEL002", sender: "Hari Shrestha", receiver: "Gita Ghimire", packageType: "Medium Package", status: "In Transit", date: "2024-01-09" },
      ]
      setParcelOrders(defaults)
      localStorage.setItem("parcelOrders", JSON.stringify(defaults))
    }
  }, [])

  useEffect(() => {
    if (parcelOrders.length > 0) {
      localStorage.setItem("parcelOrders", JSON.stringify(parcelOrders))
    }
  }, [parcelOrders])

  const filteredOrders = parcelOrders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.sender.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "bg-green-100 text-green-800"
      case "In Transit": return "bg-blue-100 text-blue-800"
      case "Pending": return "bg-yellow-100 text-yellow-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const handleView = (order: ParcelOrder) => {
    setViewingId(order.id)
    setEditData(order)
  }

  const handleEdit = (order: ParcelOrder) => {
    setEditingId(order.id)
    setEditData(order)
    setViewingId(null)
  }

  const handleSave = () => {
    if (!editData) return
    setParcelOrders(parcelOrders.map(o => o.id === editingId ? editData : o))
    setEditingId(null)
    setEditData(null)
  }

  const handleAddParcel = () => {
    if (!newParcel.sender.trim() || !newParcel.receiver.trim() || !newParcel.packageType.trim()) {
      alert("Please fill all fields")
      return
    }
    const parcel: ParcelOrder = {
      id: `PARCEL${Date.now()}`,
      sender: newParcel.sender,
      receiver: newParcel.receiver,
      packageType: newParcel.packageType,
      status: newParcel.status,
      date: new Date().toISOString().split('T')[0]
    }
    setParcelOrders([...parcelOrders, parcel])
    setShowAddModal(false)
    setNewParcel({ sender: "", receiver: "", packageType: "", status: "Pending" })
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this parcel order?")) {
      setParcelOrders(parcelOrders.filter(o => o.id !== id))
    }
  }

  const handleCloseModal = () => {
    setViewingId(null)
    setEditingId(null)
    setEditData(null)
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <PageHeader title="Parcel Orders" description="Manage all parcel deliveries" />
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-[#247C3F] text-white rounded-lg hover:bg-[#1a5a2f] transition flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Parcel
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6 bg-white rounded-lg p-4 flex gap-3">
        <input
          type="text"
          placeholder="Search by Parcel ID or Sender name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]"
          style={{ borderColor: "#E5E5E5" }}
        />
        <button onClick={() => setSearchTerm("")} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Reset</button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Parcel ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Sender</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Receiver</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-6 py-3 text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-3 text-sm text-gray-600">{order.sender}</td>
                  <td className="px-6 py-3 text-sm text-gray-600">{order.receiver}</td>
                  <td className="px-6 py-3 text-sm text-gray-600">{order.packageType}</td>
                  <td className="px-6 py-3 text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-600">{order.date}</td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button onClick={() => handleView(order)} className="p-2 hover:bg-gray-100 rounded transition" title="View">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button onClick={() => handleEdit(order)} className="p-2 hover:bg-blue-100 rounded transition" title="Edit">
                        <Edit2 className="w-4 h-4 text-blue-600" />
                      </button>
                      <button onClick={() => handleDelete(order.id)} className="p-2 hover:bg-red-100 rounded transition" title="Delete">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                  No parcel orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {viewingId && !editingId && editData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Parcel Details</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-3 bg-gray-50 p-4 rounded-lg mb-4">
              <p><span className="font-medium text-gray-700">Parcel ID:</span> {editData.id}</p>
              <p><span className="font-medium text-gray-700">Sender:</span> {editData.sender}</p>
              <p><span className="font-medium text-gray-700">Receiver:</span> {editData.receiver}</p>
              <p><span className="font-medium text-gray-700">Type:</span> {editData.packageType}</p>
              <p><span className="font-medium text-gray-700">Status:</span> <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(editData.status)}`}>{editData.status}</span></p>
              <p><span className="font-medium text-gray-700">Date:</span> {editData.date}</p>
            </div>
            <div className="flex gap-3">
              <button onClick={handleCloseModal} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Close</button>
              <button onClick={() => handleEdit(editData)} className="flex-1 px-4 py-2 bg-[#247C3F] text-white rounded-lg hover:bg-[#1a5a2f]">Edit</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingId && editData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Edit Parcel Order</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sender</label>
                <input type="text" value={editData.sender} onChange={(e) => setEditData({...editData, sender: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{borderColor: "#E5E5E5"}} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Receiver</label>
                <input type="text" value={editData.receiver} onChange={(e) => setEditData({...editData, receiver: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{borderColor: "#E5E5E5"}} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Package Type</label>
                <input type="text" value={editData.packageType} onChange={(e) => setEditData({...editData, packageType: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{borderColor: "#E5E5E5"}} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select value={editData.status} onChange={(e) => setEditData({...editData, status: e.target.value as "Delivered" | "In Transit" | "Pending"})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{borderColor: "#E5E5E5"}}>
                  <option value="Pending">Pending</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={handleCloseModal} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Cancel</button>
              <button onClick={handleSave} className="flex-1 px-4 py-2 bg-[#247C3F] text-white rounded-lg hover:bg-[#1a5a2f]">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Parcel Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Add Parcel Order</h2>
              <button onClick={() => setShowAddModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sender Name</label>
                <input type="text" value={newParcel.sender} onChange={(e) => setNewParcel({...newParcel, sender: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{borderColor: "#E5E5E5"}} placeholder="Enter sender name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Receiver Name</label>
                <input type="text" value={newParcel.receiver} onChange={(e) => setNewParcel({...newParcel, receiver: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{borderColor: "#E5E5E5"}} placeholder="Enter receiver name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Package Type</label>
                <input type="text" value={newParcel.packageType} onChange={(e) => setNewParcel({...newParcel, packageType: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{borderColor: "#E5E5E5"}} placeholder="e.g., Small Package" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select value={newParcel.status} onChange={(e) => setNewParcel({...newParcel, status: e.target.value as "Delivered" | "In Transit" | "Pending"})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{borderColor: "#E5E5E5"}}>
                  <option value="Pending">Pending</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowAddModal(false)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Cancel</button>
              <button onClick={handleAddParcel} className="flex-1 px-4 py-2 bg-[#247C3F] text-white rounded-lg hover:bg-[#1a5a2f]">Add Parcel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}