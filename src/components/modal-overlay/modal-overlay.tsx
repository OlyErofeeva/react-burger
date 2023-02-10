import React from 'react'
import styles from './modal-overlay.module.css'

type Props = {
  children: JSX.Element
}

const ModalOverlay: React.FC<Props> = ({ children }) => {
  return <div className={styles.modalOverlay}>{children}</div>
}

export default ModalOverlay
