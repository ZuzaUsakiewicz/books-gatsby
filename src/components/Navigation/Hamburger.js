import React, { useState } from "react"
import Menu from "./Menu"
import { Burger, Bar } from "../styles/Navigation.styled"

const Hamburger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
      <Menu open={open} />
    </>
  )
}

export default Hamburger
