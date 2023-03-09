import React from 'react'
import styles from './form-layout.module.css'

type Props = {
  children: React.ReactElement[]
  title: string
}

const FormLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <form className={styles.form}>
      <h2 className="text text_type_main-medium">{title}</h2>
      {children}
    </form>
  )
}

export default FormLayout
