import { constructorActionCreator } from '../action-creators'
import { IngredientType } from '../types/ingredient'
import { constructorReducer } from './constructor'

const testIngredient = {
  constructorId: '1',
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
  constructorId: '2',
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

describe('constructor reducer', () => {
  it('should return the initial state', () => {
    expect(constructorReducer(undefined, {} as any)).toEqual({ items: [] })
  })

  it('should handle SetIngredients', () => {
    expect(
      constructorReducer(undefined, constructorActionCreator.setIngredients([testIngredient, anotherTestIngredient])),
    ).toEqual({
      items: [testIngredient, anotherTestIngredient],
    })

    expect(
      constructorReducer({ items: [testIngredient] }, constructorActionCreator.setIngredients([anotherTestIngredient])),
    ).toEqual({
      items: [anotherTestIngredient],
    })
  })

  it('should handle RemoveIngredient', () => {
    expect(
      constructorReducer(
        { items: [testIngredient, anotherTestIngredient] },
        constructorActionCreator.removeIngredient('1'),
      ),
    ).toEqual({
      items: [anotherTestIngredient],
    })
  })
})
