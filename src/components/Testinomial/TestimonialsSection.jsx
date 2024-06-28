import React, { useState } from "react";

const testimonials = [
  {
    text: "The entire process was seamless. Our new website developed by DILIATE is incredibly fast and user-friendly. The team was very responsive and took care of all our requirements efficiently.",
    name: "Sheikh Ahmed bin Saeed",
    title: "Chairman and CEO, Emirates Group",
    img: "/static/images/bala.jpeg",
  },
  {
    text: "DILIATE has transformed the way we handle our online presence. The intuitive design and robust features have made a significant difference. I highly recommend it to any professional looking to upgrade their digital tools.",
    name: "Fatima Al Suwaidi",
    title: "Chief Marketing Officer, Etisalat",
    img: "/static/images/dala.jpeg",
  },
  {
    text: "Our experience with DILIATE has been nothing short of excellent. The platform is very flexible and has allowed us to implement all the changes we wanted quickly and without hassle.",
    name: "Omar Al Balushi",
    title: "Chief Technology Officer, Dubai Holdings",
    img: "/static/images/jj.jpg",
  },
  {
    text: "An outstanding service from DILIATE that delivered beyond our expectations. The new system is efficient and has significantly improved our workflow. The customer support was also exceptional.",
    name: "Reem Al Hashimy",
    title: "Chief Operating Officer, ADQ",
    img: "/static/images/kala.jpeg",
  },
  {
    text: "The upgrade to our website by DILIATE was smooth and the results have been fantastic. The enhanced speed and functionality have improved our user engagement drastically.",
    name: "Sultan Ahmed bin Sulayem",
    title: "Group Chairman and CEO, DP World",
    img: "/static/images/sala.jpeg",
  },
  {
    text: "The new platform from DILIATE is not only visually appealing but also extremely easy to use. It has streamlined many of our processes and we couldn't be happier with the outcome.",
    name: "Ayesha Al Mazrouei",
    title: "Head of Digital Transformation, Abu Dhabi Commercial Bank",
    img: "/static/images/ww.png",
  },
  {
    text: "DILIATE's SEO services have significantly boosted our search engine rankings. We are now getting more organic traffic than ever before. Their team is knowledgeable and always ready to help.",
    name: "Khaled Al Maktoum",
    title: "Marketing Director, Dubai Tourism",
    img: "/static/images/we.jpeg",
  },
  {
    text: "The digital marketing strategies provided by DILIATE have been a game-changer for us. Our online presence has grown tremendously, and we are seeing great results in terms of engagement and conversions.",
    name: "Noura Al Mansoori",
    title: "Chief Marketing Officer, Abu Dhabi Ports",
    img: "/static/images/mama.jpg",
  },
  {
    text: "Working with DILIATE on our website redesign was an excellent decision. Their creative approach and technical expertise ensured that the new site not only looks great but also performs flawlessly.",
    name: "Mohammed Al Habtoor",
    title: "CEO, Al Habtoor Group",
    img: "/static/images/qq.jpg",
  },
  {
    text: "DILIATE's comprehensive digital marketing services have helped us reach a wider audience and improve our brand recognition. The team's dedication and attention to detail are commendable.",
    name: "Laila Al Gurg",
    title: "Head of Corporate Communications, Emaar Properties",
    img: "/static/images/bala.jpeg",
  },
  {
    text: "We have seen a significant improvement in our website's performance and SEO ranking since partnering with DILIATE. Their team's expertise and proactive approach have made a big difference.",
    name: "Saeed Al Qubaisi",
    title: "Chief Digital Officer, Mubadala",
    img: "/static/images/dala.jpeg",
  },
  {
    text: "DILIATE's digital marketing campaigns have been highly effective in driving traffic to our site and increasing our customer base. Their strategic insights and execution are top-notch.",
    name: "Hessa Al Suwaidi",
    title: "Head of Marketing, Emirates NBD",
    img: "/static/images/jj.jpg",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 font-pj">
              100+ people have said how good Diliate is
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Our happy clients say about us
            </h2>
          </div>

          <div className="mt-8 text-center md:mt-16 md:order-3">
            <a
              href="#"
              title=""
              className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
            >
              {/* Link content */}
            </a>
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative max-w-lg mx-auto md:max-w-none">
              <div className="flex items-center justify-between">
                <button
                  className="p-2 text-gray-600 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  onClick={handlePrev}
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <div className="flex flex-col justify-center items-center overflow-hidden shadow-xl rounded-3xl">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 rounded-3xl ${
                        index === current ? "block" : "hidden"
                      }`}
                    >
                      <div className="flex-1">
                        <div className="flex justify-center items-center">
                          {Array(5)
                            .fill("")
                            .map((_, index) => (
                              <svg
                                key={index}
                                className="w-5 h-5 text-[#FDB241]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>
                            ))}
                        </div>

                        <blockquote className="flex-1 mt-8 text-center">
                          <p className="text-lg leading-relaxed text-gray-900 font-pj">
                            {testimonial.text}
                          </p>
                        </blockquote>
                      </div>

                      <div className="flex items-center justify-center mt-8">
                        <img
                          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                          src={testimonial.img}
                          alt=""
                        />
                        <div className="ml-4 text-center">
                          <p className="text-base font-bold text-gray-900 font-pj">
                            {testimonial.name}
                          </p>
                          <p className="mt-0.5 text-sm font-pj text-gray-600">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="p-2 text-gray-600 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  onClick={handleNext}
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
