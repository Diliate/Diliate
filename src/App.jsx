import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import { analytics } from "./firebase/firebase";
import { logEvent } from "firebase/analytics";
import Book from "./pages/Book/book";
import Preloader from "./components/Preloader/Preloader";
import MetaPixel from "./utils/google-analytics/Meta/metapixel"; // Corrected import path
import FullPageComponent from "./components/services-component/FullPageComponent";
import SocialMediaMarketing from "./components/services-component/SocialMediaMarketing";
import SEOOptimization from "./components/services-component/SEOOptimization";
import WebsiteDevelopment from "./components/services-component/WebsiteDevelopment";
import ContentMarketing from "./components/services-component/ContentMarketing";
import PaidAdvertising from "./components/services-component/PaidAdvertising";
import AdvancedAnalytics from "./components/services-component/AdvancedAnalytics";
import Footer from "./components/footer/footer";
import SiteMap from "./components/sitemap";

// Dynamically import components using React.lazy
const Home = React.lazy(() => import("./pages/home/home"));
const AboutUs = React.lazy(() => import("./pages/about/about"));
const ContactUs = React.lazy(() => import("./pages/Contactus/contactus"));
const Blog = React.lazy(() => import("./pages/blog/blog"));
const Services = React.lazy(() => import("./pages/servicesPage/services"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false); // New state for tracking "Contact Us" visibility

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false); // After 3 seconds, stop showing the preloader
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  logEvent(analytics, 'notification_received');

  // Function to toggle "Contact Us" visibility
  const toggleContactUsVisibility = () => {
    setIsContactUsOpen(!isContactUsOpen);
  };

  return (
    <>
      {isLoading ? (
        <div id="root" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Preloader />
        </div>
      ) : (
        <div id="root" style={{ display: 'block' }}>
          <MetaPixel />
          <div className="App">
            <SiteMap />
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Aboutus" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs isOpen={isContactUsOpen} onClose={toggleContactUsVisibility} />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<FullPageComponent />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/book" element={<Book />} />
                <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
                <Route path="/services/seo-optimization" element={<SEOOptimization />} />
                <Route path="/services/website-development" element={<WebsiteDevelopment />} />
                <Route path="/services/content-marketing" element={<ContentMarketing />} />
                <Route path="/services/paid-advertising" element={<PaidAdvertising />} />
                <Route path="/services/advanced-analytics" element={<AdvancedAnalytics />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
