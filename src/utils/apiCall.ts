import { GET_INGREDIENTS_URL } from '../configs/apiSettings'

const handleResponse = (res: Response) => {
  if (res.ok) {
    return res.json()
  }

  const { status, statusText } = res
  return res.json().then(info => Promise.reject(new Error(`${info.message} (${status} ${statusText})`)))
}

export const fetchIngredients = () => {
  return fetch(GET_INGREDIENTS_URL)
    .then(res => handleResponse(res))
}
