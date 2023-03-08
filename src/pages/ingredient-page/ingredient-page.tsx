import styles from './ingredient-page.module.css'

const IngredientPage = () => {
  // TODO-3 remove hardcoded ingredient
  const ingredient = {
    calories: 30,
    carbohydrates: 40,
    fat: 20,
    image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
    name: 'Соус Spicy-X',
    price: 90,
    proteins: 30,
    type: 'sauce',
    __v: 0,
    _id: '60d3b41abdacab0026a733cc',
  }



  return (
    <div className={`mt-30 ${styles.ingredientPageContent}`}>
      <h1 className="text text_type_main-large">Детали ингредиента</h1>
      <img src={ingredient.image_large} alt={`изображение ингредиента ${ingredient.name}`} className={styles.image} />
      <span className="mt-4 mb-8 text text_type_main-medium">{ingredient.name}</span>
      <div className={styles.nutrientsTable}>
        <span className="text text_type_main-default text_color_inactive">Калории, ккал</span>
        <span className="text text_type_main-default text_color_inactive">Белки, г</span>
        <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
        <span className="text text_type_main-default text_color_inactive">Углеводы, г</span>
        <span className="text text_type_digits-default text_color_inactive">{ingredient.calories}</span>
        <span className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</span>
        <span className="text text_type_digits-default text_color_inactive">{ingredient.fat}</span>
        <span className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</span>
      </div>
    </div>
  )
}

export default IngredientPage
