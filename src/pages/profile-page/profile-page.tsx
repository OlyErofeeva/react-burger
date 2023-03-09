import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './profile-page.module.css'

const ProfilePage = () => {
  return (
    <div className={`mt-30 ${styles.pageContent}`}>
      <div className={`ml-5 mr-15 ${styles.sidebarContainer}`}>
        <ul className={styles.tabList}>
          <li>
            <a className={`pt-4 pb-4 text text_type_main-medium ${styles.tabLink} ${styles.tabLinkActive}`} href="/">
              Профиль
            </a>
          </li>
          <li>
            <a className={`pt-4 pb-4 text text_type_main-medium text_color_inactive ${styles.tabLink}`} href="/">
              История заказов
            </a>
          </li>
          <li>
            <a className={`pt-4 pb-4 text text_type_main-medium text_color_inactive ${styles.tabLink}`} href="/">
              Выход
            </a>
          </li>
        </ul>
        <p className="mt-20 text text_type_main-default text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={styles.profileInfo}>
        <Input placeholder="Имя" value="" onChange={() => console.log('name input')} icon={'EditIcon'} />
        <Input placeholder="Логин" value="" onChange={() => console.log('login input')} icon={'EditIcon'} />
        <PasswordInput value="" onChange={() => console.log('password input')} icon={'EditIcon'} />
        <div className={styles.buttonsWrapper}>
          <Button htmlType="reset" type="secondary">
            Отмена
          </Button>
          <Button htmlType="submit">Сохранить</Button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
