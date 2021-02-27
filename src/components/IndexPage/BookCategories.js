import React from "react"
import {
  BookCategoriesContainer,
  Categories,
  CatCard,
  Icon,
} from "../styles/BookCategories.styled"
import {
  GiHalfBodyCrawling,
  GiHeartBeats,
  GiPistolGun,
  GiSwordAltar,
  GiUfo,
  GiWhiteTower,
} from "react-icons/gi"

const category = [
  { name: "horror", picture: <GiHalfBodyCrawling /> },
  { name: "thriller", picture: <GiPistolGun /> },
  { name: "fantasy", picture: <GiWhiteTower /> },
  { name: "science-fiction", picture: <GiUfo /> },
  { name: "history", picture: <GiSwordAltar /> },
  { name: "romance", picture: <GiHeartBeats /> },
]

const BookCategories = () => {
  return (
    <BookCategoriesContainer>
      <h2>Choose from many categories: </h2>
      <Categories>
        {category.map(item => {
          return (
            <CatCard to={`/${item.name}`}>
              <Icon>
                {item.picture}
                <span>{item.name}</span>
              </Icon>
            </CatCard>
          )
        })}
      </Categories>
    </BookCategoriesContainer>
  )
}

export default BookCategories
