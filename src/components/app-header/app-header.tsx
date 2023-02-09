import React from 'react'
import NavLink from '../nav-link/nav-link'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'

const AppHeader = () => {

  return (
    <header className={`${styles.appHeader} p-4`}>
      <div className={styles.headerContent}>
        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            <NavLink caption="Конструктор" isActive={true}>
              <BurgerIcon type="primary" />
            </NavLink>
            <NavLink caption="Лента заказов" isActive={false}>
              <ListIcon type="secondary" />
            </NavLink>
            <NavLink caption="Личный кабинет" isActive={false}>
              <ProfileIcon type="secondary" />
            </NavLink>
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
