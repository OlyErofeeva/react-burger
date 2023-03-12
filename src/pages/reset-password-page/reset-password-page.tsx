import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './reset-password-page.module.css'
import FormLayout from '../../components/form-layout/form-layout'
import { ResetPasswordRequest } from '../../utils/types'
import { resetPasswordMiddleware } from '../../services/thunks/reset-password-middleware'

const ResetPasswordPage = () => {
  const dispatch = useDispatch()
  const [inputValues, setInputValues] = useState<ResetPasswordRequest>({ password: '', token: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value })
  }

  const handleResetPassword = (e: React.SyntheticEvent, userData: ResetPasswordRequest) => {
    e.preventDefault()
    // TODO fix ts-ignore
    // @ts-ignore
    dispatch(resetPasswordMiddleware(userData))
  }

  return (
    <>
      <FormLayout title="Восстановление пароля">
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
        <Button htmlType="submit" type="primary" size="medium" onClick={e => handleResetPassword(e, inputValues)}>
          Сохранить
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

export default ResetPasswordPage
