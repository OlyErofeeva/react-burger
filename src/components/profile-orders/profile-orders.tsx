import OrderCard from '../order-card/order-card'
import styles from './profile-orders.module.css'

const dummyOrders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const ProfileOrders = () => {
  return (
    <ul className={styles.orderList}>
      {dummyOrders.map(order => (
        <li>
          <OrderCard status="Выполнен" />
        </li>
      ))}
    </ul>
  )
}

export default ProfileOrders
