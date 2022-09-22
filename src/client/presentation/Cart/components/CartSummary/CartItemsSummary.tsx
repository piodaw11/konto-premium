import { FunctionComponent } from 'react'
import { useRouter } from 'next/router'

import {
  StyledCartCheckoutButton,
  StyledCartCheckoutWrapper,
  StyledCartDetailsInfo,
  StyledCartDetailsTitle,
  StyledCartDetailsWrapper,
  StyledCartPaymentMethodDescription,
  StyledCartPaymentMethodLi,
  StyledCartPaymentMethodLiItemWrapper,
  StyledCartPaymentMethodTitle,
  StyledCartPaymentMethodUl,
  StyledCartPaymentWrapper,
  StyledCartPromoCodeButton,
  StyledCartPromoCodeInfoWrapper,
  StyledCartPromoCodeInput,
  StyledCartPromoCodeInputWrapper,
  StyledCartPromoCodeWrapper, StyledCartTotalPrice, StyledCartTotalPriceText, StyledCartTotalPriceWrapper,
  StyledDivider, StyledPaymentMethodCheckbox
} from 'src/client/presentation/Cart/components/CartSummary/CartItemsSummary.styled'
import axios from 'axios'
import { useSelector } from 'react-redux'

type Props = {
  totalPrice: number
}

type Checkout = {
  stripeId: string
  quantity: number
}

const CartItemsSummary: FunctionComponent<Props> = ({ totalPrice }) => {
  const router = useRouter()
  const cartItems = useSelector((state: any) => state.cart)

  console.log(cartItems)

  const redirectToCheckout = async () => {
    await axios.post('/api/checkout_sessions', {
      items: cartItems.items.map((item: Checkout) => ({
        price: item.stripeId,
        quantity: item.quantity
      }))
    }).then((res) => {
      router.push(res.data.url)
    })
  }

  return (
    <StyledCartDetailsWrapper>
      <StyledCartDetailsTitle variant="h5">Kod promocyjny</StyledCartDetailsTitle>
      <StyledDivider />
      <StyledCartPromoCodeWrapper>
        <StyledCartPromoCodeInputWrapper>
          <StyledCartPromoCodeInput type="text" placeholder="Kod promocyjny" />
          <StyledCartPromoCodeButton variant="contained">Użyj</StyledCartPromoCodeButton>
        </StyledCartPromoCodeInputWrapper>
        <StyledCartPromoCodeInfoWrapper>
          <StyledCartDetailsInfo>Zapisz się do newsletter&apos;a aby uzyskać 20% rabatu!</StyledCartDetailsInfo>
        </StyledCartPromoCodeInfoWrapper>
      </StyledCartPromoCodeWrapper>
      <StyledCartDetailsTitle variant="h5">Metoda płatności</StyledCartDetailsTitle>
      <StyledDivider />
      <StyledCartPaymentWrapper>
        <StyledCartPaymentMethodUl>
          <StyledCartPaymentMethodLi>
            <StyledCartPaymentMethodLiItemWrapper>
              <StyledCartPaymentMethodTitle>
                PAYU
              </StyledCartPaymentMethodTitle>
              <StyledCartPaymentMethodDescription>
                Szybka płatność
              </StyledCartPaymentMethodDescription>
            </StyledCartPaymentMethodLiItemWrapper>
            <StyledPaymentMethodCheckbox disabled checked />
          </StyledCartPaymentMethodLi>
        </StyledCartPaymentMethodUl>
      </StyledCartPaymentWrapper>
      <StyledCartDetailsTitle variant="h5">Kwota zamówienia</StyledCartDetailsTitle>
      <StyledDivider />
      <StyledCartTotalPriceWrapper>
        <StyledCartTotalPriceText>
          Łącznie
        </StyledCartTotalPriceText>
        <StyledCartTotalPrice variant="h5">{totalPrice.toFixed(2)} zł</StyledCartTotalPrice>
      </StyledCartTotalPriceWrapper>
      <StyledCartCheckoutWrapper>
        <StyledCartCheckoutButton variant="contained" onClick={redirectToCheckout}>dalej</StyledCartCheckoutButton>
      </StyledCartCheckoutWrapper>
    </StyledCartDetailsWrapper>
  )
}

export default CartItemsSummary
