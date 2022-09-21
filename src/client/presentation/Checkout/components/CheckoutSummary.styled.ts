import styled from 'styled-components'
import { Button, Typography } from '@mui/material'

const StyledSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: #fff;
  border-radius: 8px;
  padding: 32px;
`

const StyledSummaryTitle = styled(Typography)`
  padding-bottom: 16px;
`

const StyledSummaryInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledSummaryInfo = styled(Typography)`
  font-weight: 600;
`

const StyledDivider = styled.hr`
  width: 92%;
  display: flex;
  align-self: center;
  border: 1px solid #ccc;
  margin: 0;
`

const StyledOrderSummaryWrapper = styled.div`
  padding: 16px 0;
  height: 170px;
  overflow: auto;
`

const StyledOrderSummaryTotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`

const StyledOrderSummaryTotalPrice = styled(Typography)``

const StyledSubmitButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 16px;
`

const StyledSubmitButton = styled(Button)``

export {
  StyledSummaryWrapper,
  StyledSummaryTitle,
  StyledDivider,
  StyledOrderSummaryWrapper,
  StyledSummaryInfo,
  StyledSummaryInfoWrapper,
  StyledOrderSummaryTotalPriceWrapper,
  StyledOrderSummaryTotalPrice,
  StyledSubmitButtonWrapper,
  StyledSubmitButton
}
