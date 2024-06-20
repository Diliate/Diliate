
import React from 'react';
import Banner from '../../components/banner/banner';
import Nav from '../../components/navigation/navigation';
import Footer from '../footer/footer';
import e4 from '../../assets/services-images/e4.jpg';
import './services-container.css';
import contentMarketingContent from './contentMarketingContent';

const ContentMarketing = () => {
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
          <Banner text="Content Marketing" first="#FFFA76" second="#E326AE" third="#ffc4bb" />
        </div>
      </header>

      <div className="service-content">
        <img src={e4} alt="Content Marketing" className="service-image" />
        <h1 className="service-title">Content Marketing</h1>
        <p>{contentMarketingContent.description}</p>
        
        <h2>{contentMarketingContent.approach.title}</h2>
        <ul>
          {contentMarketingContent.approach.steps.map((step, index) => (
            <li key={index}>
              <strong>{step.title}:</strong> {step.description}
            </li>
          ))}
        </ul>
        <h2>{contentMarketingContent.benefits.title}</h2>
        <ul>
          {contentMarketingContent.benefits.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        
        <button
          className="relative bg-white w-36 h-12 rounded-md border-2 border-[#333] cursor-pointer group hover:bg-[#333] transition duration-300 ease-in transform hover:-translate-x-2 hover:translate-y-2"
          onClick={() => {
            window.location.href = '/contactus';
          }}
        >
          <h1 className="group-hover:text-white text-[#333] font-bold">Let's Talk</h1>
          <div className="absolute top-0 left-0 w-full h-full rounded-md border-2 border-[#333] group-hover:border-0"></div>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ContentMarketing;
