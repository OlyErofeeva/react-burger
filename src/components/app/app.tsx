import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import OrderDetails from '../order-details/order-details'
import { Ingredient, Progress } from '../../utils/types'
import { fetchIngredients, placeOrder } from '../../utils/apiCall'
import { actionCreators } from '../../services/action-creators/action-creators'
import { ingredientsFetchProgressSelector } from '../../services/selectors/selectors'

const App = () => {
  const [isOrderDetailsModalOpen, setOrderDetailsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const ingredientsFetchProgress = useSelector(ingredientsFetchProgressSelector)

  const handlePlaceOrderClick = (ingredientsIds: Ingredient['_id'][]) => {
    setOrderDetailsModalOpen(true)
    dispatch(actionCreators.placeOrderRequest())
    placeOrder(ingredientsIds)
      .then(res => {
        dispatch(actionCreators.placeOrderSuccess({ name: res.name as string, number: res.order.number as number }))
      })
      .catch(err => {
        console.log(err.message)
        dispatch(actionCreators.placeOrderError())
      })
  }

  const handleOrderDetailsClose = () => {
    setOrderDetailsModalOpen(false)
  }

  useEffect(() => {
    dispatch(actionCreators.ingredientsFetchRequest())
    fetchIngredients()
      .then(res => {
        dispatch(actionCreators.ingredientsFetchSuccess(res.data))
        // TODO remove it when dnd's ready
        dispatch(actionCreators.setConstructorIngredients(res.data))
      })
      .catch(err => {
        console.log(err.message)
        dispatch(actionCreators.ingredientsFetchError())
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />
      {ingredientsFetchProgress === Progress.SUCCESS && (
        <main className={styles.main}>
          <BurgerIngredients />
          <BurgerConstructor onPlaceOrderClick={handlePlaceOrderClick} />
        </main>
      )}
      {isOrderDetailsModalOpen && <OrderDetails onClose={handleOrderDetailsClose} />}
    </div>
  )
}

export default App
