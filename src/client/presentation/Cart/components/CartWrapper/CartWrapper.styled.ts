import styled from 'styled-components'

const StyledCartWrapper = styled.div`
  display: flex;
  margin-top: 80px;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #ccc;
  padding: 48px;
  overflow: hidden;
  gap: 30px;
`

const StyledCartItemsWrapper = styled.div`
  width: 70%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  overflow: auto;
`

const StyledDivider = styled.hr`
  width: 92%;
  display: flex;
  align-self: center;
  border: 1px solid #ccc;
  margin: 0;
`

export {
  StyledCartWrapper,
  StyledCartItemsWrapper,
  StyledDivider
}
