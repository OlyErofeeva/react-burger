import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import OrderDetails from '../order-details/order-details'
import { Ingredient } from '../../utils/types'
import { fetchIngredients } from '../../utils/apiCall'

const App = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [isLoading, setLoading] = useState(true)
  const [isOrderDetailsModalOpen, setOrderDetailsModalOpen] = useState(false)
  const handlePlaceOrderClick = () => {
    setOrderDetailsModalOpen(true)
  }
  const handleAllModalClose = () => {
    setOrderDetailsModalOpen(false)
  }

  const closeModalOnEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleAllModalClose()
    }
  }

  useEffect(() => {
    fetchIngredients().then(res => {
      setIngredients(res.data)
      setLoading(false)
    })
    .catch(err => console.log(err.message))
    document.addEventListener('keydown', closeModalOnEsc)
    return () => document.removeEventListener('keydown', closeModalOnEsc)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />
      {!isLoading && (
        <main className={styles.main}>
          <BurgerIngredients ingredients={ingredients} />
          <BurgerConstructor ingredients={ingredients} onPlaceOrderClick={handlePlaceOrderClick} />
        </main>
      )}
      {isOrderDetailsModalOpen && <OrderDetails onClose={handleAllModalClose} />}
    </div>
  )
}

export default App
