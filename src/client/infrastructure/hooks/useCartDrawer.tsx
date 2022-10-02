import { useState } from 'react'
import { useSelector } from 'react-redux'

import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import { Typography } from '@mui/material'
import Link from 'next/link'

import { StyledImage,
  StyledImageWrapper,
  StyledList,
  StyledListItem,
  StyledPrice,
  StyledPriceWrapper,
  StyledProductInfoWrapper,
  StyledQuantityWrapper,
  StyledTitleWrapper, StyledButton,
  StyledGoToCartWrapper, StyledTotalPriceWrapper,
  StyledCartButtonWrapper, StyledCartButton } from '../components/Navbar/CartDrawer.styled'
import Product from 'src/client/presentation/Products/types/Product'
import Pages from 'src/client/infrastructure/enums/Pages'

type Anchor = 'right'

const UseCartDrawer = () => {
  const [openCart, setOpenCart] = useState({
    right: false
  })

  const products = useSelector((state: any) => state.cart.items)
  const totalAmount = useSelector((state: any) => state.cart.totalPriceItems)

  console.log(products)

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: any) => {
        if (
          event.type === 'keydown'
          && ((event as KeyboardEvent).key === 'Tab'
            || (event as KeyboardEvent).key === 'Shift')
        ) {
          return
        }

        setOpenCart({ ...openCart, [anchor]: open })
      }

  const list = (anchor: Anchor) => (
    <StyledList
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <StyledTitleWrapper>
          <Typography variant="h5">Koszyk</Typography>
        </StyledTitleWrapper>
        {products.map((product: Product) => (
          <>
            <StyledListItem>
              <StyledImageWrapper>
                <StyledImage image={product.image} />
              </StyledImageWrapper>
              <StyledProductInfoWrapper>
                <Typography variant="h6">{product.title}</Typography>
                <StyledPriceWrapper>
                  <StyledQuantityWrapper>
                    <StyledButton>-</StyledButton>
                    <Typography>{product.quantity}</Typography>
                    <StyledButton>+</StyledButton>
                  </StyledQuantityWrapper>
                  <StyledPrice>{product.price.toFixed(2)} zł</StyledPrice>
                </StyledPriceWrapper>
              </StyledProductInfoWrapper>
            </StyledListItem>
            <Divider />
          </>
        ))}
      </List>
      <List>
        <StyledListItem>
          <StyledGoToCartWrapper>
            <StyledTotalPriceWrapper>
              <Typography variant="h6">Łącznie: {totalAmount.toFixed(2)} zł</Typography>
            </StyledTotalPriceWrapper>
            <StyledCartButtonWrapper>
              <Link href={Pages.Cart}>
                <StyledCartButton variant="contained">Koszyk</StyledCartButton>
              </Link>
            </StyledCartButtonWrapper>
          </StyledGoToCartWrapper>
        </StyledListItem>
      </List>
    </StyledList>
)
  return {
    openCart,
    toggleDrawer,
    list
  }
}

export default UseCartDrawer
