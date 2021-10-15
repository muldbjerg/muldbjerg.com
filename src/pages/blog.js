import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import parse from "html-react-parser"


const Blog = ({ data, location }) => {
    
    const posts = data.WordPressAllPost.nodes

    return (
        <Layout location={location} title={""}>
            <Seo title="Steffen Ø. Muldbjerg" />
            <h1>Blog</h1>
            {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}

            {/* {posts.map(post => {
                const title = post.title

                return (
                    <li key={post.uri}>
                    <article
                        className="post-list-item"
                        itemScope
                        itemType="http://schema.org/Article"
                    >
                        <header>
                        <h2>
                            <Link to={post.uri} itemProp="url">
                            <span itemProp="headline">{parse(title)}</span>
                            </Link>
                        </h2>
                        <small>{post.date}</small>
                        </header>
                        <section itemProp="description">{parse(post.excerpt)}</section>
                    </article>
                    </li>
                )
            })} */}
        </Layout>
    )
}

export default Blog


// export const pageQuery = graphql`
//   query WordPressAllPost {
//       nodes {
//         excerpt
//         uri
//         date(formatString: "MMMM DD, YYYY")
//         title
//         excerpt
//       }
//   }
// `