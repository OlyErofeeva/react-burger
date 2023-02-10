import React from 'react'
import styles from './modal.module.css'
import OrderSuccessIcon from '../order-success-icon/order-success-icon'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const Modal = () => {
  return (
    <div className={`pt-10 pb-15 pl-10 pr-10 ${styles.modal}`}>
      {/* TODO: title can be empty, remove hardcode */}
      <h2 className={`text text_type_main-large ${styles.modalTitle}`}>{'TODO'}</h2>
      {/* TODO: button positioning */}
      <button className={styles.closeButton}>
        <CloseIcon type="primary" />
      </button>

      {/* TODO: children */}
      <div className={styles.orderModalContent}>
        <span className={`mt-4 text text_type_digits-large ${styles.orderId}`}>034536</span>
        <span className="mt-8 text text_type_main-medium">идентификатор заказа</span>
        <div className={`mt-15 mb-15 ${styles.successIconContainer}`}>
          <OrderSuccessIcon />
        </div>
        <p className="mb-2 text text_type_main-default">Ваш заказ начали готовить</p>
        <p className="mb-15 text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      </div>
    </div>
  )
}

export default Modal
