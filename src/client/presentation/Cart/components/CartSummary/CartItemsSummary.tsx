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

type Props = {
  totalPrice: number
}

const CartItemsSummary: FunctionComponent<Props> = ({ totalPrice }) => {
  const router = useRouter()

  const checkoutHandler = () => {
    router.push('/checkout')
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
        <StyledCartCheckoutButton variant="contained" onClick={checkoutHandler}>dalej</StyledCartCheckoutButton>
      </StyledCartCheckoutWrapper>
    </StyledCartDetailsWrapper>
  )
}

export default CartItemsSummary
