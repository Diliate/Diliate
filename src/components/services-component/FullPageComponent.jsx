import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import e4 from '../../assets/services-images/e4.jpg';
import b2 from '../../assets/services-images/b2.jpg';
import burger from '../../assets/services-images/burger.jpg';
import e1 from '../../assets/services-images/e1.jpg';
import b3 from '../../assets/services-images/b3.jpg';
import ServicesGrid from "./services-grid"
import papa from '../../assets/services-images/papa.jpg';
import Banner from "../../components/banner/banner"
import Nav from "../../components/navigation/navigation";
import Footer from '../footer/footer';

function FullPageComponent() {
    const {id} = useParams()
    // console.log(id);
    // console.log(typeof id)

    const Titles = ["Social Media Marketing","Paid Advertising","Advanced Analytics","SEO Optimization","Content Marketing","Website Development"]
  return (
    <>
    <header className="services-hero" style={{background: "linear-gradient(111.23deg, #CFD4FF 9.95%, #FFFFFD 85.17%)"}}>
                <Nav page="services"/>
                <div className="banner-container">
                    <Banner text={Titles[Number(id)]} first="#FFFA76" second="#E326AE" third="#ffc4bb"/>
                </div>
                            </header>
    <div style={{ background : "black", width : "100vw",minHeight : "100vh"}}>
        {id === "0" ? <ServicesGrid 
    image={e4}
    id={0} 
    sub="Social Media Marketing"
 
    text={
      <>
        <b>Amplify Your Brand with Diliate's Social Media Marketing</b>
        <span style={{display: 'block', textAlign:'left',fontSize:'90%'}}>In today's digital age, social media is a powerful tool for connecting with your audience and 
        driving engagement. 
        </span>
        <span style={{display: 'block', textAlign:'left', fontSize:'90%'}}>At Diliate, a leading Digital Marketing Agency, we specialize in Social 
        Media Marketing to help you build your brand, reach your target audience, and achieve your 
        business goals.</span>
        <br></br>
        <b>Why Social Media Marketing?</b>
        <span style={{display: 'block', textAlign:'left', fontSize:'90%'}}>Social Media Marketing is essential for creating brand awareness, fostering customer loyalty, 
        and driving conversions. It allows you to engage directly with your audience and create 
        meaningful connections. At Diliate, we craft tailored social media strategies that resonate 
        with your audience and deliver results.
        </span>


      </>
    }


    presence={false}
    flex={true}
    /> : id === "1" ? <ServicesGrid 
    image={b2} 
    id={1}
    sub='Paid Advertising' 
    text={
      <>
        Focus on interested buyers
        <span style={{display: 'block'}}>Maximize ad ROI</span>
        <span style={{display: 'block'}}>Expand customer base</span>
      </>
    }
    presence={false}
    flex={true}/> : 
    id === "2" ? <ServicesGrid 
    image={b3} 
    id={2}
    sub='Advanced Analytics' 
    text={
      <>
        Insights for better decisions
        <span style={{display: 'block'}}>Spot growth opportunities</span>
        <span style={{display: 'block'}}>Tailor strategies to customer needs</span>
      </>
    }
    presence={false}
    flex={true}
    /> : id === "3" ? <ServicesGrid 
    image={burger} 
    id={3}
    sub='SEO Optimization' 
    text={
      <>
        Higher search rankings
        <span style={{display: 'block'}}>Organic traffic boost</span>
        <span style={{display: 'block'}}>Strengthen brand reputation</span>
      </>
    }
    presence={false}
    flex={true}
    /> : id === "4" ?<ServicesGrid 
    image={e1}
    id={4} 
    sub='Content Marketing' 
    text={
      <>
        Informative & engaging content
        <span style={{display: 'block'}}>Grow audience loyalty</span>
        <span style={{display: 'block'}}>Convert visitors into customers</span>
      </>
    }
    presence={false}
    flex={true}
    /> : id === "5" ? <ServicesGrid 
    image={papa} 
    id={5}
    sub='Website Development' 
    text={
      <>
        Customized online solutions
        <span style={{display: 'block'}}>Seamless e-commerce integration</span>
        <span style={{display: 'block'}}>User-friendly design for better engagement</span>
      </>
    }
    presence={false}
    flex={true}
    /> : null}
    </div>

    <br></br>
    <br></br>

    
    <Footer/>
    </>
  )
}

export default FullPageComponent