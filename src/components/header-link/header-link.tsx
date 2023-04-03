import { NavLink } from 'react-router-dom'
import styles from './header-link.module.css'

type Props = {
  caption: string
  path: string
  children: (isActive: boolean) => React.ReactNode
}

const HeaderLink: React.FC<Props> = ({ caption, children, path }) => {
  const linkClassName = `${styles.headerLink} pl-5 pr-5 pb-4 pt-4 text text_type_main-default`
  const activeLinkClassName = `${linkClassName} ${styles.headerLink_active}`
  const inactiveLinkClassName = `${linkClassName} text_color_inactive`

  return (
    <NavLink to={path} className={({ isActive }) => (isActive ? activeLinkClassName : inactiveLinkClassName)}>
      {({ isActive }) => (
        <>
          {children(isActive)}
          {caption}
        </>
      )}
    </NavLink>
  )
}

export default HeaderLink
