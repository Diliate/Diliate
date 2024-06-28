import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./services-container.css";

import ServicesGrid from "./services-grid";
import papa from '../../assets/services-images/papa.jpg';
import e4 from '../../assets/services-images/e4.jpg';
import b2 from '../../assets/services-images/b2.jpg';
import burger from '../../assets/services-images/burger.jpg';
import e1 from '../../assets/services-images/e1.jpg';
import b3 from '../../assets/services-images/b3.jpg';

const serviceData = [
  {
    title: 'Social Media Marketing',
    description: 'We help you reach a larger audience through various social media platforms.',
    image: e4,
    slug: 'social-media-marketing',
  },
  {
    title: 'Paid Advertising',
    description: 'Increase your ROI with our targeted paid advertising strategies.',
    image: b2,
    slug: 'paid-advertising',
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain deep insights into your business performance with our analytics services.',
    image: b3,
    slug: 'advanced-analytics',
  },
  {
    title: 'SEO Optimization',
    description: 'Higher search rankings, organic traffic boost, strengthen brand reputation',
    image: burger,
    slug: 'seo-optimization',
  },
  {
    title: 'Content Marketing',
    description: 'Engage your audience with high-quality content tailored to your brand.',
    image: e1,
    slug: 'content-marketing',
  },
  {
    title: 'Website Development',
    description: 'Get a professional website developed to enhance your online presence.',
    image: papa,
    slug: 'website-development',
  },
];

const ServicesContainer = () => {
  return (
    <div className="home-services">
      <div className="wrapper">
        <div className="text-center my-10">
          <h2 className="text-3xl font-bold text-white ">OUR SERVICES</h2>
        </div>
        <div className="services-content">
          {serviceData.map((service, index) => (
            <ServicesGrid 
              key={index}
              image={service.image}
              sub={service.title}
              id={service.slug} 
              text={(
                <>
                  {service.description.split(', ').map((desc, idx) => (
                    <span key={idx} style={{ display: 'block' }}>{desc}</span>
                  ))}
                </>
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const ServicesHeading = ({ titletext, image, buttontext, spantext, light }) => {
  return (
    <motion.div className="services-heading"
      initial={{ opacity: 0, x: "-20%" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}>
      <div className="services-title">
        <div className="info-div">
          {image && <img src={image} loading='lazy' alt="Service Heading" />}
          <div className="title">
            {spantext && (
              <p className="title-sub" style={light ? { color: "#d0d0d0" } : { color: "#292930" }}>
                <span style={light ? { color: "#ffdc60" } : { color: "#5956e8" }}>{spantext}</span>
              </p>
            )}
            <h2 className="title-text" style={light ? { color: "#fff" } : { color: "#292930" }}>{titletext}</h2>
          </div>
        </div>
        {buttontext && (
          <Link to="#" className={`services-button ${light ? "light" : "dark"}`}>
            <div>{buttontext}</div>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ServicesContainer;
