import { Ingredient } from '../../services/types/ingredient'
import IngredientIcon from '../ingredient-icon/ingredient-icon'
import styles from './ingredients-preview.module.css'

type Props = {
  ingredients: Ingredient[]
}

const IngredientsPreview: React.FC<Props> = ({ ingredients }) => {
  const previewLimit = 6

  return (
    <ul className={styles.ingredientList}>
      {ingredients
        .slice(0, previewLimit)
        .reverse()
        .map((ingredient, index) => {
          return (
            <li className={styles.ingredientListItem} key={index}>
              <IngredientIcon ingredient={ingredient}>
                {index === 0 && ingredients.length > previewLimit && (
                  <div className={styles.ingredientOverlay}>
                    <span className="text text_type_main-default">{`+${ingredients.length - previewLimit}`}</span>
                  </div>
                )}
              </IngredientIcon>
            </li>
          )
        })}
    </ul>
  )
}

export default IngredientsPreview
