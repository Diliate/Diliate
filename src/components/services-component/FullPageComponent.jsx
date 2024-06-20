import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../components/banner/banner';
import Nav from '../../components/navigation/navigation';
import Footer from '../footer/footer';
import { keymap } from './data';
import './services-container.css';
import seoContent from './seoContent';
import webDevelopmentContent from './webDevelopmentContent';
import analyticsContent from './analyticsContent';
import socialMediaContent from './socialMediaContent';
import WebsiteDevelopment from './WebsiteDevelopment';
import ContentMarketing from './ContentMarketing';
import PaidAdvertising from './PaidAdvertising';
import AdvancedAnalytics from './AdvancedAnalytics';

function FullPageComponent() {
  const { slug } = useParams();
  const service = keymap[slug];

  const [content, setContent] = useState(null);

  useEffect(() => {
    if (service && service.contentFile) {
      import(`${service.contentFile}`).then(module => setContent(module.default));
    }
  }, [slug, service]);

  if (!service) {
    return <div>Service not found</div>;
  }

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
        
        {service.title === 'Analytics' && (
          <>
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
          </>
        )}

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
                window.location.href = '/contactus';
              }}
            >
              <h1 className="group-hover:text-white text-[#333] font-bold">Let's Talk</h1>
              <div className="absolute top-0 left-0 w-full h-full rounded-md border-2 border-[#333] group-hover:border-0"></div>
            </button>
          </>
        )}

        {service.title === 'Paid Advertising' && <PaidAdvertising />}
        {service.title === 'Content Marketing' && <ContentMarketing />}
        {service.title === 'Advanced Analytics' && <AdvancedAnalytics />}
      </div>
      <Footer />
    </>
  );
}

export default FullPageComponent;
