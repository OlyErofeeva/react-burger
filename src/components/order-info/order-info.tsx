import { useSelector } from '../../services/hooks/useSelector'
import { allIngredientsSelector } from '../../services/selectors/selectors'
import IngredientIcon from '../ingredient-icon/ingredient-icon'
import Price from '../price/price'
import styles from './order-info.module.css'
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'

const OrderInfo = () => {
  const dummyIngredients = useSelector(allIngredientsSelector)
  return (
    <div className={styles.content}>
      <h2 className="text text_type_main-medium">Black Hole Singularity острый бургер</h2>
      <p className={`mt-2 text text_type_main-default ${styles.status}`}>Выполнен</p>
      <p className="mt-15 text text_type_main-medium">Состав:</p>
      <ul className={styles.ingredientList}>
        {dummyIngredients.map(ingredient => (
          <li className="mb-4">
            <div className={styles.ingredient}>
              <IngredientIcon ingredient={ingredient} />
              <p className="text text_type_main-default">{ingredient.name}</p>
              <Price price={20} multiplier={2} extraClass={styles.price} />
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        <FormattedDate date={new Date()} className="text text_type_main-default text_color_inactive" />
        <Price price={510}/>
      </div>
    </div>
  )
}

export default OrderInfo
