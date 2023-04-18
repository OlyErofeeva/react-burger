import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './register-page.module.css'
import FormLayout from '../../components/form-layout/form-layout'
import { Progress } from '../../services/types/common'
import { UserRegisterRequest } from '../../services/types/api'
import { registerUserMiddleware } from '../../services/thunks/register-user-middleware'
import { registrationProgressSelector } from '../../services/selectors/selectors'
import { CookieName, getCookie } from '../../utils/cookie'
import { Routes } from '../routes'
import { useForm } from '../../services/hooks/useForm'
import { useSelector } from '../../services/hooks/useSelector'
import { useDispatch } from '../../services/hooks/useDispatch'

type RegisterFormInputs = {
  name: string
  email: string
  password: string
}

const RegisterPage = () => {
  const accessToken = getCookie(CookieName.AccessToken)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const registrationProgress = useSelector(registrationProgressSelector)
  const { inputValues, handleInputChange } = useForm<RegisterFormInputs>({ name: '', email: '', password: '' })

  const handleRegister = (e: React.SyntheticEvent, user: UserRegisterRequest) => {
    e.preventDefault()
    dispatch(registerUserMiddleware(user))
  }

  useEffect(() => {
    if (registrationProgress === Progress.SUCCESS) {
      navigate(Routes.Main)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registrationProgress])

  useEffect(() => {
    if (accessToken) {
      navigate(Routes.Main, { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <FormLayout title="Регистрация" onSubmit={e => handleRegister(e, inputValues)}>
        <Input autoFocus required name="name" placeholder="Имя" value={inputValues.name} onChange={handleInputChange} />
        <Input required name="email" placeholder="E-mail" value={inputValues.email} onChange={handleInputChange} />
        <PasswordInput required name="password" value={inputValues.password} onChange={handleInputChange} />
        <Button htmlType="submit" type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </FormLayout>
      <div className={`mt-20 ${styles.hint}`}>
        <span className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?
          <Link className={`ml-2 ${styles.link}`} to={Routes.Login}>
            Войти
          </Link>
        </span>
      </div>
    </>
  )
}

export default RegisterPage
