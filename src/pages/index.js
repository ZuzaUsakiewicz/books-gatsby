import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import backgroundImage from "../images/bookbg.jpg"
import { Link } from "gatsby"

const GlobalStyle = createGlobalStyle`
*, *::after, *::before {
box-sizing: border-box;
font-family: 'Montserrat', monospace;

}
body {
  padding: 0;
  margin:0;
  min-height: 100vh;
  
}
`

const StyledWrapper = styled.div`
  background-image: url(${backgroundImage});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  color: white;
  height: 100vh;
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      <Link to="/page-2">Click here</Link>
    </StyledWrapper>
  </>
)

export default IndexPage
