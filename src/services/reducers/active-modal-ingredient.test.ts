import { activeModalIngredientActionCreator } from '../action-creators'
import { IngredientType } from '../types/ingredient'
import { activeModalIngredientReducer } from './active-modal-ingredient'

const testIngredient = {
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
}

const anotherTestIngredient = {
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
}

describe('active modal ingredient reducer', () => {
  it('should return the initial state', () => {
    expect(activeModalIngredientReducer(undefined, {} as any)).toEqual({ item: null })
  })

  it('should handle SetIngredient', () => {
    expect(activeModalIngredientReducer(undefined, activeModalIngredientActionCreator.set(testIngredient))).toEqual({
      item: testIngredient,
    })

    expect(
      activeModalIngredientReducer(
        { item: testIngredient },
        activeModalIngredientActionCreator.set(anotherTestIngredient),
      ),
    ).toEqual({ item: anotherTestIngredient })
  })

  it('should handle ClearIngredient', () => {
    expect(activeModalIngredientReducer({ item: testIngredient }, activeModalIngredientActionCreator.clear())).toEqual({
      item: null,
    })
  })
})
