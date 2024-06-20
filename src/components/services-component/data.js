import e4 from '../../assets/services-images/e4.jpg';
import b2 from '../../assets/services-images/b2.jpg';
import burger from '../../assets/services-images/burger.jpg';
import e1 from '../../assets/services-images/e1.jpg';
import b3 from '../../assets/services-images/b3.jpg';
import papa from '../../assets/services-images/papa.jpg';

const serviceData = [
  {
    title: 'Social Media Marketing',
    description: 'We help you reach a larger audience through various social media platforms.',
    image: e4,
    slug: 'social-media-marketing',
    contentFile: './socialMediaContent'
  },
  {
    title: 'Paid Advertising',
    description: 'Increase your ROI with our targeted paid advertising strategies.',
    image: b2,
    slug: 'paid-advertising',
    contentFile: null,
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain deep insights into your business performance with our analytics services.',
    image: burger,
    slug: 'advanced-analytics',
    contentFile: './analyticsContent',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your site\'s visibility on search engines with our SEO services.',
    image: e1,
    slug: 'seo-optimization',
    contentFile: './seoContent',
  },
  {
    title: 'Content Marketing',
    description: 'Engage your audience with high-quality content tailored to your brand.',
    image: b3,
    slug: 'content-marketing',
    contentFile: null,
  },
  {
    title: 'Website Development',
    description: 'Get a professional website developed to enhance your online presence.',
    image: papa,
    slug: 'website-development',
    contentFile: './webDevelopmentContent',
  },
];

const keymap = serviceData.reduce((map, data) => {
  map[data.slug] = data;
  return map;
}, {});

export { serviceData, keymap };
