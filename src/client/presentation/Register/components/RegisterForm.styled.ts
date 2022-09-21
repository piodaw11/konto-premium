import { Typography } from '@mui/material'
import styled from 'styled-components'

const StyledForm = styled.form`
  height: 100%;
  border: 1px solid #c3c3c3;
  border-radius: 4px;
  width: 35%;
  padding: 16px 32px;
  overflow: auto;
`

const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  padding-top: 24px;
  gap: 16px;
  
  & > div:nth-child(3) {
    grid-column-start: span 2;
  }

  & > div:nth-child(4) {
    grid-column-start: span 2;
  }
`

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  padding-bottom: 8px;
`

const StyledTypography = styled(Typography)`
  font-size: 10px;
  color: orangered;
`

const StyledButtonWrapper = styled.div`
  padding-top: 24px;
  
  & > button {
    width: 100%;
    height: 46px;
  }
`

const StyledDividerWrapper = styled.div`
  height: 26px;
`

export {
  StyledForm,
  StyledInputWrapper,
  StyledInput,
  StyledLabel,
  StyledTypography,
  StyledButtonWrapper,
  StyledDividerWrapper
}
