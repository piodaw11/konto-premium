import styled from 'styled-components'
import { Typography } from '@mui/material'

const StyledHeader = styled.header`
  display: flex;
  width: 100vw;
  height: calc(100vh - 80px);
  margin-top: 80px;
  padding: 48px;
  background-color: #fdfdfd;
`

const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const StyledHeaderTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  padding: 32px;
`

const StyledHeaderTitle = styled(Typography)`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
`

const StyledHeaderDescription = styled(Typography)`
  
`

const StyledHeaderImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: center;
  align-items: center;
`

const StyledHeaderImg = styled.div`
  background-image: url("/images/header-right.svg");
  background-color: #fff;
  background-size: cover;
  width: 500px;
  height: 500px;
  border-radius: 16px;
  box-shadow: 6px 6px 20px -10px rgba(0,0,0,0.74);
`

export {
  StyledHeader,
  StyledHeaderWrapper,
  StyledHeaderTitleWrapper,
  StyledHeaderTitle,
  StyledHeaderDescription,
  StyledHeaderImgWrapper,
  StyledHeaderImg
}
