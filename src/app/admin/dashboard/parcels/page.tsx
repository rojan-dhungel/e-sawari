"use client"

import { redirect } from "next/navigation"

export default function ParcelsPage() {
  redirect("/admin/dashboard/parcels/package-types")
}
