import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { userSelector } from '../../services/selectors/selectors'
import { getUserMiddleware } from '../../services/thunks/get-user-middleware'
import { logoutUserMiddleware } from '../../services/thunks/logout-user-middleware'
import { CookieName, getCookie } from '../../utils/cookie'
import { UserEditRequest } from '../../utils/types'
import styles from './profile-page.module.css'
import { editUserMiddleware } from '../../services/thunks/edit-user-middleware'

const ProfilePage = () => {
  const dispatch = useDispatch()
  const user = useSelector(userSelector)
  const [editedData, setEditedData] = useState<UserEditRequest>({})
  const [inputValues, setInputValues] = useState({
    name: user?.name || '',
    email: user?.email || '',
    password: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value })
    // TODO consider comparing editedData with user from global state to avoid
    // sending properties that were edited, but then changed again to the previous values
    setEditedData({ ...editedData, [e.target.name]: e.target.value })
  }

  const handleEditProfile = (e: React.SyntheticEvent, userData: UserEditRequest) => {
    const accessToken = getCookie(CookieName.AccessToken)
    e.preventDefault()
    // TODO fix ts-ignore
    // @ts-ignore
    dispatch(editUserMiddleware(userData, accessToken))
    setEditedData({})
  }

  const handleCancelEditing = () => {
    setInputValues({
      name: user?.name || '',
      email: user?.email || '',
      password: '',
    })
    setEditedData({})
  }

  const handleLogout = () => {
    const refreshToken = getCookie(CookieName.RefreshToken)
    if (refreshToken) {
      // TODO fix ts-ignore
      // @ts-ignore
      dispatch(logoutUserMiddleware({ token: refreshToken }))
    }
  }

  useEffect(() => {
    const accessToken = getCookie(CookieName.AccessToken)
    if (!user && accessToken) {
      // TODO fix ts-ignore
      // @ts-ignore
      dispatch(getUserMiddleware(accessToken))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  useEffect(() => {
    if (user) {
      setInputValues({
        ...inputValues,
        name: user.name,
        email: user.email,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  if (!user) {
    return null
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
      <form className={styles.profileInfo}>
        <Input placeholder="Имя" name="name" value={inputValues.name} onChange={handleInputChange} icon={'EditIcon'} />
        <Input
          placeholder="Логин"
          name="email"
          value={inputValues.email}
          onChange={handleInputChange}
          icon={'EditIcon'}
        />
        <PasswordInput name="password" value={inputValues.password} onChange={handleInputChange} icon={'EditIcon'} />
        {Object.keys(editedData).length > 0 && (
          <div className={styles.buttonsWrapper}>
            <Button htmlType="reset" type="secondary" onClick={handleCancelEditing}>
              Отмена
            </Button>
            <Button htmlType="submit" onClick={e => handleEditProfile(e, editedData)}>
              Сохранить
            </Button>
          </div>
        )}
      </form>
    </div>
  )
}

export default ProfilePage
