import React, { useState } from "react"
import { GiNinjaMask } from "react-icons/gi"
import { Burger } from "../styles/Navigation.styled"
import {
  MenuContainer,
  NavigationList,
  NavLink,
} from "../styles/Navigation.styled"

const Hamburger = ({ backgroundScroll }) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }
  const close = () => setOpen(false)

  return (
    <>
      <Burger open={open} onClick={toggleOpen}>
        <div />
        <div />
        <div />
      </Burger>
      <MenuContainer>
        <NavigationList open={open}>
          <NavLink
            paintDrip
            to="/"
            hex="#000"
            duration={1}
            onClick={() => close()}
            backgroundScroll={backgroundScroll}
          >
            Home
          </NavLink>
          <NavLink
            paintDrip
            to="/books"
            hex="#000"
            duration={1}
            onClick={() => close()}
            backgroundScroll={backgroundScroll}
          >
            Books
          </NavLink>
          <NavLink
            paintDrip
            to="/about"
            hex="#000"
            duration={1}
            onClick={() => close()}
            backgroundScroll={backgroundScroll}
          >
            About
          </NavLink>
          <NavLink
            paintDrip
            to="/contact"
            hex="#000"
            duration={1}
            onClick={() => close()}
            backgroundScroll={backgroundScroll}
          >
            <GiNinjaMask />
          </NavLink>
        </NavigationList>
      </MenuContainer>
    </>
  )
}

export default Hamburger
