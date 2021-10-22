/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import SocialMediaIcons from "./socialmediaicons"

import "../css/components/layout.css"



const Layout = ({ children }) => {
  
  let isHomePage = () => {
    if(window.location.pathname === "/"){
      return true;
    }
    else{
      return false;
    }
  }

  return (
    
    <div className="global-wrapper" data-is-root-path={isHomePage()}>
      <div className="all-content">
        <header className="global-header">
          {isHomePage() ? (
            <h1 className="main-heading">
              Steffen Muldbjerg <br/>builds <span className="main-heading-underline">digital products</span> <br/>with <span>design</span> and <span>code</span>
            </h1>
          ) : (
            <Link className="header-link-home" to="/">
              Steffen Muldbjerg
            </Link>
          )}

          <nav className="main-nav">
            <ul>
              <li>
                <Link className="main-nav-home" activeClassName="active" to="/">
                  Work
                </Link>
              </li>
              <li>
                <Link className="main-nav-about" activeClassName="active" to="/about">
                  About
                </Link>
              </li>
              {/* <li>
                <Link className="main-nav-play" activeClassName="active" to="/play">
                  Play
                </Link>
              </li> */}
              <li>
                <Link className="main-nav-blog" activeClassName="active" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>
      </div>

      <footer className="global-footer">
        <div className="global-footer-left">
          <p>Steffen Østerby Muldbjerg</p>
          <p className="copyright">© Silkeborg, {new Date().getFullYear()}</p>
        </div>
        <div className="global-footer-center"></div>
        <div className="global-footer-right">
          <p>steffen@muldbjerg.com</p>
          <SocialMediaIcons />
        </div>
        
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
