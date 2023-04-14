import { useEffect } from 'react'
import { Routes as Switch, Route, useLocation } from 'react-router-dom'
import styles from './app.module.css'
import { Routes } from '../../pages/routes'
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
import ProfileForm from '../profile-form/profile-form'
import ProfileOrders from '../profile-orders/profile-orders'
import IngredientModal from '../ingredient-modal/ingredient-modal'
import { useDispatch } from '../../services/hooks/useDispatch'
import FeedPage from '../../pages/feed-page/feed-page'

const App = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const modalLocation = location.state?.modalLocation

  useEffect(() => {
    dispatch(fetchIngredientsMiddleware)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />
      <Switch location={modalLocation || location}>
        <Route path={Routes.Main} element={<MainPage />} />
        <Route path={Routes.Login} element={<LoginPage />} />
        <Route path={Routes.Register} element={<RegisterPage />} />
        <Route path={Routes.ForgotPassword} element={<ForgotPasswordPage />} />
        <Route path={Routes.ResetPassword} element={<ResetPasswordPage />} />
        <Route path={Routes.Profile} element={<ProtectedRoute element={<ProfilePage />} />}>
          <Route path={Routes.Profile} element={<ProfileForm />} />
          <Route path={Routes.ProfileOrders} element={<ProfileOrders />} />
        </Route>
        <Route path={Routes.Feed} element={<FeedPage />} />
        <Route path={Routes.IngredientDetails} element={<IngredientPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Switch>
      {modalLocation && (
        <Switch>
          <Route path={Routes.IngredientDetails} element={<IngredientModal />} />
        </Switch>
      )}
    </div>
  )
}

export default App
