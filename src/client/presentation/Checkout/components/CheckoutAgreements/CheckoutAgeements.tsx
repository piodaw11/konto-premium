import { FunctionComponent } from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'

import { StyledAgreementsContent,
  StyledAgreementsContentText,
  StyledAgreementsContentWrapper,
  StyledAgreementsWrapper
} from './CheckoutAgreements.styled'
import {
  StyledCheckoutText,
  StyledDivider } from 'src/client/presentation/Checkout/components/CheckoutForm/CheckoutForm.styled'
import CheckoutAgreementItems from 'src/client/presentation/Checkout/components/constants/CheckoutAgreementItems'

const CheckoutAgreements: FunctionComponent = () => (
  <StyledAgreementsWrapper>
    <StyledCheckoutText variant="h5">Wymagane zgody</StyledCheckoutText>
    <StyledDivider />
    <StyledAgreementsContentText>
      {CheckoutAgreementItems.map(({ name, desc }) => (
        <StyledAgreementsContentWrapper key={name}>
          <StyledAgreementsContent>
            <FormControlLabel control={<Checkbox />} label={desc} />
          </StyledAgreementsContent>
        </StyledAgreementsContentWrapper>
    ))}
    </StyledAgreementsContentText>
  </StyledAgreementsWrapper>
)

export default CheckoutAgreements
