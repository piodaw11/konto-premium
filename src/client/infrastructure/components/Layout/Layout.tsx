import { StyledLayoutWrapper,
  StyledLayoutChildrenWrapper } from 'src/client/infrastructure/components/Layout/Layout.styled'
import Navbar from 'src/client/infrastructure/components/Navbar/Navbar'
import Head from 'next/head'
import React, { FunctionComponent, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout: FunctionComponent<Props> = ({ children }) => (
  <StyledLayoutWrapper>
    <Head>
      <title>konto-premium.pl</title>
      <meta name="description" content="Sklep z najtańszymi kontami do platform streamingowych" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <Navbar />
    <StyledLayoutChildrenWrapper>
      {children}
    </StyledLayoutChildrenWrapper>
  </StyledLayoutWrapper>
)

export default Layout
