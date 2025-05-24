import type { IProduct } from '../../../models/interfaces/base/IProduct'

import { Await, useLoaderData, useNavigate, useSubmit } from 'react-router-dom'
import ProductComponent from '../../../components/Product'
import { Suspense } from 'react'
import { Fallback } from '../../../components/Fallback'
import { shopRouteURL_Absolute } from '../../../utilities/RouteUlti/routeUrl'
import type { ProdLoader } from './loader'
import Button from '../../../components/layouts/Button'

export default function ProductPage() {
  const { prodsDefer }: ProdLoader = useLoaderData()

  const navigate = useNavigate()
  const submit = useSubmit()

  function handleSubmit(prodId: string) {
    const formData = new FormData()
    formData.append('prodId', prodId)
    submit(formData, {
      method: 'post',
      encType: 'application/x-www-form-urlencoded',
    })
  }


  return (
    <main>
      <h1>Products</h1>
      <Suspense fallback={<Fallback />}>
        <Await resolve={prodsDefer}>{(products: IProduct[]) =>

          (products && products.length > 0) ?
            <div className="grid">
              {
                products.map(prod =>
                  <ProductComponent product={prod} key={prod.title} >
                    <Button isBgWhite onClick={() => navigate(shopRouteURL_Absolute.editProduct + '/' + prod._id)}>
                      Edit
                    </Button>
                    <Button onClick={handleSubmit.bind(null, prod._id)}>Delete</Button>
                  </ProductComponent>
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
