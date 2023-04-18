import { useDispatch as dispatchHook } from 'react-redux'
import { AppDispatch } from '../types/common'

export const useDispatch = () => dispatchHook<AppDispatch>()
