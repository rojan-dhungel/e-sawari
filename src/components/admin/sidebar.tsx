"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronDown,
  Settings,
  Truck,
  Users,
  UtensilsCrossed,
  ShoppingCart,
  Package,
  LayoutDashboard,
  LucideIcon,
} from "lucide-react"

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
    id: "food",
    label: "Food",
    icon: UtensilsCrossed,
    children: [
      { id: "restaurant-category", label: "Restaurant Category", href: "/admin/dashboard/food/restaurant-category" },
      { id: "menu-category", label: "Menu Category", href: "/admin/dashboard/food/menu-category" },
      { id: "restaurants", label: "Restaurants", href: "/admin/dashboard/food/restaurants" },
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

export default function AdminSidebar({ isOpen }: { isOpen: boolean }) {
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "administration",
    "fleet",
    "users",
    "food",
    "orders",
    "parcels",
  ])

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-0"
      } overflow-y-auto border-r border-gray-200 bg-light transition-all duration-200`}
    >
      {/* Sidebar Header */}
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center overflow-hidden rounded-lg shadow-sm bg-transparent">
            <Image
              src="/Images/Sawari.png"
              alt="Sawari Logo"
              width={80}
              height={80}
              className="object-contain p-1"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-dark-heading">
              Sawari
            </h2>
            <p className="text-xs text-paragraph">
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="space-y-1 p-4">
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon
          const isExpanded = expandedItems.includes(item.id)
          
          return (
            <div key={item.id}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="group flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-dark-heading transition-all duration-200 hover:bg-gray-100"
                  >
                    {Icon && <Icon className="h-5 w-5 transition-colors group-hover:text-primary-green" />}
                    <span className="flex-1 text-left font-medium">{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Submenu */}
                  {isExpanded && (
                    <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-primary-green pl-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.href || "#"}
                          className="block rounded-lg px-4 py-2 text-sm text-paragraph transition-all duration-200 hover:bg-gray-100 hover:text-primary-green"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="group flex items-center gap-3 rounded-lg px-4 py-2.5 text-dark-heading transition-all duration-200 hover:bg-gray-100"
                >
                  {Icon && <Icon className="h-5 w-5 transition-colors group-hover:text-primary-green" />}
                  <span className="font-medium group-hover:text-primary-green">{item.label}</span>
                </Link>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}