import { useSelector } from '../../services/hooks/useSelector'
import { orderSelector } from '../../services/selectors/selectors'
import OrderSuccessIcon from '../order-success-icon/order-success-icon'
import styles from './order-details.module.css'

const OrderDetails = () => {
  const order = useSelector(orderSelector)

  return (
    <>
      <span className={`mt-4 text text_type_digits-large ${styles.orderId}`} data-test-id="order-number">
        {order?.number}
      </span>
      <span className="mt-8 text text_type_main-medium">идентификатор заказа</span>
      <div className={`mt-15 mb-15 ${styles.successIconContainer}`}>
        <OrderSuccessIcon />
      </div>
      <p className="mb-2 text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="mb-20 text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  )
}

export default OrderDetails
