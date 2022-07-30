import { BrowserRouter } from 'react-router-dom'

import { Routes } from '@app/router'

interface ILayout {
  renderHeader: JSX.Element
}

export const Layout = ({ renderHeader }: ILayout): JSX.Element => {
  return (
    <BrowserRouter>
      { renderHeader }

      <main>
        <Routes />
      </main>
    </BrowserRouter>
  )
}
