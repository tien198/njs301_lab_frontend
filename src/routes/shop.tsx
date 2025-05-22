import type { RouteObject } from "react-router-dom"


import { lazy, Suspense } from "react"
import { Fallback } from "../components/Fallback"
import { Outlet } from "react-router-dom"
import { shopRouteURL } from "../utilities/RouteUlti/routeUrl"

const ProductsList = lazy(() => import('../pages/shop/Products'))
const Product = lazy(() => import('../pages/shop/Product'))
const Cart = lazy(() => import('../pages/shop/Cart'))
const Order = lazy(() => import('../pages/shop/Order'))

const shopRoute: RouteObject = {
    path: shopRouteURL.base,
    element: <>
        <Outlet />
    </>,
    children: [
        {
            index: true,
            element: <Suspense fallback={<Fallback />}>
                <ProductsList />
            </Suspense>,
            loader: () => import('../pages/shop/Products/loader').then(i => i.loader()),
            action: (args) => import('../pages/shop/AddToCart/action').then(i => i.action(args))
        },
        {
            path: shopRouteURL.products,
            element: <Suspense fallback={<Fallback />}>
                <ProductsList />
            </Suspense>,
            loader: () => import('../pages/shop/Products/loader').then(i => i.loader()),
            action: (args) => import('../pages/shop/AddToCart/action').then(i => i.action(args))
        },
        {
            path: shopRouteURL.product+'/:prodId',
            element: <Suspense fallback={<Fallback />}>
                <Product />
            </Suspense>,
            loader: (args) => import('../pages/shop/Product/loader').then(i => i.loader(args)),
        },
        {
            path: shopRouteURL.cart,
            element: <Suspense fallback={<Fallback />}>
                <Cart />
            </Suspense>,
            loader: () => import('../pages/shop/Cart/loader').then(i => i.loader()),
            action: (args) => import('../pages/shop/Cart/action').then(i => i.action(args))
        },
        {
            path: shopRouteURL.order,
            element: <Suspense fallback={<Fallback />}>
                <Order />
            </Suspense>,
            loader: (args) => import('../pages/shop/Order/loader').then(i => i.loader(args)),
        },
    ]
}

export default shopRoute