import { NavLink } from 'react-router-dom'

import type { RouterPath } from '@app/router/router-path'

import './style.scss'

interface INavigationItem {
  to: RouterPath
  text: string
}

interface INavigationItems {
  items: INavigationItem[]
}

export const Navigation = ({ items }: INavigationItems): JSX.Element => {
  return (
    <ul className="navigation">
      { items.map((item) => (
        <li key={ item.to } className="navigation__item">
          <NavLink to={ item.to }>
            { item.text }
          </NavLink>
        </li>
      )) }
    </ul>
  )
}
