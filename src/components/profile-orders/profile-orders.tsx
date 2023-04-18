import { useEffect } from 'react'
import OrderCard from '../order-card/order-card'
import styles from './profile-orders.module.css'
import { useDispatch } from '../../services/hooks/useDispatch'
import { wsProfileOrdersActionCreator } from '../../services/action-creators/ws-profile-orders'
import { BASE_URL } from '../../configs/ws-settings'
import { CookieName, getCookie } from '../../utils/cookie'
import { useSelector } from '../../services/hooks/useSelector'
import { profileOrdersSelector } from '../../services/selectors/selectors'

const ProfileOrders = () => {
  const dispatch = useDispatch()
  const accessToken = getCookie(CookieName.AccessToken)
  const orders = useSelector(profileOrdersSelector)

  useEffect(() => {
    dispatch(wsProfileOrdersActionCreator.connectionStart(`${BASE_URL}?token=${accessToken}`))
    return () => {
      dispatch(wsProfileOrdersActionCreator.disconnect())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ul className={styles.orderList}>
      {orders.map(order => (
        <li key={order._id}>
          <OrderCard order={order} showStatus />
        </li>
      ))}
    </ul>
  )
}

export default ProfileOrders
