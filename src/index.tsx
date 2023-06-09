import React from 'react'
import ReactDOM from 'react-dom/client'

import { RecoilRoot } from 'recoil'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import router from './router'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />,
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
