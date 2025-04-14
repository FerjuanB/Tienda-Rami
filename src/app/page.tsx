import ProductGrid from "@/components/product-grid"
import { getProducts } from "@/lib/google-sheets"

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="container mx-auto bg-gray-500 px-4 py-8">
      
      <h1 className="text-3xl font-semibold text-gray-200 bg-gradient-to-r from-blue-200 to-purple-600 text-center max-w-2xl mx-auto mb-8 uppercase py-2 rounded-lg">Tienda de regalos</h1>
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
