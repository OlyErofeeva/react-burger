import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import styles from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import OrderDetails from '../order-details/order-details'
import { Ingredient, Progress } from '../../utils/types'
import { ingredientsFetchProgressSelector } from '../../services/selectors/selectors'
import { fetchIngredientsMiddleware } from '../../services/thunks/fetch-ingredients-middleware'
import { placeOrderMiddleware } from '../../services/thunks/place-order-middleware'

const App = () => {
  const [isOrderDetailsModalOpen, setOrderDetailsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const ingredientsFetchProgress = useSelector(ingredientsFetchProgressSelector)

  const handlePlaceOrderClick = (ingredientsIds: Ingredient['_id'][]) => {
    setOrderDetailsModalOpen(true)
    // TODO fix ts-ignore
    // @ts-ignore
    dispatch(placeOrderMiddleware(ingredientsIds))
  }

  const handleOrderDetailsClose = () => {
    setOrderDetailsModalOpen(false)
  }

  useEffect(() => {
    // TODO fix ts-ignore
    // @ts-ignore
    dispatch(fetchIngredientsMiddleware)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />
      {/* TODO: loader & fetch error cases */}
      {ingredientsFetchProgress === Progress.SUCCESS && (
        <main className={styles.main}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor onPlaceOrderClick={handlePlaceOrderClick} />
          </DndProvider>
        </main>
      )}
      {isOrderDetailsModalOpen && <OrderDetails onClose={handleOrderDetailsClose} />}
    </div>
  )
}

export default App
