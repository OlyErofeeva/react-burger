import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutUserMiddleware } from '../../services/thunks/logout-user-middleware'
import { getCookie } from '../../utils/cookie'
import styles from './profile-page.module.css'

const ProfilePage = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    const refreshToken = getCookie('refreshToken')
    if (refreshToken) {
      // TODO fix ts-ignore
      // @ts-ignore
      dispatch(logoutUserMiddleware({ token: refreshToken }))
    }
  }

  return (
    <div className={`mt-30 ${styles.pageContent}`}>
      <div className={`ml-5 mr-15 ${styles.sidebarContainer}`}>
        <ul className={styles.tabList}>
          <li>
            <NavLink
              to="/profile"
              className={`pt-4 pb-4 text text_type_main-medium ${styles.tabLink} ${styles.tabLinkActive}`}
            >
              Профиль
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={`pt-4 pb-4 text text_type_main-medium text_color_inactive ${styles.tabLink}`}
            >
              История заказов
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={`pt-4 pb-4 text text_type_main-medium text_color_inactive ${styles.tabLink}`}
              onClick={handleLogout}
            >
              Выход
            </NavLink>
          </li>
        </ul>
        <p className="mt-20 text text_type_main-default text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={styles.profileInfo}>
        <Input placeholder="Имя" value="" onChange={() => console.log('name input')} icon={'EditIcon'} />
        <Input placeholder="Логин" value="" onChange={() => console.log('login input')} icon={'EditIcon'} />
        <PasswordInput value="" onChange={() => console.log('password input')} icon={'EditIcon'} />
        <div className={styles.buttonsWrapper}>
          <Button htmlType="reset" type="secondary">
            Отмена
          </Button>
          <Button htmlType="submit">Сохранить</Button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
