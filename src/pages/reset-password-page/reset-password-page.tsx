import React, { useState } from 'react'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './reset-password-page.module.css'
import FormLayout from '../../components/form-layout/form-layout'
import { ResetPasswordRequest, ResetPasswordResponse } from '../../utils/types'
import { resetPassword } from '../../utils/api-call'

const ResetPasswordPage = () => {
  const [inputValues, setInputValues] = useState<ResetPasswordRequest>({ password: '', token: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value })
  }

  const handleReset = (e: React.SyntheticEvent, userData: ResetPasswordRequest) => {
    e.preventDefault()
    // TODO-3 handle response
    resetPassword(userData).then((res: ResetPasswordResponse) => console.log(res))
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
        <Button htmlType="submit" type="primary" size="medium" onClick={e => handleReset(e, inputValues)}>
          Сохранить
        </Button>
      </FormLayout>
      <div className={`mt-20 ${styles.hint}`}>
        <span className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
          {/* TODO-3 fix link */}
          <a className={`ml-2 ${styles.link}`} href="/">
            Войти
          </a>
        </span>
      </div>
    </>
  )
}

export default ResetPasswordPage
