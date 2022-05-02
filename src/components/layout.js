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
import ShowGrid from "./atoms/showGrid"

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
      <header>
        <h1>Steffen Muldbjerg</h1>
        <h2>Frontend Developer - Luxion</h2>
        <nav>
          <ul>
            <li><Link activeClassName="active" className="header-link-about" to="/">About</Link></li>
            <li><Link activeClassName="active" className="header-link-play" to="/play">Play</Link></li>
            <li><Link activeClassName="active" className="header-link-blog" to="/blog">Blog</Link></li>
          </ul>
        </nav>
      </header>

      <div className="all-content">
        {/* <header className="global-header col-lg-10 col-lg-offset-1">
          {isHomePage() ? (
            <h1 className="main-heading">
              Steffen Muldbjerg <br/>builds <span className="main-heading-underline">digital products</span> <br/>with <span>design</span> and <span>code</span>
            </h1>
          ) : (
            <Link className="header-link-home" to="/">
              Muldbjerg
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
             
              <li>
                <Link className="main-nav-blog" activeClassName="active" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header> */}

        <div className="clearfix"></div>

        <main>{children}</main>

        <div className="clearfix"></div>
      </div>

      {/* <footer className="global-footer col-lg-10 col-lg-offset-1">
        <div className="global-footer-left">
          <p>Steffen Østerby Muldbjerg</p>
          <p className="copyright">© Silkeborg, {new Date().getFullYear()}</p>
        </div>
        <div className="global-footer-center"></div>
        <div className="global-footer-right">
          <p>steffen@muldbjerg.com</p>
          <SocialMediaIcons />
        </div>
        
      </footer> */}

      {/* <div id="overlayGrid" ref={ref}></div> */}
      {/* <ShowGrid /> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
