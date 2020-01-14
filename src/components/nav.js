import React from "react"
import { Link } from "gatsby"

import navStyles from "../styles/Modules/nav.module.scss"

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link to="/" activeClassName={navStyles.activeLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/second" activeClassName={navStyles.activeLink}>
            &quot;second&quot; or whatever you call it
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
