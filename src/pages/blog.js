import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import BlogPostCard from "../components/blogpostcard"


// console.log(postQuery);
const Blog = ({data}) => (
  

  <Layout>
    <Seo title="Blog" />
    
    {
        data.allMdx.nodes.map((node, index) => (
            <BlogPostCard content={node} index={index} key={node.id} />
        ))
    }

    <div className="clearfix"></div>
    
  </Layout>
)

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date
          title
          featuredimage {
            childImageSharp {
              gatsbyImageData(
                width: 1280
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        slug
        excerpt
        id
        body
        timeToRead
      }
    }
  }
`

// export const postQuery = graphql`
// query {
//   allMdx {
//     nodes {
//       frontmatter {
//         title
//       }
//     }
//   }
// }`;

export default Blog

