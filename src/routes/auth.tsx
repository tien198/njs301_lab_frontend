import type { RouteObject } from 'react-router-dom'

import { Outlet } from 'react-router-dom'
import { shopRouteURL } from '../utilities/routeUrl'
import { lazy, Suspense } from 'react'
import { Fallback } from '../components/Fallback'

const Login = lazy(() => import('../pages/auth/Login'))
const Signup = lazy(() => import('../pages/auth/Signup'))

const authRoute: RouteObject = {
    path: shopRouteURL.authen,
    element: <><Outlet /></>,
    children: [
        {
            path: shopRouteURL.login,
            element: <Suspense fallback={<Fallback />}>
                <Login />
            </Suspense>,
            action: args => import('../pages/auth/Login.action').then(module => module.action(args))
        },
        {
            path: shopRouteURL.signup,
            element: <Suspense fallback={<Fallback />}>
                <Signup />
            </Suspense>,
            action: args => import('../pages/auth/Signup.action').then(module => module.action(args))
        },
        {
            path: shopRouteURL.testCookie,
            element: <></>,
            loader: () => import('../pages/auth/TestCookies').then(module => module.loader()),
        }
    ]
}

export default authRoute