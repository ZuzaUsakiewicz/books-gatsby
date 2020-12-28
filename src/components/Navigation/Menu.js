import React, { useState, useEffect } from "react"
import {
  MenuContainer,
  NavigationList,
  NavLink,
} from "../styles/Navigation.styled"

const Menu = ({ open }) => {
  const [link, setLink] = useState(false)

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
    <MenuContainer>
      <NavigationList open={open}>
        <NavLink
          link={link}
          fade
          to="/"
          // activeStyle={{
          //   borderBottom: "6px solid #0d0d35",
          // }}
        >
          Home
        </NavLink>
        <NavLink fade to="/about" link={link}>
          About
        </NavLink>
        <NavLink fade to="/contact" link={link}>
          Contact
        </NavLink>
      </NavigationList>
    </MenuContainer>
  )
}

export default Menu
