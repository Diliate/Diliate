import React from "react";
import { motion } from "framer-motion";
import "./blogcard.css";

const BlogCard = ({ image, title, link }) => {
    return (
        <motion.div
            className="blog-card"
            initial={{ opacity: 0, y: 110 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="blog-card-image">
                <img src={image} loading="lazy" alt="blog image" />
            </div>
            <div className="blog-card-meta">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    View More
                </a>
            </div>
            <div className="blog-card-title">
                <h3>{title}</h3>
            </div>
        </motion.div>
    );
};

export default BlogCard;
