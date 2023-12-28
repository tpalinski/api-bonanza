import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from './screens/Root'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrorScreen } from './screens/ErrorScreen'
import { Cats } from './screens/Cats'
import { Quotes } from './screens/Quotes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorScreen/>,
    children: [
      {
        path: '/cats',
        element: <Cats/>
      },
      {
        path: '/quotes',
        element: <Quotes/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
