import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SocialMediaIcons from "../components/socialmediaicons"

import "../css/pages/index.css";
import { Helmet } from "react-helmet"


const IndexPage = () => (
  <Layout>
    <Helmet>
    <body className="index" />
    </Helmet>
    <Seo title="Home" />
    <div className="index-top col-lg-10 col-lg-offset-1">
      <div className="index-top-location">Based in <a href="">Silkeborg, DK</a></div>
      <div className="index-top-social">
          <p>@muldbjerg</p>
          <p>
            <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3536 4.35355C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464466C17.9763 0.269204 17.6597 0.269204 17.4645 0.464466C17.2692 0.659728 17.2692 0.976311 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53553C17.6597 7.7308 17.9763 7.7308 18.1716 7.53553L21.3536 4.35355ZM0 4.5H21V3.5H0V4.5Z" fill="black"/>
            </svg>
          </p>
          <SocialMediaIcons />
        </div>
    </div>

    <div className="clearfix"></div>

    <div className="index-cases col-lg-10 col-lg-offset-1">
      {/* <img src="/images/landsmoede.png" alt="" /> */}
      <StaticImage src="../images/landsmoede.jpg" alt="" />
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