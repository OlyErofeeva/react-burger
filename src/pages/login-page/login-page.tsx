import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './login-page.module.css'
import FormLayout from '../../components/form-layout/form-layout'

const LoginPage = () => {
  return (
    <>
      <FormLayout title="Вход">
        {/* TODO-3 fix input props */}
        <Input placeholder="E-mail" value="" onChange={() => console.log('email input')} />
        <PasswordInput value="" onChange={() => console.log('password input')} />
        <Button htmlType="submit" type="primary" size="medium">
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
