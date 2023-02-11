import React from 'react'
import ReactDOM from 'react-dom'
import styles from './modal.module.css'

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/modal-overlay'

type Props = {
  children: JSX.Element
  onClose: () => void
  title?: string
}

const Modal: React.FC<Props> = ({ children, onClose, title }) => {
  const portalElement = document.getElementById('modal-portal')
  if (!portalElement) {
    return null
  }

  return ReactDOM.createPortal(
    <div className={styles.portalWrapper}>
      <ModalOverlay />
      <div className={`pt-10 pb-15 pl-10 pr-10 ${styles.modal}`}>
        <h2 className={`text text_type_main-large ${styles.modalTitle}`}>{title}</h2>
        {/* TODO: button positioning */}
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </div>,
    portalElement,
  )
}

export default Modal
