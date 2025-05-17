import { Await, useLoaderData } from 'react-router-dom'
import Product from '../../../models/Product'
import ProductComponent from '../../../components/Product'
import { Suspense } from 'react'
import { Fallback } from '../../../components/Fallback'

export default function ProductPage() {
  const { prodsDefer } = useLoaderData()
  return (
    <main>
      <Suspense fallback={<Fallback />}>
        <Await resolve={prodsDefer}>{(products: Product[]) =>

          (products && products.length > 0) ?
            <div className="grid">
              {
                products.map(product =>
                  <ProductComponent product={product} key={product.title} />
                )
              }
            </div>
            : <h1>No Products Found!</h1>

        }
        </Await>
      </Suspense>
    </main>
  )
}
