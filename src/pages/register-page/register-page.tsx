import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './register-page.module.css'
import FormLayout from '../../components/form-layout/form-layout'
import { registerUser } from '../../utils/api-call'
import { UserRegisterRequest, UserRegisterResponse } from '../../utils/types'

const RegisterPage = () => {
  const [inputValues, setInputValues] = useState<UserRegisterRequest>({ name: '', email: '', password: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value })
  }

  const handleRegister = (e: React.SyntheticEvent, user: UserRegisterRequest) => {
    e.preventDefault()
    // TODO-3 handle response
    registerUser(user).then((res: UserRegisterResponse) => console.log(res))
  }
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
          <Link className={`ml-2 ${styles.link}`} to="/login">
            Войти
          </Link>
        </span>
      </div>
    </>
  )
}

export default RegisterPage
