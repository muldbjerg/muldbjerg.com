import * as React from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import BlogpostMeta from "./atoms/blogpostMeta"

import "../css/components/blogpostCard.css"


export default class BlogPostCard extends React.Component {

    render() {
        const { frontmatter, id, timeToRead, slug } = this.props.content;
        let featuredImage;

        if(frontmatter.featuredimage){
            featuredImage = getImage(frontmatter.featuredimage)
        }

        return <article className={`${this.props.index === 0 ? 'toppost' : 'col-sm-4 col-sm-offset-1'} blogpostcard`}>
            {/* ${this.props.index % 2 === 0 && this.props.index != 0 ? 'col-sm-offset-2' : ''} */}
            <Link to={this.props.content.frontmatter.path}>
                {frontmatter.featuredimage &&
                    <div className="blogpostcard-image">
                        <GatsbyImage image={featuredImage} alt="Hey" />
                    </div> 
                }
                <div className="blogpostcard-content">
                    <BlogpostMeta date={frontmatter.date} timeToRead={timeToRead} />
                    <h2>{this.props.content.frontmatter.title}</h2>
                    <p className="excerpt">
                        {this.props.content.excerpt}
                    </p>
                </div>

                <div className="clearfix"></div>
            </Link>
            {/* <MDXRenderer title="My Stuff!">{body}</MDXRenderer> */}
            <div className="clearfix"></div>
        </article>
    }
}

