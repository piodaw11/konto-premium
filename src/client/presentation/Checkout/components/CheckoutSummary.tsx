import { FunctionComponent, useEffect, useState } from 'react'

import {
  StyledSummaryTitle,
  StyledSummaryWrapper,
  StyledDivider,
  StyledOrderSummaryWrapper,
  StyledSummaryInfo,
  StyledSummaryInfoWrapper,
  StyledOrderSummaryTotalPrice,
  StyledOrderSummaryTotalPriceWrapper,
  StyledSubmitButtonWrapper,
  StyledSubmitButton
} from './CheckoutSummary.styled'
import CheckoutOrderItems from 'src/client/presentation/Checkout/components/CheckoutOrderItems'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from 'src/client/presentation/Cart/types/CartItem'
import { Checkbox, FormControlLabel } from '@mui/material'
import axios from 'axios'
import Cookies from 'js-cookie'
import { checkoutActions } from 'src/client/presentation/Checkout/components/store/checkoutSlice'

type Props = {
  totalPrice: number
}

const CheckoutSummary: FunctionComponent<Props> = ({ totalPrice }) => {
  const cartItems = useSelector((state: any) => state.cart)

  const checkoutHandler = async () => {
    await axios.post('/api/payu/auth')
      .then((res) => {
          console.log(res)
      })
  }

  return (
    <StyledSummaryWrapper>
      <StyledSummaryTitle variant="h5">Zamówienie</StyledSummaryTitle>
      <StyledSummaryInfoWrapper>
        <StyledSummaryInfo>Produkt</StyledSummaryInfo>
        <StyledSummaryInfo>Kwota</StyledSummaryInfo>
      </StyledSummaryInfoWrapper>
      <StyledDivider />
      <StyledOrderSummaryWrapper>
        {cartItems.items.length > 0 && (
          <>
            {cartItems.items.map((item: CartItem) => (
              <CheckoutOrderItems
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </>
        )}
      </StyledOrderSummaryWrapper>
      <StyledSummaryTitle variant="h5">Kwota</StyledSummaryTitle>
      <StyledDivider />
      <StyledOrderSummaryTotalPriceWrapper>
        <StyledOrderSummaryTotalPrice>Lącznie</StyledOrderSummaryTotalPrice>
        <StyledOrderSummaryTotalPrice variant="h6">{totalPrice.toFixed(2)} zł</StyledOrderSummaryTotalPrice>
      </StyledOrderSummaryTotalPriceWrapper>
      <StyledSummaryTitle variant="h5">Regulamin</StyledSummaryTitle>
      <StyledDivider />
      <FormControlLabel control={<Checkbox />} label="Przeczytałem i akceptuje regulamin" />
      <StyledSubmitButtonWrapper>
        <StyledSubmitButton variant="contained" onClick={checkoutHandler}>Zamów</StyledSubmitButton>
      </StyledSubmitButtonWrapper>
    </StyledSummaryWrapper>
  )
}

export default CheckoutSummary
