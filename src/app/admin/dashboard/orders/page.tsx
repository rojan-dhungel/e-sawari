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
      case "Delivered": 
        return { bg: '#D1FAE5', text: '#065F46' }
      case "In Progress": 
        return { bg: '#FEF3C7', text: '#92400E' }
      case "Cancelled": 
        return { bg: '#FEE2E2', text: '#991B1B' }
      default: 
        return { bg: '#F3F4F6', text: '#374151' }
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
    <div>
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader title="Orders" description="Manage all food orders" />
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 sm:px-6 py-2 rounded-lg transition-all hover:shadow-md active:scale-95 flex items-center gap-2 w-full sm:w-auto justify-center"
          style={{ 
            backgroundColor: 'var(--primary-green)',
            color: 'var(--text-light)',
            fontFamily: 'var(--font-body)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
        >
          <Plus className="w-4 h-4" />
          Add Order
        </button>
      </div>

      {/* Search Bar */}
      <div 
        className="mb-4 sm:mb-6 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-3"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <input
          type="text"
          placeholder="Search by Order ID or Customer name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
          style={{ 
            borderColor: '#E5E5E5',
            fontFamily: 'var(--font-body)'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
          onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
        />
        <button 
          onClick={() => setSearchTerm("")} 
          className="px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95"
          style={{ 
            borderColor: '#D1D5DB',
            color: 'var(--dark-heading)',
            fontFamily: 'var(--font-body)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Reset
        </button>
      </div>

      {/* Table */}
      <div 
        className="rounded-lg shadow-sm overflow-hidden -mx-3 sm:mx-0"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead 
              className="border-b"
              style={{ 
                backgroundColor: '#F9FAFB',
                borderColor: '#E5E5E5'
              }}
            >
              <tr>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Order ID
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Customer
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Restaurant
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Total
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Status
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Date
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Actions
                </th>
            </tr>
          </thead>
            <tbody className="divide-y" style={{ borderColor: '#E5E5E5' }}>
            {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => {
                  const statusColors = getStatusColor(order.status)
                  return (
                    <tr 
                      key={order.id} 
                      className="transition-colors duration-200"
                      style={{ backgroundColor: '#FFFFFF' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
                    >
                      <td 
                        className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium"
                        style={{ 
                          color: 'var(--dark-heading)',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        {order.id}
                      </td>
                      <td 
                        className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                        style={{ 
                          color: 'var(--text-dark)',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        {order.customer}
                      </td>
                      <td 
                        className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                        style={{ 
                          color: 'var(--text-dark)',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        {order.restaurant}
                      </td>
                      <td 
                        className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium"
                        style={{ 
                          color: 'var(--dark-heading)',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        Rs. {order.total}
                      </td>
                      <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm">
                        <span 
                          className="px-2 py-1 rounded text-xs font-medium"
                          style={{ 
                            backgroundColor: statusColors.bg,
                            color: statusColors.text,
                            fontFamily: 'var(--font-body)'
                          }}
                        >
                      {order.status}
                    </span>
                  </td>
                      <td 
                        className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                        style={{ 
                          color: 'var(--text-dark)',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        {order.date}
                      </td>
                      <td className="px-3 sm:px-4 md:px-6 py-3 text-center">
                        <div className="flex justify-center gap-1 sm:gap-2">
                          <button 
                            onClick={() => handleView(order)} 
                            className="p-1.5 hover:shadow-sm rounded transition active:scale-95"
                            style={{ backgroundColor: '#DBEAFE' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BFDBFE'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DBEAFE'}
                            title="View"
                          >
                            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: 'var(--primary-green)' }} />
                      </button>
                          <button 
                            onClick={() => handleEdit(order)} 
                            className="p-1.5 hover:shadow-sm rounded transition active:scale-95"
                            style={{ backgroundColor: '#DBEAFE' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BFDBFE'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DBEAFE'}
                            title="Edit"
                          >
                            <Edit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#2563EB' }} />
                      </button>
                          <button 
                            onClick={() => handleDelete(order.id)} 
                            className="p-1.5 hover:shadow-sm rounded transition active:scale-95"
                            style={{ backgroundColor: '#FEE2E2' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FECACA'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FEE2E2'}
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#DC2626' }} />
                      </button>
                    </div>
                  </td>
                </tr>
                  )
                })
            ) : (
              <tr>
                  <td 
                    colSpan={7} 
                    className="px-3 sm:px-4 md:px-6 py-8 sm:py-12 text-center text-xs sm:text-sm"
                    style={{ 
                      color: 'var(--text-dark)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
      </div>

      {/* View Modal */}
      {viewingId && !editingId && editData && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div 
              className="flex justify-between items-center mb-4 sticky top-0 bg-white pb-4 border-b"
              style={{ borderColor: '#E5E5E5' }}
            >
              <h2 
                className="text-lg sm:text-xl font-bold"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Order Details
              </h2>
              <button 
                onClick={handleCloseModal} 
                className="text-gray-500 hover:text-gray-700 transition p-1"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div 
              className="space-y-3 p-4 rounded-lg mb-4"
              style={{ backgroundColor: '#F9FAFB' }}
            >
              {(() => {
                const statusColors = getStatusColor(editData.status)
                return (
                  <>
                    <p>
                      <span 
                        className="font-medium"
                        style={{ 
                          color: 'var(--dark-heading)',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        Order ID:
                      </span>{' '}
                      <span style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dark)' }}>
                        {editData.id}
                      </span>
                    </p>
                    <p>
                      <span 
                        className="font-medium"
                        style={{ 
                          color: 'var(--dark-heading)',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        Customer:
                      </span>{' '}
                      <span style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dark)' }}>
                        {editData.customer}
                      </span>
                    </p>
                    <p>
                      <span 
                        className="font-medium"
                        style={{ 
                          color: 'var(--dark-heading)',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        Restaurant:
                      </span>{' '}
                      <span style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dark)' }}>
                        {editData.restaurant}
                      </span>
                    </p>
                    <p>
                      <span 
                        className="font-medium"
                        style={{ 
                          color: 'var(--dark-heading)',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        Total:
                      </span>{' '}
                      <span style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dark)' }}>
                        Rs. {editData.total}
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span 
                        className="font-medium"
                        style={{ 
                          color: 'var(--dark-heading)',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        Status:
                      </span>
                      <span 
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{ 
                          backgroundColor: statusColors.bg,
                          color: statusColors.text,
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        {editData.status}
                      </span>
                    </p>
                    <p>
                      <span 
                        className="font-medium"
                        style={{ 
                          color: 'var(--dark-heading)',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        Date:
                      </span>{' '}
                      <span style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dark)' }}>
                        {editData.date}
                      </span>
                    </p>
                  </>
                )
              })()}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleCloseModal} 
                className="flex-1 px-4 py-2 border rounded-lg transition-all active:scale-95"
                style={{ 
                  borderColor: '#D1D5DB',
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Close
              </button>
              <button 
                onClick={() => handleEdit(editData)} 
                className="flex-1 px-4 py-2 rounded-lg transition-all active:scale-95"
                style={{ 
                  backgroundColor: 'var(--primary-green)',
                  color: 'var(--text-light)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingId && editData && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div 
              className="flex justify-between items-center mb-4 sticky top-0 bg-white pb-4 border-b"
              style={{ borderColor: '#E5E5E5' }}
            >
              <h2 
                className="text-lg sm:text-xl font-bold"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Edit Order
              </h2>
              <button 
                onClick={handleCloseModal} 
                className="text-gray-500 hover:text-gray-700 transition p-1"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Customer
                </label>
                <input 
                  type="text" 
                  value={editData.customer} 
                  onChange={(e) => setEditData({...editData, customer: e.target.value})} 
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                />
              </div>
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Restaurant
                </label>
                <input 
                  type="text" 
                  value={editData.restaurant} 
                  onChange={(e) => setEditData({...editData, restaurant: e.target.value})} 
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                />
              </div>
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Total (Rs.)
                </label>
                <input 
                  type="number" 
                  value={editData.total} 
                  onChange={(e) => setEditData({...editData, total: parseInt(e.target.value)})} 
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                />
              </div>
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Status
                </label>
                <select 
                  value={editData.status} 
                  onChange={(e) => setEditData({...editData, status: e.target.value as "Delivered" | "In Progress" | "Cancelled"})} 
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                >
                  <option value="In Progress">In Progress</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
              <button 
                onClick={handleCloseModal} 
                className="flex-1 px-4 py-2 border rounded-lg transition-all active:scale-95"
                style={{ 
                  borderColor: '#D1D5DB',
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Cancel
              </button>
              <button 
                onClick={handleSave} 
                className="flex-1 px-4 py-2 rounded-lg transition-all active:scale-95"
                style={{ 
                  backgroundColor: 'var(--primary-green)',
                  color: 'var(--text-light)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Order Modal */}
      {showAddModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => setShowAddModal(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div 
              className="flex justify-between items-center mb-4 sticky top-0 bg-white pb-4 border-b"
              style={{ borderColor: '#E5E5E5' }}
            >
              <h2 
                className="text-lg sm:text-xl font-bold"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Add Order
              </h2>
              <button 
                onClick={() => setShowAddModal(false)} 
                className="text-gray-500 hover:text-gray-700 transition p-1"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Customer Name
                </label>
                <input 
                  type="text" 
                  value={newOrder.customer} 
                  onChange={(e) => setNewOrder({...newOrder, customer: e.target.value})} 
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                  placeholder="Enter customer name" 
                />
              </div>
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Restaurant Name
                </label>
                <input 
                  type="text" 
                  value={newOrder.restaurant} 
                  onChange={(e) => setNewOrder({...newOrder, restaurant: e.target.value})} 
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                  placeholder="Enter restaurant name" 
                />
              </div>
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Total Amount (Rs.)
                </label>
                <input 
                  type="number" 
                  value={newOrder.total || ""} 
                  onChange={(e) => setNewOrder({...newOrder, total: parseInt(e.target.value) || 0})} 
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                  placeholder="Enter amount" 
                />
              </div>
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Status
                </label>
                <select 
                  value={newOrder.status} 
                  onChange={(e) => setNewOrder({...newOrder, status: e.target.value as "Delivered" | "In Progress" | "Cancelled"})} 
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                >
                  <option value="In Progress">In Progress</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
              <button 
                onClick={() => setShowAddModal(false)} 
                className="flex-1 px-4 py-2 border rounded-lg transition-all active:scale-95"
                style={{ 
                  borderColor: '#D1D5DB',
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Cancel
              </button>
              <button 
                onClick={handleAddOrder} 
                className="flex-1 px-4 py-2 rounded-lg transition-all active:scale-95"
                style={{ 
                  backgroundColor: 'var(--primary-green)',
                  color: 'var(--text-light)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
              >
                Add Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}