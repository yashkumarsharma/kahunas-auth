import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { useStore } from 'container/StoreContext'
import { AuthProvider } from 'container/AuthContext'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import LandingPage from './containers/LandingPage'
import i18n from './translations/i18n'

import './translations/i18n'

// Todo: Leaving some commented tested code for redux integration.
// const rootHelloReducer = (state = {
//   isLoading: true,
// }, action) => state

const App = () => {
  // const { store, replaceReducertest } = useStore()
  const { store } = useStore()

  // const language = useSelector(state => state.appSettings.language)

  // Todo: Move to a separate component under <Provider>, as it is very inefficient
  const language = store.getState()?.appSettings?.language || 'en'

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  // useEffect(() => {
  //   if(!replaceReducertest) return
  //   replaceReducertest({
  //     rootHelloReducer: rootHelloReducer,
  //     // Add other reducers here if needed
  //   })
  // }, [replaceReducertest])

  return (
    <Provider store={store}>
      <AuthProvider>
        <Router basename='/auth'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Router>
      </AuthProvider>
    </Provider>
  )
}

export default App
