import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import clsx from 'clsx'

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active)
}

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.nav}>
          <li>
            <NavLink to='/' className={buildLinkClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/movies' className={buildLinkClass}>Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header