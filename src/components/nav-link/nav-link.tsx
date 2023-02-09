import classNames from 'classnames'
import React from 'react'
import styles from './nav-link.module.css'

type Props = {
  caption: string;
  isActive: boolean;
  children?: JSX.Element;
}

const NavLink: React.FC<Props> = ({ isActive, caption, children }) => {
  const captionClassName = classNames('text', 'text_type_main-default', {
    text_color_inactive: !isActive,
  })

  return (
    <li className={`${styles.navItem} pl-5 pr-5 pb-4 pt-4`}>
      {children}
      <span className={captionClassName}>{caption}</span>
    </li>
  )
}

export default NavLink
