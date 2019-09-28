import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 2em`,
          width: `960px`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
        <footer>
          <span class="thin-text">michal<strong>notes</strong>.com &copy; 2019. Powered by </span>
          <span class="social-icons">
              <a href="https://github.com/b073r" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>&nbsp;
              <i class="fab fa-twitter"></i>&nbsp;
              <a href="https://www.linkedin.com/in/b073r/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
          </span>
        </footer>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
