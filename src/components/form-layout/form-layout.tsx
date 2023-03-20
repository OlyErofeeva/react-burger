import React, { SyntheticEvent } from 'react'
import styles from './form-layout.module.css'

type Props = {
  children: React.ReactElement[]
  title: string
  onSubmit: (() => void) | ((e: SyntheticEvent) => void)
}

const FormLayout: React.FC<Props> = ({ children, title, onSubmit }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h2 className="text text_type_main-medium">{title}</h2>
      {children}
    </form>
  )
}

export default FormLayout
