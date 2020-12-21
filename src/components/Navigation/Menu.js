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
          to="/"
          activeStyle={{
            borderBottom: "6px solid blue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          link={link}
          to="/about"
          activeStyle={{ borderBottom: "6px solid blue" }}
        >
          About
        </NavLink>
        <NavLink
          link={link}
          to="/contact"
          activeStyle={{ borderBottom: "6px solid blue" }}
        >
          Contact
        </NavLink>
      </NavigationList>
    </MenuContainer>
  )
}

export default Menu
