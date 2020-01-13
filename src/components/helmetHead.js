import { Helmet } from "react-helmet"
import React from "react"
import PropTypes from "prop-types"
import favicon from "../../static/favicon.ico"


  const Head = () => {
  return (
    <Helmet>
      <title>{`${props.title} | ${data.site.siteMetadata.title}`}</title>
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600"/>
    </Helmet>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Head
