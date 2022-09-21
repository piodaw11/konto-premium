import { Controller } from 'react-hook-form'
import { Button, TextField, Typography } from '@mui/material'
import Link from 'next/link'

import useLoginForm from 'src/client/presentation/Login/components/hooks/useLoginForm'
import {
  StyledButtonWrapper,
  StyledForm,
  StyledFormWrapper,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledCloseForm,
  StyledTypography,
  StyledDividerWrapper,
  StyledDivider,
  StyledDividerText,
  StyledButtonOauthWrapper,
  StyledButtonGoogle,
  StyledButtonFacebook,
  StyledRedirectToRegister
} from './LoginForm.styled'
import LoginFormItems from 'src/client/presentation/Login/components/constants/LoginFormItems'
import Pages from 'src/client/infrastructure/enums/Pages'

type Name = 'email' | 'password'

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    errors,
    isValid,
    handleSignIn,
    onCloseFormHandler
  } = useLoginForm()

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleSubmit(handleSignIn)}>
        <StyledCloseForm onClick={onCloseFormHandler}>&#x2715;</StyledCloseForm>
        <StyledInputWrapper>
          {LoginFormItems.map(({ label, name, type }) => (
            <StyledInput key={label}>
              <StyledLabel htmlFor={name}>{label}</StyledLabel>
              <Controller
                name={name as Name}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="outlined"
                    type={type}
                    placeholder={label}
                    error={Boolean(errors[name as Name])}
                  />
              )}
              />
              {errors[name as Name] && <StyledTypography>{errors[name as Name]?.message}</StyledTypography>}
            </StyledInput>
        ))}
        </StyledInputWrapper>
        <Link href={Pages.ForgotPassword}>Zapomniałeś/aś hasła?</Link>
        <StyledButtonWrapper>
          <Button type="submit" disabled={!isValid} variant="contained">zaloguj się</Button>
        </StyledButtonWrapper>
        <StyledDividerWrapper>
          <StyledDivider />
          <StyledDividerText>lub</StyledDividerText>
          <StyledDivider />
        </StyledDividerWrapper>
        <StyledButtonOauthWrapper>
          <StyledButtonGoogle type="submit" variant="contained">zaloguj się przez Google</StyledButtonGoogle>
          <StyledButtonFacebook type="submit" variant="contained">zaloguj się przez Facebook</StyledButtonFacebook>
        </StyledButtonOauthWrapper>
        <StyledRedirectToRegister>
          <Typography>Nie masz jeszcze konta?</Typography>
          <Link href={Pages.Register}>Zarejestruj się</Link>
        </StyledRedirectToRegister>
      </StyledForm>
    </StyledFormWrapper>
  )
}

export default LoginForm
