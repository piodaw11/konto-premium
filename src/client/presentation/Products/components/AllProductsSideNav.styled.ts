import styled from 'styled-components'
import { Typography } from '@mui/material'

const StyledCategoriesItem = styled.ul``

const StyledHeader = styled(Typography)`
  padding-bottom: 8px;
`

const StyledLi = styled.li`
  list-style: none;
`

export {
  StyledCategoriesItem,
  StyledLi,
  StyledHeader
}