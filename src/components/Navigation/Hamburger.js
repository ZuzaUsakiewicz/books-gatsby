import React, { useState } from "react"
import { Burger } from "../styles/Navigation.styled"
import {
  MenuContainer,
  NavigationList,
  NavLink,
} from "../styles/Navigation.styled"
import { Gi3DGlasses } from "react-icons/gi"

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
            hex="#1760cc"
            duration={1}
            onClick={() => close()}
            backgroundScroll={backgroundScroll}
          >
            home
          </NavLink>
          <NavLink
            paintDrip
            to="/books"
            hex="#1760cc"
            duration={1}
            onClick={() => close()}
            backgroundScroll={backgroundScroll}
          >
            books
          </NavLink>
          <NavLink
            paintDrip
            to="/about"
            hex="#1760cc"
            duration={1}
            onClick={() => close()}
            backgroundScroll={backgroundScroll}
          >
            about
          </NavLink>
          <NavLink
            paintDrip
            to="/contact"
            hex="#1760cc"
            duration={1}
            onClick={() => close()}
            backgroundScroll={backgroundScroll}
          >
            contact
          </NavLink>
          <NavLink
            paintDrip
            to="/contact"
            hex="#1760cc"
            duration={1}
            onClick={() => close()}
            backgroundScroll={backgroundScroll}
          >
            <Gi3DGlasses />
          </NavLink>
        </NavigationList>
      </MenuContainer>
    </>
  )
}

export default Hamburger
