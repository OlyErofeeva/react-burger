import { TypedUseSelectorHook, useSelector as selectorHook } from 'react-redux'
import { GlobalState } from '../types/common'

export const useSelector: TypedUseSelectorHook<GlobalState> = selectorHook
