import styled from "styled-components"

export const HeroContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 5rem 1rem 0rem 1rem;
`
export const Title = styled.figure`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  align-items: center;
  h1 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
  }
`
export const ReadingImg = styled.img`
  width: 100%;
`
export const BackgroundDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  z-index: -1;
  clip-path: ellipse(70% 20% at 35% 17%);
  height: 70%;
`
