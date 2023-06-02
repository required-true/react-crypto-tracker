import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Coins from './routes/Coins'
import Coin from './routes/Coin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Coins />
      },
      {
        path: '/coin/:id',
        element: <Coin />
      },
    ]
  }
])

export default router