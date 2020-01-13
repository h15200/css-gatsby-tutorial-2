import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import Head from '../components/helmetHead'
import Layout from '../components/layout'

const NotFound = () => {
  return (
    <Fragment>
      <Head title="404 Page" />
      <Layout>
        <h1>Page not found</h1>
        <p><Link to="/">Back home</Link></p>
      </Layout>
    </Fragment>
  )
}

export default NotFound
