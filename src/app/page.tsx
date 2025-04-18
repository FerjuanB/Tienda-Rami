import ProductGrid from "@/components/product-grid"
import { getProducts } from "@/lib/google-sheets"

export const revalidate = 21600 // revalidate every 6 hours

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="container mx-auto bg-gray-500 px-4 py-8">
      
      
      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No products currently in stock</p>
        </div>
      )}
    </main>
  )
}
