import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../css/pages/index.css";
import { Helmet } from "react-helmet"


const IndexPage = () => (
  <Layout>
    <Helmet>
    <body className="index" />
    </Helmet>

    <h1>Building<br/> digital<br/> interfaces<br/> for KeyShot</h1>
    
    
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