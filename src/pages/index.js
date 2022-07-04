import * as React from "react"
import { useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../css/pages/index.css";
import portrait from "../images/portrait.webp";
import heroshot from "../images/heroshot.webp";
import ModelClay from "../images/3d-model-clay.png";
import Model from "../images/3d-model.webp";
import { Helmet } from "react-helmet";


const IndexPage = () => {
  var lastX;
  var lastY;
  
  // Moves the model following the cursor
  useEffect(() => {
    const handleHover = (evt) => {
      var customOffsetX = 50,
          customOffsetY = 40,
          x = (evt.pageX - window.innerWidth) / 20 + customOffsetX,
          y = (evt.pageY - window.innerHeight) / 20 + customOffsetY;

      document.getElementsByClassName("model--rendered")['0'].style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      document.getElementsByClassName("model--clay")['0'].style.transform = "translateX(" + x + "px) translateY(" + y + "px)";

    };
    var eventListner = document.getElementById("index--title").addEventListener('mousemove', handleHover, { passive: true });
    return () => {
      // clean up the event handler when the component unmounts
      // eventListner.removeEventListener('mousemove', handleHover);
    };
  });


  // Reset the model's on mouse leave
  useEffect(() => {
    const handleLeave = (evt) => {     
      document.getElementsByClassName("model--rendered")['0'].style.transform = "translateX(0px) translateY(0px)";
      document.getElementsByClassName("model--clay")['0'].style.transform = "translateX(0px) translateY(0px)";
    };
    document.getElementById("index--title").addEventListener('mouseleave', handleLeave, { passive: true });
    return () => {
      // clean up the event handler when the component unmounts
      // document.getElementById("index--title").removeEventListener('mouseleave', handleLeave);
    };
  });

  return( <Layout>
    <Helmet>
    <body className="index" />
    </Helmet>


    <h2 id="index--title" className="index--title">
      Friendly interfaces
      <div>
        <div className="model">
          <div className="model--buttons">
            <p></p><p></p><p></p>
          </div>
          <img src={ModelClay} className="model--clay" alt="" style={{transform: 'translateX(0px) translateY(0px)'}} />
          <img src={Model} className="model--rendered" alt="" style={{transform: 'translateX(0px) translateY(0px)'}} />
          <div style={{clear:"both", width:100 + '%'}}></div>
        </div>
        for KeyShot
      </div>
    </h2>

    <div className="info">
      <div className="info--area">
        <p className="info--city">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.9142 9.40893C10.2394 9.08378 10.9157 8.63782 11.8206 8.14918C12.7072 7.67039 13.758 7.1796 14.7835 6.75607C15.8112 6.33164 16.7971 5.98156 17.5551 5.77851C17.9049 5.68483 18.1871 5.62767 18.3937 5.605C18.371 5.81157 18.3139 6.09384 18.2202 6.44358C18.0171 7.20163 17.6671 8.18751 17.2426 9.2152C16.8191 10.2407 16.3283 11.2915 15.8495 12.1781C15.3609 13.083 14.9149 13.7593 14.5898 14.0845C13.2427 15.4316 11.1137 15.4442 9.83409 14.1646C8.55452 12.885 8.56712 10.756 9.9142 9.40893ZM18.6459 5.59949C18.6457 5.59958 18.6434 5.5992 18.6392 5.5981C18.6439 5.59885 18.646 5.5994 18.6459 5.59949ZM18.4006 5.35947C18.3995 5.3553 18.3991 5.35297 18.3992 5.35284C18.3993 5.35271 18.3998 5.3548 18.4006 5.35947Z" stroke="#49653F" strokeWidth="1.22449"/>
              <path d="M14.0858 14.591C13.7606 14.9162 13.0843 15.3621 12.1794 15.8508C11.2928 16.3296 10.242 16.8204 9.21651 17.2439C8.18882 17.6683 7.20294 18.0184 6.44488 18.2215C6.09515 18.3151 5.81288 18.3723 5.60631 18.395C5.62898 18.1884 5.68614 17.9061 5.77982 17.5564C5.98287 16.7983 6.33295 15.8125 6.75738 14.7848C7.18091 13.7592 7.6717 12.7085 8.15049 11.8218C8.63913 10.917 9.08509 10.2406 9.41024 9.91548C10.7573 8.5684 12.8863 8.5558 14.1659 9.83537C15.4455 11.1149 15.4329 13.244 14.0858 14.591ZM5.35415 18.4005C5.35426 18.4004 5.35659 18.4008 5.36078 18.4019C5.35613 18.4011 5.35404 18.4006 5.35415 18.4005ZM5.5994 18.6405C5.6005 18.6447 5.60088 18.647 5.6008 18.6471C5.60071 18.6473 5.60016 18.6452 5.5994 18.6405Z" stroke="#49653F" strokeWidth="1.22449"/>
              <circle cx="12" cy="12" r="1.46939" transform="rotate(-165 12 12)" fill="#49653F"/>
              <circle cx="12" cy="12" r="11.3878" transform="rotate(-180 12 12)" stroke="#49653F" strokeWidth="1.22449"/>
              <path d="M5.77778 18.2222L12 16L9.55556 14L8.44444 11.5556L5.77778 18.2222Z" fill="#49653F" stroke="#49653F" strokeWidth="0.444444"/>
          </svg>
          <span>Silkeborg</span>
        </p>
        <p className="info--mail"><a href="mailto:hallo@muldbjerg.com">hallo@muldbjerg.com</a></p>
      </div>
    </div>

    <div className="col-sm-6">
      <p>Hey - I'm Steffen. For the last 10 years I have developed friendly digital interfaces.</p>
      <p>My work blends between frontend code and design. I’m currently with the team at Luxion building KeyShot.</p>
      <p>I have a master’s in IT Product Development, and is interested every corner of good user experiences.</p>
      <p>I have helped companies like LEGO, Coop, AROS, Knuthenborg Safaripark and more, be a little more friendly.</p>
    </div>

    <div className="portrait--area col-sm-6">
      <img id="portrait" src={portrait} />
     
      {/* <svg width="762" height="944" viewBox="0 0 762 944" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
      <svg width="100%" viewBox="0 0 762 944">
        {/* <defs> */}
          <clipPath id="imageMask" clipPathUnits="objectBoundingBox">
              <path fillRule="evenodd" clipRule="evenodd" d="M761.958 164.25L686.875 89.1671C568.042 -29.6664 375.374 -29.6664 256.541 89.1672L89.1251 256.583C-29.7084 375.416 -29.7084 568.084 89.1252 686.917L256.541 854.333C375.374 973.166 568.042 973.166 686.875 854.333L761.958 779.25V164.25Z" fill="#C4C4C4"/>
          </clipPath>
        {/* </defs> */}
      </svg>

    </div>

    <div style={{height: 20000 + 'px'}}></div>

    
    
    
  </Layout>);
}

export default IndexPage 

export const postQuery = graphql`
query {
  allMdx {
    nodes {
      frontmatter {
        title
        path
        date
      }
    }
  }
}`;