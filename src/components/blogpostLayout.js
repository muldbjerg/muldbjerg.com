import React from "react"
import Layout from "./layout.js"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Helmet } from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";

import BlogpostMeta from "./atoms/blogpostMeta";

import "../css/components/blogpostLayout.css"


const Post = ({ data: { mdx: post } }) => {
    const { title } = post.frontmatter;
    const { body } = post;

    let featuredImage;

    if(post.frontmatter.featuredimage){
        console.log("Hallo");
        featuredImage = getImage(post.frontmatter.featuredimage)
    }

    return (
        <Layout>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <div className="blogpostPage">

              {post.frontmatter.featuredimage &&
                  <div className="col-sm-5 col-sm-offset-1" style={{float: 'right'}} >
                      <div className="blogpostcard-image">
                          <GatsbyImage image={featuredImage} alt="Hey" />
                          {/* <StaticImage src="image/K.png" alt="Hallo" /> */}
                      </div> 
                  </div>
              }         
      
              <div className="col-sm-6">
                <h1>{title}</h1>
                <BlogpostMeta date={post.frontmatter.date} timeToRead={post.timeToRead} />
                {/* <div className="blogpost-meta">
                    <p><DaysFormate date={post.frontmatter.date} /></p>
                    <p className="line"></p>
                    <p>{post.timeToRead} min read</p>
                </div> */}

                <div className="col-sm-10 col-sm-offset-2">
                    <MDXRenderer>{body}</MDXRenderer>
                </div>
              </div>

              
              <div className="clearfix"></div> 

            </div> 
        </Layout>
    );
  };

export default Post;



export const query = graphql`
  query ($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        date
        title
        path
        featuredimage {
          childImageSharp {
            gatsbyImageData(
              width: 1280
              placeholder: DOMINANT_COLOR
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
`;
