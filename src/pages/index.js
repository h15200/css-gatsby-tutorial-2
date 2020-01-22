import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Head from "../components/helmetHead"

// this connects main.scss to the gatsby app
import indexStyles from "../styles/Modules/index.module.scss"
import headerStyles from "../styles/Modules/header.module.scss"
import sidebarStyles from "../styles/Modules/sidebar.module.scss"
import hotelViewStyles from "../styles/Modules/hotelView.module.scss"
import componentStyles from "../styles/Modules/components.module.scss"

// svg sprite
import Mag from "../images/SVG/magnifying-glass.svg"
import Bookmark from "../images/SVG/bookmark.svg"
import Chat from "../images/SVG/chat.svg"
import Home from "../images/SVG/home.svg"
import Airplane from "../images/SVG/aircraft-take-off.svg"
import Key from "../images/SVG/key.svg"
import Maps from "../images/SVG/map.svg"
import Stars from "../images/SVG/star.svg"
import Location from "../images/SVG/location-pin.svg"
import Arrow from "../images/SVG/chevron-thin-right.svg"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "headerLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      user: file(relativePath: { eq: "user.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hotelOne: file(relativePath: { eq: "hotel-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hotelTwo: file(relativePath: { eq: "hotel-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hotelThree: file(relativePath: { eq: "hotel-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      userTwo: file(relativePath: { eq: "user-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      userThree: file(relativePath: { eq: "user-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      userFour: file(relativePath: { eq: "user-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      userFive: file(relativePath: { eq: "user-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
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
            <Img
              className={headerStyles.logo}
              fluid={data.logo.childImageSharp.fluid}
              alt="logo"
            />
          </div>
          <form action="#" className={headerStyles.search}>
            <input
              type="text"
              className={headerStyles.search_input}
              placeholder="Search hotels"
            />
            <button className={headerStyles.search_button}>
              <Mag
                className={headerStyles.search_icon}
                alt="magnifying glass icon"
              />
            </button>
          </form>
          <nav className={headerStyles.userNav}>
            <div className={headerStyles.userNav_iconBox}>
              <Bookmark
                className={headerStyles.userNav_icon}
                alt="bookmark icon"
              />
              <span className={headerStyles.userNav_notification}>7</span>
            </div>
            <div className={headerStyles.userNav_iconBox}>
              <Chat className={headerStyles.userNav_icon} alt="chat icon" />
              <span className={headerStyles.userNav_notification}>13</span>
            </div>
            <div className={headerStyles.userNav_user}>
              <Img
                className={headerStyles.userNav_userPhoto}
                fluid={data.user.childImageSharp.fluid}
                alt="profile pic"
              />
              <span className={headerStyles.userNav_userName}>Kento</span>
            </div>
          </nav>
        </header>

        <div className={indexStyles.content}>
          <nav className={`${indexStyles.sidebar} ${sidebarStyles.sidebar}`}>
            <ul className={sidebarStyles.nav}>
              <li
                className={`${sidebarStyles.nav_item} ${sidebarStyles.nav_item_active}`}
              >
                <a href="#" className={sidebarStyles.nav_link}>
                  <Home className={sidebarStyles.nav_icon} alt="home" />
                  <span className={sidebarStyles.nav_label}>Hotel</span>
                </a>
              </li>
              <li className={sidebarStyles.nav_item}>
                <a href="#" className={sidebarStyles.nav_link}>
                  <Airplane className={sidebarStyles.nav_icon} alt="airplane" />
                  <span className={sidebarStyles.nav_label}>Flight</span>
                </a>
              </li>
              <li className={sidebarStyles.nav_item}>
                <a href="#" className={sidebarStyles.nav_link}>
                  <Key className={sidebarStyles.nav_icon} alt="key" />
                  <span className={sidebarStyles.nav_label}>Car Rental</span>
                </a>
              </li>
              <li className={sidebarStyles.nav_item}>
                <a href="#" className={sidebarStyles.nav_link}>
                  <Maps className={sidebarStyles.nav_icon} alt="map" />
                  <span className={sidebarStyles.nav_label}>Tours</span>
                </a>
              </li>
            </ul>
            <div className={sidebarStyles.legal}>
              &copy; 2017 by trillo. All rights reserved.
            </div>
          </nav>

          <main
            className={`${indexStyles.hotelView} ${hotelViewStyles.hotelView}`}
          >
            <div className={hotelViewStyles.gallery}>
              <figure className={hotelViewStyles.gallery_item}>
                <div className={hotelViewStyles.gallery_photoContainer}>
                  <Img
                    className={hotelViewStyles.gallery_photo}
                    fluid={data.hotelOne.childImageSharp.fluid}
                    alt="hotel bed"
                  />
                </div>
              </figure>
              <figure className={hotelViewStyles.gallery_item}>
                <div className={hotelViewStyles.gallery_photoContainer}>
                  <Img
                    className={hotelViewStyles.gallery_photo}
                    fluid={data.hotelTwo.childImageSharp.fluid}
                    alt="hotel exterior with palm trees"
                  />
                </div>
              </figure>
              <figure className={hotelViewStyles.gallery_item}>
                <div className={hotelViewStyles.gallery_photoContainer}>
                  <Img
                    className={hotelViewStyles.gallery_photo}
                    fluid={data.hotelThree.childImageSharp.fluid}
                    alt="hotel hallway"
                  />
                </div>
              </figure>
            </div>

            <div className={hotelViewStyles.overview}>
              <h1 className={hotelViewStyles.overview_heading}>
                Hotel Las Palmas
              </h1>
              <div className={hotelViewStyles.overview_stars}>
                <Stars
                  className={hotelViewStyles.overview_starSVG}
                  alt="star"
                />
                <Stars
                  className={hotelViewStyles.overview_starSVG}
                  alt="star"
                />
                <Stars
                  className={hotelViewStyles.overview_starSVG}
                  alt="star"
                />
                <Stars
                  className={hotelViewStyles.overview_starSVG}
                  alt="star"
                />
                <Stars
                  className={hotelViewStyles.overview_starSVG}
                  alt="star"
                />
              </div>
              <div className={hotelViewStyles.overview_location}>
                <Location
                  className={hotelViewStyles.overview_locationSVG}
                  alt="location pin"
                />
                <button className={componentStyles.btn_inline}>
                  Albufeira, Portugal
                </button>
              </div>
              <div className={hotelViewStyles.overview_rating}>
                <div className={hotelViewStyles.overview_ratingAverage}>
                  8.6
                </div>
                <div className={hotelViewStyles.overview_ratingCount}>
                  429 Votes
                </div>
              </div>
            </div>

            <div className={`${hotelViewStyles.detail} ${indexStyles.detail}`}>
              <div
                className={`${hotelViewStyles.description} ${indexStyles.description}`}
              >
                <p className={hotelViewStyles.paragraph}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  laboriosam deserunt cum vero, unde molestiae!
                </p>
                <p className={hotelViewStyles.paragraph}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  reiciendis alias doloribus possimus! Alias, numquam!
                </p>
                <ul className={hotelViewStyles.list}>
                  <li className={hotelViewStyles.list_item}>
                    <Arrow className={hotelViewStyles.iconArrow} />
                    Close to the beach
                  </li>
                  <li className={hotelViewStyles.list_item}>
                    <Arrow className={hotelViewStyles.iconArrow} />
                    Breakfast included
                  </li>
                  <li className={hotelViewStyles.list_item}>
                    <Arrow className={hotelViewStyles.iconArrow} />
                    Free airport shuttle
                  </li>
                  <li className={hotelViewStyles.list_item}>
                    <Arrow className={hotelViewStyles.iconArrow} />
                    Free wifi
                  </li>
                  <li className={hotelViewStyles.list_item}>
                    <Arrow className={hotelViewStyles.iconArrow} />
                    Air conditioning and heating
                  </li>
                  <li className={hotelViewStyles.list_item}>
                    <Arrow className={hotelViewStyles.iconArrow} />
                    Pets allowed
                  </li>
                  <li className={hotelViewStyles.list_item}>
                    <Arrow className={hotelViewStyles.iconArrow} />
                    We speak all languages
                  </li>
                  <li className={hotelViewStyles.list_item}>
                    <Arrow className={hotelViewStyles.iconArrow} />
                    Perfect for families
                  </li>
                </ul>
                <div className={hotelViewStyles.recommend}>
                  <p className={hotelViewStyles.recommend_count}>
                    Lucy and 3 other friends recommend this hotel.
                  </p>
                  <div className={hotelViewStyles.recommend_friends}>
                    <Img
                      className={hotelViewStyles.recommend_photo}
                      fluid={data.userTwo.childImageSharp.fluid}
                    />
                    <Img
                      className={hotelViewStyles.recommend_photo}
                      fluid={data.userThree.childImageSharp.fluid}
                    />
                    <Img
                      className={hotelViewStyles.recommend_photo}
                      fluid={data.userFour.childImageSharp.fluid}
                    />
                    <Img
                      className={hotelViewStyles.recommend_photo}
                      fluid={data.userFive.childImageSharp.fluid}
                    />
                  </div>
                </div>
              </div>

              <div
                className={`${hotelViewStyles.userReview} ${indexStyles.userReview}`}
              >
                <figure className={hotelViewStyles.review}>
                  <blockquote className={hotelViewStyles.review_text}>
                    Ruf ruf ruf.. ruf ruf? ruf ruf ruf awuu! Ruf. Awuuu, ruf ruf
                    aruuuu
                  </blockquote>
                  <figcaption className={hotelViewStyles.review_user}>
                    <Img
                      className={hotelViewStyles.review_user_photo}
                      fluid={data.userThree.childImageSharp.fluid}
                    />
                    <div className={hotelViewStyles.review_user_box}>
                      <p className={hotelViewStyles.review_user_box_name}>
                        Kai
                      </p>
                      <p className={hotelViewStyles.review_user_box_date}>
                        1/2/2020
                      </p>
                    </div>
                    <div className={hotelViewStyles.review_user_rating}>
                      8.4
                    </div>
                  </figcaption>
                </figure>
                <figure className={hotelViewStyles.review}>
                  <blockquote className={hotelViewStyles.review_text}>
                    Gaga goooooo aaaaaaaaa yaaaaaaaa wwwWWaaa aaaaaaa aaaaaa
                    aaaaa!
                  </blockquote>
                  <figcaption className={hotelViewStyles.review_user}>
                    <Img
                      className={hotelViewStyles.review_user_photo}
                      fluid={data.userFour.childImageSharp.fluid}
                    />
                    <div className={hotelViewStyles.review_user_box}>
                      <p className={hotelViewStyles.review_user_box_name}>
                        Oliver
                      </p>
                      <p className={hotelViewStyles.review_user_box_date}>
                        1/15/2020
                      </p>
                    </div>
                    <div className={hotelViewStyles.review_user_rating}>
                      9.1
                    </div>
                  </figcaption>
                </figure>
                <button
                  className={`${componentStyles.btn_inline} ${hotelViewStyles.btnReview}`}
                >
                  Show All{" "}
                  <span className={componentStyles.btn_inline_span}>
                    &rarr;
                  </span>
                </button>
              </div>
            </div>

            <div className={hotelViewStyles.cta}>
              {" "}
              <h2 className={hotelViewStyles.cta_bookNow}>
                Good news! We have 4 rooms available for your selected dates!
              </h2>
              <button className={hotelViewStyles.btnCta}>
                <span className={hotelViewStyles.btnCta_visible}>Book now</span>
                <span className={hotelViewStyles.btnCta_invisible}>
                  Only 4 rooms left
                </span>
              </button>
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  )
}

export default IndexPage
