import React, { useState } from "react"

import file from "../../assets/blogimages/Icon (1).png"
import socials3 from "../../assets/blogimages/socials.jpg"
import Nav from "../../components/navigation/navigation"
import Banner from "../../components/banner/banner"
import Header from "../../components/header/header"
import Article from "../../components/article/article"
import Subscribe from "../../components/subscribe/subscribe"
import BlogCard from "../../components/blog card/blogcard"
import Footer from "../../components/footer/footer"
import "./blog.css"
import { Link } from "react-router-dom"

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


function Blog(){

    const [display, setdisplay]=useState(blogs)
    const [value,setvalue]=useState("all")

    const handleFilter = (val) =>{
        if(val==="all"){
            setdisplay(blogs)
            return
        }
        const newarray=blogs.filter((blog,i)=>blog.filters===val)
        setdisplay(newarray)
    }

    const handleValue = (val) =>{
        setvalue(val)
    }

    return (
        <div>   
                <Nav page="blog"/>
              
            <div className="blog-section">
                <Header image={file} light={false} spantext="ARTICLES" content="Browse our content on digital marketing growth"/>
                <Article image={socials3} date="MARCH 10, 2023" title="The best 4 types of Marketing Strategies For Small Businesses" background="#FFF3CA" reverse={false}/>
            </div>
            <Subscribe/>
            <div className="blog-container">
                <div className="blog-controls">
                    <div className="latest-posts">
                          <h2>Latest Posts</h2>
                    </div>                 
                    <div className="blog-controls-buttons">
                        <Link to="#" className={`blog-controls-button all-button ${value==="all"?"current":""}`} onClick={()=>{handleFilter("all"); handleValue("all")}}>All</Link>
                        <Link to="#" className={`blog-controls-button ${value==="growth"?"current":""}`} onClick={()=>{handleFilter("growth"); handleValue("growth")}}>Growth</Link>
                        <Link to="#" className={`blog-controls-button ${value==="content"?"current":""}`} onClick={()=>{handleFilter("content"); handleValue("content")}}>Content</Link>
                        <Link to="#" className={`blog-controls-button ${value==="social media"?"current":""}`} onClick={()=>{handleFilter("social media"); handleValue("social media")}}>Social Media</Link>
                    </div>
                </div>
                <div className="blog-card-container">
                  {display.map((item,i)=>{
                    return <BlogCard key={i} image={item.image} buttontext={item.filters} title={item.title} link={item.link} />
                  })}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog