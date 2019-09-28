import PropTypes from "prop-types"
import React from "react"
import headerCss from "./header.module.css"

import { Link } from "gatsby"

const MenuItem = props => (
  <li><Link to={props.to}>{props.children}</Link></li>
)

const Menu = (props) => (
  <section id={headerCss.sideMenu}>
    <ul>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/contact">Contact</MenuItem>
      </ul>
  </section>
)

const MenuIcon = () => (
  <div className={headerCss.menuContainer}>
    <div className={headerCss.bar1}></div>
    <div className={headerCss.bar2}></div>
    <div className={headerCss.bar3}></div>
  </div>
)

const Logo = () => (
  <span className={headerCss.thinText}>michal<strong>notes</strong>.com</span>
)

const Header = ({ siteTitle }) => (
  <>
  <header className={headerCss.topNavigation}>
        <MenuIcon />
        <Menu />
        <Logo />
  </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
