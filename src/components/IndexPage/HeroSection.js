import React from "react"
import {
  HeroContainer,
  Title,
  ReadingImg,
  ButtonsContainer,
} from "../styles/HeroSection.styled.js"
import reading from "../../images/reading-time.svg"
import { Button } from "../layout"

const HeroSection = () => {
  return (
    <HeroContainer>
      <ReadingImg src={reading} alt="reading-svg" />
      <Title>
        <h1>Book-Z</h1>
        <p>
          Cześć! Miło, że tu jesteś! Jestem Zuza i wrzucam tu posty o książkach.
          Przejdź do bloga, lub dowiedź się więcej o mnie
        </p>
        <ButtonsContainer>
          <Button
            primary="true"
            to="/books"
            paintDrip
            hex="#1760cc"
            duration={1}
          >
            Books
          </Button>
          <Button to="/about" paintDrip hex="#1760cc" duration={1}>
            About
          </Button>
        </ButtonsContainer>
      </Title>
    </HeroContainer>
  )
}
export default HeroSection
