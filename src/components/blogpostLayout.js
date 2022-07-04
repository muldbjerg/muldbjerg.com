import React from "react"
import Layout from "./layout.js"
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Helmet } from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";

import BlogpostMeta from "./atoms/blogpostMeta";
import Signature from "../images/signature.inline.svg";

import "../css/components/blogpostLayout.css"



const Post = ({ data: { mdx: post } }) => {
    const { title } = post.frontmatter;
    const { body } = post;

    let featuredImage;

    if(post.frontmatter.featuredimage){
        featuredImage = getImage(post.frontmatter.featuredimage)
    }

    return (
        <Layout>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <div className="blogpost-page">

              {post.frontmatter.featuredimage &&
                  <div className="col-md-5 col-md-offset-1 col-sm-3 col-sm-offset-1" style={{float: 'right'}} >
                      <div className="blogpostcard-image">
                          <GatsbyImage image={featuredImage} alt={"Featured image for the blog post: " + {title}} />
                      </div> 
                  </div>
              }         
      
              <div className="col-sm-8 col-lg-5">
                <h1>{title}</h1>
                <BlogpostMeta date={post.frontmatter.date} timeToRead={post.timeToRead} />

                {/* <div className="col-md-10 col-md-offset-2 col-sm-12 content"> */}
                <div className="col-sm-12 content">
                    <MDXRenderer>{body}</MDXRenderer>
                </div>
              </div>

              <div className="col-xs-12 col-lg-12 blogpost-footer">
                {/* <div className="col-md-6 col-sm-10 col-md-offset-1"> */}
                <div className="col-md-6 col-sm-10">
                  <div className="profile-visuals">
                    <StaticImage className="profile-image" src="../images/portrait.jpeg" alt="Steffen" />
                    <div className="profile-signature">
                      <Signature />
                    </div>
                  </div>
                  <div className="col-sm-7 profile-description">
                    I design and coding digitals product at bibliotheca. From Aarhus. Here you can read about product design and frontend development. 
                  </div>
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
