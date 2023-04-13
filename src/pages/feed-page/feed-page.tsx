import CommonPage from '../../components/common-page/common-page'
import OrderCard from '../../components/order-card/order-card'
import styles from './feed-page.module.css'

const dummyOrdersReady = ['034533', '034532', '034530', '034527', '034525', '034524']
const dummyOrdersWork = ['034538', '034541', '034542']
const dummyOrdersDoneOverall = 28752
const dummyOrdersDoneToday = 138
const dummyOrderFeed = [1, 2, 3, 4, 5, 6, 7]

const FeedPage = () => {
  return (
    <CommonPage title="Лента заказов">
      <div className={styles.layout}>
        <ul className={styles.orderFeed}>
          {/* TODO-5 key */}
          {dummyOrderFeed.map(() => (
            <li>
              <OrderCard />
            </li>
          ))}
        </ul>
        <div className={styles.summary}>
          <div className={styles.summaryDashboard}>
            <h2 className="text text_type_main-medium">Готовы:</h2>
            <ul className={styles.orderNumberList}>
              {/* TODO-5 key */}
              {dummyOrdersReady.map(orderNum => (
                <li>
                  <span className={`text text_type_digits-default ${styles.readyOrderNum}`}>{orderNum}</span>
                </li>
              ))}
            </ul>
            <h2 className="text text_type_main-medium">В работе:</h2>
            <ul className={styles.orderNumberList}>
              {/* TODO-5 key */}
              {dummyOrdersWork.map(orderNum => (
                <li>
                  <span className="text text_type_digits-default">{orderNum}</span>
                </li>
              ))}
            </ul>
          </div>
          <h2 className="mt-15 text text_type_main-medium">Выполнено за все время:</h2>
          <span className={`text text_type_digits-large ${styles.glowingText}`}>{dummyOrdersDoneOverall}</span>
          <h2 className="mt-15 text text_type_main-medium">Выполнено за сегодня:</h2>
          <span className={`text text_type_digits-large ${styles.glowingText}`}>{dummyOrdersDoneToday}</span>
        </div>
      </div>
    </CommonPage>
  )
}

export default FeedPage
