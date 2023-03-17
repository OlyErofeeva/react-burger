import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { userSelector } from '../../services/selectors/selectors'
import { UserEditRequest } from '../../utils/types'
import styles from './profile-form.module.css'
import { CookieName, getCookie } from '../../utils/cookie'
import { editUserMiddleware } from '../../services/thunks/edit-user-middleware'
import { getUserMiddleware } from '../../services/thunks/get-user-middleware'

const ProfileForm = () => {
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
    e.preventDefault()
    // TODO fix ts-ignore
    // @ts-ignore
    dispatch(editUserMiddleware(userData))
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

  useEffect(() => {
    const accessToken = getCookie(CookieName.AccessToken)
    if (!user && accessToken) {
      // TODO fix ts-ignore
      // @ts-ignore
      dispatch(getUserMiddleware())
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
  )
}

export default ProfileForm
