import React, { useState, useEffect, lazy, Suspense, memo } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../components/banner/banner';
import Nav from '../../components/navigation/navigation';
import Footer from '../footer/footer';
import { keymap } from './data';
import './services-container.css';

// Lazy load heavy components
const WebsiteDevelopment = lazy(() => import('./WebsiteDevelopment'));
const ContentMarketing = lazy(() => import('./ContentMarketing'));
const PaidAdvertising = lazy(() => import('./PaidAdvertising'));
const AdvancedAnalytics = lazy(() => import('./AdvancedAnalytics'));

// Error boundary component for handling lazy loading errors
function ErrorBoundary({ children }) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {children}
    </React.Suspense>
  );
}

const FullPageComponent = memo(() => {
  const { slug } = useParams();
  const service = keymap[slug];

  const [content, setContent] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      if (service?.contentFile) {
        try {
          const module = await import(`./${service.contentFile}`);
          setContent(module.default);
        } catch (error) {
          console.error('Failed to load content file:', error);
        }
      }
    };

    loadContent();
  }, [slug, service]);

  if (!service) {
    return <div>Service not found</div>;
  }

  const renderContent = () => {
    switch (service.title) {
      case 'SEO Optimization':
        return renderSeoContent();
      case 'Website Development':
        return renderWebDevelopmentContent();
      case 'Analytics':
        return renderAnalyticsContent();
      case 'Social Media Marketing':
        return renderSocialMediaContent();
      case 'Paid Advertising':
        return <PaidAdvertising />;
      case 'Content Marketing':
        return <ContentMarketing />;
      case 'Advanced Analytics':
        return <AdvancedAnalytics />;
      default:
        return null;
    }
  };

  const renderSeoContent = () => (
    <>
      <h2>{content?.approach?.title}</h2>
      <p>{content?.approach?.description}</p>
      <ul>
        {content?.approach?.steps?.map((step, index) => (
          <li key={index}>
            <strong>{step.title}:</strong> {step.description}
          </li>
        ))}
      </ul>
      <h2>{content?.benefits?.title}</h2>
      <ul>
        {content?.benefits?.points?.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </>
  );

  const renderWebDevelopmentContent = () => (
    <>
      <h2>{content?.header}</h2>
      <p>{content?.introduction}</p>
      <h2>{content?.whyWebDev?.title}</h2>
      <p>{content?.whyWebDev?.description}</p>
      <h2>{content?.approach?.title}</h2>
      <ul>
        {content?.approach?.steps?.map((step, index) => (
          <li key={index}>
            <strong>{step.title}:</strong> {step.description}
          </li>
        ))}
      </ul>
      <h2>{content?.benefits?.title}</h2>
      <ul>
        {content?.benefits?.points?.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <h2>{content?.getStarted?.title}</h2>
      <p>{content?.getStarted?.description}</p>
      <p>{content?.contact}</p>
    </>
  );

  const renderAnalyticsContent = () => (
    <>
      <h2>{content?.whyAnalytics?.title}</h2>
      <p>{content?.whyAnalytics?.description}</p>
      <h2>{content?.approach?.title}</h2>
      <ul>
        {content?.approach?.steps?.map((step, index) => (
          <li key={index}>
            <strong>{step.title}:</strong> {step.description}
          </li>
        ))}
      </ul>
      <h2>{content?.benefits?.title}</h2>
      <ul>
        {content?.benefits?.points?.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </>
  );

  const renderSocialMediaContent = () => (
    <>
      <h2>{content?.approach?.title}</h2>
      <ul>
        {content?.approach?.steps?.map((step, index) => (
          <li key={index}>
            <strong>{step.title}:</strong> {step.description}
          </li>
        ))}
      </ul>
      <h2>{content?.benefits?.title}</h2>
      <ul>
        {content?.benefits?.points?.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <button
        className="relative bg-white w-36 h-12 rounded-md border-2 border-[#333] cursor-pointer group hover:bg-[#333] transition duration-300 ease-in transform hover:-translate-x-2 hover:translate-y-2"
        onClick={() => navigate('/contactus')}
      >
        <h1 className="group-hover:text-white text-[#333] font-bold">Let's Talk</h1>
        <div className="absolute top-0 left-0 w-full h-full rounded-md border-2 border-[#333] group-hover:border-0"></div>
      </button>
    </>
  );

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

        <ErrorBoundary>
          <Suspense fallback={<div>Loading content...</div>}>
            {renderContent()}
          </Suspense>
        </ErrorBoundary>
      </div>
      <Footer />
    </>
  );
});

export default FullPageComponent;
