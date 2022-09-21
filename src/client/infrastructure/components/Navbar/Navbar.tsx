import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase } from '@mui/material'

import {
  StyledBadgeWrapper,
  StyledDivider,
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
import homePageTabs from 'src/client/infrastructure/components/Layout/constants/Tabs/ProductPageTabs'
import AccountTabs from 'src/client/infrastructure/components/Layout/constants/Tabs/AccountTabs'
import { useSelector } from 'react-redux'

import Pages from 'src/client/infrastructure/enums/Pages'

const Navbar: FunctionComponent = () => {
  const totalQuantity = useSelector((state: any) => state.cart.totalQuantity)

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
      <StyledNavCart>
        <Link href={Pages.Cart}>
          <StyledBadgeWrapper badgeContent={totalQuantity} color="error">
            <ShoppingBasketIcon fontSize="large" />
          </StyledBadgeWrapper>
        </Link>
      </StyledNavCart>
    </StyledNavbar>
  )
}

export default Navbar
