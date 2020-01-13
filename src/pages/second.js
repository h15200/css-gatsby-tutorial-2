import React, { Fragment } from 'react'

import Head from '../components/helmetHead'
import Layout from '../components/layout'

const SecondPage = () => {
  return (
    <Fragment>
      <Head title="Second Page" />
      <Layout>
        <main>
        Hello, 2nd page!
        </main>
      </Layout>
    </Fragment>
  )
}


export default SecondPage
