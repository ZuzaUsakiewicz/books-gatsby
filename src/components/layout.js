import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../utils/theme"
import Navbar from "../components/Navigation/Navbar"
const GlobalStyle = createGlobalStyle`

html, *, *::before, *::after {
 box-sizing: border-box;
 margin: 0;
 padding: 0;
}
  body {
    background-color: rgb(246, 246, 252);
    min-height: 200vh;
  }
  button {
    cursor: pointer;
  }
  a {
    text-shadow: none;
    background-image: none;
  }
 
`

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
      <Navbar />
    </ThemeProvider>
  )
}
