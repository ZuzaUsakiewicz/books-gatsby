import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

html, *, *::before, *::after {
 box-sizing: border-box;
 margin: 0;
 padding: 0;
}
  body {
    background-color: rgb(0, 0, 20);
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
    <>
      <GlobalStyle theme="dark" />
      {children}
    </>
  )
}
