// src/components/SiteMap.js
import React, { useEffect, useState } from 'react';

const SiteMap = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetch('/site.xml')
      .then((response) => response.text())
      .then((str) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(str, 'application/xml');
        const urlElements = xml.getElementsByTagName('url');
        const urlsArray = Array.from(urlElements).map((url) => ({
          loc: url.getElementsByTagName('loc')[0].textContent,
          lastmod: url.getElementsByTagName('lastmod')[0].textContent,
        }));
        setUrls(urlsArray);
      })
      .catch((error) => {
        console.error("Error fetching or parsing site.xml:", error);
      });
  }, []);

  return (
    <div>
      <h1>Site Map</h1>
      <ul>
        {urls.map((url, index) => (
          <li key={index}>
            <a href={url.loc}>{url.loc}</a>
            <p>Last Modified: {url.lastmod}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiteMap;
