import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./services-container.css"
import mobilephone from "../../assets/services-images/mobilephone.png"
import Startup from "../../assets/services-images/Startup.png"
import Megaphone from "../../assets/services-images/Megaphone.png"
import marketing from "../../assets/services-images/Marketing Plan.png"
import funnel from "../../assets/services-images/funnel.png"
import board from "../../assets/services-images/board.png"
import settings from "../../assets/services-images/settings.png"
import ServicesGrid from "../../components/services-component/services-grid"
import papa from '../../assets/services-images/papa.jpg';
import e4 from '../../assets/services-images/e4.jpg';
import b2 from '../../assets/services-images/b2.jpg';
import burger from '../../assets/services-images/burger.jpg';
import e1 from '../../assets/services-images/e1.jpg';
import b3 from '../../assets/services-images/b3.jpg';



// The ServicesContainer component is a functional component.
// It returns a JSX structure that represents a part of the webpage.
const ServicesContainer = ()=>{
    return (

        
        <div className="home-services">
            <div className="wrapper">
                
                <ServicesHeading titletext="High-impact digital services to take your business to the next level" spantext="SERVICES"
                 buttontext="Our Services" light={true}/>
                <div className="services-content">
                <ServicesGrid 
    image={e4} 
    sub='Social Media Marketing' 
    text={
      <>
        Boost online presence
        <span style={{display: 'block'}}>Engage with target audience</span>
        <span style={{display: 'block'}}>Increase website visits</span>
      </>
    }/>
<ServicesGrid 
    image={b2} 
    sub='Paid Advertising' 
    text={
      <>
        Focus on interested buyers
        <span style={{display: 'block'}}>Maximize ad ROI</span>
        <span style={{display: 'block'}}>Expand customer base</span>
      </>
    }/>
<ServicesGrid 
    image={b3} 
    sub='Advanced Analytics' 
    text={
      <>
        Insights for better decisions
        <span style={{display: 'block'}}>Spot growth opportunities</span>
        <span style={{display: 'block'}}>Tailor strategies to customer needs</span>
      </>
    }/>
<ServicesGrid 
    image={burger} 
    sub='SEO Optimization' 
    text={
      <>
        Higher search rankings
        <span style={{display: 'block'}}>Organic traffic boost</span>
        <span style={{display: 'block'}}>Strengthen brand reputation</span>
      </>
    }/>
<ServicesGrid 
    image={e1} 
    sub='Content Marketing' 
    text={
      <>
        Informative & engaging content
        <span style={{display: 'block'}}>Grow audience loyalty</span>
        <span style={{display: 'block'}}>Convert visitors into customers</span>
      </>
    }/>
<ServicesGrid 
    image={papa} 
    sub='Website Development' 
    text={
      <>
        Customized online solutions
        <span style={{display: 'block'}}>Seamless e-commerce integration</span>
        <span style={{display: 'block'}}>User-friendly design for better engagement</span>
      </>
    }/>
                </div>
            </div>
        </div>
    )

}

export const ServicesHeading=({titletext, image,buttontext,spantext,light})=>{
    
    return (

    <motion.div className="services-heading" 
                    initial={{opacity:0,x:"-20%"}} 
                    whileInView={{opacity:1,x:0}}
                    viewport={{once:true}}
                    transition={{duration:0.7,ease:"easeOut"}}>
                    <div className="services-title">
                        <div className="info-div">
                            <img src={image} loading='lazy'/>
                            <div className="title">
                                <p className="title-sub" style={light ?{color:"#d0d0d0"}:{color:"#292930"}}> <span style={light ?{color:"#ffdc60"}:{color:"#5956e8"}}></span> {spantext}</p>
                                <h2 className="title-text" style={light ?{color:"#fff"}:{color:"#292930"}}>{titletext}</h2>
                            </div>
                        </div>
                        <Link to="#" className={`services-button ${light? "light" : "dark"}`}> 
                            <div>{buttontext}</div>
                        </Link>           
                    </div>
                </motion.div>)
}

export default ServicesContainer