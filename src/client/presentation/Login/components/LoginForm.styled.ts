import styled from 'styled-components'
import { Button, Typography } from '@mui/material'

const StyledFormWrapper = styled.div`
  margin-top: 80px;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
  width: 100%;
`

const StyledCloseForm = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 24px;
  cursor: pointer;
`

const StyledForm = styled.form`
  height: 100%;
  border: 1px solid #c3c3c3;
  border-radius: 4px;
  width: 35%;
  padding: 16px 32px;
  overflow: auto;
`

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  gap: 16px;
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
  padding: 24px 0 16px;
  
  & > button {
    width: 100%;
    height: 46px;
  }
`

const StyledDividerWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const StyledDivider = styled.hr`
  width: 30%;
  display: flex;
  align-self: center;
  border: 1px solid #ccc;
  justify-content: center;
  margin: 0;
`

const StyledDividerText = styled(Typography)`
  font-size: 12px;
  color: #ccc;
`

const StyledButtonOauthWrapper = styled.div`
  padding-top: 16px;
  gap: 5px;
  
  & > button {
    width: 100%;
    height: 46px;
  }
`

const StyledButtonGoogle = styled(Button)`
  margin-bottom: 10px;
  background-color: #ff3500;
`

const StyledButtonFacebook = styled(Button)`
  background-color: dodgerblue;
`

const StyledRedirectToRegister = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export {
  StyledForm,
  StyledInputWrapper,
  StyledInput,
  StyledLabel,
  StyledTypography,
  StyledButtonWrapper,
  StyledFormWrapper,
  StyledCloseForm,
  StyledDividerWrapper,
  StyledDivider,
  StyledDividerText,
  StyledButtonOauthWrapper,
  StyledButtonGoogle,
  StyledButtonFacebook,
  StyledRedirectToRegister
}
