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
  <div className="group rounded-lg border border-gray-200 bg-light p-6 shadow-sm transition-all duration-200 hover:shadow-md">
    <div className="mb-4 flex items-center justify-between">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50">
        <Icon className="h-6 w-6 text-primary-green" />
      </div>
      {trend && (
        <div className="flex items-center gap-1 text-primary-green">
          <TrendingUp className="h-4 w-4" />
          <span className="text-sm font-semibold">+12%</span>
        </div>
      )}
    </div>
    <h3 className="text-sm text-paragraph">
      {title}
    </h3>
    <p className="text-2xl font-bold text-dark-heading">
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
    <main className="flex-1 space-y-6 overflow-auto bg-light p-6">
      {/* Welcome Section */}
      <div className="rounded-lg border-l-4 border-primary-green bg-white p-8 shadow-sm">
        <h2 className="mb-2 text-2xl font-bold text-dark-heading">
          Welcome back, Admin!
        </h2>
        <p className="text-paragraph">
          Here&apos;s what&apos;s happening with your Sawari platform today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={ShoppingCart} title="Total Orders" value="2,543" trend={true} />
        <StatCard icon={Users} title="Total Users" value="1,234" trend={true} />
        <StatCard icon={Truck} title="Active Drivers" value="456" trend={true} />
        <StatCard icon={Package} title="Parcels" value="789" trend={false} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Orders Chart */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-bold text-dark-heading">
            Orders Overview
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dashboardData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
              <XAxis dataKey="month" stroke="#999999" style={{ fontSize: '14px' }} />
              <YAxis stroke="#999999" style={{ fontSize: '14px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#F8FBF9", 
                  border: "1px solid #E5E5E5",
                  borderRadius: "8px",
                  fontFamily: "'Nunito', sans-serif"
                }} 
              />
              <Bar dataKey="orders" fill="#247C3F" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Trends Chart */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-bold text-dark-heading">
            Growth Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dashboardData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
              <XAxis dataKey="month" stroke="#999999" style={{ fontSize: '14px' }} />
              <YAxis stroke="#999999" style={{ fontSize: '14px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#F8FBF9", 
                  border: "1px solid #E5E5E5",
                  borderRadius: "8px",
                  fontFamily: "'Nunito', sans-serif"
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="rides" 
                stroke="#247C3F" 
                strokeWidth={2} 
                dot={{ fill: "#247C3F", r: 4 }} 
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="parcels" 
                stroke="#999999" 
                strokeWidth={2} 
                dot={{ fill: "#999999", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-dark-heading">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {recentActivities.map((activity, i) => (
            <div 
              key={i} 
              className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
            >
              <div>
                <p className="font-medium text-dark-heading">
                  {activity.action}
                </p>
                <p className="text-sm text-paragraph">
                  {activity.user}
                </p>
              </div>
              <span className="text-sm text-paragraph">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}