import React from "react"

import "../stylesheets/header.css"
import logo from "../images/ontario-logo.png"
import printLogo from "../images/ontario@2x-print.png"

const Header = ({ lang }) => (
  <header className="ontario-main-header">
    <div className="ontario-row">
      <div className="ontario-small-5 ontario-columns">
        <a href="https://www.ontario.ca" className="ontario-main-header__logo-link">
          <img className="ontario-header-logo ontario-hide-for-print" src={logo} alt="Government of Ontario homepage" />
        </a>
        <img className="ontario-site-logo-print ontario-show-for-print" src={printLogo} alt="Government of Ontario logo" />
      </div>
      <div className="ontario-small-7 ontario-columns ontario-text-right ontario-main-header__link">
        <a href={lang === "fr" ? "/self-assessment" : "/autoevaluation"} className="ontario-hide-for-small-only">
          {lang === "fr" ? "english" : "français"}
        </a>
        <a href={lang === "fr" ? "/self-assessment" : "/autoevaluation"} className="ontario-show-for-small-only">
          {lang === "fr" ? "EN" : "FR"}
        </a>
      </div>
    </div>
  </header>
)

export default Header
