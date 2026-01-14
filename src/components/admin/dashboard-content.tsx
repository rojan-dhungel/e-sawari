"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { TrendingUp, Users, Truck, ShoppingCart, Package, LucideIcon } from "lucide-react"

const dashboardData = [
  { month: "Jan", orders: 400, rides: 240, parcels: 240 },
  { month: "Feb", orders: 300, rides: 139, parcels: 221 },
  { month: "Mar", orders: 200, rides: 980, parcels: 229 },
  { month: "Apr", orders: 278, rides: 390, parcels: 200 },
  { month: "May", orders: 189, rides: 480, parcels: 218 },
  { month: "Jun", orders: 239, rides: 380, parcels: 250 },
]

interface StatCardProps {
  icon: LucideIcon
  title: string
  value: string
  trend: boolean
}

const StatCard = ({ icon: Icon, title, value, trend }: StatCardProps) => (
  <div 
    className="group rounded-lg border p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer"
    style={{ 
      borderColor: '#E5E5E5',
      backgroundColor: '#FFFFFF'
    }}
  >
    <div className="mb-3 sm:mb-4 flex items-center justify-between">
      <div 
        className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg flex-shrink-0"
        style={{ backgroundColor: '#F0F9F4' }}
      >
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: 'var(--primary-green)' }} />
      </div>
      {trend && (
        <div className="flex items-center gap-1" style={{ color: 'var(--primary-green)' }}>
          <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span 
            className="text-xs sm:text-sm font-semibold"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            +12%
          </span>
        </div>
      )}
    </div>
    <h3 
      className="text-xs sm:text-sm mb-1 sm:mb-1.5"
      style={{ 
        color: 'var(--text-dark)',
        fontFamily: 'var(--font-body)'
      }}
    >
      {title}
    </h3>
    <p 
      className="text-xl sm:text-2xl md:text-3xl font-bold"
      style={{ 
        color: 'var(--dark-heading)',
        fontFamily: 'var(--font-heading)'
      }}
    >
      {value}
    </p>
  </div>
)

interface Activity {
  action: string
  time: string
  user: string
}

const recentActivities: Activity[] = [
  { action: "New order placed", time: "2 hours ago", user: "Customer #1234" },
  { action: "Driver status updated", time: "3 hours ago", user: "Driver #5678" },
  { action: "Menu item added", time: "5 hours ago", user: "Restaurant Admin" },
  { action: "Parcel delivered", time: "6 hours ago", user: "Parcel #9012" },
]

export default function DashboardContent() {
  return (
    <main 
      className="flex-1 space-y-4 sm:space-y-5 md:space-y-6 overflow-auto"
      style={{ backgroundColor: 'var(--light-background)' }}
    >
      {/* Welcome Section */}
      <div 
        className="rounded-lg border-l-4 p-4 sm:p-6 md:p-8 shadow-sm"
        style={{ 
          borderLeftColor: 'var(--primary-green)',
          backgroundColor: '#FFFFFF'
        }}
      >
        <h2 
          className="mb-2 text-xl sm:text-2xl md:text-3xl font-bold"
          style={{ 
            color: 'var(--dark-heading)',
            fontFamily: 'var(--font-heading)'
          }}
        >
          Welcome back, Admin!
        </h2>
        <p 
          className="text-sm sm:text-base"
          style={{ 
            color: 'var(--text-dark)',
            fontFamily: 'var(--font-body)'
          }}
        >
          Here&apos;s what&apos;s happening with your Sawari platform today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatCard icon={ShoppingCart} title="Total Orders" value="2,543" trend={true} />
        <StatCard icon={Users} title="Total Users" value="1,234" trend={true} />
        <StatCard icon={Truck} title="Active Drivers" value="456" trend={true} />
        <StatCard icon={Package} title="Parcels" value="789" trend={false} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {/* Orders Chart */}
        <div 
          className="rounded-lg p-4 sm:p-5 md:p-6 shadow-sm"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <h3 
            className="mb-3 sm:mb-4 text-base sm:text-lg font-bold"
            style={{ 
              color: 'var(--dark-heading)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Orders Overview
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dashboardData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
              <XAxis 
                dataKey="month" 
                stroke="#999999" 
                style={{ fontSize: '12px' }}
                className="sm:text-sm"
              />
              <YAxis 
                stroke="#999999" 
                style={{ fontSize: '12px' }}
                className="sm:text-sm"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#F8FBF9", 
                  border: "1px solid #E5E5E5",
                  borderRadius: "8px",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '12px'
                }} 
              />
              <Bar dataKey="orders" fill="var(--primary-green)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Trends Chart */}
        <div 
          className="rounded-lg p-4 sm:p-5 md:p-6 shadow-sm"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <h3 
            className="mb-3 sm:mb-4 text-base sm:text-lg font-bold"
            style={{ 
              color: 'var(--dark-heading)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Growth Trends
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={dashboardData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
              <XAxis 
                dataKey="month" 
                stroke="#999999" 
                style={{ fontSize: '12px' }}
                className="sm:text-sm"
              />
              <YAxis 
                stroke="#999999" 
                style={{ fontSize: '12px' }}
                className="sm:text-sm"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#F8FBF9", 
                  border: "1px solid #E5E5E5",
                  borderRadius: "8px",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '12px'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="rides" 
                stroke="var(--primary-green)" 
                strokeWidth={2} 
                dot={{ fill: "var(--primary-green)", r: 3 }} 
                activeDot={{ r: 5 }}
              />
              <Line 
                type="monotone" 
                dataKey="parcels" 
                stroke="var(--text-dark)" 
                strokeWidth={2} 
                dot={{ fill: "var(--text-dark)", r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div 
        className="rounded-lg p-4 sm:p-5 md:p-6 shadow-sm"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <h3 
          className="mb-3 sm:mb-4 text-base sm:text-lg font-bold"
          style={{ 
            color: 'var(--dark-heading)',
            fontFamily: 'var(--font-heading)'
          }}
        >
          Recent Activity
        </h3>
        <div className="space-y-3 sm:space-y-4">
          {recentActivities.map((activity, i) => (
            <div 
              key={i} 
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 border-b pb-3 sm:pb-4 last:border-b-0 last:pb-0"
              style={{ borderColor: '#E5E5E5' }}
            >
              <div className="min-w-0 flex-1">
                <p 
                  className="text-sm sm:text-base font-medium truncate"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {activity.action}
                </p>
                <p 
                  className="text-xs sm:text-sm truncate"
                  style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {activity.user}
                </p>
              </div>
              <span 
                className="text-xs sm:text-sm flex-shrink-0"
                style={{ 
                  color: 'var(--text-dark)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}