import { FunctionComponent } from 'react'

import { StyledCategoriesItem, StyledLi, StyledHeader } from './AllProductsSideNav.styled'
import Product from 'src/client/presentation/Products/types/Product'
import { Typography } from '@mui/material'

type Props = {
  category: Product[]
}

const AllProductsSideNav: FunctionComponent<Props> = ({ category }) => {
  const categories = category.map((item) => item.category)

  const uniqueCategories = [...new Set(categories)]

  return (
    <StyledCategoriesItem>
      <StyledHeader variant="h5" fontWeight="600">Kategorie</StyledHeader>
      {uniqueCategories.map((item) => (
        <StyledLi key={item}>
          <Typography>{item}</Typography>
        </StyledLi>
          ))}
    </StyledCategoriesItem>
  )
}

export default AllProductsSideNav
