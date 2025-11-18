"use client"

import { useState } from "react"
import PageHeader from "@/components/admin/page-header"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"

interface MenuItem {
  id: number
  name: string
  restaurant: string
  category: string
  price: number
  status: string
}

export default function MenuItemsPage() {
  const [menuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: "Butter Chicken",
      restaurant: "Taj Express",
      category: "Main Course",
      price: 450,
      status: "Active",
    },
    {
      id: 2,
      name: "Momos",
      restaurant: "Nepali Kitchen",
      category: "Appetizers",
      price: 200,
      status: "Active",
    },
  ])

  return (
    <div>
      {/* Header Section */}
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader title="Menu Items" description="Manage all menu items" />
        <Button 
          className="transition-all duration-200 hover:shadow-md active:scale-95 w-full sm:w-auto"
          style={{ 
            backgroundColor: 'var(--primary-green)',
            color: 'var(--text-light)',
            fontFamily: 'var(--font-body)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a5a2f'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Menu Item
        </Button>
      </div>

      {/* Table Section */}
      <div 
        className="overflow-hidden rounded-lg border shadow-sm -mx-3 sm:mx-0"
        style={{ 
          borderColor: '#E5E5E5',
          backgroundColor: '#FFFFFF'
        }}
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
                  Item Name
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
                  Category
                </th>
                <th 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Price
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
              {menuItems.length > 0 ? (
                menuItems.map((item) => (
                  <tr 
                    key={item.id} 
                    className="transition-colors duration-200"
                    style={{ backgroundColor: '#FFFFFF' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
                  >
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium"
                      style={{ 
                        color: 'var(--dark-heading)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {item.name}
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm"
                      style={{ 
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {item.restaurant}
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm"
                      style={{ 
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {item.category}
                    </td>
                    <td 
                      className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium"
                      style={{ 
                        color: 'var(--dark-heading)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      Rs. {item.price}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                      <span 
                        className="inline-flex rounded-full px-2 sm:px-3 py-1 text-xs font-medium"
                        style={{ 
                          backgroundColor: '#D1FAE5',
                          color: '#065F46',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center">
                      <div className="flex justify-center gap-1 sm:gap-2">
                        <button
                          className="rounded p-1.5 transition-colors duration-200 hover:shadow-sm active:scale-95"
                          style={{ backgroundColor: '#DBEAFE' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BFDBFE'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DBEAFE'}
                          aria-label={`Edit ${item.name}`}
                        >
                          <Edit2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{ color: '#2563EB' }} />
                        </button>
                        <button
                          className="rounded p-1.5 transition-colors duration-200 hover:shadow-sm active:scale-95"
                          style={{ backgroundColor: '#FEE2E2' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FECACA'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FEE2E2'}
                          aria-label={`Delete ${item.name}`}
                        >
                          <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{ color: '#DC2626' }} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td 
                    colSpan={6} 
                    className="px-3 sm:px-4 md:px-6 py-8 sm:py-12 text-center text-xs sm:text-sm"
                    style={{ 
                      color: 'var(--text-dark)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    No menu items found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}