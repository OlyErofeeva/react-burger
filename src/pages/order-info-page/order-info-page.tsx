import OrderInfo from '../../components/order-info/order-info'
import styles from './order-info-page.module.css'

type Props = {
  orderNumber: number
}

const OrderInfoPage: React.FC<Props> = ({ orderNumber }) => {
  return (
    <div className={`mt-30 ${styles.pageContent}`}>
      <p className="mb-5 text text_type_digits-default">#{orderNumber}</p>
      <OrderInfo />
    </div>
  )
}

export default OrderInfoPage
