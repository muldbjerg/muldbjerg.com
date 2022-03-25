import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../css/pages/index.css";
import portrait from "../images/portrait.webp";
import heroshot from "../images/heroshot.webp";
import { Helmet } from "react-helmet"


const IndexPage = () => (
  <Layout>
    <Helmet>
    <body className="index" />
    </Helmet>

    <header>
      <h1>Building<br/> digital<br/> interfaces<br/> for KeyShot</h1>
      <div className="details">
        <div className="details__image">
          <img src={portrait} alt="" />
          <div className="clearfix"></div>
        </div>
        <div className="details__info">
          <h2>Steffen Muldbjerg</h2>
          <p>Frontend developer  |  Luxion</p>
        </div>
      </div>
    </header>

    <nav className="mainNav">
      <ul>
        <li><a href="">Work</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Blog</a></li>
      </ul>
    </nav>

    <div className="heroShot">
      <img src={heroshot} alt="" />
    </div>

    
    
    
  </Layout>
)

export default IndexPage

export const postQuery = graphql`
query {
  allMdx {
    nodes {
      frontmatter {
        title
        path
        date
      }
    }
  }
}`;