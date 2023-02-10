import React from 'react'
import styles from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import ModalOverlay from '../modal-overlay/modal-overlay'
import Modal from '../modal/modal'

// TODO: limit height of the lists

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
      <ModalOverlay>
        <Modal />
      </ModalOverlay>
    </div>
  )
}

export default App
