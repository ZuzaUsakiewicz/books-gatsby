import styled from "styled-components"
import { Link } from "gatsby"
import { GiBookmark } from "react-icons/gi"

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`
export const NavLinks = styled.ul`
  width: 100%;
  height: 100%;
  display: ${({ menu }) => (menu ? "none" : "flex")};
`

export const NavLink = styled(Link)`
  padding: 0 20px;
`
export const Logo = styled(GiBookmark)`
  font-size: 54px;
`
export const HamburgerMenu = styled.div`
  width: 80px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
export const Bar = styled.div`
  width: 80px;
  height: 5px;
  background-color: black;
`
