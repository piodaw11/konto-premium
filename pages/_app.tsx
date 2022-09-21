import React, { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from 'src/client/app/store'
import AppProvider from 'src/client/app/common/AppProvider/AppProvider'
import { SessionProvider } from 'next-auth/react'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <Provider store={store}>
    <SessionProvider session={session}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </SessionProvider>
  </Provider>
)

export default App
