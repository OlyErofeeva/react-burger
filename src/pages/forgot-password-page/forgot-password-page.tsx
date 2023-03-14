import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './forgot-password-page.module.css'
import FormLayout from '../../components/form-layout/form-layout'
import { ForgotPasswordRequest, Progress } from '../../utils/types'
import { forgotPasswordMiddleware } from '../../services/thunks/forgot-password-middleware'
import { forgotPasswordProgressSelector } from '../../services/selectors/selectors'
import { CookieName, getCookie } from '../../utils/cookie'

const ForgotPasswordPage = () => {
  const accessToken = getCookie(CookieName.AccessToken)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [inputValues, setInputValues] = useState<ForgotPasswordRequest>({ email: '' })
  const forgotPasswordProgress = useSelector(forgotPasswordProgressSelector)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value })
  }

  const handleForgotPassword = (e: React.SyntheticEvent, userData: ForgotPasswordRequest) => {
    e.preventDefault()
    // TODO fix ts-ignore
    // @ts-ignore
    dispatch(forgotPasswordMiddleware(userData))
  }

  useEffect(() => {
    if (forgotPasswordProgress === Progress.SUCCESS) {
      navigate('/reset-password')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forgotPasswordProgress])

  if (accessToken) {
    return (
      <Navigate to='/' replace />
    )
  }

  return (
    <>
      <FormLayout title="Восстановление пароля">
        <Input
          autoFocus
          required
          name="email"
          placeholder="Укажите e-mail"
          value={inputValues.email}
          onChange={handleInputChange}
        />
        <Button htmlType="submit" type="primary" size="medium" onClick={e => handleForgotPassword(e, inputValues)}>
          Восстановить
        </Button>
      </FormLayout>
      <div className={`mt-20 ${styles.hint}`}>
        <span className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
          <Link className={`ml-2 ${styles.link}`} to="/login">
            Войти
          </Link>
        </span>
      </div>
    </>
  )
}

export default ForgotPasswordPage
