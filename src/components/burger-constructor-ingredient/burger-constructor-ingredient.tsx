import React from 'react'
import classNames from 'classnames'
import styles from './burger-constructor-ingredient.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

type Props = {
  imgSrc: string
  price: number
  text: string
  type?: 'top' | 'bottom'
}

const BurgerConstructorIngredient: React.FC<Props> = ({ imgSrc, price, text, type }) => {
  const calculateIsLocked = () => {
    if (type === 'top' || type === 'bottom') {
      return true
    }
    return false
  }

  const constructorElementClassName = classNames({
    'ml-8': calculateIsLocked(),
    'ml-2': !calculateIsLocked(),
  })

  return (
    <li className={styles.constructorIngredient}>
      {!calculateIsLocked() && <DragIcon type="primary" />}
      <ConstructorElement type={type} isLocked={calculateIsLocked()} text={text} price={price} thumbnail={imgSrc} extraClass={constructorElementClassName} />
    </li>
  )
}

export default BurgerConstructorIngredient
