import * as ReactDOMClient from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {store} from '@4-mono-all/redux'
import {Home, LatestNews, NotfoundPage, PopularNews} from '@4-mono-all/pages-web'

import {App} from './app/app'


const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement,
)

root.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App>
        <span>WEB ADD TEST !!!!!!!!!!!!!</span>
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
