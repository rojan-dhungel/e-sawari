"use client"

import { redirect } from "next/navigation"

export default function FoodPage() {
  redirect("/admin/dashboard/food/restaurant-category")
}
