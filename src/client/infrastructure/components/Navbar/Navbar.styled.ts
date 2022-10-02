import styled from 'styled-components'
import { Badge, Drawer } from '@mui/material'

const StyledNavbar = styled.nav<{ navbarHeight: string }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${({ navbarHeight }) => navbarHeight};
  z-index: 2000;
  top: 0;
  left: 0;
  position: fixed;
  background-color: dodgerblue;
  padding: 0 48px;
  font-size: 18px;
`

const StyledLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 70px;
`

const StyledLogo = styled.div`
  background-image: url("/images/logo.svg");
  width: 125px;
  height: 70px;
  background-size: cover;
  cursor: pointer;
`

const StyledNav = styled.ul`
  display: flex;
  height: 100%;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 40px;
`

const StyledDivider = styled.div`
  display: flex;
  flex: 1;
`

const StyledNavItem = styled.li<{ isCurrentPage?: boolean }>`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  
  a {
    text-decoration: none;
    ${({ isCurrentPage }) => isCurrentPage && 'color: blue;'}}
  }
`

const StyledSearchWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  transition: all .4s;
  
  &:focus-within {
    width: 250px;
  }
`

const StyledSearchElementsWrapper = styled.div`
  display: flex;
  height: 55%;
  width: 100%;
  border-radius: 6px;
  border: 1px solid;
  padding: 0 16px;
`

const StyledSearchIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`

const StyledNavCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 50px;
`

const StyledBadgeWrapper = styled(Badge)`
  cursor: pointer;
`

const StyledDrawer = styled(Drawer)`
  z-index: 2001;
`

export {
  StyledNavbar,
  StyledLogoWrapper,
  StyledNav,
  StyledNavCart,
  StyledNavItem,
  StyledSearchWrapper,
  StyledLogo,
  StyledDivider,
  StyledSearchIconWrapper,
  StyledSearchElementsWrapper,
  StyledBadgeWrapper,
  StyledDrawer
}
