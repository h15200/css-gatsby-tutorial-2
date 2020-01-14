import React, { Fragment } from "react"

import Head from "../components/helmetHead"
import Header from "../components/header"
import Nav from '../components/nav'
import Footer from '../components/footer'

// this connects main.scss to the gatsby app
import indexStyles from "../styles/Modules/index.module.scss"

const IndexPage = () => {
  return (
    <Fragment>
      <Head title="Index" />
      <div className={indexStyles.container}>
        <div className={indexStyles.flexMain}>
          <Header />
          <div className={indexStyles.content}>
            <Nav />
            <main className={indexStyles.hotelView}>
              <div className={indexStyles.u_center}>
                <h2>hotelView</h2>
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  )
}

export default IndexPage
