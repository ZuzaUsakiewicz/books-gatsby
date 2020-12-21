import React from "react"
import {
  MenuContainer,
  NavigationList,
  NavLink,
} from "../styles/Navigation.styled"

const Menu = ({ open }) => {
  return (
    <MenuContainer>
      <NavigationList open={open}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavigationList>
    </MenuContainer>
  )
}

export default Menu
