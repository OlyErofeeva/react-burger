import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './reset-password-page.module.css'
import FormLayout from '../../components/form-layout/form-layout'
import { Progress } from '../../services/types/common'
import { ResetPasswordRequest } from '../../services/types/api'
import { resetPasswordMiddleware } from '../../services/thunks/reset-password-middleware'
import { resetPasswordProgressSelector } from '../../services/selectors/selectors'
import { CookieName, getCookie } from '../../utils/cookie'
import { Routes } from '../routes'

const ResetPasswordPage = () => {
  const accessToken = getCookie(CookieName.AccessToken)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [inputValues, setInputValues] = useState<ResetPasswordRequest>({ password: '', token: '' })
  const resetPasswordProgress = useSelector(resetPasswordProgressSelector)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value })
  }

  const handleResetPassword = (e: React.SyntheticEvent, userData: ResetPasswordRequest) => {
    e.preventDefault()
    // TODO fix ts-ignore
    // @ts-ignore
    dispatch(resetPasswordMiddleware(userData))
  }

  useEffect(() => {
    if (resetPasswordProgress === Progress.SUCCESS) {
      navigate(Routes.Login)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetPasswordProgress])

  useEffect(() => {
    if (accessToken) {
      navigate(Routes.Main, { replace: true })
    } else if (location.state?.from !== Routes.ForgotPassword) {
      navigate(Routes.ForgotPassword, { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <FormLayout title="Восстановление пароля" onSubmit={e => handleResetPassword(e, inputValues)}>
        <PasswordInput
          autoFocus
          required
          name="password"
          placeholder="Введите новый пароль"
          value={inputValues.password}
          onChange={handleInputChange}
        />
        <Input
          required
          name="token"
          placeholder="Введите код из письма"
          value={inputValues.token}
          onChange={handleInputChange}
        />
        <Button htmlType="submit" type="primary" size="medium">
          Сохранить
        </Button>
      </FormLayout>
      <div className={`mt-20 ${styles.hint}`}>
        <span className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
          <Link className={`ml-2 ${styles.link}`} to={Routes.Login}>
            Войти
          </Link>
        </span>
      </div>
    </>
  )
}

export default ResetPasswordPage
