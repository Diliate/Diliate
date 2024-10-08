import React from "react";
import Banner from "../../components/banner/banner";
import Nav from "../../components/navigation/navigation";
import Footer from "../footer/footer";
import e4 from "../../assets/services-images/e4.jpg";
import "./services-container.css";
import socialMediaContent from "./socialMediaContent";
const SocialMediaMarketing = () => {
  return (
    <>
      <Nav page="services" />

      <div className="service-content">
        {/* <div className="inner-container"> */}
        <img src={e4} alt="Social Media Marketing" className="service-image" />
        <div>
          <div>
            <h1 className="service-title">Social Media Marketing</h1>
            <p>
              We help you reach a larger audience through various social media
              platforms.
            </p>

            <div>
              <h2>{socialMediaContent.approach.title}</h2>
              <ul>
                {socialMediaContent.approach.steps.map((step, index) => (
                  <li key={index}>
                    <strong>{step.title}:</strong> {step.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2>{socialMediaContent.benefits.title}</h2>
          <ul>
            {socialMediaContent.benefits.points.map((point, index) => (
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

export default SocialMediaMarketing;
