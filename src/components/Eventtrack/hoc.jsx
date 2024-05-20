// EventTrackerHOC.jsx
import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module'; // Import TagManager from react-gtm-module

const EventTrackerHOC = ({ children }) => {
  useEffect(() => {
    // Initialize TagManager with your GTM ID
    TagManager.initialize({ gtmId: 'GTM-WVSK7NGX' }); 

    // Track page view when component mounts
    TagManager.dataLayer({ dataLayer: { event: 'pageview', pagePath: window.location.pathname } });

    // Example: Track button click event
    const handleClick = () => {
      TagManager.dataLayer({ dataLayer: { event: 'interaction', category: 'User Interaction', action: 'Clicked Button', label: 'Buy Now' } });
    };

    // Attach event listener to document for tracking button clicks
    document.addEventListener('click', handleClick);

    // Cleanup function
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <>{children}</>; // Render child components
};

export default EventTrackerHOC;
