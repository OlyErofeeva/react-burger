import { NavLink, Outlet } from 'react-router-dom'
import { logoutUserMiddleware } from '../../services/thunks/logout-user-middleware'
import { CookieName, getCookie } from '../../utils/cookie'
import styles from './profile-page.module.css'
import { Routes } from '../routes'
import { useDispatch } from '../../services/hooks/useDispatch'

const ProfilePage = () => {
  const dispatch = useDispatch()
  const linkClassName = `pt-4 pb-4 text text_type_main-medium ${styles.tabLink} `
  const activeLinkClassName = `${linkClassName} ${styles.tabLinkActive}`
  const inactiveLinkClassName = `${linkClassName} text_color_inactive`

  const handleLogout = () => {
    const refreshToken = getCookie(CookieName.RefreshToken)
    if (refreshToken) {
      dispatch(logoutUserMiddleware({ token: refreshToken }))
    }
  }

  const navLinksConfig = [
    { path: Routes.Profile, caption: 'Профиль' },
    { path: Routes.ProfileOrders, caption: 'История заказов' },
    { path: Routes.Login, caption: 'Выход', onClick: handleLogout },
  ]

  return (
    <div className={`mt-30 ${styles.pageContent}`}>
      <div className={`ml-5 mr-15 ${styles.sidebarContainer}`}>
        <ul className={styles.tabList}>
          {navLinksConfig.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                onClick={link.onClick}
                className={({ isActive }) => (isActive ? activeLinkClassName : inactiveLinkClassName)}
                end
              >
                {link.caption}
              </NavLink>
            </li>
          ))}
        </ul>
        <p className="mt-20 text text_type_main-default text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Outlet />
    </div>
  )
}

export default ProfilePage
