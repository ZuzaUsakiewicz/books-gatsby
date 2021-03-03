import React from "react"
import {
  BooksPageContainer,
  PostsContainer,
  PostItem,
} from "../components/styles/BooksPage.styled"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Pager from "../components/pager"

export default function Books({ data, pageContext }) {
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
      <Pager pageContext={pageContext} />
    </BooksPageContainer>
  )
}
Books.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            tags
            image
          }
        }
      }
    }
  }
`
