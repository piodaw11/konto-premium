import { createGlobalStyle } from 'styled-components'

const GlobalStyle = () => {
  const CreateStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Poppins', sans-serif;
      color: #000;
    }
  `
  return <CreateStyle />
}

export default GlobalStyle
