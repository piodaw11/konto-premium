import styled from 'styled-components'
import Image from 'next/image'
import { Button, Typography } from '@mui/material'

const StyledProductWrapper = styled.div`
  display: flex;
  height: 100%;
`

const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E3E5FA;
  border-radius: 8px;
  width: 50%;
  height: 100%;
  position: relative;
  box-shadow: 8px 0 24px -18px rgba(66, 68, 90, 1);
`

const StyledLinkText = styled.a`
  color: #6F768D;
  font-size: 12px;
  position: absolute;
  top: 20px;
  left: 30px;
  cursor: pointer;
`

const StyledImage = styled(Image)`
  border-radius: 3px;
  box-shadow: 0 0 24px 0 #000;
`

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px;
  width: 50%;
  height: 100%;
  justify-content: center;
`

const StyledTitle = styled(Typography)``

const StyledCategory = styled(Typography)`
  color: #50CC98;
`

const StyledNameWrapper = styled.div``

const StyledDescriptionWrapper = styled.ul`
  margin: 20px 0;
`

const StyledDescriptionItem = styled.li`
  margin-left: 20px;
`

const StyledDescription = styled(Typography)`
  font-size: 16px;
`

const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const StyledOptionsWrapper = styled.div`
  display: flex;
  gap: 10px;
`

const StyledButton = styled(Button)`
  &:nth-child(1) {
    background-color: #818AF9;
  }
`

export {
  StyledProductWrapper,
  StyledImageWrapper,
  StyledImage,
  StyledInfoWrapper,
  StyledTitle,
  StyledCategory,
  StyledNameWrapper,
  StyledDescription,
  StyledOptionsWrapper,
  StyledLinkText,
  StyledButton,
  StyledDescriptionWrapper,
  StyledDescriptionItem,
  StyledOptions
}
