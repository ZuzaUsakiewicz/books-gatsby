import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const LastPostsSection = ({ data }) => {
  return (
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
  )
}

export default LastPostsSection
