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
} from 'src/client/presentation/Products/components/Items/ProductItems.styled'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Link from 'next/link'
import Pages from 'src/client/infrastructure/enums/Pages'

type Props = {
  id: string
  title: string
  price: number
  image: string
  stripeId: string
}

const ProductItems: FunctionComponent<Props> = ({ id, title, price, image, stripeId }) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        stripeId,
        title,
        price,
        image
      })
    )
  }

  return (
    <StyledItemsWrapper>
      <StyledProductWrapper>
        <Link href={`${Pages.Products}/${id}`}>
          <StyledImageWrapper>
            <StyledImage src={image} loading="lazy" width={200} height={200} />
          </StyledImageWrapper>
        </Link>
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
