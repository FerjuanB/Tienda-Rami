'use client';

import Image from "next/image"
import type { Product } from "../lib/types"
import proximamente from '../lib/no-image.jpeg'
export default function ProductGrid({ products }: { products: Product[] }) {
  console.log('Products received in ProductGrid:', products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => {
        console.log('Product being rendered:', product);
        
        return (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-gray-100">
              <Image
                src={product.image || proximamente}
                alt={product.name ? `Image from the product ${product.name}` : 'Product of the shop'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = proximamente.src
                }}
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h2>
              <p className="text-xl font-bold text-yellow-500">{product.price.toLocaleString()}</p>
            </div>
          </div>
        );
      })}
    </div>
  )
}
