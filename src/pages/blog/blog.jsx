import React, { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import file from "../../assets/blogimages/Icon (1).png";
import socials3 from "../../assets/blogimages/socials.jpg";
import Nav from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import Article from "../../components/article/article";
import Subscribe from "../../components/subscribe/subscribe";
import BlogCard from "../../components/blog card/blogcard";
import Footer from "../../components/footer/footer";
import "./blog.css";

const blogs = [
    {
        image: 'https://d1w0kjuxtceafs.cloudfront.net/socials 2.jpg',
        title: "The Best 4 Types Of Marketing Strategies For Small Businesses",
        filters: "content",
        link: "https://buildfire.com/marketing-strategies-for-small-businesses/"
    },
    {
        image: 'https://d1w0kjuxtceafs.cloudfront.net/brain.jpg',
        title: "Learn How To Increase Traffic To Your Website Organically",
        filters: "content",
        link: "https://www.streamlinedmedia.ai/blog-posts/learn-how-to-increase-traffic-to-your-website-organically"
    },
    {
        image: 'https://d1w0kjuxtceafs.cloudfront.net/boxes.jpg',
        title: "Five Ways For Agencies To Get Out Of The Recession Alive",
        filters: "growth",
        link: "https://agencyanalytics.com/blog/recession-proofing-your-agency"
    },
    {
        image: 'https://d1w0kjuxtceafs.cloudfront.net/socials.jpg',
        title: "How To Use Your Content Marketing Strategy To Improve Retention",
        filters: "social media",
        link: "https://www.gravysolutions.io/post/how-to-increase-customer-retention-through-content-marketing"
    }
];

function Blog() {
    const [value, setValue] = useState("all");

    const handleFilter = useCallback((val) => {
        setValue(val);
    }, []);

    const filteredBlogs = useMemo(() => {
        if (value === "all") {
            return blogs;
        }
        return blogs.filter((blog) => blog.filters === value);
    }, [value]);

    return (
        <div>
            <Nav page="blog" />
            <section className="blog-section">
                <Header image={file} light={false} spantext="ARTICLES" content="Browse our content on digital marketing growth" />
                <Article image={socials3} date="MARCH 10, 2023" title="The best 4 types of Marketing Strategies For Small Businesses" background="#FFF3CA" reverse={false} />
            </section>
            <Subscribe />
            <section className="blog-container">
                <nav className="blog-controls">
                    <div className="latest-posts">
                        <h2>Latest Posts</h2>
                    </div>
                    <div className="blog-controls-buttons">
                        {["all", "growth", "content", "social media"].map((filter) => (
                            <Link
                                key={filter}
                                to="#"
                                className={`blog-controls-button ${value === filter ? "current" : ""}`}
                                onClick={() => handleFilter(filter)}
                            >
                                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </Link>
                        ))}
                    </div>
                </nav>
                <div className="blog-card-container">
                    {filteredBlogs.map((item, i) => (
                        <BlogCard key={i} image={item.image} buttontext={item.filters} title={item.title} link={item.link} />
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default React.memo(Blog);
