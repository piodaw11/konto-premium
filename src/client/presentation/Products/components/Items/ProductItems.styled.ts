import styled from 'styled-components'
import Image from 'next/image'
import { Button, Typography } from '@mui/material'

const StyledItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #c3c3c3;
  border-radius: 4px;
`

const StyledProductWrapper = styled.div`
  padding: 16px;
`

const StyledImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  cursor: pointer;
`

const StyledImage = styled(Image)`
  border-radius: 8px;
`

const StyledContentWrapper = styled.div``

const StyledTitle = styled(Typography)`
  padding: 16px 0;
`

const StyledPrice = styled(Typography)`
`

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`

const StyledButton = styled(Button)`
  display: flex;
  position: relative;
  width: 100%;
  
  & > svg {
    fill: #fff;
    position: absolute;
    left: 7%;
  }
`

const StyledButtonWishes = styled(Button)`
  display: flex;
  min-width: 36.5px;
  max-width: 36.5px;
`

export {
  StyledItemsWrapper,
  StyledImageWrapper,
  StyledImage,
  StyledContentWrapper,
  StyledTitle,
  StyledPrice,
  StyledButton,
  StyledProductWrapper,
  StyledButtonWrapper,
  StyledButtonWishes
}
