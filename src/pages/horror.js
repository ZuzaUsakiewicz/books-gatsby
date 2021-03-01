import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
export default function Horror({ data }) {
  return (
    <>
      <h1>Horror!</h1>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <AniLink
              paintDrip
              hex="#1760cc"
              duration={1}
              to={node.frontmatter.slug}
            >
              Go to my {node.frontmatter.title} blog post
            </AniLink>
          </div>
        ))}
      </div>
    </>
  )
}
export const query = graphql`
  query HorrorQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___tags, order: DESC }
      filter: { frontmatter: { tags: { eq: "horror" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            slug
            title
            tags
          }
        }
      }
    }
  }
`
