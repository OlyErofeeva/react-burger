import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './register-page.module.css'
import FormLayout from '../../components/form-layout/form-layout'

const RegisterPage = () => {
  return (
    <>
      <FormLayout title="Регистрация">
        {/* TODO-3 fix input props */}
        <Input placeholder="Имя" value="" onChange={() => console.log('name input')} />
        <Input placeholder="E-mail" value="" onChange={() => console.log('email input')} />
        <PasswordInput value="" onChange={() => console.log('password input')} />
        <Button htmlType="submit" type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </FormLayout>
      <div className={`mt-20 ${styles.hint}`}>
        <span className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?
          {/* TODO-3 fix link */}
          <a className={`ml-2 ${styles.link}`} href="/">
            Войти
          </a>
        </span>
      </div>
    </>
  )
}

export default RegisterPage
