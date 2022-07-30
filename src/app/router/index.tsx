import { BrowserRouter, useRoutes } from 'react-router-dom'

import { RouterPath } from '@app/router/router-path'

import { Default } from '@app/pages/default'

import type { ReactElement } from 'react'

const Routes = (): ReactElement | null => {
  return useRoutes([
    {
      path: RouterPath.DEFAULT,
      element: <Default />
    }
  ])
}

const Routing = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export {
  Routes,
  Routing
}
