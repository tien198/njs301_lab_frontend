import type { RouteObject } from 'react-router-dom'

import { Outlet } from 'react-router-dom'
import { shopRouteURL } from '../utilities/RouteUlti/routeUrl'
import { lazy, Suspense } from 'react'
import { Fallback } from '../components/Fallback'

const Login = lazy(() => import('../pages/auth/Login'))
const Signup = lazy(() => import('../pages/auth/Signup'))
const CreateResetPassToken = lazy(() => import('../pages/auth/CreateResetPassToken'))
const ResetPassword = lazy(() => import('../pages/auth/ResetPassword'))

const authRoute: RouteObject = {
    path: shopRouteURL.authen,
    element: <><Outlet /></>,
    children: [
        {
            path: shopRouteURL.login,
            element: <Suspense fallback={<Fallback />}>
                <Login />
            </Suspense>,
            action: args => import('../pages/auth/Login/action').then(i => i.action(args))
        },
        {
            path: shopRouteURL.signup,
            element: <Suspense fallback={<Fallback />}>
                <Signup />
            </Suspense>,
            action: args => import('../pages/auth/Signup/action').then(i => i.action(args))
        },
        {
            path: shopRouteURL.resetPassword,
            element: <Suspense fallback={<Fallback />}>
                <CreateResetPassToken />
            </Suspense>,
            action: args => import('../pages/auth/CreateResetPassToken/action').then(i => i.action(args))
        },
        {
            path: shopRouteURL.resetPassword + '/:token',
            element: <Suspense fallback={<Fallback />}>
                <ResetPassword />
            </Suspense>,
            action: args => import('../pages/auth/ResetPassword/action').then(i => i.action(args))
        },
        {
            path: shopRouteURL.testCookie,
            element: <></>,
            loader: () => import('../pages/auth/TestCookies').then(i => i.loader()),
        }
    ]
}

export default authRoute