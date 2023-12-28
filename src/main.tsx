import ReactDOM from 'react-dom/client'
import { Root } from './screens/Root'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrorScreen } from './screens/ErrorScreen'
import { Cats } from './screens/Cats'
import { Quotes } from './screens/Quotes'
import { Home } from './screens/Home'

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
      },
      {
        path: '/',
        element: <Home/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
