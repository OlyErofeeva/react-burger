import { Link, useLocation } from 'react-router-dom'
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './order-card.module.css'
import IngredientsPreview from '../ingredients-preview/ingredients-preview'
import { FeedOrder } from '../../services/types/api'
import { useSelector } from '../../services/hooks/useSelector'
import { allIngredientsSelector } from '../../services/selectors/selectors'
import { Ingredient } from '../../services/types/ingredient'
import Price from '../price/price'
import { translateOrderStatus } from '../../utils/translate-order-status'

type Props = {
  order: FeedOrder
  showStatus?: boolean
}

const OrderCard: React.FC<Props> = ({ order, showStatus = false }) => {
  const location = useLocation()
  const allIngredients = useSelector(allIngredientsSelector)
  const ingredients = order.ingredients
    .map(id => {
      return allIngredients.find(ingredient => ingredient._id === id)
    })
    .filter(item => !!item) as Ingredient[]

  const totalPrice = ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0)
  const distinctIngredients = [...new Set(ingredients)]

  return (
    <Link to={order._id} state={{ modalLocation: location }} className={styles.link}>
      <article className={`p-6 ${styles.cardContainer}`}>
        <div className={styles.header}>
          <span className="text text_type_digits-default">{`#${order.number}`}</span>
          <FormattedDate date={new Date(order.createdAt)} className="text text_type_main-default text_color_inactive" />
        </div>
        <div>
          <h2 className="text text_type_main-medium">{order.name}</h2>
          {showStatus && <p className={`mt-2 text text_type_main-default ${styles.status}`}>{translateOrderStatus(order.status)}</p>}
        </div>
        <div className={styles.footer}>
          <IngredientsPreview ingredients={distinctIngredients} />
          <Price price={totalPrice} />
        </div>
      </article>
    </Link>
  )
}

export default OrderCard
