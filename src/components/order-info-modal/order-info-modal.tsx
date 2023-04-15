import Modal from '../modal/modal'
import OrderInfo from '../order-info/order-info'

type Props = {
  onClose: () => void
  orderNumber: number
}

const OrderInfoModal: React.FC<Props> = ({ onClose, orderNumber }) => {
  return (
    <Modal onClose={onClose} titleElement={<p className="text text_type_digits-default">#{orderNumber}</p>}>
      <OrderInfo />
    </Modal>
  )
}

export default OrderInfoModal
