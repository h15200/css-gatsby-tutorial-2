import React, { Fragment } from "react"
import { Link } from "gatsby"

import Head from "../components/helmetHead"

const NotFound = () => {
  return (
    <Fragment>
      <Head title="404 Page" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Back home</Link>
      </p>
    </Fragment>
  )
}

export default NotFound
