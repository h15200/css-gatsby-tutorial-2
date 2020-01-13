import React from 'react'
import { Link } from 'gatsby'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/second">&quot;second&quot; or whatever you call it</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
