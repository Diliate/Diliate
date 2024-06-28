import React from "react"

import "./banner.css"

const Banner=({first,second,third,text,bluetext})=>{
    return (
        <div className="banner-overlay">
           
            <div className="banner-circle-first" style={{ backgroundColor:first}}></div>
            <div className="banner-circle-second" style={{ backgroundColor:second}}></div>
            <div className="banner-circle-third" style={{   backgroundColor:third}}></div>
        </div>
    )
}

export default Banner