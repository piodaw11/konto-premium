import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { FunctionComponent } from 'react'
import { Controller } from 'react-hook-form'

import useRegisterForm from 'src/client/presentation/Register/components/hooks/useRegisterForm'
import {
  StyledButtonWrapper,
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledDividerWrapper,
  StyledTypography } from 'src/client/presentation/Register/components/RegisterForm.styled'
import registerFormItems from 'src/client/presentation/Register/components/constants/registerFormItems'
import {
  StyledCloseForm,
  StyledFormWrapper
} from '../../Login/components/LoginForm.styled'

type Name = 'email' | 'phone' | 'password' | 'passwordRepeat' | 'firstName' | 'lastName'

const RegisterForm: FunctionComponent = () => {
  const {
    control,
    handleSubmit,
    errors,
    isValid,
    handleRegisterNewUser,
    onCloseFormHandler
  } = useRegisterForm()

  return (
    <StyledFormWrapper>
    <StyledForm onSubmit={handleSubmit(handleRegisterNewUser)}>
      <StyledCloseForm onClick={onCloseFormHandler}>&#x2715;</StyledCloseForm>
      <StyledInputWrapper>
        {registerFormItems.map(({ label, name, type }) => (
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
      <StyledButtonWrapper>
        <Button type="submit" disabled={!isValid} variant="contained">Zarejestruj</Button>
      </StyledButtonWrapper>
      <StyledDividerWrapper>
        <FormControlLabel control={<Checkbox required />} label="Akceptuję politykę prywatności" />
      </StyledDividerWrapper>
    </StyledForm>
    </StyledFormWrapper>
  )
}

export default RegisterForm
