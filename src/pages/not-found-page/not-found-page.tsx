import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
// import styles from './not-found-page.module.css'

const NotFoundPage = () => {
  // TODO: make it beautiful, add a picture
  return (
    <div className="mt-30">
      <h2 className="mb-10 text text_type_main-large">Page not found</h2>
      <p className="mb-30 text text_type_main-medium text_color_inactive">The page you are trying to access does’t exist</p>
      <Button htmlType="button">Go to main page</Button>
    </div>
  )
}

export default NotFoundPage
