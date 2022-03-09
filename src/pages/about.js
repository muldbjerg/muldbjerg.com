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


      <div className="about-top ">
        <div className="about-top-text col-sm-6 col-lg-7">
          <h1>Hey, I’m Steffen. A product designer and developer building digital products.</h1>
          <div className="about-top-text-indented">
            <p>I currently make the screens you can see at your library, with the team at bibliotheca. For the last 10+ years, I’ve combined design, user research, and code to create friendly and impactful experiences. Helping LEGO, Volkswagen, Coop, AROS, Knuthenborg Safaripark, and many more.</p>
            <p>I believe that creativity happens across disciplines. So, I combined my education as a Multimedia Designer with a Master's in IT Product Development. I now use it to translate complex technology into simple and useful products.</p>
            <p>Growing up being a boy scout, I want to leave the world a little better for whoever follows. I now live with my wife and daughter in Silkeborg, DK.</p>
            <p>I enjoy pulling steamy espresso shots, and often I bring my camera. My photos (somehow) have ended up at AROS, FDB Furniture, and the Mayor of Aarhus.</p> 
          </div>       
        </div>
        <div className="about-top-image col-sm-5 col-sm-offset-1 col-lg-4">
          <PortraitCircle style={{transform: "rotate(" + (pos / 4) + "deg)"}} className="about-top-image-circle col-sm-5" />
          <StaticImage className="col-sm-9" src="../images/portrait.jpeg" alt="Steffen Østerby Muldbjerg smiling to the camera" />
          {/* <a href="">Want the extend story?</a> */}
        </div>
      </div>  
      
      <div className="clearfix"></div>
      
    </Layout>
  )
}

export default About
