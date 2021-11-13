import * as React from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import DaysFormate from "./atoms/daysFormate"

import "../css/components/blogpostcard.css"


export default class BlogPostCard extends React.Component {

    render() {
        const { frontmatter, id, timeToRead, slug } = this.props.content;
        let featuredImage;

        if(frontmatter.featuredimage){
            featuredImage = getImage(frontmatter.featuredimage)
        }

        return <article className={`${this.props.index === 0 ? 'toppost' : 'col-sm-5'} ${this.props.index % 2 === 0 && this.props.index != 0 ? 'col-sm-offset-1' : '' } blogpostcard`}>
            <Link to={"/blog/" + slug}>
                {frontmatter.featuredimage &&
                    <div className="blogpostcard-image">
                        <GatsbyImage image={featuredImage} alt="Hey" />
                    </div> 
                }
                <div className="blogpostcard-content">
                    <div className="blogpost-meta">
                        <p><DaysFormate date={frontmatter.date} /></p>
                        {/* <p>{this.props.content.frontmatter.date}</p> */}
                        <p className="line"></p>
                        <p>{timeToRead} min read</p>
                    </div>
                    <h2>{this.props.content.frontmatter.title}</h2>
                    <p className="excerpt">
                        {this.props.content.excerpt}
                    </p>
                </div>

                <div className="clearfix"></div>
            </Link>
            {/* <MDXRenderer title="My Stuff!">{body}</MDXRenderer> */}
        </article>
    }
}