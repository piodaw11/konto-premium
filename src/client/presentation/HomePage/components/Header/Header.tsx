import { FunctionComponent } from 'react'

import {
  StyledHeader, StyledHeaderDescription, StyledHeaderImg,
  StyledHeaderImgWrapper,
  StyledHeaderTitle,
  StyledHeaderTitleWrapper,
  StyledHeaderWrapper
} from './Header.styled'

const Header: FunctionComponent = () => (
  <StyledHeader>
    <StyledHeaderWrapper>
      <StyledHeaderTitleWrapper>
        <StyledHeaderTitle variant="h2">
          Konto Premium
        </StyledHeaderTitle>
        <StyledHeaderDescription>
          opis
        </StyledHeaderDescription>
      </StyledHeaderTitleWrapper>
      <StyledHeaderImgWrapper>
        <StyledHeaderImg />
      </StyledHeaderImgWrapper>
    </StyledHeaderWrapper>
  </StyledHeader>
)

export default Header
