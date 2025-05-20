import type { RouteObject } from "react-router-dom";

import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Fallback } from "../components/Fallback";
import { shopRouteURL } from "../utilities/RouteUlti/routeUrl";

const Product = lazy(() => import('../pages/admin/Products'))
const AddProduct = lazy(() => import('../pages/admin/AddProduct'))
const EditProduct = lazy(() => import('../pages/admin/EditProduct'))



const adminRoute: RouteObject = {
    path: shopRouteURL.admin,
    element: <>
        <Outlet />
    </>,
    children: [
        {
            path: shopRouteURL.products,
            element: <Suspense fallback={<Fallback />}>
                <Product />
            </Suspense>,
            loader: () => import('../pages/admin/Products/loader').then(i => i.loader())
        },
        {
            path: shopRouteURL.addProduct,
            element: <Suspense fallback={<Fallback />}>
                <AddProduct />
            </Suspense>,
            action: (args) => import('../pages/admin/AddProduct/action').then(i => i.action(args))
        },
        {
            path: shopRouteURL.editProduct + '/:prodId',
            element: <Suspense fallback={<Fallback />}>
                <EditProduct />
            </Suspense>,
            loader: (args) => import('../pages/admin/EditProduct/loader').then(i => i.loader(args)),
            action: (args) => import('../pages/admin/EditProduct/action').then(i => i.action(args))
        },
    ]
}

export default adminRoute