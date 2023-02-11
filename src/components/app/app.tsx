import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import OrderDetails from '../order-details/order-details'
import { Ingredient } from '../../utils/types'
import IngredientDetails from '../ingredient-details/ingredient-details'

const GET_INGREDIENTS_URL = 'https://norma.nomoreparties.space/api/ingredients'

const App = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [isLoading, setLoading] = useState(true)
  const [isOrderDetailsModalOpen, setOrderDetailsModalOpen] = useState(false)
  const [isIngredientModalOpen, setIngredientModalOpen] = useState(false)
  const [activeModalIngredient, setActiveModalIngredient] = useState<Ingredient | null>(null)
  const handlePlaceOrderClick = () => {
    setOrderDetailsModalOpen(true)
  }
  const handleAllModalClose = () => {
    setOrderDetailsModalOpen(false)
    setIngredientModalOpen(false)
    setActiveModalIngredient(null)
  }

  const handleBurgerIngredientClick = (ingredient: Ingredient) => {
    setActiveModalIngredient(ingredient)
    setIngredientModalOpen(true)
  }

  const closeModalOnEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleAllModalClose()
    }
  }

  const fetchIngredients = () => {
    fetch(GET_INGREDIENTS_URL)
      .then(res => res.json())
      .then(res => {
        setIngredients(res.data)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchIngredients()
    document.addEventListener('keydown', closeModalOnEsc)
    return () => document.removeEventListener('keydown', closeModalOnEsc)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />
      {!isLoading && (
        <main className={styles.main}>
          <BurgerIngredients ingredients={ingredients} onIngredientClick={handleBurgerIngredientClick} />
          <BurgerConstructor ingredients={ingredients} onPlaceOrderClick={handlePlaceOrderClick} />
        </main>
      )}
      {isOrderDetailsModalOpen && <OrderDetails onClose={handleAllModalClose} />}
      {isIngredientModalOpen && activeModalIngredient && (
        <IngredientDetails ingredient={activeModalIngredient} onClose={handleAllModalClose} />
      )}
    </div>
  )
}

export default App
