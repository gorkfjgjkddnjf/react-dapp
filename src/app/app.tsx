import { Layout } from '@app/layout'
import { Header } from '@app/layout/header'

import './style.scss'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Layout
        renderHeader={ <Header /> }
      />
    </div>
  )
}

export default App
