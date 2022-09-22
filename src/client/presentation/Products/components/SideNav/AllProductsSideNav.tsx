import { FunctionComponent } from 'react'

import { StyledCategoriesItem,
  StyledLi,
  StyledHeader } from 'src/client/presentation/Products/components/SideNav/AllProductsSideNav.styled'
import Product from 'src/client/presentation/Products/types/Product'
import { Typography } from '@mui/material'

type Props = {
  category: string
}

const AllProductsSideNav: FunctionComponent<Props> = ({ category }) => {
  const categories = JSON.parse(category).map((item: Product) => item.category)

  const uniqueCategories = [...new Set(categories)]

  return (
    <StyledCategoriesItem>
      <StyledHeader variant="h5" fontWeight="600">Kategorie</StyledHeader>
      {uniqueCategories.map((item: any) => (
        <StyledLi>
          <Typography>{item}</Typography>
        </StyledLi>
      ))}
    </StyledCategoriesItem>
  )
}

export default AllProductsSideNav
