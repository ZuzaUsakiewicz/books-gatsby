import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../utils/theme"
import Navbar from "../components/Navigation/Navbar"
const GlobalStyle = createGlobalStyle`

html, *, *::before, *::after {
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 scrollbar-width: auto;
scrollbar-color: rgb(12, 12, 37) rgb(104, 159, 241);
}
*::-webkit-scrollbar {
  width: 20px;
}

*::-webkit-scrollbar-track {
  background: rgb(80, 122, 185);
}

*::-webkit-scrollbar-thumb {
  background-color: rgb(22, 22, 90);
  border-radius: 20px;
  border: 3px solid rgb(26, 43, 70);
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
