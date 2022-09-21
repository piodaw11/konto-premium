import { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'

import { cartActions } from 'src/client/presentation/Cart/store/cartSlice'
import {
  StyledCartItems,
  StyledCartItemsContentWrapper,
  StyledCartItemsDetailsWrapper,
  StyledCartItemsDuration, StyledCartItemsDurationOption,
  StyledCartItemsImage,
  StyledCartItemsImageWrapper,
  StyledCartItemsPrice, StyledCartItemsQuantity, StyledCartItemsQuantityButton,
  StyledCartItemsQuantityInputWrapper,
  StyledCartItemsQuantityWrapper,
  StyledCartItemsTitle,
  StyledCartItemsTitleAndPrice,
  StyledCartPriceWrapper,
  StyledCartTotalPrice,
  StyledDivider,
  StyledDividerWrapper,
  StyledRemoveButton
} from 'src/client/presentation/Cart/components/CartItems/CartItems.styled'

type Props = {
  id: string
  title: string
  image: string
  price: number
  quantity: number
}

const CartItems: FunctionComponent<Props> = ({ id, title, quantity, price, image }) => {
  const dispatch = useDispatch()

  const removeItemHandler = () => {
    dispatch(cartActions.removeFromCart({
      id,
      quantity
    }))
  }

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
      image
    }))
  }

  const removeOneItemHandler = () => {
    dispatch(cartActions.removeItemFromCart({
      id,
      title,
      price,
      image
    }))
  }

  return (
    <StyledDividerWrapper>
      <StyledCartItems key={id}>
        <StyledCartItemsImageWrapper>
          <StyledCartItemsImage src={image} alt={title} />
        </StyledCartItemsImageWrapper>
        <StyledCartItemsContentWrapper>
          <StyledCartItemsTitleAndPrice>
            <StyledCartItemsTitle variant="h5">{title}</StyledCartItemsTitle>
            <StyledCartTotalPrice variant="h6">{(price * quantity).toFixed(2)} zł</StyledCartTotalPrice>
          </StyledCartItemsTitleAndPrice>
          <StyledCartPriceWrapper>
            <StyledCartItemsPrice>{price.toFixed(2)} zł</StyledCartItemsPrice>
          </StyledCartPriceWrapper>
          <StyledCartItemsDetailsWrapper>
            <StyledCartItemsQuantityWrapper>
              <StyledCartItemsDuration>
                <StyledCartItemsDurationOption>30 dni</StyledCartItemsDurationOption>
              </StyledCartItemsDuration>
              <StyledCartItemsQuantityInputWrapper>
                <StyledCartItemsQuantityButton
                  onClick={removeItemHandler}
                  variant="outlined"
                >
                  -
                </StyledCartItemsQuantityButton>
                <StyledCartItemsQuantity type="number" value={quantity} />
                <StyledCartItemsQuantityButton
                  onClick={addItemHandler}
                  variant="contained"
                >
                  +
                </StyledCartItemsQuantityButton>
              </StyledCartItemsQuantityInputWrapper>
            </StyledCartItemsQuantityWrapper>
            <StyledRemoveButton onClick={removeOneItemHandler} variant="outlined">Usuń</StyledRemoveButton>
          </StyledCartItemsDetailsWrapper>
        </StyledCartItemsContentWrapper>
      </StyledCartItems>
      <StyledDivider />
    </StyledDividerWrapper>
  )
}

export default CartItems
