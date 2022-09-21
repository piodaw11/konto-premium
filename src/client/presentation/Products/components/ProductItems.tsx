import { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'

import { cartActions } from 'src/client/presentation/Cart/store/cartSlice'
import {
  StyledButton,
  StyledContentWrapper,
  StyledImage,
  StyledImageWrapper,
  StyledItemsWrapper,
  StyledPrice,
  StyledTitle,
  StyledProductWrapper,
  StyledButtonWrapper,
  StyledButtonWishes
} from './ProductItems.styled'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

type Props = {
  id: string
  title: string
  price: number
  image: string
}

const ProductItems: FunctionComponent<Props> = ({ id, title, price, image }) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image
      })
    )
  }

  return (
    <StyledItemsWrapper>
      <StyledProductWrapper>
        <StyledImageWrapper>
          <StyledImage src={image} />
        </StyledImageWrapper>
        <StyledContentWrapper>
          <StyledTitle variant="h6">
            {title}
          </StyledTitle>
          <StyledPrice variant="h6">
            {price.toFixed(2)} zł
          </StyledPrice>
          <StyledButtonWrapper>
            <StyledButton onClick={addToCart} variant="contained">
              <AddShoppingCartIcon fontSize="small" />
              Dodaj
            </StyledButton>
            <StyledButtonWishes variant="outlined">
              <FavoriteBorderIcon />
            </StyledButtonWishes>
          </StyledButtonWrapper>
        </StyledContentWrapper>
      </StyledProductWrapper>
    </StyledItemsWrapper>
  )
}

export default ProductItems
