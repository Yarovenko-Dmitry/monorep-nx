import * as ReactDOMClient from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {App} from './app/app'
import store from './app/redux/store'
import {Home} from './app/pages/home'
import {LatestNews} from './app/pages/latestNews'
import {PopularNews} from './app/pages/popularNews'
import {NotfoundPage} from './app/pages/notfoundPage'

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement,
)

root.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route
            path = '/'
            element = {<Home />} />
          <Route
            path = '/latest-news'
            element = {<LatestNews />} />
          <Route
            path = '/popular-news'
            element = {<PopularNews />} />
          <Route
            path = '*'
            element = {<NotfoundPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>
)
