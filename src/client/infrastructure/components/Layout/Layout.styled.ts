import styled from 'styled-components'

const StyledLayoutWrapper = styled.div`
  width: 100%;
  position: relative;
`

const StyledLayoutChildrenWrapper = styled.div`
  min-height: calc(100% - 80px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export {
  StyledLayoutWrapper,
  StyledLayoutChildrenWrapper
}
