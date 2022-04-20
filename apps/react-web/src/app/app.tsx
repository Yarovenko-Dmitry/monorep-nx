import {Header} from './components/header/header'
import {Footer} from './components/footer/footer'

export const App = ({ children }: any) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
)
