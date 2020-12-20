import React, { useState } from "react"
import {
  Navigation,
  Logo,
  HamburgerMenu,
  Bar,
  NavLinks,
  NavLink,
} from "./styles/Header.styled"

const Header = () => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(prev => !prev)
  }
  return (
    <Navigation>
      <Logo />
      <HamburgerMenu onClick={toggleMenu}>
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
      </HamburgerMenu>
      {menu && (
        <NavLinks>
          <NavLinks to="/">Home</NavLinks>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
      )}
    </Navigation>
  )
}

export default Header
