import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './reset-password-page.module.css'
import FormLayout from '../../components/form-layout/form-layout'

const ResetPasswordPage = () => {
  return (
    <>
      <FormLayout title="Восстановление пароля">
        {/* TODO-3 fix input props */}
        <PasswordInput placeholder='Введите новый пароль' value="" onChange={() => console.log('password input')}/>
        <Input placeholder="Введите код из письма" value="" onChange={() => console.log('email input')} />
        <Button htmlType="submit" type="primary" size="medium">
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
