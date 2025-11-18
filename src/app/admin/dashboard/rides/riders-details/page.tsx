"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Upload, Edit2, Check, X } from "lucide-react"

interface Document {
  id: number
  name: string
  expiryDate: string
  status: string
  comment: string
}

interface FormData {
  area: string
  name: string
  address: string
  gender: string
  isCompanyDriver: string
  mobile: string
  email: string
  transportType: string
  vehicleType: string
  carMake: string
  carModel: string
  carColor: string
  carNumber: string
}

export default function RiderDetailsPage() {
  const [documents] = useState<Document[]>([
    { id: 1, name: "Driving License", expiryDate: "", status: "UPLOADED AND APPROVED", comment: "-" },
    { id: 2, name: "Bluebook Registration Page", expiryDate: "", status: "UPLOADED AND APPROVED", comment: "-" },
    { id: 3, name: "Bluebook Owner Page", expiryDate: "", status: "UPLOADED AND APPROVED", comment: "-" },
    { id: 4, name: "Bluebook Renewal Page", expiryDate: "", status: "UPLOADED AND APPROVED", comment: "-" },
  ])

  const [formData, setFormData] = useState<FormData>({
    area: "",
    name: "test1112",
    address: "",
    gender: "Male",
    isCompanyDriver: "No",
    mobile: "8908908999",
    email: "test1112@gmail.com",
    transportType: "Taxi",
    vehicleType: "Tuk Tuk",
    carMake: "test12",
    carModel: "test12",
    carColor: "red",
    carNumber: "tn1234",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleUpdate = () => {
    alert("Rider details updated successfully!")
  }

  return (
    <div>
      <div className="mb-4 sm:mb-6">
        <PageHeader title="Rider Details" description="Manage rider information and documents" />
      </div>

      <div
        className="rounded-lg shadow-sm overflow-hidden -mx-3 sm:mx-0 mb-6"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="px-4 sm:px-6 py-4 border-b" style={{ borderColor: "#E5E5E5" }}>
          <h2
            className="text-base sm:text-lg font-semibold"
            style={{ color: "var(--dark-heading)", fontFamily: "var(--font-heading)" }}
          >
            Documents
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px]">
            <thead
              className="border-b"
              style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E5E5" }}
            >
              <tr>
                {[
                  "S.No",
                  "Name",
                  "Expiry Date",
                  "Status",
                  "Comment",
                  "Action",
                  "Approval",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
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
              {documents.map((doc, index) => (
                <tr
                  key={doc.id}
                  className="transition-colors duration-200"
                  style={{ backgroundColor: "#FFFFFF" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
                >
                  <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                    {index + 1}
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium" style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}>
                    {doc.name}
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                    {doc.expiryDate || "-"}
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-medium" style={{ color: "#047857", fontFamily: "var(--font-body)" }}>
                    {doc.status}
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-body)" }}>
                    {doc.comment}
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3">
                    <div className="flex gap-2 sm:gap-3">
                      <button className="text-green-600 hover:text-green-700 transition" title="Upload">
                        <Upload className="w-4 h-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-700 transition" title="Edit">
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <button className="flex items-center gap-1 text-xs sm:text-sm text-green-600 hover:text-green-700 transition">
                        <Check className="w-4 h-4" />
                        <span>Approved</span>
                      </button>
                      <button className="flex items-center gap-1 text-xs sm:text-sm text-red-600 hover:text-red-700 transition">
                        <X className="w-4 h-4" />
                        <span>Disapproved</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="rounded-lg shadow-sm p-4 sm:p-6 md:p-8"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="mb-4 sm:mb-6">
          <h2
            className="text-base sm:text-lg font-semibold"
            style={{ color: "var(--dark-heading)", fontFamily: "var(--font-heading)" }}
          >
            Rider Information
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {[
            {
              label: "Select Area",
              name: "area",
              type: "select",
              options: [
                { value: "", label: "Select an area" },
                { value: "area1", label: "Area 1" },
                { value: "area2", label: "Area 2" },
              ],
            },
            { label: "Name", name: "name", type: "text" },
            { label: "Address", name: "address", type: "text", placeholder: "Enter address" },
            {
              label: "Gender",
              name: "gender",
              type: "select",
              options: [
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
                { value: "Other", label: "Other" },
              ],
            },
            {
              label: "Is Company Driver",
              name: "isCompanyDriver",
              type: "select",
              options: [
                { value: "No", label: "No" },
                { value: "Yes", label: "Yes" },
              ],
            },
            { label: "Mobile", name: "mobile", type: "tel" },
            { label: "Email", name: "email", type: "email" },
            {
              label: "Transport Type",
              name: "transportType",
              type: "select",
              options: [
                { value: "Taxi", label: "Taxi" },
                { value: "Bus", label: "Bus" },
                { value: "Bike", label: "Bike" },
              ],
            },
            {
              label: "Vehicle Type",
              name: "vehicleType",
              type: "select",
              options: [
                { value: "Tuk Tuk", label: "Tuk Tuk" },
                { value: "Sedan", label: "Sedan" },
                { value: "SUV", label: "SUV" },
              ],
            },
            { label: "Car Make", name: "carMake", type: "text" },
            { label: "Car Model", name: "carModel", type: "text" },
            { label: "Car Color", name: "carColor", type: "text" },
            { label: "Car Number", name: "carNumber", type: "text" },
          ].map((field) => (
            <div key={field.name} className="flex flex-col">
              <label
                className="text-xs sm:text-sm font-medium mb-2"
                style={{ color: "var(--dark-heading)", fontFamily: "var(--font-body)" }}
              >
                {field.label} <span style={{ color: "#DC2626" }}>*</span>
              </label>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={formData[field.name as keyof FormData] as string}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: "#E5E5E5", fontFamily: "var(--font-body)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-green)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E5E5")}
                >
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof FormData] as string}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  className="w-full px-3 sm:px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: "#E5E5E5", fontFamily: "var(--font-body)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-green)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E5E5")}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-6">
          <button
            className="px-4 sm:px-6 py-2 border rounded-lg transition-all active:scale-95"
            style={{
              borderColor: "#D1D5DB",
              color: "var(--dark-heading)",
              fontFamily: "var(--font-body)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            onClick={() => setFormData((prev) => ({ ...prev }))}
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 sm:px-6 py-2 rounded-lg transition-all active:scale-95"
            style={{
              backgroundColor: "var(--primary-green)",
              color: "var(--text-light)",
              fontFamily: "var(--font-body)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a5a2f")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--primary-green)")}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  )
}
