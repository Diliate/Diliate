// src/components/MetaTags.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const metaDetails = {
  '/Services/social-media-marketing': {
    title: 'The Power of Social Media Marketing Agency in 2024 - Diliate',
    description: 'Explore the latest trends and best practices in social media marketing. From content creation to analytics, elevate your brand\'s presence with actionable insights and success stories.',
    keywords: 'social media management, social media marketing agency, social media marketing, social media agency, social media advertising, social media strategy',
    url: 'https://www.diliate.com/Services/social-media-marketing'
  },
  '/Services/seo-optimization': {
    title: 'Climbing the Ranks: Mastering Search Engine Optimization (SEO)',
    description: 'Learn proven SEO strategies to improve your website\'s visibility and attract more organic traffic. Start optimizing today!',
    keywords: 'seo marketing, seo agency, search engine optimization, seo services in delhi',
    url: 'https://www.diliate.com/Services/seo-optimization'
  },
  '/Services/website-development': {
    title: 'Crafting Digital Experiences: Your Premier Website Design Company',
    description: 'Transform your online presence with our expert web design services. We specialize in creating stunning, user-friendly websites that drive business growth.',
    keywords: 'website design company, web design agency, website development company, website designing in delhi',
    url: 'https://www.diliate.com/Services/website-development'
  },
  // Add similar objects for other services
};

const MetaTags = () => {
  const location = useLocation();
  const { title, description, keywords, url } = metaDetails[location.pathname] || {};

  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="5LUrO8bOD1XXFYbXAMZDQhyEDygF9rJMuqtQ_mMOCuU" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <title>{title}</title>
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://www.diliate.com/images/logo.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://x.com/Diliate_Digital" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://www.diliate.com/images/logo.png" />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default MetaTags;
