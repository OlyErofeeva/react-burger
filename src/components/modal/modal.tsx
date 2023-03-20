import React, { useEffect } from 'react'
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

  const closeModalOnEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', closeModalOnEsc)
    return () => document.removeEventListener('keydown', closeModalOnEsc)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!portalElement) {
    return null
  }

  return ReactDOM.createPortal(
    <div className={styles.portalWrapper}>
      <ModalOverlay onClick={onClose} />
      <div className={`pt-10 pb-15 pl-10 pr-10 ${styles.modal}`}>
        <div className={styles.modalHeader}>
          <h2 className="text text_type_main-large">{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>,
    portalElement,
  )
}

export default Modal
