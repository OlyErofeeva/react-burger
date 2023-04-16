import { useNavigate, useParams } from 'react-router-dom'
import Modal from '../modal/modal'
import OrderInfo from '../order-info/order-info'
import { useSelector } from '../../services/hooks/useSelector'
import { feedOrdersSelector, profileOrdersSelector } from '../../services/selectors/selectors'

const OrderInfoModal = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const allFeedOrders = useSelector(feedOrdersSelector)
  const allProfileOrders = useSelector(profileOrdersSelector)
  const order = allFeedOrders?.find(order => order._id === id) || allProfileOrders.find(order => order._id === id)

  const handleOrderInfoClose = () => {
    navigate(-1)
  }

  if (!order) {
    return null
  }

  return (
    <Modal
      onClose={handleOrderInfoClose}
      titleElement={<p className="text text_type_digits-default">#{order?.number}</p>}
    >
      <OrderInfo order={order} />
    </Modal>
  )
}

export default OrderInfoModal
