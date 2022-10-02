import { FunctionComponent, useState } from 'react'
import ProductDetailItem from 'src/client/presentation/ProductsDetails/components/ProductDetailItem'
import Product from 'src/client/presentation/Products/types/Product'
import { StyledProductDetailsContainer,
  StyledProductDetailsWrapper,
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
} from 'src/client/presentation/ProductsDetails/components/ProductDetail.styled'
import { Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { cartActions } from 'src/client/presentation/Cart/store/cartSlice'

type Props = {
  product: Product
}

const ProductDetail: FunctionComponent<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  // TODO add quantity to cart

  const addToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        stripeId: product.stripeId,
        title: product.title,
        price: product.price,
        image: product.image
      })
    )
  }

  const addQuantityHandler = () => {
    setQuantity(quantity + 1)
  }

  const removeQuantityHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <StyledProductDetailsWrapper>
      <StyledProductDetailsContainer>
        <ProductDetailItem
          title={product.title}
          price={product.price}
          image={product.image}
          description={product.description}
          category={product.category}
        />
        <StyledCartButtonWrapper>
          <StyledCartItemsWrapper>
            <StyledCartItemsFirstSection>
              <StyledImageWrapper>
                <StyledImage image={product.image} />
              </StyledImageWrapper>
              <StyledTitleWrapper>
                <StyledTitle variant="h6">{product.title}</StyledTitle>
                <StyledCategory>{product.category}</StyledCategory>
              </StyledTitleWrapper>
              <StyledPriceWrapper>
                <StyledPrice variant="h6">{(product.price * quantity).toFixed(2)} zł</StyledPrice>
              </StyledPriceWrapper>
            </StyledCartItemsFirstSection>
            <StyledCartItemsSecondSection>
              <StyledQuantityWrapper>
                <Typography>Ilość:</Typography>
                <StyledQuantity>
                  <StyledQtyButton variant="contained" onClick={removeQuantityHandler}>-</StyledQtyButton>
                  <StyledInput value={quantity} />
                  <StyledQtyButton variant="contained" onClick={addQuantityHandler}>+</StyledQtyButton>
                </StyledQuantity>
              </StyledQuantityWrapper>
              <StyledButtonWrapper>
                <StyledButton variant="contained" onClick={addToCart}>Dodaj do koszyka</StyledButton>
              </StyledButtonWrapper>
            </StyledCartItemsSecondSection>
          </StyledCartItemsWrapper>
        </StyledCartButtonWrapper>
      </StyledProductDetailsContainer>
    </StyledProductDetailsWrapper>
  )
}

export default ProductDetail
