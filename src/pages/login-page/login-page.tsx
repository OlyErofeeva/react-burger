import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './login-page.module.css'
import FormLayout from '../../components/form-layout/form-layout'
import { Progress, UserLoginRequest } from '../../utils/types'
import { loginUserMiddleware } from '../../services/thunks/login-user-middleware'
import { CookieName, getCookie } from '../../utils/cookie'
import { loginProgressSelector } from '../../services/selectors/selectors'

const LoginPage = () => {
  const accessToken = getCookie(CookieName.AccessToken)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [inputValues, setInputValues] = useState<UserLoginRequest>({ email: '', password: '' })
  const loginProgress = useSelector(loginProgressSelector)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value })
  }

  const handleLogin = (e: React.SyntheticEvent, user: UserLoginRequest) => {
    e.preventDefault()
    // TODO fix ts-ignore
    // @ts-ignore
    dispatch(loginUserMiddleware(user))
  }

  useEffect(() => {
    if (loginProgress === Progress.SUCCESS) {
      const previousPage = location.state?.from
      navigate(previousPage ? previousPage : '/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginProgress])

  useEffect(() => {
    if (accessToken) {
      navigate('/', { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <FormLayout title="Вход">
        <Input
          autoFocus
          required
          name="email"
          placeholder="E-mail"
          value={inputValues.email}
          onChange={handleInputChange}
        />
        <PasswordInput required name="password" value={inputValues.password} onChange={handleInputChange} />
        <Button htmlType="submit" type="primary" size="medium" onClick={e => handleLogin(e, inputValues)}>
          Войти
        </Button>
      </FormLayout>
      <div className={`mt-20 ${styles.hint}`}>
        <span className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?
          <Link className={`ml-2 ${styles.link}`} to="/register">
            Зарегистрироваться
          </Link>
        </span>
        <span className="text text_type_main-default text_color_inactive">
          Забыли пароль?
          <Link className={`ml-2 ${styles.link}`} to="/forgot-password">
            Восстановить пароль
          </Link>
        </span>
      </div>
    </>
  )
}

export default LoginPage
