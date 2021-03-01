import React from "react"
import {
  BooksPageContainer,
  PostsContainer,
  PostItem,
} from "../components/styles/BooksPage.styled"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"

export default function Books({ data }) {
  return (
    <BooksPageContainer>
      <h1>Posty</h1>
      <PostsContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostItem key={node.id}>
            <AniLink
              paintDrip
              hex="#000"
              duration={1}
              to={node.frontmatter.slug}
            >
              <img src={node.frontmatter.image} />
              Go to my {node.frontmatter.title} blog post
            </AniLink>
          </PostItem>
        ))}
      </PostsContainer>
    </BooksPageContainer>
  )
}
export const query = graphql`
  query myQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            slug
            title
            image
          }
        }
      }
    }
  }
`
