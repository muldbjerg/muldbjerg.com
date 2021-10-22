import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"



const Blog = () => (
  <Layout>
    <Seo title="Blog" />
    <h1>Blog</h1>
    
  </Layout>
)

export default Blog
