import { FunctionComponent } from 'react'

import ProductItems from 'src/client/presentation/Products/components/ProductItems'
import {
  StyledCategoriesWrapper,
  StyledProductPageWrapper,
  StyledItemWrapper,
  StyledFilterWrapper,
  StyledSortingWrapper,
  StyledChangeViewWrapper
} from 'src/client/presentation/Products/components/AllProducts.styled'
import Product from 'src/client/presentation/Products/types/Product'
import AllProductsSideNav from 'src/client/presentation/Products/components/AllProductsSideNav'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'
import { Button } from '@mui/material'

type Props = {
  allProducts: Product[]
}

const AllProducts: FunctionComponent<Props> = ({ allProducts }) => (
  <StyledProductPageWrapper>
    <StyledCategoriesWrapper>
      <AllProductsSideNav category={allProducts} />
    </StyledCategoriesWrapper>
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
      {allProducts.map((item) => (
        <ProductItems
          key={item._id}
          id={item._id}
          title={item.title}
          price={item.price}
          image={item.image}
        />
    ))}
    </StyledItemWrapper>
  </StyledProductPageWrapper>
)

export default AllProducts
