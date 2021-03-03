import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <div>
      {previousPagePath && (
        <span>
          <Link to={previousPagePath}>Prev</Link>
        </span>
      )}
      {nextPagePath && (
        <span>
          <Link to={nextPagePath}>nxt</Link>
        </span>
      )}
    </div>
  )
}

Pager.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Pager
