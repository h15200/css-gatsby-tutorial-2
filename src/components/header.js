import React from "react"

import headerStyles from "../styles/Modules/header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={` ${headerStyles.u_center} `}>
        <h1 className={`${headerStyles.headingPrimary} ${headerStyles.u_margin_bottom_big}`}>header is Here</h1>
      </div>
    </header>
  )
}

export default Header
