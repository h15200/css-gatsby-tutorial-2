import React from "react"

import footerStyles from "../styles/Modules/footer.module.scss"

const Footer = () => {
  return (
    <footer className={`${footerStyles.footer}`}>
      <div className={footerStyles.u_center}>
        <p>Footer is maybe here</p>
      </div>
    </footer>
  )
}

export default Footer
