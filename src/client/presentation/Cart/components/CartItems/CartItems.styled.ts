import styled from 'styled-components'
import { Button, Typography } from '@mui/material'

const StyledCartItems = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  padding: 16px;
`

const StyledCartItemsImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledCartItemsImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`

const StyledCartItemsContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 32px;
`

const StyledCartItemsTitleAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`

const StyledCartItemsTitle = styled(Typography)``

const StyledCartItemsPrice = styled(Typography)``

const StyledCartPriceWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
`

const StyledCartTotalPrice = styled(Typography)`
  display: flex;
  justify-content: flex-end;
`

const StyledCartItemsDetailsWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`

const StyledCartItemsDuration = styled.select`
  width: 100px;
  margin-right: 24px;
`

const StyledCartItemsDurationOption = styled.option``

const StyledCartItemsQuantityWrapper = styled.div`
  display: flex;
  height: 32px;
`

const StyledCartItemsQuantityInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledCartItemsQuantity = styled.input`
  width: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  outline: none;
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
  }
`

const StyledRemoveButton = styled(Button)`
  height: 32px;
`

const StyledCartItemsQuantityButton = styled(Button)`
  min-width: 32px;
  max-width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledDividerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledDivider = styled.hr`
  width: 92%;
  display: flex;
  align-self: center;
  border: 1px solid #ccc;
  margin: 0;
`

export {
  StyledDivider,
  StyledCartItems,
  StyledCartItemsImageWrapper,
  StyledCartItemsImage,
  StyledCartItemsContentWrapper,
  StyledCartItemsTitle,
  StyledCartItemsPrice,
  StyledCartTotalPrice,
  StyledCartPriceWrapper,
  StyledCartItemsTitleAndPrice,
  StyledCartItemsQuantityWrapper,
  StyledDividerWrapper,
  StyledCartItemsDetailsWrapper,
  StyledCartItemsDuration,
  StyledCartItemsDurationOption,
  StyledCartItemsQuantity,
  StyledCartItemsQuantityInputWrapper,
  StyledCartItemsQuantityButton,
  StyledRemoveButton
}
