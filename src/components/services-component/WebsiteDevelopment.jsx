// Path: /src/pages/website-development/WebsiteDevelopment.jsx

import React from "react";
import Banner from "../../components/banner/banner";
import Nav from "../../components/navigation/navigation";
import Footer from "../footer/footer";
import e4 from "../../assets/services-images/e4.jpg";
import webDevelopmentContent from "./webDevelopmentContent"; // Assuming the data file is at this location
import "./services-container.css";

const WebsiteDevelopment = () => {
  return (
    <>
      <Nav page="services" />
      <Banner
        text="Website Development"
        first="#FFFA76"
        second="#E326AE"
        third="#ffc4bb"
      />

      <div className="service-content">
        <img src={e4} alt="Website Development" className="service-image" />
        <div>
          <h1 className="service-title">Website Development</h1>
          <p>
            We help you build a robust online presence through tailored website
            development solutions.
          </p>

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

          <button
            className="relative bg-white w-36 h-12 rounded-md border-2 border-[#333] cursor-pointer group hover:bg-[#333] transition duration-300 ease-in transform hover:-translate-x-2 hover:translate-y-2"
            onClick={() => {
              window.location.href = "/contactus";
            }}
          >
            <h1 className="group-hover:text-white text-[#333] font-bold">
              Let's Talk
            </h1>
            <div className="absolute top-0 left-0 w-full h-full rounded-md border-2 border-[#333] group-hover:border-0"></div>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WebsiteDevelopment;
