import React, { Fragment } from 'react'

import Head from '../components/helmetHead'
import Layout from '../components/layout'
// this connects main.scss to the gatsby app
import indexStyles from '../styles/Modules/index.module.scss'

const IndexPage = () => {
  return (
    <Fragment>
      <Head title="Index" />
      <Layout>
        <main>
          Index Page
        </main>
      </Layout>
    </Fragment>

  )
}


export default IndexPage
