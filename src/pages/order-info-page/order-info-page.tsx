import { useParams } from 'react-router-dom'
import OrderInfo from '../../components/order-info/order-info'
import { feedOrdersSelector, profileOrdersSelector } from '../../services/selectors/selectors'
import { useSelector } from '../../services/hooks/useSelector'
import styles from './order-info-page.module.css'
import { useEffect } from 'react'
import { useDispatch } from '../../services/hooks/useDispatch'
import { wsFeedActionCreator } from '../../services/action-creators/ws-feed'
import { BASE_URL, FEED_URL } from '../../configs/ws-settings'
import { wsProfileOrdersActionCreator } from '../../services/action-creators/ws-profile-orders'
import { CookieName, getCookie } from '../../utils/cookie'

type Props = {
  context: 'feed' | 'profileOrders'
}

const OrderInfoPage: React.FC<Props> = ({ context }) => {
  const dispatch = useDispatch()
  const accessToken = getCookie(CookieName.AccessToken)
  const allFeedOrders = useSelector(feedOrdersSelector)
  const allProfileOrders = useSelector(profileOrdersSelector)
  const { id } = useParams()

  const findOrder = () => {
    if (context === 'feed') {
      return allFeedOrders?.find(order => order._id === id)
    } else if (context === 'profileOrders') {
      return allProfileOrders.find(order => order._id === id)
    } else {
      return null
    }
  }

  const order = findOrder()

  useEffect(() => {
    if (context === 'feed') {
      dispatch(wsFeedActionCreator.connectionStart(FEED_URL))
      return () => {
        dispatch(wsFeedActionCreator.disconnect())
      }
    }
    if (context === 'profileOrders') {
      dispatch(wsProfileOrdersActionCreator.connectionStart(`${BASE_URL}?token=${accessToken}`))
      return () => {
        dispatch(wsProfileOrdersActionCreator.disconnect())
      }
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
