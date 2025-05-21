import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'

import shopRoute from './routes/shop'
import adminRoute from './routes/admin'
import authRoute from './routes/auth'
import ErrorPage from './pages/ErrorPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      authRoute,
      shopRoute,
      adminRoute
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
