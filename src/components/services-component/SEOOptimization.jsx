
import React from 'react';
import Banner from '../../components/banner/banner';
import Nav from '../../components/navigation/navigation';
import Footer from '../footer/footer';
import e1 from '../../assets/services-images/e1.jpg';
import seoContent from './seoContent'; // Assuming the data file is at this location
import './services-container.css';

const SEOOptimization = () => {
  return (
    <>
     
        <Nav page="services" />
       
      <div className="service-content">
        <img src={e1} alt="SEO Optimization" className="service-image" />
        <h1 className="service-title">SEO Optimization</h1>
        <p>Higher search rankings, organic traffic boost, strengthen brand reputation.</p>
        
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

export default SEOOptimization;
