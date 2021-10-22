import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

import "../css/pages/about.css"

import PortraitCircle from "../images/portrait_circle.inline.svg"





function About(){
  const [pos, setPos] = useState(0);

  useEffect (()=>{
    document.addEventListener("scroll", e => {
      let scrolled = document.scrollingElement.scrollTop;
      setPos(scrolled);
    })
  },[])
  
  return(
    <Layout>
      <Helmet>
        <body className="about" />
      </Helmet>
      <Seo title="About" />


      <div className="about-top">
        <div className="about-top-text col-sm-6">
          <h1>Hey, I’m Steffen. I make digital products that’s <span>friendly</span> to you by bridging design and code.</h1>
          <p>I’m a product designer and developer from Silkeborg. Together with the team at <Link>bibliotheca</Link>, I make the screens you see at your library. I’m a product designer and developer from Silkeborg. Together with the team at <Link>bibliotheca</Link>, I make the screens you see at your library.</p>
          <p>I’m a product designer and developer from Silkeborg. Together with the team at <Link>bibliotheca</Link>, I make the screens you see at your library. I’m a product designer and developer from Silkeborg. Together with the team at <Link>bibliotheca</Link>, I make the screens you see at your library.</p>
        </div>
        <div className="about-top-image col-sm-5 col-sm-offset-1">
          <PortraitCircle style={{transform: "rotate(" + (pos / 4) + "deg)"}} className="about-top-image-circle col-sm-4" />
          <StaticImage className="col-sm-11" src="../images/portrait.jpg" />
        </div>
      </div>  
      
      <div className="clearfix"></div>
      
    </Layout>
  )
}

export default About
