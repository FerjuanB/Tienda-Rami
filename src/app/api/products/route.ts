import { NextResponse } from "next/server"
import { getProducts } from "@/lib/google-sheets"

// This API route can be used if you want to fetch products client-side
export async function GET() {
  try {
    const products = await getProducts()
    console.log(products)
    return NextResponse.json(products)
  } catch (error) {
    console.error("Error in products API route:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}
