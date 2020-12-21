import React, { useState, useEffect } from "react"
import Hamburger from "./Hamburger"
import { Nav, Logo } from "../styles/Navigation.styled"

const Navbar = () => {
  const [backgroundScroll, setBackgroundScroll] = useState(false)

  const changeNavBg = () => {
    if (window.scrollY > 40) {
      setBackgroundScroll(true)
    } else {
      setBackgroundScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg)
    return () => {
      window.removeEventListener("scroll", changeNavBg)
    }
  }, [])
  return (
    <Nav backgroundScroll={backgroundScroll}>
      <Logo />
      <Hamburger />
    </Nav>
  )
}

export default Navbar
