import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

import layoutStyles from '../styles/Modules/layout.module.scss'

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.main}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
