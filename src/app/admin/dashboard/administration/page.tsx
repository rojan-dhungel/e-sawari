"use client"

import { redirect } from "next/navigation"

export default function AdministrationPage() {
  redirect("/admin/dashboard/administration/admin-users")
}
