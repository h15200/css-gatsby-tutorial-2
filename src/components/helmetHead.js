import { Helmet } from "react-helmet"
import React from "react"
import favicon from "../../static/favicon.ico"


const Head = () => {
  return (
    <Helmet>
      <title>trillo &mdash; Your all-in-one booking app</title>
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"/>
    </Helmet>
  )
}


export default Head
