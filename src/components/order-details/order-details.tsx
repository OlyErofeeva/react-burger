import React from 'react'
import styles from './order-details.module.css'
import OrderSuccessIcon from '../order-success-icon/order-success-icon'
import Modal from '../modal/modal'
import { useSelector } from 'react-redux'
import { orderProgressSelector, orderSelector } from '../../services/selectors/selectors'
import { Progress } from '../../utils/types'

type Props = {
  onClose: () => void
}

const OrderDetails: React.FC<Props> = ({ onClose }) => {
  const order = useSelector(orderSelector)
  const orderProgress = useSelector(orderProgressSelector)

  // TODO fix with a better loader
  if (orderProgress === Progress.WORK) {
    return <div>Отправляем заказ...</div>
  }
  // TODO make better styles for an error message
  if (orderProgress === Progress.ERROR) {
    return <div>{`Что-то пошло не так... :( Попробуйте снова.`}</div>
  }

  return (
    <Modal onClose={onClose}>
      <div className={styles.orderModalContent}>
        <span className={`mt-4 text text_type_digits-large ${styles.orderId}`}>{order?.number}</span>
        <span className="mt-8 text text_type_main-medium">идентификатор заказа</span>
        <div className={`mt-15 mb-15 ${styles.successIconContainer}`}>
          <OrderSuccessIcon />
        </div>
        <p className="mb-2 text text_type_main-default">Ваш заказ начали готовить</p>
        <p className="mb-15 text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </Modal>
  )
}

export default OrderDetails
