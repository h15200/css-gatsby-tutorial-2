import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

import Head from "../components/helmetHead"
import Footer from "../components/footer"

// this connects main.scss to the gatsby app
import indexStyles from "../styles/Modules/index.module.scss"
import headerStyles from "../styles/Modules/header.module.scss"
import sidebarStyles from '../styles/Modules/sidebar.module.scss'

// svg sprite
import searchSvg from '../images/SVG/magnifying-glass.svg'
import bookmark from '../images/SVG/bookmark.svg'
import chat from '../images/SVG/chat.svg'
import home from '../images/SVG/home.svg'
import airplane from '../images/SVG/aircraft-take-off.svg'
import key from '../images/SVG/key.svg'
import map from '../images/SVG/map.svg'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "headerLogo.png" }) {
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
            <Img className={headerStyles.logo} fluid={data.logo.childImageSharp.fluid} alt="logo"/>
          </div>
          <form action="#" className={headerStyles.search}>
            <input type="text" className={headerStyles.search_input} placeholder="Search hotels"/>
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
          <nav className={`${indexStyles.content} ${sidebarStyles.sidebar}`}>
            <ul className={sidebarStyles.nav}>
              <li className={sidebarStyles.nav_item}>
                <a href="#" className={sidebarStyles.nav_link}>
                  <img className={sidebarStyles.nav_icon} src={home} alt="home"/>
                  <span className={sidebarStyles.nav_label}>Hotel</span>
                </a>
              </li>
              <li className={sidebarStyles.nav_item}>
                <a href="#" className={sidebarStyles.nav_link}>
                  <img className={sidebarStyles.nav_icon} src={airplane} alt="airplane"/>
                  <span className={sidebarStyles.nav_label}>Flight</span>
                </a>
              </li>
              <li className={sidebarStyles.nav_item}>
                <a href="#" className={sidebarStyles.nav_link}>
                  <img className={sidebarStyles.nav_icon} src={key} alt="key"/>
                  <span className={sidebarStyles.nav_label}>Car Rental</span>
                </a>
              </li>
              <li className={sidebarStyles.nav_item}>
                <a href="#" className={sidebarStyles.nav_link}>
                  <img className={sidebarStyles.nav_icon} src={map} alt="map"/>
                  <span className={sidebarStyles.nav_label}>Tours</span>
                </a>
              </li>
            </ul>
            <div className={sidebarStyles.legal}>
              &copy; 2017 by trillo. All rights reserved.
            </div>
          </nav>
          <main className={indexStyles.hotelView}>hotel view</main>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default IndexPage
