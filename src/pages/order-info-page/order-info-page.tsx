import { useParams } from 'react-router-dom'
import OrderInfo from '../../components/order-info/order-info'
import { feedOrdersSelector } from '../../services/selectors/selectors'
import { useSelector } from '../../services/hooks/useSelector'
import styles from './order-info-page.module.css'
import { useEffect } from 'react'
import { useDispatch } from '../../services/hooks/useDispatch'
import { wsFeedActionCreator } from '../../services/action-creators/ws-feed'

const OrderInfoPage = () => {
  const dispatch = useDispatch()
  const allOrders = useSelector(feedOrdersSelector)
  const { id } = useParams()
  const order = allOrders?.find(order => order._id === id)

  useEffect(() => {
    dispatch(wsFeedActionCreator.connectionStart())
    return () => {
      dispatch(wsFeedActionCreator.disconnect())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!order) {
    return null
  }

  return (
    <div className={`mt-30 ${styles.pageContent}`}>
      <p className="mb-5 text text_type_digits-default">#{order.number}</p>
      <OrderInfo order={order} />
    </div>
  )
}

export default OrderInfoPage
