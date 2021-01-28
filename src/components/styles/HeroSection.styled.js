import styled from "styled-components"

export const HeroContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 5rem 1rem 0rem 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const Title = styled.figure`
  padding: 1rem 1rem 0.3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1.6rem;

    text-transform: uppercase;
    font-style: italic;
  }
  p {
    font-size: 1rem;
    text-align: justify;
  }
  @media screen and (min-width: 768px) {
    h1,
    p {
      color: ${({ theme }) => theme.colors.main};
    }
  }
`
export const ReadingImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 0 0.5rem;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const BackgroundDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.navbarColor};
  background-image: ${({ theme }) =>
    `linear-gradient(160deg, ${theme.colors.navbarColor} 0%, ${theme.colors.gradientSecond} 100%)`};
  z-index: -1;
  height: 70vh;
  border-bottom: 2px solid #991383;
  @media screen and (min-width: 768px) {
    height: 100vh;
    border: none;
  }
`
