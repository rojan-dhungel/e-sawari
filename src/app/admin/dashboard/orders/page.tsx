'use client'

import { useState, useEffect } from "react"
import PageHeader from "@/components/admin/page-header"
import { Eye, Edit2, Trash2, X, Plus } from 'lucide-react'

interface Order {
  id: string
  customer: string
  restaurant: string
  total: number
  status: "Delivered" | "In Progress" | "Cancelled"
  date: string
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [viewingId, setViewingId] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editData, setEditData] = useState<Order | null>(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newOrder, setNewOrder] = useState<{ customer: string; restaurant: string; total: number; status: "Delivered" | "In Progress" | "Cancelled" }>({ customer: "", restaurant: "", total: 0, status: "In Progress" })

  useEffect(() => {
    const saved = localStorage.getItem("orders")
    if (saved) {
      setOrders(JSON.parse(saved))
    } else {
      const defaults: Order[] = [
        { id: "ORD001", customer: "Priya Sharma", restaurant: "Taj Express", total: 850, status: "Delivered", date: "2024-01-10" },
        { id: "ORD002", customer: "Arjun Patel", restaurant: "Nepali Kitchen", total: 1200, status: "In Progress", date: "2024-01-09" },
      ]
      setOrders(defaults)
      localStorage.setItem("orders", JSON.stringify(defaults))
    }
  }, [])

  useEffect(() => {
    if (orders.length > 0) {
      localStorage.setItem("orders", JSON.stringify(orders))
    }
  }, [orders])

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "bg-green-100 text-green-800"
      case "In Progress": return "bg-yellow-100 text-yellow-800"
      case "Cancelled": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const handleView = (order: Order) => {
    setViewingId(order.id)
    setEditData(order)
  }

  const handleEdit = (order: Order) => {
    setEditingId(order.id)
    setEditData(order)
    setViewingId(null)
  }

  const handleSave = () => {
    if (!editData) return
    setOrders(orders.map(o => o.id === editingId ? editData : o))
    setEditingId(null)
    setEditData(null)
  }

  const handleAddOrder = () => {
    if (!newOrder.customer.trim() || !newOrder.restaurant.trim() || newOrder.total <= 0) {
      alert("Please fill all fields")
      return
    }
    const order: Order = {
      id: `ORD${Date.now()}`,
      customer: newOrder.customer,
      restaurant: newOrder.restaurant,
      total: newOrder.total,
      status: newOrder.status,
      date: new Date().toISOString().split('T')[0]
    }
    setOrders([...orders, order])
    setShowAddModal(false)
    setNewOrder({ customer: "", restaurant: "", total: 0, status: "In Progress" })
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this order?")) {
      setOrders(orders.filter(o => o.id !== id))
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
        <PageHeader title="Orders" description="Manage all food orders" />
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-[#247C3F] text-white rounded-lg hover:bg-[#1a5a2f] transition flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Order
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6 bg-white rounded-lg p-4 flex gap-3">
        <input
          type="text"
          placeholder="Search by Order ID or Customer name..."
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
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Order ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Restaurant</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Total</th>
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
                  <td className="px-6 py-3 text-sm text-gray-600">{order.customer}</td>
                  <td className="px-6 py-3 text-sm text-gray-600">{order.restaurant}</td>
                  <td className="px-6 py-3 text-sm font-medium text-gray-900">Rs. {order.total}</td>
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
                  No orders found
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
              <h2 className="text-xl font-bold text-gray-900">Order Details</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-3 bg-gray-50 p-4 rounded-lg mb-4">
              <p><span className="font-medium text-gray-700">Order ID:</span> {editData.id}</p>
              <p><span className="font-medium text-gray-700">Customer:</span> {editData.customer}</p>
              <p><span className="font-medium text-gray-700">Restaurant:</span> {editData.restaurant}</p>
              <p><span className="font-medium text-gray-700">Total:</span> Rs. {editData.total}</p>
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
              <h2 className="text-xl font-bold text-gray-900">Edit Order</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer</label>
                <input type="text" value={editData.customer} onChange={(e) => setEditData({...editData, customer: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{borderColor: "#E5E5E5"}} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant</label>
                <input type="text" value={editData.restaurant} onChange={(e) => setEditData({...editData, restaurant: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{borderColor: "#E5E5E5"}} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total (Rs.)</label>
                <input type="number" value={editData.total} onChange={(e) => setEditData({...editData, total: parseInt(e.target.value)})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{borderColor: "#E5E5E5"}} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select value={editData.status} onChange={(e) => setEditData({...editData, status: e.target.value as "Delivered" | "In Progress" | "Cancelled"})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{borderColor: "#E5E5E5"}}>
                  <option value="In Progress">In Progress</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
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

      {/* Add Order Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Add Order</h2>
              <button onClick={() => setShowAddModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                <input type="text" value={newOrder.customer} onChange={(e) => setNewOrder({...newOrder, customer: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{borderColor: "#E5E5E5"}} placeholder="Enter customer name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name</label>
                <input type="text" value={newOrder.restaurant} onChange={(e) => setNewOrder({...newOrder, restaurant: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{borderColor: "#E5E5E5"}} placeholder="Enter restaurant name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total Amount (Rs.)</label>
                <input type="number" value={newOrder.total || ""} onChange={(e) => setNewOrder({...newOrder, total: parseInt(e.target.value) || 0})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{borderColor: "#E5E5E5"}} placeholder="Enter amount" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select value={newOrder.status} onChange={(e) => setNewOrder({...newOrder, status: e.target.value as "Delivered" | "In Progress" | "Cancelled"})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#247C3F]" style={{borderColor: "#E5E5E5"}}>
                  <option value="In Progress">In Progress</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowAddModal(false)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Cancel</button>
              <button onClick={handleAddOrder} className="flex-1 px-4 py-2 bg-[#247C3F] text-white rounded-lg hover:bg-[#1a5a2f]">Add Order</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}