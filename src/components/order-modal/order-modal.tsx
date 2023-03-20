import { useSelector } from "react-redux"
import { orderProgressSelector } from "../../services/selectors/selectors"
import { Progress } from "../../utils/types"
import Modal from "../modal/modal"
import OrderDetails from "../order-details/order-details"

type Props = {
  onClose: () => void
}

const OrderModal: React.FC<Props> = ({ onClose }) => {
  const orderProgress = useSelector(orderProgressSelector)

  // TODO fix with a better loader
  if (orderProgress === Progress.WORK) {
    return <div>Отправляем заказ...</div>
  }
  // TODO make better styles for an error message
  if (orderProgress === Progress.ERROR) {
    return <div>{`Что-то пошло не так... :( Попробуйте снова.`}</div>
  }
  
  return (
    <Modal onClose={onClose}>
      <OrderDetails />
    </Modal>
  )
}

export default OrderModal
