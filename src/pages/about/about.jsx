import React from "react";
import Nav from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import "./about.css";

const AboutUs = React.memo(() => {
  return (
    <div>
      <Nav page="about" />
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="lg:w-10/12 w-full">
          <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">
            About
          </p>
          <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
            Diliate: Innovating Digital Marketing
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Diliate leads in blending digital strategies with affiliate marketing, capturing attention with innovative approaches, guiding businesses with tailored solutions, and inspiring action through strategic promotions. Their commitment to transparency and global reach makes them a reliable partner for digital success.
          </p>
        </div>
        <div className="lg:mt-14 sm:mt-10 mt-12">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="https://i.ibb.co/GvwJnvn/Group-736.png"
            />
            <source
              media="(min-width: 640px)"
              srcSet="https://i.ibb.co/5sZTmHq/Rectangle-116.png"
            />
            <img
              className="w-full"
              src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png"
              alt="Group of people Chilling"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
          <div className="w-full xl:w-5/12 lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
              Our Story
            </h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-4">
              On June 6, 2022, I embarked on a journey into the digital marketing realm with my own business. However, in early 2023, I decided to close that chapter, driven by various factors. But from the ashes of that closure emerged DILIATE, a phoenix of sorts, rising on January 11, 2024. DILIATE derives its name from the fusion of "Digital" and "Affiliate," embodying our core focus. Despite our small team, every member exudes an unparalleled passion for their craft. This fervor is matched only by their unwavering dedication to our shared vision. At DILIATE, we live by a simple creed: to understand our clients' needs and surpass their expectations, all while adhering to project deadlines. Our mission? To propel our clients' businesses forward through innovative marketing strategies, tailored to generate leads and foster growth.
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">
              In an industry saturated with voices echoing similar promises, DILIATE stands out. What sets us apart is not just our services, but our ethos. Our workplace is a testament to flexibility and empowerment. With unlimited remote work options, flexible hours, and a commitment to ongoing education, we defy traditional workplace norms. After all, in today's dynamic world, adaptability is key. It's this constant pursuit of excellence that fuels our team's collective strength.
            </p>
          </div>
          <div className="lg:flex items-center w-full lg:w-1/2">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet="https://i.ibb.co/2kxWpNm/Group-740.png"
              />
              <source
                media="(min-width: 640px)"
                srcSet="https://i.ibb.co/ZLgK3NQ/Group-788.png"
              />
              <img
                className="w-full"
                src="https://i.ibb.co/9g2R7Xr/Group-803.png"
                alt="people discussing on board"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default AboutUs;
