"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Settings, Truck, Users, UtensilsCrossed, ShoppingCart, Package, LayoutDashboard, Car, Store, LucideIcon } from 'lucide-react'
import Image from "next/image";

interface MenuItem {
  id: string
  label: string
  icon?: LucideIcon
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
    children: [{ id: "admin-users", label: "Admin Users", href: "/admin/dashboard/administration/admin-users" }],
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
      { id: "food-addons", label: "Food Add-ons", href: "/admin/dashboard/food/food-addons" },
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

export default function AdminSidebar({ isOpen }: { isOpen: boolean }) {
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "administration",
    "fleet",
    "users",
    "rides",
    "restaurant-management",
    "food",
    "orders",
    "parcels",
  ])

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  return (
    <aside
      className={`${isOpen ? "w-64" : "w-0"} overflow-y-auto border-r transition-all duration-200`}
      style={{
        backgroundColor: "#FAFAFA",
        borderColor: "#E5E5E5",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* Sidebar Header */}
      <div className="p-6 border-b" style={{ borderColor: "#E5E5E5" }}>
  <div className="flex items-center gap-3">
    
    {/* Avatar */}
    <div className="w-10 h-10 flex-shrink-0">
      <Image
        src="/Images/sawari.png"
        alt="User"
        width={40}
        height={40}
        className="rounded-lg object-cover"
      />
    </div>

    {/* Text Section */}
    <div className="flex flex-col leading-tight">
      <h2
        className="font-bold text-base"
        style={{
          color: "#333333",
          fontFamily: "'Baloo 2', cursive",
        }}
      >
        Sawari
      </h2>

      <p className="text-xs" style={{ color: "#999999" }}>
        Admin Panel
      </p>
    </div>

  </div>
</div>


      {/* Menu Items */}
      <nav className="p-4 space-y-2">
        {MENU_ITEMS.map((item) => (
          <div key={item.id}>
            {item.children ? (
              <div>
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors hover:bg-gray-200"
                  style={{
                    color: "#333333",
                  }}
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  <span className="flex-1 text-left font-medium">{item.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${expandedItems.includes(item.id) ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Submenu */}
                {expandedItems.includes(item.id) && (
                  <div className="mt-1 ml-4 space-y-1 border-l-2" style={{ borderColor: "#247C3F" }}>
                    {item.children.map((child) => (
                      <div key={child.id}>
                        {child.children ? (
                          <div>
                            <button
                              onClick={() => toggleExpand(child.id)}
                              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors hover:bg-gray-200"
                              style={{
                                color: "#333333",
                              }}
                            >
                              {child.icon && <child.icon className="w-5 h-5" />}
                              <span className="flex-1 text-left font-medium">{child.label}</span>
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${expandedItems.includes(child.id) ? "rotate-180" : ""}`}
                              />
                            </button>

                            {/* Sub-submenu */}
                            {expandedItems.includes(child.id) && (
                              <div className="mt-1 ml-4 space-y-1 border-l-2" style={{ borderColor: "#247C3F" }}>
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.id}
                                    href={subChild.href || "#"}
                                    className="block px-4 py-2 rounded-lg text-sm transition-colors hover:bg-gray-200"
                                    style={{
                                      color: "#666666",
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
                            className="block px-4 py-2 rounded-lg text-sm transition-colors hover:bg-gray-200"
                            style={{
                              color: "#666666",
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
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors hover:bg-gray-200"
                style={{
                  color: "#333333",
                }}
              >
                {item.icon && <item.icon className="w-5 h-5" />}
                <span className="font-medium">{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}