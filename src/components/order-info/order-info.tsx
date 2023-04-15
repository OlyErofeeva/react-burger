import { useMemo } from 'react'
import { useSelector } from '../../services/hooks/useSelector'
import { allIngredientsSelector } from '../../services/selectors/selectors'
import { FeedOrder } from '../../services/types/api'
import { Ingredient } from '../../services/types/ingredient'
import IngredientIcon from '../ingredient-icon/ingredient-icon'
import Price from '../price/price'
import styles from './order-info.module.css'
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'

type Props = {
  order: FeedOrder
}

const OrderInfo: React.FC<Props> = ({ order }) => {
  const allIngredients = useSelector(allIngredientsSelector)
  const ingredients = order.ingredients
    .map(id => {
      return allIngredients.find(ingredient => ingredient._id === id)
    })
    .filter(item => !!item) as Ingredient[]

  const totalPrice = ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0)

  const distinctIngredients = [...new Set(ingredients)]

  const mapWithOrderIngredients = useMemo(() => {
    // should result in a map like {'60666c42cc7b410027a1a9b7' => 1, '60666c42cc7b410027a1a9b6' => 3, etc.}
    const map = new Map<Ingredient['_id'], number>()
    order.ingredients.forEach(id => {
      const currentAmount = map.get(id) || 0
      map.set(id, currentAmount + 1)
    })
    return map
  }, [order.ingredients])

  return (
    <div className={styles.content}>
      <h2 className="pt-5 text text_type_main-medium">{order.name}</h2>
      <p className={`mt-2 text text_type_main-default ${styles.status}`}>{order.status}</p>
      <p className="mt-15 text text_type_main-medium">Состав:</p>
      <ul className={styles.ingredientList}>
        {distinctIngredients.map(ingredient => (
          <li key={ingredient._id} className="mb-4">
            <div className={styles.ingredient}>
              <IngredientIcon ingredient={ingredient} />
              <p className="text text_type_main-default">{ingredient.name}</p>
              <Price
                price={ingredient.price}
                multiplier={mapWithOrderIngredients.get(ingredient._id)}
                extraClass={styles.price}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        <FormattedDate date={new Date(order.createdAt)} className="text text_type_main-default text_color_inactive" />
        <Price price={totalPrice} />
      </div>
    </div>
  )
}

export default OrderInfo
