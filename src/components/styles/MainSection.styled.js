import styled from "styled-components"

export const MainContainer = styled.section`
  padding: 2rem 0;
  width: 100vw;
  min-height: 120vh;
  max-height: 100%;
  background-color: ${({ theme }) => theme.colors.linkHover};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
export const BookContainer = styled.div`
  width: 100%;
  height: 100vh;
`

export const Cards = styled.div`
  padding: 2rem 0;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`

export const Card = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.main};
  width: 20vw;
  height: 60vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.4s ease-in-out, transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
  }
  @media screen and (max-width: 768px) {
    width: 70vw;
    margin: 1rem 0;
  }
`
export const CardImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.navbarSlider};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: white;
`

export const CardInfo = styled.div`
  h1 {
    font-size: 1rem;
    text-align: center;
  }
  p {
    text-align: justify;
  }
`
