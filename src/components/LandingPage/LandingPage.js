import React, { useState } from 'react'
import { useAuth } from 'container/AuthContext'
import { useTranslation } from 'react-i18next'

import './styles.css'

const TOKEN = 'dummy-token'

const LandingPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { t } = useTranslation()
  const { isAuthenticated, login, logout } = useAuth()

  const handleLogin = async () => {
    try {
      login(TOKEN)
    } catch (err) {
      //
    }
  }

  return (
    <div className='auth-landing-page'>
      <div className='auth-landing-content'>
        {!isAuthenticated && (
          <div className='login-form'>
            <h2>{t('Login')}</h2>
            <input
              type='text'
              placeholder={t('Username-Email')}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type='password'
              placeholder={t('Password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>
              {t('Login')}
            </button>
          </div>
        )}
        {isAuthenticated && (
          <div className='logout-section'>
            <p>{t('login-message')}</p>
            <button onClick={logout}>{t('Logout')}</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default LandingPage
