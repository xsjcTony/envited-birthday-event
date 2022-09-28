import { ConfigProvider } from 'antd'
import enUS from 'antd/es/locale/en_US'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import store from '@/store'
import '@/assets/styles/global.scss'
import 'antd/dist/antd.css' // should do tree-shaking but due to time limit


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ConfigProvider locale={enUS}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </StoreProvider>
  </React.StrictMode>
)
