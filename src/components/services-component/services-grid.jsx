import React, { useState } from "react";
import './services-grid.css';
import blue from '../../assets/services-images/Vector (1).png';
import grey from '../../assets/services-images/Vector.png';
import { Link } from 'react-router-dom';

import { motion } from "framer-motion";

const ServicesGrid = ({ image, sub, text }) => {
    const [hover, setHover] = useState(false);

    return (
        
        <motion.div 
            className="services-card" 
            initial={{ opacity: 0, y: 110 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="card-image-circle">
                <img className="card-image" src={image} />
            </div>
            <div className="card-info">
                <h3 className="card-sub">{sub}</h3>
                <p className="card-text">{text}</p>
            </div>
            {/* Correctly place the Link component */}
            <Link 
                to="/contactUs" 
                className="card-button"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div>Get started</div>
                <img src={hover? blue : grey} />
            </Link>
        </motion.div>
    );
};

export default ServicesGrid;
