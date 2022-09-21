import styled from 'styled-components'
import { Typography } from '@mui/material'

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
`

const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 16px 64px;
  width: 100%;
  
  & > div {
    grid-column-end: span 2;
    width: 100%;
  }
  
  & > div:last-of-type {
    grid-column-start: 1;
    grid-column-end: span 4;
  }
`

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledDivider = styled.hr`
  width: 97%;
  display: flex;
  align-self: center;
  border: 1px solid #ccc;
  margin: 0;
`

const StyledCheckoutText = styled(Typography)`
  padding-bottom: 16px;
`

const StyledLabel = styled.label``

const StyledTypography = styled(Typography)`
  font-size: 12px;
  color: orangered;
`

const StyledButtonWrapper = styled.div``

export {
  StyledForm,
  StyledInputWrapper,
  StyledInput,
  StyledLabel,
  StyledTypography,
  StyledButtonWrapper,
  StyledFormWrapper,
  StyledCheckoutText,
  StyledDivider
}
