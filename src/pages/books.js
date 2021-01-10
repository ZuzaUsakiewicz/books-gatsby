import React from "react"
import { BookContainer } from "../components/styles/HeroSection.styled"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"

export default function Books({ data }) {
  return (
    <BookContainer>
      <h1>Books opinion</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <AniLink
            paintDrip
            to="/"
            hex="#000"
            duration={1}
            to={node.frontmatter.slug}
          >
            Go to my {node.frontmatter.title} blog post
          </AniLink>
        </div>
      ))}
    </BookContainer>
  )
}
export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
  }
`
