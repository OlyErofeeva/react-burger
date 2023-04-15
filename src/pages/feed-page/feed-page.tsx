import { useEffect } from 'react'
import CommonPage from '../../components/common-page/common-page'
import OrderCard from '../../components/order-card/order-card'
import styles from './feed-page.module.css'
import { useDispatch } from '../../services/hooks/useDispatch'
import { wsFeedActionCreator } from '../../services/action-creators/ws-feed'
import { useSelector } from '../../services/hooks/useSelector'
import { feedOrdersSelector, feedTotalSelector, feedTotalTodaySelector } from '../../services/selectors/selectors'
import { OrderStatus } from '../../services/types/api'

const FeedPage = () => {
  const dispatch = useDispatch()
  const orders = useSelector(feedOrdersSelector)
  const total = useSelector(feedTotalSelector)
  const totalToday = useSelector(feedTotalTodaySelector)
  const ordersDone = orders?.filter(order => order.status === OrderStatus.Done) || []
  const ordersPending = orders?.filter(order => order.status === OrderStatus.Pending) || []

  useEffect(() => {
    dispatch(wsFeedActionCreator.connectionStart())
    return () => {
      dispatch(wsFeedActionCreator.disconnect())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!orders) {
    return null
  }

  return (
    <CommonPage title="Лента заказов">
      <div className={styles.layout}>
        <ul className={styles.orderFeed}>
          {orders.map(order => (
            <li key={order._id}>
              <OrderCard order={order} />
            </li>
          ))}
        </ul>
        <div className={styles.summary}>
          <div className={styles.summaryDashboard}>
            <h2 className="text text_type_main-medium">Готовы:</h2>
            <ul className={styles.orderNumberList}>
              {ordersDone.map(order => (
                <li key={order._id}>
                  <span className={`text text_type_digits-default ${styles.readyOrderNum}`}>{order.number}</span>
                </li>
              ))}
            </ul>
            <h2 className="text text_type_main-medium">В работе:</h2>
            <ul className={styles.orderNumberList}>
              {ordersPending.map(order => (
                <li key={order._id}>
                  <span className="text text_type_digits-default">{order.number}</span>
                </li>
              ))}
            </ul>
          </div>
          <h2 className="mt-15 text text_type_main-medium">Выполнено за все время:</h2>
          <span className={`text text_type_digits-large ${styles.glowingText}`}>{total}</span>
          <h2 className="mt-15 text text_type_main-medium">Выполнено за сегодня:</h2>
          <span className={`text text_type_digits-large ${styles.glowingText}`}>{totalToday}</span>
        </div>
      </div>
    </CommonPage>
  )
}

export default FeedPage
