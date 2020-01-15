import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

import Head from "../components/helmetHead"
import Footer from "../components/footer"

// this connects main.scss to the gatsby app
import indexStyles from "../styles/Modules/index.module.scss"
import headerStyles from "../styles/Modules/header.module.scss"

// svg sprite
import searchSvg from '../images/SVG/magnifying-glass.svg'
import bookmark from '../images/SVG/bookmark.svg'
import chat from '../images/SVG/chat.svg'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid (maxWidth: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      user: file(relativePath: { eq: "user.jpg"}) {
        childImageSharp {
          fluid (maxWidth:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Fragment>
      <Head title="Index" />
      <div className={indexStyles.container}>
        <header className={` ${headerStyles.header} ${indexStyles.header}`}>
          <div className={headerStyles.logoContainer}>
            <Img fluid={data.logo.childImageSharp.fluid} alt="logo"/>
          </div>
          <form action="#" className={headerStyles.search}>
            <input type="text" className={headerStyles.search_input}/>
            <button className={headerStyles.search_button}>
              <img className={headerStyles.search_icon} src={searchSvg} alt="magnifying glass icon" />
            </button>
          </form>
          <nav className={headerStyles.userNav}>
            <div className={headerStyles.userNav_iconBox}>
              <img className={headerStyles.userNav_icon} src={bookmark} alt="bookmark icon"/>
              <span className={headerStyles.userNav_notification}>7</span>
            </div>
            <div className={headerStyles.userNav_iconBox}>
              <img className={headerStyles.userNav_icon} src={chat} alt="chat icon"/>
              <span className={headerStyles.userNav_notification}>13</span>
            </div>
            <div className={headerStyles.userNav_user}>
              <Img className={headerStyles.userNav_userPhoto} fluid={data.user.childImageSharp.fluid} alt="profile pic" />
              <span className={headerStyles.userNav_userName}>Kento</span>
            </div>
          </nav>
        </header>
        <div className={indexStyles.content}>
          <nav className={indexStyles.sidebar}>nav</nav>
          <main className={indexStyles.hotelView}>hotel view</main>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default IndexPage
