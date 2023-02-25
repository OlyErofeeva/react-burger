import React from 'react'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'
import styles from './burger-constructor-ingredient.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { actionCreators } from '../../services/action-creators/action-creators'
import { ConstructorIngredient } from '../../utils/types'

type Props = {
  ingredient: ConstructorIngredient
  type?: 'top' | 'bottom'
}

const BurgerConstructorIngredient: React.FC<Props> = ({ ingredient, type }) => {
  const calculateIsLocked = () => type === 'top' || type === 'bottom'
  const dispatch = useDispatch()

  const constructorElementClassName = classNames({
    'ml-8': calculateIsLocked(),
    'ml-2': !calculateIsLocked(),
  })

  const handleRemoveIngredient = () => {
    dispatch(actionCreators.removeConstructorIngredient(ingredient.constructorId))
  }

  return (
    <li className={`pl-4 pr-4 ${styles.constructorIngredient}`}>
      {!calculateIsLocked() && <DragIcon type="primary" />}
      <ConstructorElement
        type={type}
        isLocked={calculateIsLocked()}
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        extraClass={constructorElementClassName}
        handleClose={handleRemoveIngredient}
      />
    </li>
  )
}

export default BurgerConstructorIngredient
