import {Footer, Header} from '@4-mono-all/ui-web'


export const App = ({children}: any) => (
  <>
    <Header />

    <main>
      {children}
    </main>

    <Footer />
  </>
)
