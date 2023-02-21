import { INGREDIENTS_URL, ORDER_URL } from '../configs/apiSettings'
import { Ingredient } from './types'

const handleResponse = (res: Response) => {
  if (res.ok) {
    return res.json()
  }

  const { status, statusText } = res
  return res.json().then(info => Promise.reject(new Error(`${info.message} (${status} ${statusText})`)))
}

export const fetchIngredients = () => {
  return fetch(INGREDIENTS_URL)
    .then(res => handleResponse(res))
}

export const placeOrder = (orderIngredients: Ingredient["_id"][]) => {
  return fetch(ORDER_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ingredients: orderIngredients
    })
  }).then(res => handleResponse(res))
}
