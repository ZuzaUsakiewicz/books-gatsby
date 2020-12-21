import styled from "styled-components"
import { Link } from "gatsby"
import { GiBookmark } from "react-icons/gi"

export const Logo = styled(GiBookmark)`
  font-size: 32px;
`

export const Nav = styled.nav`
  width: 100%;
  padding: 10px 40px;
  height: 80px;
  background: ${({ backgroundScroll }) =>
    backgroundScroll ? "rebeccapurple" : "transparent"};

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 997;
  transition: background 0.4s ease-in-out;
`
export const MenuContainer = styled.div`
  width: 50%;
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
    background-color: rebeccapurple;
    position: fixed;
    top: 80px;
    right: 0;
    left: 0;
    height: 100vh;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }
  @media (max-width: 700px) and (orientation: landscape) {
    padding-top: 0;
  }
`

export const NavLink = styled(Link)`
  color: ${({ link, theme }) => (link ? theme.colors.main : theme.colors.link)};
  border-bottom: 6px solid transparent;
  transition: color 0.3s ease-in;
  @media screen and (max-width: 768px) {
    padding: 10px 0;
    margin: 10px;
    font-size: 60px;
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
    background-color: rgb(0, 0, 0);
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
