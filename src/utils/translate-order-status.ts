import { OrderStatus } from '../services/types/api'

enum TranslatedOrderStatus {
  Created = 'Создан',
  Pending = 'Готовится',
  Done = 'Выполнен',
}

export const translateOrderStatus = (status: OrderStatus) => {
  switch (status) {
    case OrderStatus.Created:
      return TranslatedOrderStatus.Created
    case OrderStatus.Pending:
      return TranslatedOrderStatus.Pending
    case OrderStatus.Done:
      return TranslatedOrderStatus.Done
    default:
      return ''
  }
}
