import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './register-page.module.css'
import FormLayout from '../../components/form-layout/form-layout'
import { Progress, UserRegisterRequest } from '../../utils/types'
import { registerUserMiddleware } from '../../services/thunks/register-user-middleware'
import { registrationProgressSelector } from '../../services/selectors/selectors'
import { CookieName, getCookie } from '../../utils/cookie'
import { Routes } from '../routes'

const RegisterPage = () => {
  const accessToken = getCookie(CookieName.AccessToken)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [inputValues, setInputValues] = useState<UserRegisterRequest>({ name: '', email: '', password: '' })
  const registrationProgress = useSelector(registrationProgressSelector)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value })
  }

  const handleRegister = (e: React.SyntheticEvent, user: UserRegisterRequest) => {
    e.preventDefault()
    // TODO fix ts-ignore
    // @ts-ignore
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
      <FormLayout title="Регистрация">
        <Input autoFocus required name="name" placeholder="Имя" value={inputValues.name} onChange={handleInputChange} />
        <Input required name="email" placeholder="E-mail" value={inputValues.email} onChange={handleInputChange} />
        <PasswordInput required name="password" value={inputValues.password} onChange={handleInputChange} />
        <Button htmlType="submit" type="primary" size="medium" onClick={e => handleRegister(e, inputValues)}>
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
