import React from 'react';
import { useParams } from 'react-router-dom';
import e4 from '../../assets/services-images/e4.jpg';
import b2 from '../../assets/services-images/b2.jpg';
import burger from '../../assets/services-images/burger.jpg';
import e1 from '../../assets/services-images/e1.jpg';
import b3 from '../../assets/services-images/b3.jpg';
import papa from '../../assets/services-images/papa.jpg';
import Banner from '../../components/banner/banner';
import Nav from '../../components/navigation/navigation';
import Footer from '../footer/footer';
import seoContent from './seoContent'; // Import the content
import webDevelopmentContent from './webDevelopmentContent';
import './services-container';
import analyticsContent from './analyticsContent';
import socialMediaContent from './socialMediaContent';

const serviceData = [
  {
    title: 'Social Media Marketing',
    description: 'We help you reach a larger audience through various social media platforms.',
    image: e4,
  },
  {
    title: 'Paid Advertising',
    description: 'Increase your ROI with our targeted paid advertising strategies.',
    image: b2,
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain deep insights into your business performance with our analytics services.',
    image: burger,
  },
  {
    title: 'SEO Optimization',
    description: seoContent.description,
    image: e1,
  },
  {
    title: 'Content Marketing',
    description: 'Engage your audience with high-quality content tailored to your brand.',
    image: b3,
  },
  {
    title: 'Website Development',
    description: 'Get a professional website developed to enhance your online presence.',
    image: papa,
  },
];

function FullPageComponent() {
  const { id } = useParams();
  const serviceId = Number(id);
  const service = serviceData[serviceId];

  return (
    <>
      <header
        className="services-hero"
        style={{
          background: 'linear-gradient(111.23deg, #CFD4FF 9.95%, #FFFFFD 85.17%)',
        }}
      >
        <Nav page="services" />
        <div className="banner-container">
          <Banner text={service.title} first="#FFFA76" second="#E326AE" third="#ffc4bb" />
        </div>
      </header>


      
      <div className="service-content">
        <img src={service.image} alt={service.title} className="service-image" />
        <h1 className="service-title">{service.title}</h1>
        <p>{service.description}</p>
        {service.title === 'SEO Optimization' && (
          <>
            <h2>{seoContent.approach.title}</h2>
            <p>{seoContent.approach.description}</p>
            <ul>
              {seoContent.approach.steps.map((step, index) => (
                <li key={index}>
                  <strong>{step.title}:</strong> {step.description}
                </li>
              ))}
            </ul>
            <h2>{seoContent.benefits.title}</h2>
            <ul>
              {seoContent.benefits.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
       
          </>
        )}
        {service.title === 'Website Development' && (
          <>
            <h2>{webDevelopmentContent.header}</h2>
            <p>{webDevelopmentContent.introduction}</p>
            <h2>{webDevelopmentContent.whyWebDev.title}</h2>
            <p>{webDevelopmentContent.whyWebDev.description}</p>
            <h2>{webDevelopmentContent.approach.title}</h2>
            <ul>
              {webDevelopmentContent.approach.steps.map((step, index) => (
                <li key={index}>
                  <strong>{step.title}:</strong> {step.description}
                </li>
              ))}
            </ul>
            <h2>{webDevelopmentContent.benefits.title}</h2>
            <ul>
              {webDevelopmentContent.benefits.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <h2>{webDevelopmentContent.getStarted.title}</h2>
            <p>{webDevelopmentContent.getStarted.description}</p>
            <p>{webDevelopmentContent.contact}</p>
           
          </>

        )}

 {/* Render the content from analyticsContent */}
 <h2>{analyticsContent.whyAnalytics.title}</h2>
        <p>{analyticsContent.whyAnalytics.description}</p>
        
        <h2>{analyticsContent.approach.title}</h2>
        <ul>
          {analyticsContent.approach.steps.map((step, index) => (
            <li key={index}>
              <strong>{step.title}:</strong> {step.description}
            </li>
          ))}
        </ul>

        <h2>{analyticsContent.benefits.title}</h2>
        <ul>
          {analyticsContent.benefits.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <button
  className="relative bg-white w-36 h-12 rounded-md border-2 border-[#333] cursor-pointer group hover:bg-[#333] transition duration-300 ease-in transform hover:-translate-x-2 hover:translate-y-2"
  onClick={() => {
    // Handle redirection to contact page here
    window.location.href = '/contactus'; // Replace with your actual contact page URL
  }}
>
  <h1 className="group-hover:text-white text-[#333] font-bold">let's Talk</h1>
  <div className="absolute top-0 left-0 w-full h-full rounded-md border-2 border-[#333] group-hover:border-0"></div>
</button>


       

        {service.title === 'Social Media Marketing' && (
  <>
    <h2>{socialMediaContent.approach.title}</h2>
    <ul>
      {socialMediaContent.approach.steps.map((step, index) => (
        <li key={index}>
          <strong>{step.title}:</strong> {step.description}
        </li>
      ))}
    </ul>
    <h2>{socialMediaContent.benefits.title}</h2>
    <ul>
      {socialMediaContent.benefits.points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
    <button
  className="relative bg-white w-36 h-12 rounded-md border-2 border-[#333] cursor-pointer group hover:bg-[#333] transition duration-300 ease-in transform hover:-translate-x-2 hover:translate-y-2"
  onClick={() => {
    // Handle redirection to contact page here
    window.location.href = '/contactus'; // Replace with your actual contact page URL
  }}
>
  <h1 className="group-hover:text-white text-[#333] font-bold">let's Talk</h1>
  <div className="absolute top-0 left-0 w-full h-full rounded-md border-2 border-[#333] group-hover:border-0"></div>
</button>

  </>
)}



      </div>
      <Footer />
    </>
  );
}

export default FullPageComponent;
