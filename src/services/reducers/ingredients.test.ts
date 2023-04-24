import { ingredientsActionCreator } from '../action-creators'
import { Progress } from '../types/common'
import { IngredientType } from '../types/ingredient'
import { ingredientsReducer, initialState as IngredientsInitialState } from './ingredients'

// TODO-6 move test data -> utils
const testIngredients = [
  {
    _id: '643d69a5c3f7b9001cfa0944',
    name: 'Соус традиционный галактический',
    type: IngredientType.SAUCE,
    proteins: 42,
    fat: 24,
    carbohydrates: 42,
    calories: 99,
    price: 15,
    image: 'https://code.s3.yandex.net/react/code/sauce-03.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-03-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-03-large.png',
    __v: 0,
  },
  {
    _id: '643d69a5c3f7b9001cfa0948',
    name: 'Кристаллы марсианских альфа-сахаридов',
    type: IngredientType.MAIN,
    proteins: 234,
    fat: 432,
    carbohydrates: 111,
    calories: 189,
    price: 762,
    image: 'https://code.s3.yandex.net/react/code/core.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/core-large.png',
    __v: 0,
  },
]

describe('ingredients reducer', () => {
  it('should return the initial state', () => {
    expect(ingredientsReducer(undefined, {} as any)).toEqual(IngredientsInitialState)
  })

  it('should handle FetchRequest', () => {
    expect(ingredientsReducer(undefined, ingredientsActionCreator.fetchRequest())).toEqual({
      items: [],
      listFetchProgress: Progress.WORK,
    })
  })

  it('should handle FetchSuccess', () => {
    expect(
      ingredientsReducer(
        { items: [], listFetchProgress: Progress.WORK },
        ingredientsActionCreator.fetchSuccess(testIngredients),
      ),
    ).toEqual({
      items: testIngredients,
      listFetchProgress: Progress.SUCCESS,
    })
  })

  it('should handle FetchError', () => {
    expect(
      ingredientsReducer(
        { items: testIngredients, listFetchProgress: Progress.WORK },
        ingredientsActionCreator.fetchError(),
      ),
    ).toEqual({
      items: IngredientsInitialState.items,
      listFetchProgress: Progress.ERROR,
    })
  })
})
