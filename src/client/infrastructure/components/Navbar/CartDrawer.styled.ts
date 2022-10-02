import styled from 'styled-components'
import { Button, ListItem, Typography } from '@mui/material'

const StyledList = styled.div`
  width: 350px;
`

const StyledTitleWrapper = styled.div`
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
`

const StyledListItem = styled(ListItem)`
  display: flex;
  padding: 20px 16px;
`

const StyledImageWrapper = styled.div``

const StyledImage = styled.div<{ image: string }>`
  background-image: url("${({ image }) => image}");
  width: 50px;
  height: 50px;
  background-size: cover;
`

const StyledProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 24px;
`

const StyledPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const StyledButton = styled(Button)``

const StyledPrice = styled(Typography)``

const StyledGoToCartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

const StyledTotalPriceWrapper = styled.div`
  display: flex;
`

const StyledCartButtonWrapper = styled.div``

const StyledCartButton = styled(Button)``

export {
  StyledList,
  StyledTitleWrapper,
  StyledListItem,
  StyledImageWrapper,
  StyledImage,
  StyledProductInfoWrapper,
  StyledPriceWrapper,
  StyledQuantityWrapper,
  StyledPrice,
  StyledButton,
  StyledGoToCartWrapper,
  StyledTotalPriceWrapper,
  StyledCartButtonWrapper,
  StyledCartButton
}
