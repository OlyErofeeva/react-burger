import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './login-page.module.css'
import FormLayout from '../../components/form-layout/form-layout'
import { Progress } from '../../services/types/common'
import { UserLoginRequest } from '../../services/types/api'
import { loginUserMiddleware } from '../../services/thunks/login-user-middleware'
import { CookieName, getCookie } from '../../utils/cookie'
import { loginProgressSelector } from '../../services/selectors/selectors'
import { Routes } from '../routes'
import { useForm } from '../../services/hooks/useForm'
import { useSelector } from '../../services/hooks/useSelector'
import { useDispatch } from '../../services/hooks/useDispatch'

type LoginFormInputs = {
  email: string
  password: string
}

const LoginPage = () => {
  const accessToken = getCookie(CookieName.AccessToken)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const loginProgress = useSelector(loginProgressSelector)
  const { inputValues, handleInputChange } = useForm<LoginFormInputs>({ email: '', password: '' })

  const handleLogin = (e: React.SyntheticEvent, user: UserLoginRequest) => {
    e.preventDefault()
    dispatch(loginUserMiddleware(user))
  }

  useEffect(() => {
    if (loginProgress === Progress.SUCCESS) {
      const previousPage = location.state?.from
      navigate(previousPage ? previousPage : Routes.Main)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginProgress])

  useEffect(() => {
    if (accessToken) {
      navigate(Routes.Main, { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <FormLayout title="Вход" onSubmit={e => handleLogin(e, inputValues)}>
        <Input
          autoFocus
          required
          name="email"
          placeholder="E-mail"
          value={inputValues.email}
          onChange={handleInputChange}
          data-test-id="email-input"
        />
        <PasswordInput
          required
          name="password"
          value={inputValues.password}
          onChange={handleInputChange}
          data-test-id="password-input"
        />
        <Button htmlType="submit" type="primary" size="medium" data-test-id="login-button">
          Войти
        </Button>
      </FormLayout>
      <div className={`mt-20 ${styles.hint}`}>
        <span className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?
          <Link className={`ml-2 ${styles.link}`} to={Routes.Register}>
            Зарегистрироваться
          </Link>
        </span>
        <span className="text text_type_main-default text_color_inactive">
          Забыли пароль?
          <Link className={`ml-2 ${styles.link}`} to={Routes.ForgotPassword}>
            Восстановить пароль
          </Link>
        </span>
      </div>
    </>
  )
}

export default LoginPage
