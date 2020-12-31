import React, { useState, useEffect } from "react"
import { Burger } from "../styles/Navigation.styled"
import {
  MenuContainer,
  NavigationList,
  NavLink,
} from "../styles/Navigation.styled"

const Hamburger = () => {
  const [open, setOpen] = useState(false)
  const [link, setLink] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }
  const close = () => setOpen(false)

  const changeLink = () => {
    if (window.scrollY > 40) {
      setLink(true)
    } else {
      setLink(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeLink)
    return () => {
      window.removeEventListener("scroll", changeLink)
    }
  }, [])
  return (
    <>
      <Burger open={open} onClick={toggleOpen}>
        <div />
        <div />
        <div />
      </Burger>
      <MenuContainer>
        <NavigationList open={open}>
          <NavLink fade to="/" link={link} onClick={() => close()}>
            Home
          </NavLink>
          <NavLink fade to="/about" link={link} onClick={() => close()}>
            About
          </NavLink>
          <NavLink fade to="/contact" link={link} onClick={() => close()}>
            Contact
          </NavLink>
        </NavigationList>
      </MenuContainer>
    </>
  )
}

export default Hamburger
