import ProductGrid from "@/components/product-grid"
import { getProducts } from "@/lib/google-sheets"

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Technology Gifts</h1>
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
