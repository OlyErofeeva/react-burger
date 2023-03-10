import React, { useState } from 'react'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './login-page.module.css'
import FormLayout from '../../components/form-layout/form-layout'
import { UserLoginRequest, UserLoginResponse } from '../../utils/types'
import { loginUser } from '../../utils/api-call'

const LoginPage = () => {
  const [inputValues, setInputValues] = useState<UserLoginRequest>({ email: '', password: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value })
  }

  const handleRegister = (e: React.SyntheticEvent, user: UserLoginRequest) => {
    e.preventDefault()
    // TODO-3 handle response
    loginUser(user).then((res: UserLoginResponse) => console.log(res))
  }
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
        <Button htmlType="submit" type="primary" size="medium" onClick={e => handleRegister(e, inputValues)}>
          Войти
        </Button>
      </FormLayout>
      <div className={`mt-20 ${styles.hint}`}>
        <span className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?
          {/* TODO-3 fix links */}
          <a className={`ml-2 ${styles.link}`} href="/">
            Зарегистрироваться
          </a>
        </span>
        <span className="text text_type_main-default text_color_inactive">
          Забыли пароль?
          <a className={`ml-2 ${styles.link}`} href="/">
            Восстановить пароль
          </a>
        </span>
      </div>
    </>
  )
}

export default LoginPage
