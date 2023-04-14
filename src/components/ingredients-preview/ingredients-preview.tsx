import { useSelector } from '../../services/hooks/useSelector'
import { allIngredientsSelector } from '../../services/selectors/selectors'
import IngredientIcon from '../ingredient-icon/ingredient-icon'
import styles from './ingredients-preview.module.css'

const IngredientsPreview = () => {
  // TODO-5 remove dummy data
  const dummyIngredients = useSelector(allIngredientsSelector)
  const previewLimit = 6

  if (!dummyIngredients) {
    return null
  }

  return (
    <ul className={styles.ingredientList}>
      {dummyIngredients
        .slice(0, previewLimit)
        .reverse()
        .map((ingredient, index) => {
          return (
            <li className={styles.ingredientListItem} key={index}>
              <IngredientIcon ingredient={ingredient}>
                {index === 0 && dummyIngredients.length > previewLimit && (
                  <div className={styles.ingredientOverlay}>
                    <span className="text text_type_main-default">{`+${dummyIngredients.length - previewLimit}`}</span>
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
