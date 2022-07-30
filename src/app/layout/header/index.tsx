import { Link } from 'react-router-dom'

import { Navigation } from '@app/layout/header/navigation'

import { RouterPath } from '@app/router/router-path'

import logo from '@app/assets/img/logo.png'
import './style.scss'

export const Header = (): JSX.Element => {
  const navigationItems = [
    { to: RouterPath.LIQUIDITY_POOLS, text: 'Liquidity Pools' },
    { to: RouterPath.FARMING_POOLS, text: 'Farming Pools' },
    { to: RouterPath.STAKING_POOLS, text: 'Staking Pools' }
  ]

  return (
    <header className="header">
      <Link to={ RouterPath.DEFAULT }>
        <img src={ logo } alt="logo" />
      </Link>

      <Navigation items={ navigationItems } />
    </header>
  )
}
