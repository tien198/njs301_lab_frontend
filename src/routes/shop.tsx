import type { RouteObject } from "react-router-dom"


import { lazy, Suspense } from "react"
import { Fallback } from "../components/Fallback"
import { Outlet } from "react-router-dom"
import { shopRouteURL } from "../utilities/RouteUlti/routeUrl"

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
                <Product />
            </Suspense>,
            loader: () => import('../pages/shop/Product/loader').then(i => i.loader())
        },
        {
            path: shopRouteURL.products,
            element: <Suspense fallback={<Fallback />}>
                <Product />
            </Suspense>,
            loader: () => import('../pages/shop/Product/loader').then(i => i.loader())
        },
        {
            path: 'cart',
            element: <Suspense fallback={<Fallback />}>
                <Cart />
            </Suspense>,
            loader: () => import('../pages/shop/Cart/loader').then(i => i.loader()),
            action: (arg) => import('../pages/shop/AddToCart/action').then(i => i.action(arg))
        },
        {
            path: 'order',
            element: <Suspense fallback={<Fallback />}>
                <Order />
            </Suspense>,
            // loader:
        },
    ]
}

export default shopRoute