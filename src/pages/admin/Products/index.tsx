import type { IProduct } from '../../../models/interfaces/base/IProduct'

import { Await, Link, useLoaderData } from 'react-router-dom'
import ProductComponent from '../../../components/Product'
import { Suspense } from 'react'
import { Fallback } from '../../../components/Fallback'
import { shopRouteURL_Absolute } from '../../../utilities/RouteUlti/routeUrl'
import type { ProdLoader } from './loader'

export default function ProductPage() {
  const { prodsDefer }: ProdLoader = useLoaderData()
  return (
    <main>
      <h1>Products</h1>
      <Suspense fallback={<Fallback />}>
        <Await resolve={prodsDefer}>{(products: IProduct[]) =>

          (products && products.length > 0) ?
            <div className="grid">
              {
                products.map(prod =>
                  <Link to={shopRouteURL_Absolute.editProduct + '/' + prod._id} className='product-link'>
                    <ProductComponent isAdmin product={prod} key={prod.title} />
                  </Link>
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
