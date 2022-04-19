import * as ReactDOMClient from 'react-dom/client'
import {Provider} from 'react-redux'

import App from './app/app'
import {store} from './app/store'


const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement,
)

root.render(
  <Provider store = {store}>
    <App />
  </Provider>
)
