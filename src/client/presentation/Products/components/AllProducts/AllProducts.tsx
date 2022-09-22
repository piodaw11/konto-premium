import { FunctionComponent } from 'react'

import ProductItems from 'src/client/presentation/Products/components/Items/ProductItems'
import {
  StyledProductPageWrapper,
  StyledItemWrapper,
  StyledFilterWrapper,
  StyledSortingWrapper,
  StyledChangeViewWrapper,
  StyledProductsWrapper
} from 'src/client/presentation/Products/components/AllProducts/AllProducts.styled'
import Product from 'src/client/presentation/Products/types/Product'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'
import { Button } from '@mui/material'

type Props = {
  allProducts: string
}

const AllProducts: FunctionComponent<Props> = ({ allProducts }) => {
  const products = JSON.parse(allProducts)
  return (
    <StyledProductPageWrapper>

      <StyledItemWrapper>
        <StyledFilterWrapper>
          <StyledSortingWrapper>
            sortowanie
          </StyledSortingWrapper>
          <StyledChangeViewWrapper>
            <Button variant="contained"><GridViewRoundedIcon /></Button>
            <Button variant="outlined"><FormatListBulletedIcon /></Button>
          </StyledChangeViewWrapper>
        </StyledFilterWrapper>
        <StyledProductsWrapper>
          {products.map((item: Product) => (
            <ProductItems
              key={item._id}
              id={item._id}
              title={item.title}
              price={item.price}
              image={item.image}
              stripeId={item.stripeId}
            />
        ))}
        </StyledProductsWrapper>
      </StyledItemWrapper>
    </StyledProductPageWrapper>
  )
}

export default AllProducts
