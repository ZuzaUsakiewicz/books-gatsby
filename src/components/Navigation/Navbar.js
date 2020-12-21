import React from "react"
import Hamburger from "./Hamburger"
import { Nav, Logo } from "../styles/Navigation.styled"

const Navbar = () => {
  return (
    <Nav>
      <Logo />
      <Hamburger />
    </Nav>
  )
}

export default Navbar
