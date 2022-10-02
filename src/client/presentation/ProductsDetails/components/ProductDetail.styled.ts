import styled from 'styled-components'
import { Button, Typography } from '@mui/material'

const StyledProductDetailsWrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledProductDetailsContainer = styled.div`
  border-radius: 8px;
  background-color: #FAFBFC;
  width: 100%;
  height: 100%;
  position: relative;
`

const StyledCartButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  width: 90%;
  height: 83px;
  border-radius: 8px;
  background-color: #fff;
  margin: 0 auto;
  box-shadow: 0 0 30px 0 #35385A24;
`

const StyledCartItemsWrapper = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const StyledCartItemsFirstSection = styled.div`
  display: flex;
`

const StyledCartItemsSecondSection = styled.div`
  display: flex;
`

const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImage = styled.div<{ image: string }>`
  background-image: url(${({ image }) => image});
  width: 50px;
  height: 50px;
  background-size: cover;
`

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px 0 20px;
`

const StyledTitle = styled(Typography)``

const StyledCategory = styled(Typography)`
  color: #50CC98;
  font-size: 12px;
`

const StyledPriceWrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledPrice = styled(Typography)``

const StyledQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledQuantity = styled.div`
  display: flex;
  align-items: center;
`

const StyledQtyButton = styled(Button)`
  min-width: 30px;
  height: 30px;
  padding: 0;
  margin: 0 10px;
`

const StyledInput = styled.input`
  width: 39px;
  height: 40px;
  border: 1px solid;
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
  outline: none;
`

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 30px;
`

const StyledButton = styled(Button)`
  
`

export {
  StyledProductDetailsWrapper,
  StyledProductDetailsContainer,
  StyledCartButtonWrapper,
  StyledCartItemsWrapper,
  StyledImageWrapper,
  StyledTitleWrapper,
  StyledQuantityWrapper,
  StyledButtonWrapper,
  StyledImage,
  StyledTitle,
  StyledCategory,
  StyledQuantity,
  StyledQtyButton,
  StyledInput,
  StyledButton,
  StyledCartItemsFirstSection,
  StyledCartItemsSecondSection,
  StyledPriceWrapper,
  StyledPrice
}
