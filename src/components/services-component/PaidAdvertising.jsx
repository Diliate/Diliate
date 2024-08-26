// Path: /src/components/services-component/PaidAdvertising.jsx

import React from "react";
import Banner from "../../components/banner/banner";
import Nav from "../../components/navigation/navigation";
import Footer from "../footer/footer";
import e1 from "../../assets/services-images/e1.jpg"; // Assuming this is the correct image for Paid Advertising
import "./services-container.css";
import paidAdvertisingContent from "./paidAdvertisingContent";
const PaidAdvertising = () => {
  return (
    <>
      <Nav page="services" />

      <div className="service-content">
        <img src={e1} alt="Paid Advertising" className="service-image" />
        <div>
          <h1 className="service-title">{paidAdvertisingContent.title}</h1>
          <p>{paidAdvertisingContent.description}</p>

          <h2>{paidAdvertisingContent.whyPaidAdvertising.title}</h2>
          <p>{paidAdvertisingContent.whyPaidAdvertising.description}</p>

          <h2>{paidAdvertisingContent.approach.title}</h2>
          <ul>
            {paidAdvertisingContent.approach.steps.map((step, index) => (
              <li key={index}>
                <strong>{step.title}:</strong> {step.description}
              </li>
            ))}
          </ul>

          <h2>{paidAdvertisingContent.benefits.title}</h2>
          <ul>
            {paidAdvertisingContent.benefits.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <h2>{paidAdvertisingContent.getStarted.title}</h2>
          <p>{paidAdvertisingContent.getStarted.description}</p>

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

export default PaidAdvertising;
