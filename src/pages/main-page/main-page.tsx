import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDispatch, useSelector } from 'react-redux'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor'
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'
import OrderDetails from '../../components/order-details/order-details'
import { ingredientsFetchProgressSelector } from '../../services/selectors/selectors'
import { Ingredient, Progress } from '../../utils/types'
import { placeOrderMiddleware } from '../../services/thunks/place-order-middleware'

import styles from './main-page.module.css'

const MainPage = () => {
  const [isOrderDetailsModalOpen, setOrderDetailsModalOpen] = useState(false)
  const ingredientsFetchProgress = useSelector(ingredientsFetchProgressSelector)
  const dispatch = useDispatch()

  const handlePlaceOrderClick = (ingredientsIds: Ingredient['_id'][]) => {
    setOrderDetailsModalOpen(true)
    // TODO fix ts-ignore
    // @ts-ignore
    dispatch(placeOrderMiddleware(ingredientsIds))
  }

  const handleOrderDetailsClose = () => {
    setOrderDetailsModalOpen(false)
  }

  return (
    <>
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
    </>
  )
}

export default MainPage
