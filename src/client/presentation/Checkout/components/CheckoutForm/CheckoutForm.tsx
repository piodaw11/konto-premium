import { Controller } from 'react-hook-form'
import { TextField } from '@mui/material'

import {
  StyledForm,
  StyledInputWrapper,
  StyledInput,
  StyledLabel,
  StyledTypography,
  StyledCheckoutText,
  StyledDivider,
  StyledFormWrapper
} from './CheckoutForm.styled'
import useCheckoutForm from 'src/client/presentation/Checkout/components/hooks/useCheckoutForm'
import CheckoutFormItems from 'src/client/presentation/Checkout/components/constants/CheckoutFormItems'

type Name = 'email' | 'firstName' | 'lastName'

const CheckoutForm = () => {
  const {
    control,
    handleSubmit,
    errors,
    isValid
  } = useCheckoutForm()

  return (
    <StyledFormWrapper>
      <StyledCheckoutText variant="h5">Dane płatności</StyledCheckoutText>
      <StyledDivider />
      <StyledForm>
        <StyledInputWrapper>
          {CheckoutFormItems.map(({ label, name, type }) => (
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
        {/* <StyledButtonWrapper> */}
        {/*  <Button type="submit" disabled={!isValid} variant="contained">TEST</Button> */}
        {/* </StyledButtonWrapper> */}
      </StyledForm>
    </StyledFormWrapper>
  )
}

export default CheckoutForm
