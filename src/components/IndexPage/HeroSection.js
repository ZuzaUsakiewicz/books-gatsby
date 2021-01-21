import React from "react"
import {
  HeroContainer,
  Title,
  ReadingImg,
  BackgroundDiv,
} from "../styles/HeroSection.styled.js"
import reading from "../../images/reading-time.svg"
import { Button } from "../layout"

const HeroSection = () => {
  return (
    <HeroContainer>
      <BackgroundDiv></BackgroundDiv>
      <ReadingImg src={reading} alt="reading-svg" />
      <Title>
        <h1>Start your book journey!</h1>
        <p>
          Do you want to start reading books? Or want to read them more?
          Whatever your goals are, let's accomplish them together! This site is
          for you all.
        </p>
        <Button primary="true">Posts</Button>
        <Button>About</Button>
      </Title>
    </HeroContainer>
  )
}
export default HeroSection
