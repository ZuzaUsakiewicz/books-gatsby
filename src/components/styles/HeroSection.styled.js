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
    font-size: 0.7rem;
    text-align: justify;
    font-weight: 200;
  }
  @media screen and (min-width: 768px) {
    h1,
    p {
      color: ${({ theme }) => theme.colors.fontMainColor};
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
