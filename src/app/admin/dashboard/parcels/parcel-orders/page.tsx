"use client"

import { useState, useEffect } from "react"
import PageHeader from "@/components/admin/page-header"
import { Eye, Edit2, Trash2, X, Plus } from "lucide-react"

interface ParcelOrder {
  id: string
  sender: string
  receiver: string
  packageType: string
  status: "Delivered" | "In Transit" | "Pending"
  date: string
}

const STATUS_STYLES = {
  Delivered: { bg: "#D1FAE5", text: "#065F46" },
  "In Transit": { bg: "#DBEAFE", text: "#1D4ED8" },
  Pending: { bg: "#FEF3C7", text: "#92400E" },
}

export default function ParcelOrdersPage() {
  const [parcelOrders, setParcelOrders] = useState<ParcelOrder[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [viewingId, setViewingId] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editData, setEditData] = useState<ParcelOrder | null>(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newParcel, setNewParcel] = useState({
    sender: "",
    receiver: "",
    packageType: "",
    status: "Pending" as ParcelOrder["status"],
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

  const filteredOrders = parcelOrders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.sender.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const openView = (order: ParcelOrder) => {
    setViewingId(order.id)
    setEditData(order)
  }

  const openEdit = (order: ParcelOrder) => {
    setEditingId(order.id)
    setEditData(order)
    setViewingId(null)
  }

  const handleSaveEdit = () => {
    if (!editData) return
    setParcelOrders((prev) => prev.map((order) => (order.id === editingId ? editData : order)))
    closeModals()
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
      date: new Date().toISOString().split("T")[0],
    }

    setParcelOrders((prev) => [...prev, parcel])
    setShowAddModal(false)
    setNewParcel({ sender: "", receiver: "", packageType: "", status: "Pending" })
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this parcel order?")) {
      setParcelOrders((prev) => prev.filter((order) => order.id !== id))
    }
  }

  const closeModals = () => {
    setViewingId(null)
    setEditingId(null)
    setEditData(null)
  }

  return (
    <div>
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader title="Parcel Orders" description="Manage all parcel deliveries" />
        <button
          onClick={() => setShowAddModal(true)}
          className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-md active:scale-95 flex items-center justify-center"
          style={{
            backgroundColor: "var(--primary-green)",
            color: "var(--text-light)",
            fontFamily: "var(--font-body)",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#1a5a2f")}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "var(--primary-green)")}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Parcel
        </button>
      </div>

      <div
        className="mb-4 sm:mb-6 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-3"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <input
          type="text"
          placeholder="Search by Parcel ID or Sender name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
          style={{
            borderColor: "#E5E5E5",
            fontFamily: "var(--font-body)",
          }}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => (e.currentTarget.style.borderColor = "var(--primary-green)")}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => (e.currentTarget.style.borderColor = "#E5E5E5")}
        />
        <button
          onClick={() => setSearchTerm("")}
          className="px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95"
          style={{
            borderColor: "#D1D5DB",
            color: "var(--dark-heading)",
            fontFamily: "var(--font-body)",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          Reset
        </button>
      </div>

      <div
        className="rounded-lg shadow-sm overflow-hidden -mx-3 sm:mx-0"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px]">
            <thead
              className="border-b"
              style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E5E5" }}
            >
              <tr>
                {[
                  "Parcel ID",
                  "Sender",
                  "Receiver",
                  "Type",
                  "Status",
                  "Date",
                  "Actions",
                ].map((header) => (
                  <th
                    key={header}
                    className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold whitespace-nowrap ${
                      header === "Actions" ? "text-center" : "text-left"
                    }`}
                    style={{
                      color: "var(--dark-heading)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: "#E5E5E5" }}>
              {filteredOrders.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-3 sm:px-4 md:px-6 py-8 sm:py-12 text-center text-xs sm:text-sm"
                    style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}
                  >
                    No parcel orders found
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="transition-colors duration-200"
                    style={{ backgroundColor: "#FFFFFF" }}
                    onMouseEnter={(e: React.MouseEvent<HTMLTableRowElement>) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                    onMouseLeave={(e: React.MouseEvent<HTMLTableRowElement>) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
                  >
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}>
                      {order.id}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                      {order.sender}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                      {order.receiver}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                      {order.packageType}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm">
                      <span
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{
                          backgroundColor: STATUS_STYLES[order.status].bg,
                          color: STATUS_STYLES[order.status].text,
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                      {order.date}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 text-center">
                      <div className="flex justify-center gap-1 sm:gap-2">
                        <button
                          onClick={() => openView(order)}
                          className="p-1.5 rounded-lg transition active:scale-95"
                          style={{ backgroundColor: "#E5E7EB" }}
                          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#D1D5DB")}
                          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#E5E7EB")}
                          title="View"
                        >
                          <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: "var(--text-dark)" }} />
                        </button>
                        <button
                          onClick={() => openEdit(order)}
                          className="p-1.5 rounded-lg transition active:scale-95"
                          style={{ backgroundColor: "#DBEAFE" }}
                          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#BFDBFE")}
                          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#DBEAFE")}
                          title="Edit"
                        >
                          <Edit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: "#2563EB" }} />
                        </button>
                        <button
                          onClick={() => handleDelete(order.id)}
                          className="p-1.5 rounded-lg transition active:scale-95"
                          style={{ backgroundColor: "#FEE2E2" }}
                          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#FECACA")}
                          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#FEE2E2")}
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

      {viewingId && !editingId && editData && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={closeModals}
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
                Parcel Details
              </h2>
              <button onClick={closeModals} className="text-gray-500 hover:text-gray-700 transition p-1">
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-3">
              {[
                { label: "Parcel ID", value: editData.id },
                { label: "Sender", value: editData.sender },
                { label: "Receiver", value: editData.receiver },
                { label: "Type", value: editData.packageType },
                { label: "Status", value: editData.status },
                { label: "Date", value: editData.date },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                    {item.label}
                  </p>
                  <p className="text-base sm:text-lg font-semibold mt-1" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}>
                    {item.label === "Status" ? (
                      <span
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{
                          backgroundColor: STATUS_STYLES[editData.status].bg,
                          color: STATUS_STYLES[editData.status].text,
                        }}
                      >
                        {item.value}
                      </span>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t p-4 sm:p-6 flex gap-3" style={{ borderColor: "#E5E5E5" }}>
              <button
                onClick={closeModals}
                className="flex-1 px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95"
                style={{ borderColor: "#D1D5DB", color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                Close
              </button>
              <button
                onClick={() => openEdit(editData)}
                className="flex-1 px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95"
                style={{ backgroundColor: "var(--primary-green)", color: "var(--text-light)", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#1a5a2f")}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "var(--primary-green)")}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}

      {editingId && editData && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={closeModals}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div className="border-b p-4 sm:p-6 flex justify-between items-center sticky top-0 bg-white" style={{ borderColor: "#E5E5E5" }}>
              <h2 className="text-lg sm:text-xl font-bold" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-heading)" }}>
                Edit Parcel Order
              </h2>
              <button onClick={closeModals} className="text-gray-500 hover:text-gray-700 transition p-1">
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              {[
                { label: "Sender", name: "sender" },
                { label: "Receiver", name: "receiver" },
                { label: "Package Type", name: "packageType" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}>
                    {field.label}
                  </label>
                  <input
                    type="text"
                    value={editData[field.name as keyof ParcelOrder]}
                    onChange={(e) => setEditData({ ...editData, [field.name]: e.target.value } as ParcelOrder)}
                    className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: "#E5E5E5", fontFamily: "var(--font-body)" }}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => (e.currentTarget.style.borderColor = "var(--primary-green)")}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => (e.currentTarget.style.borderColor = "#E5E5E5")}
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}>
                  Status
                </label>
                <select
                  value={editData.status}
                  onChange={(e) => setEditData({ ...editData, status: e.target.value as ParcelOrder["status"] })}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: "#E5E5E5", fontFamily: "var(--font-body)" }}
                  onFocus={(e: React.FocusEvent<HTMLSelectElement>) => (e.currentTarget.style.borderColor = "var(--primary-green)")}
                  onBlur={(e: React.FocusEvent<HTMLSelectElement>) => (e.currentTarget.style.borderColor = "#E5E5E5")}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
            <div className="border-t p-4 sm:p-6 flex gap-3" style={{ borderColor: "#E5E5E5" }}>
              <button
                onClick={closeModals}
                className="flex-1 px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95"
                style={{ borderColor: "#D1D5DB", color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="flex-1 px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95"
                style={{ backgroundColor: "var(--primary-green)", color: "var(--text-light)", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#1a5a2f")}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "var(--primary-green)")}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div className="border-b p-4 sm:p-6 flex justify-between items-center sticky top-0 bg-white" style={{ borderColor: "#E5E5E5" }}>
              <h2 className="text-lg sm:text-xl font-bold" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-heading)" }}>
                Add Parcel Order
              </h2>
              <button onClick={() => setShowAddModal(false)} className="text-gray-500 hover:text-gray-700 transition p-1">
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              {[
                { label: "Sender Name", name: "sender" },
                { label: "Receiver Name", name: "receiver" },
                { label: "Package Type", name: "packageType" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}>
                    {field.label}
                  </label>
                  <input
                    type="text"
                    value={newParcel[field.name as keyof typeof newParcel]}
                    onChange={(e) => setNewParcel({ ...newParcel, [field.name]: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: "#E5E5E5", fontFamily: "var(--font-body)" }}
                    placeholder={`Enter ${field.name}`}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => (e.currentTarget.style.borderColor = "var(--primary-green)")}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => (e.currentTarget.style.borderColor = "#E5E5E5")}
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}>
                  Status
                </label>
                <select
                  value={newParcel.status}
                  onChange={(e) => setNewParcel({ ...newParcel, status: e.target.value as ParcelOrder["status"] })}
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: "#E5E5E5", fontFamily: "var(--font-body)" }}
                  onFocus={(e: React.FocusEvent<HTMLSelectElement>) => (e.currentTarget.style.borderColor = "var(--primary-green)")}
                  onBlur={(e: React.FocusEvent<HTMLSelectElement>) => (e.currentTarget.style.borderColor = "#E5E5E5")}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
            <div className="border-t p-4 sm:p-6 flex gap-3" style={{ borderColor: "#E5E5E5" }}>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95"
                style={{ borderColor: "#D1D5DB", color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                Cancel
              </button>
              <button
                onClick={handleAddParcel}
                className="flex-1 px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95"
                style={{ backgroundColor: "var(--primary-green)", color: "var(--text-light)", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#1a5a2f")}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "var(--primary-green)")}
              >
                Add Parcel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}