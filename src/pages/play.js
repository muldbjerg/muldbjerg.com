import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

import "../css/pages/play.css"




function Play(){
 
  return(
    <Layout>
      <Helmet>
        <body className="play" />
      </Helmet>
      <Seo title="About" />

      <div className="clearfix"></div>
      
    </Layout>
  )
}

export default Play
