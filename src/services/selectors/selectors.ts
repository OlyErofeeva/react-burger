import { GlobalState } from '../../utils/types'

export const allIngredients = (state: GlobalState) => state.ingredients.items
export const ingredientsFetchProgress = (state: GlobalState) => state.ingredients.listFetchProgress
