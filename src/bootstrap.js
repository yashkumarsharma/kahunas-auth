import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { AuthProvider } from 'container/AuthContext'
import store, { StoreProvider } from 'container/StoreContext'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)

// Todo: Configure Local store
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StoreProvider>
        <AuthProvider>
          <App basePath='/auth/' />
        </AuthProvider>
      </StoreProvider>
    </Provider>
  </React.StrictMode>
)
