import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useNavigate } from 'react-router-dom'
import { Routes } from '../routes'
import styles from './not-found-page.module.css'
import image404 from '../../images/404-page-image.png'

const NotFoundPage = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(Routes.Main)
  }
  return (
    <div className={`mt-4 ${styles.pageContent}`}>
      <span className="text text_type_digits-large">404</span>
      <h2 className="mb-4 text text_type_main-large">Page not found</h2>
      <img className={styles.image} src={image404} alt="Page not found" />
      <p className="mt-4 mb-4 text text_type_main-medium text_color_inactive">
        The page you are trying to access does’t exist
      </p>
      <Button htmlType="button" onClick={handleClick}>
        Go to main page
      </Button>
    </div>
  )
}

export default NotFoundPage
