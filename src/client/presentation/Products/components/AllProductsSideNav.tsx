import { FunctionComponent } from 'react'

import { StyledCategoriesItem,
  // StyledLi,
  StyledHeader } from './AllProductsSideNav.styled'
// import Product from 'src/client/presentation/Products/types/Product'
// import { Typography } from '@mui/material'

// type Props = {
//   category: string
// }

const AllProductsSideNav: FunctionComponent = () => (
  // const categories = JSON.parse(category).map((item: Product) => item.category)
  //
  // const uniqueCategories = [...new Set(categories)]
  <StyledCategoriesItem>
    <StyledHeader variant="h5" fontWeight="600">Kategorie</StyledHeader>
    {/* {uniqueCategories.map((item) => ( */}
    {/*  <StyledLi key={item}> */}
    {/*    <Typography>{item}</Typography> */}
    {/*  </StyledLi> */}
    {/* ))} */}
    piesek
  </StyledCategoriesItem>
  )

export default AllProductsSideNav
