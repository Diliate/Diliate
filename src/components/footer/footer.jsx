import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import newImage from "../../assets/homeimages/new.png";
import megaphone from "../../assets/homeimages/megaphonefooter.png";
import utilities from "../../assets/homeimages/utilities.png";
import phone from "../../assets/homeimages/phone.png";
import location from "../../assets/homeimages/location.png";
import follows from "../../assets/homeimages/follows.png";
import pages from "../../assets/homeimages/pages.png";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <motion.div className="subscribe-box"
                initial={{opacity:0,y:110}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{duration:0.7,ease:"easeOut"}}>
                <div className="footer-logo">
                    <img src={newImage} loading="lazy" alt="company logo"/>
                </div>
                <div className="footer-megaphone">
                    <img src={megaphone} loading="lazy" alt="megaphone icon"/>
                </div>
                <motion.div className="follows"
                        initial={{opacity:0,y:110}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.7,ease:"easeOut"}}>
                        <div className="section-header">
                            <img src={follows} alt="follows" loading="lazy"/>
                            <h3>Follows</h3>
                        </div>
                        <div className="items-list">
                            <Link to="https://x.com/Diliate_Digital?t=kWvQUOdmLBTTdH2gKq0rKQ&s=09">Twitter</Link>
                            <Link to="https://www.instagram.com/marketingdiliate">Instagram</Link>
                            <Link to="https://www.linkedin.com/in/marketing-diliate-a7146b306/">Linkedin</Link>
                            <Link to="https://in.pinterest.com/diliate38/">Pintrest</Link>

                        </div>
                    </motion.div>

                
            </motion.div>
            <div className="footer-content">
                <motion.div className="contact-info"
                    initial={{opacity:0,y:110}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{duration:0.7,ease:"easeOut"}}>
                   
                    <div className="address">
                        <div className="address-header">
                            <img src={location} alt="location icon" loading="lazy"/>
                            <h3>Location</h3>
                        </div>
                        <p className="office-address"> 
                         Faridabad, Haryana, 121001</p>
                        <p>Location</p>
                    </div>
                </motion.div>
                <div className="features">
                    <motion.div className="pages"
                        initial={{opacity:0,y:110}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.7,ease:"easeOut"}}>
                        <div className="section-header">
                            <img src={pages} alt="pages icon" loading="lazy"/>
                            <h3>Pages</h3>
                        </div>
                        <div className="items-list">
                            <Link to="/">Home</Link>
                            <Link to="/Aboutus">About</Link>
                            <Link to="/Blog">Blog</Link>
                            <Link to="/Services">Services</Link>
                            <Link to="/contactUs">Contact</Link>
                        </div>
                    </motion.div>
                    <motion.div className="utilities"
                        initial={{opacity:0,y:110}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.7,ease:"easeOut"}}>
                    </motion.div>
                 
                </div>
            </div>
        </div>
    );
};

export default Footer;
