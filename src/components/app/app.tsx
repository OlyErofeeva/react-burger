import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './app.module.css'
import AppHeader from '../app-header/app-header'
import { fetchIngredientsMiddleware } from '../../services/thunks/fetch-ingredients-middleware'
import IngredientPage from '../../pages/ingredient-page/ingredient-page'
import LoginPage from '../../pages/login-page/login-page'
import RegisterPage from '../../pages/register-page/register-page'
import ForgotPasswordPage from '../../pages/forgot-password-page/forgot-password-page'
import ResetPasswordPage from '../../pages/reset-password-page/reset-password-page'
import ProfilePage from '../../pages/profile-page/profile-page'
import MainPage from '../../pages/main-page/main-page'
import NotFoundPage from '../../pages/not-found-page/not-found-page'
import ProtectedRoute from '../protected-route/protected-route'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // TODO fix ts-ignore
    // @ts-ignore
    dispatch(fetchIngredientsMiddleware)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />} />} />
          <Route path="/ingredients/:id" element={<IngredientPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
