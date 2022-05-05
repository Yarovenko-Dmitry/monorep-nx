import {Footer, Header} from '@monorepo-nx/ui-web'


export const App = ({children}: any) => (
  <>
    <Header />

    <main>
      {children}
    </main>

    <Footer />
  </>
)
