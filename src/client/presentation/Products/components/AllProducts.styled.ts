import styled from 'styled-components'

const StyledProductPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  width: 100%;
  padding: 32px;
  flex-wrap: wrap;
  gap: 16px;
`

const StyledCategoriesWrapper = styled.div`
  display: flex;
  flex-basis: 18%;
  border: 1px solid #c3c3c3;
  border-radius: 4px;
  padding: 16px 8px;
`

const StyledItemWrapper = styled.div`
  display: flex;
  flex-basis: 80%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
`

const StyledFilterWrapper = styled.div`
  display: flex;
  border: 1px solid #c3c3c3;
  border-radius: 4px;
  width: 100%;
  padding: 8px;
  margin-bottom: -17px;
`

const StyledSortingWrapper = styled.div``

const StyledChangeViewWrapper = styled.div`
  
  
  & > button {
    min-width: 36px;
    max-width: 36px;
  }
`

export {
  StyledProductPageWrapper,
  StyledCategoriesWrapper,
  StyledFilterWrapper,
  StyledItemWrapper,
  StyledSortingWrapper,
  StyledChangeViewWrapper
}
