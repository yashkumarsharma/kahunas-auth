import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './store/store'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)

// Todo: Configure Local store
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App basePath='/auth/' />
    </Provider>
  </React.StrictMode>
)
