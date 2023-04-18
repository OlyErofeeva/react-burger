import { useEffect, useState } from 'react'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { userSelector } from '../../services/selectors/selectors'
import { UserEditRequest } from '../../services/types/api'
import styles from './profile-form.module.css'
import { CookieName, getCookie } from '../../utils/cookie'
import { editUserMiddleware } from '../../services/thunks/edit-user-middleware'
import { getUserMiddleware } from '../../services/thunks/get-user-middleware'
import { useForm } from '../../services/hooks/useForm'
import { useSelector } from '../../services/hooks/useSelector'
import { useDispatch } from '../../services/hooks/useDispatch'

type ProfileFormInputs = {
  name: string
  email: string
  password: string
}

const ProfileForm = () => {
  const dispatch = useDispatch()
  const user = useSelector(userSelector)
  const [editedData, setEditedData] = useState<UserEditRequest>({})
  const { inputValues, handleInputChange, setInputValues } = useForm<ProfileFormInputs>(
    {
      name: user?.name || '',
      email: user?.email || '',
      password: '',
    },
    e => setEditedData({ ...editedData, [e.target.name]: e.target.value }),
    // TODO consider comparing editedData with user from global state to avoid
    // sending properties that were edited, but then changed again to the previous values
  )

  const handleEditProfile = (e: React.SyntheticEvent, userData: UserEditRequest) => {
    e.preventDefault()
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
    <form className={styles.profileInfo} onSubmit={e => handleEditProfile(e, editedData)}>
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
          <Button htmlType="submit">Сохранить</Button>
        </div>
      )}
    </form>
  )
}

export default ProfileForm
