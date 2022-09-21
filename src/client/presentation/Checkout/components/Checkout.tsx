import { useSelector } from 'react-redux'

import {
  StyledCheckoutAgreementWrapper,
  StyledCheckoutPaymentWrapper,
  StyledCheckoutWrapper,
  StyledLeftSideWrapper
} from './Checkout.styled'
import CheckoutSummary from 'src/client/presentation/Checkout/components/CheckoutSummary'
import CheckoutForm from 'src/client/presentation/Checkout/components/CheckoutForm/CheckoutForm'
import CheckoutAgreements from 'src/client/presentation/Checkout/components/CheckoutAgreements/CheckoutAgeements'

const Checkout = () => {
  const cartItems = useSelector((state: any) => state.cart)

  return (
    <StyledCheckoutWrapper>
      <StyledLeftSideWrapper>
        <StyledCheckoutPaymentWrapper>
          <CheckoutForm />
        </StyledCheckoutPaymentWrapper>
        <StyledCheckoutAgreementWrapper>
          <CheckoutAgreements />
        </StyledCheckoutAgreementWrapper>
      </StyledLeftSideWrapper>
      <CheckoutSummary totalPrice={cartItems.totalPriceItems} />
    </StyledCheckoutWrapper>
  )
}

export default Checkout
