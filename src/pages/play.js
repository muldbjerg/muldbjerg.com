import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Play = ({ data, location }) => {
   console.log(data);

    return (
        <Layout location={location} title={""}>
            <Seo title="Steffen Ø. Muldbjerg" />
            <h1>Play</h1>
            {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
        </Layout>
    )
}

export default Play