import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useNavigate } from 'react-router-dom'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor'
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'
import OrderModal from '../../components/order-modal/order-modal'
import { ingredientsFetchProgressSelector } from '../../services/selectors/selectors'
import { placeOrderMiddleware } from '../../services/thunks/place-order-middleware'
import { CookieName, getCookie } from '../../utils/cookie'
import { Progress } from '../../services/types/common'
import { Ingredient } from '../../services/types/ingredient'
import { Routes } from '../routes'
import styles from './main-page.module.css'
import { useSelector } from '../../services/hooks/useSelector'
import { useDispatch } from '../../services/hooks/useDispatch'

const MainPage = () => {
  const [isOrderDetailsModalOpen, setOrderDetailsModalOpen] = useState(false)
  const ingredientsFetchProgress = useSelector(ingredientsFetchProgressSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePlaceOrderClick = (ingredientsIds: Ingredient['_id'][]) => {
    const accessToken = getCookie(CookieName.AccessToken)
    if (accessToken) {
      setOrderDetailsModalOpen(true)
      dispatch(placeOrderMiddleware(ingredientsIds))
    } else {
      navigate(Routes.Login, { state: { from: Routes.Main } })
    }
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
      {isOrderDetailsModalOpen && <OrderModal onClose={handleOrderDetailsClose} />}
    </>
  )
}

export default MainPage
