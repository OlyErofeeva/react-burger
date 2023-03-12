import { GlobalState } from '../../utils/types'

export const allIngredientsSelector = (state: GlobalState) => state.ingredients.items
export const ingredientsFetchProgressSelector = (state: GlobalState) => state.ingredients.listFetchProgress
export const activeModalIngredientSelector = (state: GlobalState) => state.activeModalIngredient.item
export const constructorIngredientsSelector = (state: GlobalState) => state.constructor.items
export const orderSelector = (state: GlobalState) => state.order.item
export const orderProgressSelector = (state: GlobalState) => state.order.itemAddProgress
export const registrationProgressSelector = (state: GlobalState) => state.user.registrationProgress
export const loginProgressSelector = (state: GlobalState) => state.user.loginProgress
export const forgotPasswordProgressSelector = (state: GlobalState) => state.user.forgotPasswordProgress
export const resetPasswordProgressSelector = (state: GlobalState) => state.user.resetPasswordProgress
