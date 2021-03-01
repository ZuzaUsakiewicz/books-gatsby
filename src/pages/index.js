import React from "react"
import MainSection from "../components/IndexPage/MainSection"
import HeroSection from "../components/IndexPage/HeroSection"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import BookCategories from "../components/IndexPage/BookCategories"

const IndexPage = ({ data }) => (
  <>
    <HeroSection />
    <BookCategories />
    <div>
      <h1>Ostatnie posty:</h1>
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
    <MainSection />
  </>
)

export default IndexPage

export const query = graphql`
  query YeahQuery {
    file(relativePath: { eq: "photo4.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 3080, quality: 100) {
          ...GatsbyImageSharpFluid
        }
        fixed(fit: CONTAIN) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
