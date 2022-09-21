import { FunctionComponent } from 'react'

import { StyledOrderItemsLi,
  StyledOrderItemsLiItemSymbolWrapper,
  StyledOrderItemsLiItemWrapper,
  StyledOrderItemsTypography,
  StyledOrderItemsUl } from 'src/client/presentation/Checkout/components/CheckoutOrderItems.styled'

type Props = {
  id: string
  title: string
  price: number
  quantity: number
}

const CheckoutOrderItems: FunctionComponent<Props> = ({ id, title, quantity, price }) => (
  <StyledOrderItemsUl key={id}>
    <StyledOrderItemsLi>
      <StyledOrderItemsTypography>
        <StyledOrderItemsLiItemWrapper>{title}</StyledOrderItemsLiItemWrapper>
        <StyledOrderItemsLiItemSymbolWrapper>&#10006;{quantity}</StyledOrderItemsLiItemSymbolWrapper>
      </StyledOrderItemsTypography>
      <StyledOrderItemsTypography>{(price * quantity).toFixed(2)} zł</StyledOrderItemsTypography>
    </StyledOrderItemsLi>
  </StyledOrderItemsUl>
)

export default CheckoutOrderItems
