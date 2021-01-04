import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../utils/theme"
import Navbar from "../components/Navigation/Navbar"
const GlobalStyle = createGlobalStyle`

html, *, *::before, *::after {
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 scroll-behavior: smooth;
 scrollbar-width: auto;
 scrollbar-color: ${({ theme }) => theme.colors.linkHover} ${({ theme }) =>
  theme.colors.black} ;
}

*::-webkit-scrollbar {
  width: 20px;
}

*::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.colors.black}
}

*::-webkit-scrollbar-thumb {
  background-color:${({ theme }) => theme.colors.linkHover};
  border-radius: 20px;
  border: 3px solid ${({ theme }) => theme.colors.black}
}
  body {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    min-height: 200vh;
  }
  button {
    cursor: pointer;
  }
  a {
    text-shadow: none;
    background-image: none;
  }
 
`

export default function Layout({ children }) {
  const navRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(navRef.current, {
      duration: 3,
      delay: 2,
      autoAlpha: 0,
      ease: "power3.in",
    })
  }, [])
  return (
    <div ref={navRef}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
        <Navbar />
      </ThemeProvider>
    </div>
  )
}
