import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'
import HeaderLink from '../header-link/header-link'
import { Routes } from '../../pages/routes'

const AppHeader = () => {
  const calcIconType = (isActive: boolean) => (isActive ? 'primary' : 'secondary')

  const navLinksConfig = [
    {
      path: Routes.Main,
      caption: 'Конструктор',
      renderIcon: (isActive: boolean) => <BurgerIcon type={calcIconType(isActive)} />,
    },
    {
      path: Routes.Orders,
      caption: 'Лента заказов',
      renderIcon: (isActive: boolean) => <ListIcon type={calcIconType(isActive)} />,
    },
    {
      path: Routes.Profile,
      caption: 'Личный кабинет',
      renderIcon: (isActive: boolean) => <ProfileIcon type={calcIconType(isActive)} />,
    },
  ]

  return (
    <header className={`${styles.appHeader} p-4`}>
      <div className={styles.headerContent}>
        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            {navLinksConfig.map((link, index) => (
              <li key={index} className={styles.navItem}>
                <HeaderLink path={link.path} caption={link.caption}>
                  {link.renderIcon}
                </HeaderLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
      </div>
    </header>
  )
}

export default AppHeader
