import styles from './common-page.module.css'

type Props = {
  title: string
  children: React.ReactNode
}

const CommonPage: React.FC<Props> = ({ title, children }) => {
  return (
    <main className={styles.content}>
      <h1 className={`mt-10 mb-5 text text_type_main-large ${styles.title}`}>{title}</h1>
      {children}
    </main>
  )
}

export default CommonPage
