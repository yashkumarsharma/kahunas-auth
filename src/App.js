import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AuthProvider } from 'container/AuthContext'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import LandingPage from './containers/LandingPage'
import i18n from './translations/i18n'

import './translations/i18n'

const App = () => {
  const language = useSelector(state => state.appSettings?.language || 'en')

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return (
    <AuthProvider>
      <Router basename='/auth'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
