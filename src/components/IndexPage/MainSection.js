import React from "react"
import {
  MainContainer,
  Cards,
  Card,
  CardImage,
  CardInfo,
} from "../styles/MainSection.styled.js"

import { GiBrain, GiShieldReflect, GiNightSleep } from "react-icons/gi"

const cards = [
  {
    name: "card1",
    title: "strengthens the brain",
    img: <GiBrain />,
    description: "loremipsumsripsum",
  },
  {
    name: "card2",
    title: "prevents stress",
    img: <GiShieldReflect />,
    description: "loremipsumsripsum",
  },
  {
    name: "card3",
    title: "aids sleep",
    img: <GiNightSleep />,
    description: "loremipsumsripsum",
  },
]
const MainSection = () => {
  return (
    <MainContainer>
      <h1>Why you need to read books?</h1>
      <Cards>
        {cards.map(card => {
          return (
            <Card>
              <CardImage img={card.img}>{card.img}</CardImage>
              <CardInfo>
                <h1>{card.title}</h1>
                <p>{card.description}</p>
              </CardInfo>
            </Card>
          )
        })}
      </Cards>
      <h1>and many many more... </h1>
    </MainContainer>
  )
}
export default MainSection
