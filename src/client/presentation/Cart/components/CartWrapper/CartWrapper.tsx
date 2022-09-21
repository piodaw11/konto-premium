import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

import CartItems from 'src/client/presentation/Cart/components/CartItems/CartItems'
import {
  StyledCartItemsWrapper,
  StyledCartWrapper,
  StyledDivider } from 'src/client/presentation/Cart/components/CartWrapper/CartWrapper.styled'
import CartItem from 'src/client/presentation/Cart/types/CartItem'
import CartItemsSummary from 'src/client/presentation/Cart/components/CartSummary/CartItemsSummary'

const CartWrapper = () => {
  const cartItems = useSelector((state: any) => state.cart)
  console.log(cartItems)

  return (
    <StyledCartWrapper>
      {cartItems.items.length !== 0 ? (
        <>
          <StyledCartItemsWrapper>
            <Typography variant="h5" style={{ padding: '0 16px 16px' }}>Koszyk</Typography>
            <StyledDivider />
            {cartItems.items.map((item: CartItem) => (
              <CartItems
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
              />
          ))}
          </StyledCartItemsWrapper>
          <CartItemsSummary totalPrice={cartItems.totalPriceItems} />
        </>
      ) : (
        <p>Cart is empty</p>
      )}
      {/* <Button onClick={clearCartHandler}>Usuń koszyk</Button> */}
    </StyledCartWrapper>
  )
}

export default CartWrapper
