import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {

    return (
        <Layout location={location} title={""}>
            <Seo title="Steffen Ø. Muldbjerg" />
            <h1>About</h1>
            {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
        </Layout>
    )
}

export default About