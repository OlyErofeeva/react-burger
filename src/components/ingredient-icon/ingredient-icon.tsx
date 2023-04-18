import { Ingredient } from '../../services/types/ingredient'
import styles from './ingredient-icon.module.css'

type Props = {
  ingredient: Ingredient
  children?: React.ReactNode
}

const IngredientIcon: React.FC<Props> = ({ ingredient, children }) => {
  return (
    <div className={styles.imageContainer}>
      <img src={ingredient.image_mobile} alt={ingredient.name} title={ingredient.name} className={styles.image} />
      {children}
    </div>
  )
}

export default IngredientIcon
