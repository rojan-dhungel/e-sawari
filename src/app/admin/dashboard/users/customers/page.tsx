"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, X, Eye } from 'lucide-react'

export default function CustomersPage() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@example.com",
      phone: "9841234567",
      status: "Active",
      totalRides: 45,
    },
    {
      id: 2,
      name: "Arjun Patel",
      email: "arjun@example.com",
      phone: "9845678901",
      status: "Active",
      totalRides: 23,
    },
    {
      id: 3,
      name: "Neha Singh",
      email: "neha@example.com",
      phone: "9849876543",
      status: "Active",
      totalRides: 67,
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCustomer, setSelectedCustomer] = useState<typeof customers[0] | null>(null)
  const [editingCustomer, setEditingCustomer] = useState<typeof customers[0] | null>(null)
  const [editForm, setEditForm] = useState<typeof customers[0] | null>(null)
  const [isAddingCustomer, setIsAddingCustomer] = useState(false)
  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", phone: "", status: "Active", totalRides: 0 })
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null)

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
  )

  const handleEdit = (customer: typeof customers[0]) => {
    setEditingCustomer(customer)
    setEditForm({ ...customer })
  }

  const handleSaveEdit = () => {
    if (editForm) {
      setCustomers(customers.map((c) => (c.id === editForm.id ? editForm : c)))
      setEditingCustomer(null)
      setEditForm(null)
    }
  }

  const handleDeleteCustomer = (id: number) => {
    setCustomers(customers.filter((c) => c.id !== id))
    setSelectedCustomer(null)
    setDeleteConfirm(null)
  }

  const handleAddCustomer = () => {
    if (newCustomer.name && newCustomer.email && newCustomer.phone) {
      const customer = {
        id: Math.max(...customers.map(c => c.id), 0) + 1,
        ...newCustomer,
      }
      setCustomers([...customers, customer])
      setIsAddingCustomer(false)
      setNewCustomer({ name: "", email: "", phone: "", status: "Active", totalRides: 0 })
    }
  }

  return (
    <div>
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader title="Customers" description="Manage all customers" />
        <Button 
          onClick={() => setIsAddingCustomer(true)}
          className="transition-all duration-200 hover:shadow-md active:scale-95 w-full sm:w-auto"
          style={{ 
            backgroundColor: 'var(--primary-green)',
            color: 'var(--text-light)',
            fontFamily: 'var(--font-body)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Customer
        </Button>
      </div>

      <div 
        className="mb-4 sm:mb-6 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-3"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <input
          type="text"
          placeholder="Search by name, email, or phone..."
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
          className="px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95"
          style={{ 
            backgroundColor: 'var(--primary-green)',
            color: 'var(--text-light)',
            fontFamily: 'var(--font-body)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
        >
          Go
        </button>
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
                  Name
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Email
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Phone
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
                  Total Rides
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
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td 
                    colSpan={6} 
                    className="px-3 sm:px-4 md:px-6 py-8 sm:py-12 text-center text-xs sm:text-sm"
                    style={{ 
                      color: 'var(--text-dark)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    No customers found
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((customer) => (
                  <tr 
                    key={customer.id} 
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
                      {customer.name}
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                      style={{ 
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {customer.email}
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm"
                      style={{ 
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {customer.phone}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm">
                      <span 
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{ 
                          backgroundColor: '#D1FAE5',
                          color: '#065F46',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        {customer.status}
                      </span>
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium"
                      style={{ 
                        color: 'var(--dark-heading)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {customer.totalRides}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-center">
                      <div className="flex justify-center gap-1 sm:gap-2">
                        <button
                          onClick={() => setSelectedCustomer(customer)}
                          className="p-1.5 hover:shadow-sm rounded transition active:scale-95"
                          style={{ backgroundColor: '#DBEAFE' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BFDBFE'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DBEAFE'}
                          title="View"
                        >
                          <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: 'var(--primary-green)' }} />
                        </button>
                        <button
                          onClick={() => handleEdit(customer)}
                          className="p-1.5 hover:shadow-sm rounded transition active:scale-95"
                          style={{ backgroundColor: '#DBEAFE' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BFDBFE'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DBEAFE'}
                          title="Edit"
                        >
                          <Edit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#2563EB' }} />
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(customer.id)}
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
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedCustomer && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => setSelectedCustomer(null)}
        >
          <div 
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div 
              className="border-b p-4 sm:p-6 flex justify-between items-center sticky top-0 bg-white"
              style={{ borderColor: '#E5E5E5' }}
            >
              <h2 
                className="text-lg sm:text-xl font-bold"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Customer Details
              </h2>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="text-gray-500 hover:text-gray-700 transition p-1"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <p 
                  className="text-xs uppercase tracking-wide"
                  style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Name
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {selectedCustomer.name}
                </p>
              </div>
              <div>
                <p 
                  className="text-xs uppercase tracking-wide"
                  style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Email
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {selectedCustomer.email}
                </p>
              </div>
              <div>
                <p 
                  className="text-xs uppercase tracking-wide"
                  style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Phone
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {selectedCustomer.phone}
                </p>
              </div>
              <div>
                <p 
                  className="text-xs uppercase tracking-wide"
                  style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Total Rides
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {selectedCustomer.totalRides}
                </p>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <p 
                  className="text-xs uppercase tracking-wide"
                  style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Status
                </p>
                <p 
                  className="text-base sm:text-lg font-semibold mt-1"
                  style={{ 
                    color: '#059669',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {selectedCustomer.status}
                </p>
              </div>
            </div>
            <div 
              className="border-t p-4 sm:p-6 flex justify-end gap-3"
              style={{ borderColor: '#E5E5E5' }}
            >
              <button
                onClick={() => setSelectedCustomer(null)}
                className="px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95"
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
            </div>
          </div>
        </div>
      )}

      {editingCustomer && editForm && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => {
            setEditingCustomer(null)
            setEditForm(null)
          }}
        >
          <div 
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div 
              className="border-b p-4 sm:p-6 flex justify-between items-center sticky top-0 bg-white"
              style={{ borderColor: '#E5E5E5' }}
            >
              <h2 
                className="text-lg sm:text-xl font-bold"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Edit Customer
              </h2>
              <button
                onClick={() => {
                  setEditingCustomer(null)
                  setEditForm(null)
                }}
                className="text-gray-500 hover:text-gray-700 transition p-1"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
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
                  Email
                </label>
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
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
                  Phone
                </label>
                <input
                  type="text"
                  value={editForm.phone}
                  onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
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
                  Total Rides
                </label>
                <input
                  type="number"
                  value={editForm.totalRides}
                  onChange={(e) => setEditForm({ ...editForm, totalRides: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                />
              </div>
            </div>
            <div 
              className="border-t p-4 sm:p-6 flex flex-col sm:flex-row justify-end gap-3"
              style={{ borderColor: '#E5E5E5' }}
            >
              <button
                onClick={() => {
                  setEditingCustomer(null)
                  setEditForm(null)
                }}
                className="px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95 w-full sm:w-auto"
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
                onClick={handleSaveEdit}
                className="px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95 w-full sm:w-auto"
                style={{ 
                  backgroundColor: 'var(--primary-green)',
                  color: 'var(--text-light)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {isAddingCustomer && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => {
            setIsAddingCustomer(false)
            setNewCustomer({ name: "", email: "", phone: "", status: "Active", totalRides: 0 })
          }}
        >
          <div 
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div 
              className="border-b p-4 sm:p-6 flex justify-between items-center sticky top-0 bg-white"
              style={{ borderColor: '#E5E5E5' }}
            >
              <h2 
                className="text-lg sm:text-xl font-bold"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Add New Customer
              </h2>
              <button
                onClick={() => {
                  setIsAddingCustomer(false)
                  setNewCustomer({ name: "", email: "", phone: "", status: "Active", totalRides: 0 })
                }}
                className="text-gray-500 hover:text-gray-700 transition p-1"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  value={newCustomer.name}
                  onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
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
                  Email
                </label>
                <input
                  type="email"
                  value={newCustomer.email}
                  onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                  placeholder="Enter email"
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
                  Phone
                </label>
                <input
                  type="text"
                  value={newCustomer.phone}
                  onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E5E5E5',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-green)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E5E5E5'}
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <div 
              className="border-t p-4 sm:p-6 flex flex-col sm:flex-row justify-end gap-3"
              style={{ borderColor: '#E5E5E5' }}
            >
              <button
                onClick={() => {
                  setIsAddingCustomer(false)
                  setNewCustomer({ name: "", email: "", phone: "", status: "Active", totalRides: 0 })
                }}
                className="px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95 w-full sm:w-auto"
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
                onClick={handleAddCustomer}
                className="px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95 w-full sm:w-auto"
                style={{ 
                  backgroundColor: 'var(--primary-green)',
                  color: 'var(--text-light)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
              >
                Add Customer
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteConfirm !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => setDeleteConfirm(null)}
        >
          <div 
            className="bg-white rounded-lg shadow-lg max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div className="p-4 sm:p-6">
              <h2 
                className="text-base sm:text-lg font-bold mb-2"
                style={{ 
                  color: 'var(--dark-heading)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Delete Customer?
              </h2>
              <p 
                className="text-sm sm:text-base mb-6"
                style={{ 
                  color: 'var(--text-dark)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                Are you sure you want to delete this customer? This action cannot be undone.
              </p>
            </div>
            <div 
              className="border-t p-4 sm:p-6 flex flex-col sm:flex-row justify-end gap-3"
              style={{ borderColor: '#E5E5E5' }}
            >
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95 w-full sm:w-auto"
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
                onClick={() => handleDeleteCustomer(deleteConfirm)}
                className="px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95 w-full sm:w-auto"
                style={{ 
                  backgroundColor: '#DC2626',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B91C1C'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DC2626'}
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
