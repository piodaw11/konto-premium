import styled from 'styled-components'
import { Button, Checkbox, Typography } from '@mui/material'

const StyledCartDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: #fff;
  border-radius: 8px;
  padding: 32px;
`

const StyledCartDetailsTitle = styled(Typography)`
  padding-bottom: 16px;
`

const StyledCartDetailsInfo = styled(Typography)`
  color: #ccc;
  font-size: 10px;
`

const StyledDivider = styled.hr`
  width: 92%;
  display: flex;
  align-self: center;
  border: 1px solid #ccc;
  margin: 0;
`

const StyledCartPromoCodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledCartPromoCodeInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 16px;
`

const StyledCartPromoCodeInfoWrapper = styled.div`
  padding: 4px 0 16px;
`

const StyledCartPromoCodeInput = styled.input`
  display: flex;
  flex: 2;
  height: 40px;
`

const StyledCartPromoCodeButton = styled(Button)`
  margin-left: 16px;
  display: flex;
  flex: .5;
`

const StyledCartPaymentWrapper = styled.div`
  display: flex;
  padding: 16px 0;
  height: 130px;
  overflow: auto;
`

const StyledCartPaymentMethodUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const StyledCartPaymentMethodLi = styled.li`
  display: flex;
  list-style: none;
  justify-content: space-between;
`

const StyledCartPaymentMethodLiItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledCartPaymentMethodTitle = styled(Typography)``

const StyledCartPaymentMethodDescription = styled(Typography)`
  color: #818181;
`

const StyledPaymentMethodCheckbox = styled(Checkbox)``

const StyledCartTotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`

const StyledCartTotalPriceText = styled(Typography)``

const StyledCartTotalPrice = styled(Typography)``

const StyledCartCheckoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 16px;
`

const StyledCartCheckoutButton = styled(Button)`
  width: 60%;
`

export {
  StyledCartDetailsWrapper,
  StyledCartPromoCodeWrapper,
  StyledCartPromoCodeInput,
  StyledCartPromoCodeButton,
  StyledCartPaymentWrapper,
  StyledCartPaymentMethodUl,
  StyledCartPaymentMethodLi,
  StyledCartPaymentMethodTitle,
  StyledCartPaymentMethodDescription,
  StyledCartPaymentMethodLiItemWrapper,
  StyledCartCheckoutWrapper,
  StyledCartCheckoutButton,
  StyledCartTotalPriceWrapper,
  StyledCartTotalPriceText,
  StyledCartTotalPrice,
  StyledCartDetailsTitle,
  StyledPaymentMethodCheckbox,
  StyledDivider,
  StyledCartDetailsInfo,
  StyledCartPromoCodeInputWrapper,
  StyledCartPromoCodeInfoWrapper
}
