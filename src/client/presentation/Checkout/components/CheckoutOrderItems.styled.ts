import styled from 'styled-components'
import { Typography } from '@mui/material'

const StyledOrderItemsUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2px 0;
`

const StyledOrderItemsLi = styled.li`
  list-style: none;
  display: flex;
justify-content: space-between;
`

const StyledOrderItemsTypography = styled(Typography)`
  display: flex;
`

const StyledOrderItemsLiItemWrapper = styled(Typography)``

const StyledOrderItemsLiItemSymbolWrapper = styled(Typography)`
  font-size: 12px;
  font-weight: 900;
  align-items: center;
  display: flex;
  margin-left: 10px;
`

export {
  StyledOrderItemsUl,
  StyledOrderItemsLi,
  StyledOrderItemsTypography,
  StyledOrderItemsLiItemWrapper,
  StyledOrderItemsLiItemSymbolWrapper
}
