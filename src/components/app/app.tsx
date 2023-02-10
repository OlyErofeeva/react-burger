import React from 'react'
import styles from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'

// TODO: use <main> tag, limit height of the lists

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <BurgerIngredients />
    </div>
  )
}

export default App
