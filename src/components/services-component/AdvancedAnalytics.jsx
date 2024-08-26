import React from "react";
import Banner from "../../components/banner/banner";
import Nav from "../../components/navigation/navigation";
import Footer from "../footer/footer";
import "./services-container.css";
import analyticsContent from "./analyticsContent";
import e1Image from "../../assets/services-images/e1.jpg"; // Adjust the path as necessary

const AdvancedAnalytics = () => {
  return (
    <>
      <Nav page="services" />

      <div className="service-content">
        <img src={e1Image} alt="Descriptive text" className="my-image-class" />

        <div>
          <h1 className="service-title">Data Analytics</h1>

          <p>We provide insights that help you make data-driven decisions.</p>

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

export default AdvancedAnalytics;
