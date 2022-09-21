import styled from 'styled-components'
import { Typography } from '@mui/material'

const StyledItemListingWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 48px;
`

const StyledItemListingHeader = styled(Typography)`
  margin-top: 16px;
`

export {
  StyledItemListingWrapper,
  StyledItemListingHeader
}
