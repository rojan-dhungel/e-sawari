'use client';

import React, { useState } from 'react';
import { Upload, Edit2, Check, X } from 'lucide-react';

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
    { id: 1, name: 'Driving License', expiryDate: '', status: 'UPLOADED AND APPROVED', comment: '-' },
    { id: 2, name: 'Bluebook Registration Page', expiryDate: '', status: 'UPLOADED AND APPROVED', comment: '-' },
    { id: 3, name: 'Bluebook Owner Page', expiryDate: '', status: 'UPLOADED AND APPROVED', comment: '-' },
    { id: 4, name: 'Bluebook Renewal Page', expiryDate: '', status: 'UPLOADED AND APPROVED', comment: '-' },
  ]);

  const [formData, setFormData] = useState<FormData>({
    area: '',
    name: 'test1112',
    address: '',
    gender: 'Male',
    isCompanyDriver: 'No',
    mobile: '8908908999',
    email: 'test1112@gmail.com',
    transportType: 'Taxi',
    vehicleType: 'Tuk Tuk',
    carMake: 'test12',
    carModel: 'test12',
    carColor: 'red',
    carNumber: 'tn1234'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    console.log('Updating rider details:', formData);
    alert('Rider details updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Rider Details</h1>
          <p className="text-gray-600 mt-1">Manage rider information and documents</p>
        </div>

        {/* Documents Table */}
        <div className="bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Documents</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">S.No</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Expiry Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Comment</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Action</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Approval</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {documents.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-600">{doc.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{doc.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{doc.expiryDate || '-'}</td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-green-600">
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{doc.comment}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-3">
                        <button className="text-green-600 hover:text-green-700 transition" title="Upload">
                          <Upload size={18} />
                        </button>
                        <button className="text-blue-600 hover:text-blue-700 transition" title="Edit">
                          <Edit2 size={18} />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-2">
                        <button className="flex items-center gap-1 text-sm text-green-600 hover:text-green-700 transition">
                          <Check size={16} />
                          <span>Approved</span>
                        </button>
                        <button className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700 transition">
                          <X size={16} />
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

        {/* Rider Details Form */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Rider Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Select Area */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Area <span className="text-red-500">*</span>
              </label>
              <select
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              >
                <option value="">Select an area</option>
                <option value="area1">Area 1</option>
                <option value="area2">Area 2</option>
              </select>
            </div>

            {/* Empty cell for spacing */}
            <div></div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Is Company Driver */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Is Company Driver <span className="text-red-500">*</span>
              </label>
              <select
                name="isCompanyDriver"
                value={formData.isCompanyDriver}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>

            {/* Transport Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Transport Type <span className="text-red-500">*</span>
              </label>
              <select
                name="transportType"
                value={formData.transportType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              >
                <option value="Taxi">Taxi</option>
                <option value="Bus">Bus</option>
                <option value="Bike">Bike</option>
              </select>
            </div>

            {/* Vehicle Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Type <span className="text-red-500">*</span>
              </label>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              >
                <option value="Tuk Tuk">Tuk Tuk</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
              </select>
            </div>

            {/* Car Make */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Car Make <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="carMake"
                value={formData.carMake}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>

            {/* Car Model */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Car Model <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="carModel"
                value={formData.carModel}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>

            {/* Car Color */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Car Color <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="carColor"
                value={formData.carColor}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>

            {/* Car Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Car Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="carNumber"
                value={formData.carNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>
          </div>

          {/* Update Button */}
          <div className="flex justify-end mt-8">
            <button 
              onClick={handleUpdate}
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}