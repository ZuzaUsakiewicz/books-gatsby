import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const SecondPageWrapper = styled.div`
  padding: 20px;
`

const SecondPage = () => (
  <>
    <SecondPageWrapper>
      <h1> Hello </h1>
      <Link to="/">Return</Link>
    </SecondPageWrapper>
  </>
)

export default SecondPage
