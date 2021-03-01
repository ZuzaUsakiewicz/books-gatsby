import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import styled from "styled-components"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../utils/theme"
import Navbar from "../components/Navigation/Navbar"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const GlobalStyle = createGlobalStyle`

html, *, *::before, *::after {
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 scroll-behavior: smooth;
 scrollbar-width: auto;
}
@media screen and (min-width: 768px) {
  html {
    scrollbar-color: ${({ theme }) => theme.colors.link} ${({ theme }) =>
  theme.colors.navbarSlider} ;
  }
    *::-webkit-scrollbar {
  width: 20px;
}

*::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.colors.navbarColor};
}

*::-webkit-scrollbar-thumb {
  background-color:${({ theme }) => theme.colors.link};
  border-radius: 20px;
  border: 3px solid ${({ theme }) => theme.colors.backgroundColor}
}
  }

  body {
    background-color: ${({ theme }) => theme.colors.main};
    min-height: 200vh;
    user-select: none;
    color: ${({ theme }) => theme.colors.mainFontColor};
  }
  button {
    cursor: pointer;
  }
  a {
    text-shadow: none;
    background-image: none;
    color: ${({ theme }) => theme.colors.linkHover};
  }
  blockquote {
    p{
      font-size: 2.4rem;
    }
  }
  figcaption,
  cite {
    font-size: 25px;
  }
 
`

export const Button = styled(AniLink)`
  padding: 0.5rem 1.8rem;
  border: none;
  cursor: pointer;
  color: ${({ primary, theme }) =>
    primary ? theme.colors.navbarColor : theme.colors.main};
  background: ${({ primary, theme }) =>
    primary ? theme.colors.main : theme.colors.navbarColor};
  border-radius: 7px;
`

export default function Layout({ children }) {
  const navRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(navRef.current, {
      duration: 2,
      delay: 1,
      autoAlpha: 0,
      ease: "power4.out",
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
