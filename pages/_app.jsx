import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from '../src/theme'

const GloblaStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.white}
  }

  * {
    font-family: 'Roboto', sans-serif;
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
