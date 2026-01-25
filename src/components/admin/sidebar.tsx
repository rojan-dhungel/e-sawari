"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Settings, Truck, Users, UtensilsCrossed, ShoppingCart, Package, LayoutDashboard, Car, Store } from 'lucide-react'
import Image from "next/image";

interface MenuItem {
  id: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
  href?: string
  children?: MenuItem[]
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
  },
  {
    id: "administration",
    label: "Administration",
    icon: Settings,
    children: [
      { id: "admin-users", label: "Admin Users", href: "/admin/dashboard/administration/admin-users" },
    ],
  },
  {
    id: "fleet",
    label: "Fleet",
    icon: Truck,
    children: [{ id: "vehicle-types", label: "Vehicle Types", href: "/admin/dashboard/fleet/vehicle-types" }],
  },
  {
    id: "users",
    label: "Users",
    icon: Users,
    children: [
      { id: "drivers", label: "Drivers", href: "/admin/dashboard/users/drivers" },
      { id: "customers", label: "Customers", href: "/admin/dashboard/users/customers" },
      { id: "riders", label: "Riders", href: "/admin/dashboard/users/riders" },
    ],
  },
  {
    id: "rides",
    label: "Rides",
    icon: Car,
    children: [
      { id: "completed-rides", label: "Completed Rides", href: "/admin/dashboard/rides/completed-rides" },
      { id: "cancelled-rides", label: "Cancelled Rides", href: "/admin/dashboard/rides/cancelled-rides" },
      { id: "promo-rides", label: "Promo Rides", href: "/admin/dashboard/rides/promo-rides" },
      { id: "riders-details", label: "Riders Details", href: "/admin/dashboard/rides/riders-details" },
    ],
  },
  {
    id: "restaurant-management",
    label: "Restaurant Management",
    icon: Store,
    children: [
      { id: "restaurants", label: "Restaurant List", href: "/admin/dashboard/restaurant-management/restaurants" },
      { id: "add-restaurant", label: "Add Restaurant", href: "/admin/dashboard/restaurant-management/add-restaurant" },
      { id: "cuisines", label: "Cuisines", href: "/admin/dashboard/restaurant-management/cuisines" },
      { id: "store-toppings", label: "Store Toppings", href: "/admin/dashboard/restaurant-management/store-toppings" },
    ],
  },
  {
    id: "food",
    label: "Food Management",
    icon: UtensilsCrossed,
    children: [
      { id: "restaurant-category", label: "Restaurant Category", href: "/admin/dashboard/food/restaurant-category" },
      { id: "menu-category", label: "Menu Category", href: "/admin/dashboard/food/menu-category" },
      { id: "menu-items", label: "Menu Items", href: "/admin/dashboard/food/menu-items" },
    ],
  },
  {
    id: "orders",
    label: "Orders",
    icon: ShoppingCart,
    children: [{ id: "orders", label: "Orders", href: "/admin/dashboard/orders" }],
  },
  {
    id: "parcels",
    label: "Parcels",
    icon: Package,
    children: [
      { id: "package-types", label: "Package Type", href: "/admin/dashboard/parcels/package-types" },
      { id: "parcel-orders", label: "Parcel Orders", href: "/admin/dashboard/parcels/parcel-orders" },
    ],
  },
]

export default function AdminSidebar({ isOpen, onClose }: { isOpen: boolean; onClose?: () => void }) {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      setIsMobile(width < 640) // sm breakpoint
      setIsTablet(width >= 640 && width < 1024) // md breakpoint
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const handleLinkClick = () => {
    // Close sidebar on mobile/tablet when a link is clicked
    if ((isMobile || isTablet) && onClose) {
      onClose()
    }
  }

  return (
    <>
      {/* Backdrop for mobile and tablet */}
      {(isMobile || isTablet) && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      
      <aside
        className={`
          ${isMobile || isTablet 
            ? `fixed left-0 top-0 h-full z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`
            : isOpen ? "w-64" : "w-0"
          }
          ${isMobile ? "w-[280px]" : isTablet ? "w-64" : ""}
          overflow-y-auto border-r transition-all duration-300 ease-in-out
          ${!isMobile && !isTablet ? "relative" : ""}
        `}
        style={{
          backgroundColor: "var(--light-background)",
          borderColor: "#E5E5E5",
          fontFamily: "var(--font-body)",
        }}
      >
        {/* Sidebar Header */}
        <div className="p-4 sm:p-5 md:p-6 border-b" style={{ borderColor: "#E5E5E5" }}>
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Avatar */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
              <Image
                src="/Images/sawari.webp"
                alt="User"
                width={40}
                height={40}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col leading-tight min-w-0">
              <h2
                className="font-bold text-sm sm:text-base truncate"
                style={{
                  color: "var(--dark-heading)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Sawari
              </h2>

              <p 
                className="text-xs" 
                style={{ 
                  color: "var(--text-dark)",
                  fontFamily: "var(--font-body)"
                }}
              >
                Admin Panel
              </p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="p-2 sm:p-3 md:p-4 space-y-1 sm:space-y-2">
          {MENU_ITEMS.map((item) => (
            <div key={item.id}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-colors hover:bg-gray-200 active:bg-gray-300"
                    style={{
                      color: "var(--dark-heading)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.icon && <item.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
                    <span className="flex-1 text-left font-medium text-sm sm:text-base truncate">{item.label}</span>
                    <ChevronDown
                      className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform flex-shrink-0 ${expandedItems.includes(item.id) ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Submenu */}
                  {expandedItems.includes(item.id) && (
                    <div className="mt-1 ml-2 sm:ml-4 space-y-1 border-l-2" style={{ borderColor: "var(--primary-green)" }}>
                      {item.children.map((child) => (
                        <div key={child.id}>
                          {child.children ? (
                            <div>
                              <button
                                onClick={() => toggleExpand(child.id)}
                                className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-colors hover:bg-gray-200 active:bg-gray-300"
                                style={{
                                  color: "var(--dark-heading)",
                                  fontFamily: "var(--font-body)",
                                }}
                              >
                                {child.icon && <child.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
                                <span className="flex-1 text-left font-medium text-sm sm:text-base truncate">{child.label}</span>
                                <ChevronDown
                                  className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform flex-shrink-0 ${expandedItems.includes(child.id) ? "rotate-180" : ""}`}
                                />
                              </button>

                              {/* Sub-submenu */}
                              {expandedItems.includes(child.id) && (
                                <div className="mt-1 ml-2 sm:ml-4 space-y-1 border-l-2" style={{ borderColor: "var(--primary-green)" }}>
                                  {child.children.map((subChild) => (
                                    <Link
                                      key={subChild.id}
                                      href={subChild.href || "#"}
                                      onClick={handleLinkClick}
                                      className="block px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors hover:bg-gray-200 active:bg-gray-300 truncate"
                                      style={{
                                        color: "var(--text-dark)",
                                        fontFamily: "var(--font-body)",
                                      }}
                                    >
                                      {subChild.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              href={child.href || "#"}
                              onClick={handleLinkClick}
                              className="block px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors hover:bg-gray-200 active:bg-gray-300 truncate"
                              style={{
                                color: "var(--text-dark)",
                                fontFamily: "var(--font-body)",
                              }}
                            >
                              {child.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href || "#"}
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-colors hover:bg-gray-200 active:bg-gray-300"
                  style={{
                    color: "var(--dark-heading)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item.icon && <item.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
                  <span className="font-medium text-sm sm:text-base truncate">{item.label}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}