import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GiEvilBook } from "react-icons/gi"

export const Logo = styled(GiEvilBook)`
  font-size: 40px;
  z-index: 999;
  cursor: pointer;
  transform: ${({ backgroundScroll }) =>
    backgroundScroll
      ? "scale(0.8) translateX(20px)"
      : "scale(1) translateX(0)"};
  color: ${({ backgroundScroll, theme }) =>
    backgroundScroll ? theme.colors.link : theme.colors.fontMainColor};
  transition: transform 0.4s ease-in;
  @media screen and (max-width: 768px) {
    color: ${({ theme }) => theme.colors.link};
    transform: ${({ backgroundScroll }) =>
      backgroundScroll
        ? "scale(1) translateX(20px)"
        : "scale(0.8) translateX(0)"};
  }
`

export const Nav = styled.nav`
  width: 100%;
  padding: 1rem 3rem;
  height: 80px;
  background: ${({ backgroundScroll, theme }) =>
    backgroundScroll ? theme.colors.navbarColor : "transparent"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 997;
  box-shadow: ${({ backgroundScroll, theme }) =>
    backgroundScroll ? theme.boxShadow.main : ""};
  transition: background-color 0.6s ease-in-out, box-shadow 0.6s ease-in-out;
  @media screen and (max-width: 768px) {
    background: ${({ theme }) => theme.colors.navbarColor};
  }
`
export const MenuContainer = styled.div`
  width: 60%;
  height: 80px;
`
export const NavigationList = styled.ul`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;

  @media screen and (max-width: 768px) {
    padding-top: 100px;
    margin: 0;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.navbarSlider};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    transition: transform 0.5s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }
  @media (max-width: 700px) and (orientation: landscape) {
    padding-top: 0;
  }
`

export const NavLink = styled(AniLink)`
  font-size: 0.9rem;
  font-style: italic;
  color: ${({ backgroundScroll, theme }) =>
    backgroundScroll ? theme.colors.link : theme.colors.fontMainColor};
  border-bottom: 6px solid transparent;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform: ${({ backgroundScroll }) =>
    backgroundScroll ? "scale(0.9)" : "scale(1)"};
  text-transform: uppercase;
  font-weight: bolder;
  @media screen and (max-width: 768px) {
    color: ${({ theme }) => theme.colors.link};
    padding: 10px 0;
    margin: 5px;
    font-size: 40px;
    transform: scale(1);
  }
  @media (max-width: 700px) and (orientation: landscape) {
    font-size: 20px;
  }
`
export const Burger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 40px;
  display: none;
  z-index: 998;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.colors.main};
    transform-origin: 1px;
    transition: all 0.3s ease-in-out;
    z-index: 999;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
  }
`
