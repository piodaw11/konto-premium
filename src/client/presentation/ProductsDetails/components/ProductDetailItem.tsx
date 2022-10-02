import Link from 'next/link'
import { FunctionComponent } from 'react'
import {
  StyledCategory,
  StyledDescription,
  StyledImage,
  StyledImageWrapper,
  StyledButton,
  StyledInfoWrapper,
  StyledOptions,
  StyledLinkText,
  StyledOptionsWrapper,
  StyledNameWrapper,
  StyledProductWrapper, StyledTitle, StyledDescriptionWrapper, StyledDescriptionItem
} from './ProductDetailItem.styled'
import { Typography } from '@mui/material'
import Pages from 'src/client/infrastructure/enums/Pages'

type Props = {
  image: string
  title: string
  description: string
  category: string
}

const ProductDetailItem: FunctionComponent<Props> = (
  { title, image, description, category }
) => (
  <StyledProductWrapper>
    <StyledImageWrapper>
      <Link href={Pages.Home}>
        <StyledLinkText>&#8592; Wróć do produktów</StyledLinkText>
      </Link>
      <StyledImage src={image} alt={title} />
    </StyledImageWrapper>
    <StyledInfoWrapper>
      <StyledNameWrapper>
        <StyledTitle variant="h3">{title}</StyledTitle>
        <StyledCategory>{category}</StyledCategory>
      </StyledNameWrapper>
      <StyledDescriptionWrapper>
        <Typography variant="h6">Opis</Typography>
        <StyledDescriptionItem>
          <StyledDescription>{description}</StyledDescription>
        </StyledDescriptionItem>
      </StyledDescriptionWrapper>
      <StyledOptions>
        <Typography variant="h6">Czas trwania:</Typography>
        <StyledOptionsWrapper>
          <StyledButton variant="contained">30 dni</StyledButton>
          <StyledButton variant="contained">60 dni</StyledButton>
          <StyledButton variant="contained">90 dni</StyledButton>
        </StyledOptionsWrapper>
      </StyledOptions>
    </StyledInfoWrapper>
  </StyledProductWrapper>
  )

export default ProductDetailItem
