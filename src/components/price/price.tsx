import classNames from 'classnames'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './price.module.css'

type Props = {
  price: number
  multiplier?: number
  extraClass?: string
}

const Price: React.FC<Props> = ({ price, multiplier, extraClass }) => {
  const priceContainerClassName = classNames(styles.price, extraClass)
  const renderedPrice = !!multiplier ? `${multiplier} x ${price}` : price

  return (
    <div className={priceContainerClassName}>
      <span className="text text_type_digits-default">{renderedPrice}</span>
      <CurrencyIcon type="primary" />
    </div>
  )
}

export default Price
