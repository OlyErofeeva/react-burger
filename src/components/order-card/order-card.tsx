import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './order-card.module.css'
import IngredientsPreview from '../ingredients-preview/ingredients-preview'

// TODO-5 remove the dummy data
const dummyOrderData = {
  number: '034535',
  date: new Date(),
  title: 'Death Star Starship Main бургер',
  price: 480,
}

const OrderCard = () => {
  return (
    <div className={`p-6 ${styles.cardContainer}`}>
      <div className={styles.header}>
        <span className="text text_type_digits-default">{`#${dummyOrderData.number}`}</span>
        <FormattedDate date={dummyOrderData.date} className="text text_type_main-default text_color_inactive" />
      </div>
      <h2 className="text text_type_main-medium">{dummyOrderData.title}</h2>
      <div className={styles.footer}>
        <IngredientsPreview />
        <div className={styles.priceContainer}>
          <span className="text text_type_digits-default">{dummyOrderData.price}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  )
}

export default OrderCard
