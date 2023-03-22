import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from '../src/theme'

const GloblaStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    background-color: ${(props) => props.theme.white}
  }

  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
`
function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GloblaStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
