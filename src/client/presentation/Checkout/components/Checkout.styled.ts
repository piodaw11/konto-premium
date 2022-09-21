import styled from 'styled-components'

const StyledCheckoutWrapper = styled.div`
  display: flex;
  margin-top: 80px;
  height: calc(100vh - 80px);
  width: 100%;
  padding: 48px;
  background-color: #ccc;
  overflow: hidden;
  gap: 30px;
`

const StyledLeftSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 30px;
`

const StyledCheckoutAgreementWrapper = styled.div`
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;
  height: 40%;
`

const StyledCheckoutPaymentWrapper = styled.div`
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;
  height: 60%;
`

export {
  StyledCheckoutWrapper,
  StyledCheckoutPaymentWrapper,
  StyledLeftSideWrapper,
  StyledCheckoutAgreementWrapper
}
