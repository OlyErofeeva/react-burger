import React from 'react'
import styles from './modal-overlay.module.css'

type Props = {
  onClick: () => void
}

const ModalOverlay: React.FC<Props> = ({ onClick }) => {
  return <div className={styles.modalOverlay} onClick={onClick}></div>
}

export default ModalOverlay
