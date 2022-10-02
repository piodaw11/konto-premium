import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase } from '@mui/material'

import {
  StyledBadgeWrapper,
  StyledDivider,
  StyledDrawer,
  StyledLogo,
  StyledLogoWrapper,
  StyledNav,
  StyledNavbar,
  StyledNavCart,
  StyledNavItem,
  StyledSearchElementsWrapper,
  StyledSearchIconWrapper,
  StyledSearchWrapper
} from 'src/client/infrastructure/components/Navbar/Navbar.styled'
import homePageTabs from 'src/client/infrastructure/components/Navbar/constants/Tabs/ProductPageTabs'
import AccountTabs from 'src/client/infrastructure/components/Navbar/constants/Tabs/AccountTabs'
import { useSelector } from 'react-redux'

import Pages from 'src/client/infrastructure/enums/Pages'
import useCartDrawer from 'src/client/infrastructure/hooks/useCartDrawer'

const Navbar: FunctionComponent = () => {
  const totalQuantity = useSelector((state: any) => state.cart.totalQuantity)

  const {
    openCart,
    toggleDrawer,
    list
  } = useCartDrawer()

  return (
    <StyledNavbar navbarHeight="80px">
      <StyledLogoWrapper>
        <Link href={Pages.Home}>
          <StyledLogo />
        </Link>
      </StyledLogoWrapper>
      <StyledNav>
        {homePageTabs.map((tab) => (
          <StyledNavItem key={tab.label}>
            <Link href={tab.path}>{tab.label}</Link>
          </StyledNavItem>
      ))}
      </StyledNav>
      <StyledDivider />
      <StyledSearchWrapper>
        <StyledSearchElementsWrapper>
          <StyledSearchIconWrapper>
            <SearchIcon />
          </StyledSearchIconWrapper>
          <InputBase
            placeholder="Szukaj…"
            inputProps={{ 'aria-label': 'search' }}
            onClick={() => console.log('search')}
          />
        </StyledSearchElementsWrapper>
      </StyledSearchWrapper>
      <StyledNav>
        {AccountTabs.map((tab) => (
          <StyledNavItem key={tab.label}>
            <Link href={tab.path}>{tab.label}</Link>
          </StyledNavItem>
      ))}
      </StyledNav>
      <StyledNavCart onClick={toggleDrawer('right', true)}>
        <StyledBadgeWrapper badgeContent={totalQuantity} color="error">
          <ShoppingBasketIcon fontSize="large" />
        </StyledBadgeWrapper>
      </StyledNavCart>
      <div>
        <StyledDrawer
          anchor="right"
          open={openCart.right}
          onClose={toggleDrawer('right', false)}
        >
          {list('right')}
        </StyledDrawer>
      </div>
    </StyledNavbar>
  )
}

export default Navbar
