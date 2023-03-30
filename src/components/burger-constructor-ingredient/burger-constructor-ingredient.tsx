import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'
import { useDrag, useDrop } from 'react-dnd'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor-ingredient.module.css'
import { ConstructorIngredient } from '../../services/types/constructor'
import { IngredientType } from '../../services/types/ingredient'
import { constructorActionCreator } from '../../services/action-creators'

type Props = {
  ingredient: ConstructorIngredient
  type?: 'top' | 'bottom'
  moveElement?: (dragIndex: number, hoverIndex: number) => void
  index: number
}

const BurgerConstructorIngredient: React.FC<Props> = ({ ingredient, type, moveElement, index }) => {
  const calculateIsLocked = () => type === 'top' || type === 'bottom'
  const dispatch = useDispatch()
  const ref = useRef<HTMLLIElement>(null)

  const constructorElementClassName = classNames({
    'ml-8': calculateIsLocked(),
    'ml-2': !calculateIsLocked(),
  })

  const calculateIngredientName = () => {
    switch (type) {
      case 'top':
        return `${ingredient.name} (верх)`
      case 'bottom':
        return `${ingredient.name} (низ)`
      default:
        return ingredient.name
    }
  }

  const handleRemoveIngredient = () => {
    dispatch(constructorActionCreator.removeIngredient(ingredient.constructorId))
  }

  const [{ isDragging }, drag] = useDrag({
    type: 'component',
    item: () => ({ id: ingredient.constructorId, index: index }),
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [{ handlerId }, drop] = useDrop<
    { id: ConstructorIngredient['constructorId']; index: number },
    void,
    { handlerId: string | symbol | null }
  >({
    accept: 'component',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset!!.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveElement && moveElement(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  const opacity = isDragging ? 0 : 1
  if (ingredient.type !== IngredientType.BUN) {
    drag(drop(ref))
  }
  const preventDefault = (e: React.SyntheticEvent) => e.preventDefault()

  return (
    <li
      ref={ref}
      onDrop={preventDefault}
      data-handler-id={handlerId}
      style={{ opacity }}
      className={`pl-4 pr-4 ${styles.constructorIngredient}`}
    >
      {!calculateIsLocked() && <DragIcon type="primary" />}
      <ConstructorElement
        type={type}
        isLocked={calculateIsLocked()}
        text={calculateIngredientName()}
        price={ingredient.price}
        thumbnail={ingredient.image}
        extraClass={constructorElementClassName}
        handleClose={handleRemoveIngredient}
      />
    </li>
  )
}

export default BurgerConstructorIngredient
