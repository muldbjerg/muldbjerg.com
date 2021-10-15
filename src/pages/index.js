import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../css/pages/index.css"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Steffen Ø. Muldbjerg" />
      <div className="hero-spot">
        <h1>I build digital products<br/> with design and code</h1>
        <p>I work as a Product Designer and Frontend Developer at <a href="https://bibliotheca.com" target="_blank" rel="noopener">bibliotheca</a>.</p>
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
