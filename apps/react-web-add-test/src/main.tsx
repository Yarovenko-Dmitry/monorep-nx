// import * as ReactDOMClient from 'react-dom/client'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {store} from '@monorepo-nx/redux'
import {Home, RelatedNews, NotfoundPage, PopularNews} from '@monorepo-nx/pages-web'

import {App} from './app/app'


// const root = ReactDOMClient.createRoot(
//   document.getElementById('root') as HTMLElement,
// )

// root.render(
ReactDOM.render(
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
            element = {<RelatedNews />} />
          <Route
            path = '/popular-news'
            element = {<PopularNews />} />
          <Route
            path = '*'
            element = {<NotfoundPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>,
  // del next row
  document.getElementById('root')
)
