import React, { useRef } from "react";
import Nav from "../../components/navigation/navigation"
import Banner from "../../components/banner/banner"
import Footer from "../../components/footer/footer"
import "./about.css"

function AboutUs() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };


  return (
    <div >


      <header className="services-hero" style={{ background: "linear-gradient(111.23deg, #F9F6DA 9.95%, #E2D5FF 85.17%)" }}>
        <Nav page="about" />
        <div className="banner-container">
          <Banner text="About" bluetext="us" first="#FFFA76" second="#E326AE" third="#ffc4bb" />
        </div>
      </header>



      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="lg:w-10/12 w-full">
          <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">About</p>
          <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">Diliate: Innovating Digital Marketing</h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">Diliate leads in blending digital strategies with affiliate marketing, capturing attention with innovative approaches, guiding businesses with tailored solutions, and inspiring action through strategic promotions. Their commitment to transparency and global reach makes them a reliable partner for digital success.</p>
        </div>


        <div className="lg:mt-14 sm:mt-10 mt-12">
          <img className="lg:block hidden w-full" src="https://i.ibb.co/GvwJnvn/Group-736.png" alt="Group of people Chilling" />
          <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" alt="Group of people Chilling" />
          <img className="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" alt="Group of people Chilling" />
        </div>
        <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
          <div className="w-full xl:w-5/12 lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Story</h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-4">
              On June 6, 2022, I embarked on a journey into the digital marketing realm with my own business. However, in early 2023, I decided to close that chapter, driven by various factors. But from the ashes of that closure emerged DILIATE, a phoenix of sorts, rising on January 11, 2024. DILIATE derives its name from the fusion of "Digital" and "Affiliate," embodying our core focus. Despite our small team, every member exudes an unparalleled passion for their craft. This fervor is matched only by their unwavering dedication to our shared vision. At DILIATE, we live by a simple creed: to understand our clients' needs and surpass their expectations, all while adhering to project deadlines. Our mission? To propel our clients' businesses forward through innovative marketing strategies, tailored to generate leads and foster growth.
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">
              In an industry saturated with voices echoing similar promises, DILIATE stands out. What sets us apart is not just our services, but our ethos. Our workplace is a testament to flexibility and empowerment. With unlimited remote work options, flexible hours, and a commitment to ongoing education, we defy traditional workplace norms. After all, in today's dynamic world, adaptability is key. It's this constant pursuit of excellence that fuels our team's collective strength.
            </p>
          </div>
          <div className="lg:flex items-center w-full lg:w-1/2">
            <img className="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="people discussing on board" />
            <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" />
            <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" />
          </div>
        </div>

      </div>




      <section class="ezy__testimonial5  py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div class="container px-10 ">
          <div class="flex justify-center md:mb-6">
            <div class="sm:max-w-lg text-center">
              <h2 class="text-3xl leading-none md:text-[45px] font-bold mb-4">Customer Reviews</h2>
              <p class="opacity-50 mb-0">
                What you plant now, you will harvest later
              </p>
            </div>
          </div>

          <div class="grid grid-cols-6 gap-6 text-center pt-12 lg:pt-6">
            <div class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="bg-white shadow-xl dark:bg-slate-800 rounded-2xl transition duration-300 h-full p-6 testimonial-card">
                <img
        src="../public/static/images/bala.jpeg"
        alt=""
                  class="max-w-full h-auto rounded-full mx-auto"
                  width="150"
                />
                <div className="mt-4">
                  <h4 className="text-2xl font-medium mb-1">Ahmed Al-Farsi </h4>
                  <p className="opacity-50 mb-0">
                    Working with Diliate has been a game-changer for our business. Their tailored marketing strategies have significantly increased our brand's visibility and customer engagement in the Middle Eastern market. The team's expertise and commitment to our success are truly unmatched. We highly recommend their services to any business looking to elevate their marketing efforts.
                  </p>
                  <p className="opacity-50 mb-0">Ahmed Al-Farsi, CEO of Gulf Tech Solutions</p>
                </div>

              </div>
            </div>




            <div class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="bg-white shadow-xl dark:bg-slate-800 rounded-2xl transition duration-300 h-full p-6 testimonial-card">
                <img
        src="../public/static/images/kala.jpeg"
        alt=""
                  class="max-w-full h-auto rounded-full mx-auto"
                  width="120"
                />
                <div className="mt-4">
                  <h4 className="text-2xl font-medium mb-1">Fatmi Al-Mansouri</h4>
                  <p class="opacity-50 mb-0">
                    Diliate exceeded our expectations with their exceptional marketing services. Their strategic approach and dedication to delivering results have greatly improved our brand recognition and lead generation. We are impressed by their creativity and attention to detail. Highly recommended for businesses seeking top-notch marketing expertise.
                  </p>
                  <p class="opacity-50 mb-0">Fatimi Al-Mansouri, Head of Marketing at Prestige Properties</p>
                </div>
              </div>
            </div>




            <div class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="bg-white shadow-xl dark:bg-slate-800 rounded-2xl transition duration-300 h-full p-6 testimonial-card">
                <img
        src="../public/static/images/zala.jpeg"
        alt=""
                  class="max-w-full h-auto rounded-full mx-auto"
                  width="120"
                />
                <div class="mt-4">
                  <h4 class="text-2xl font-medium mb-1">Mohammed Bin Zayed</h4>
                  <p class="opacity-50 mb-0">
                    The team at Diliate is simply outstanding. They took the time to understand our unique needs and crafted a customized marketing plan that has driven incredible results. Their expertise in SEO and PPC has particularly stood out, leading to significant growth in our online presence. We couldn't be happier with their services!
                  </p>
                  <p class="opacity-50 mb-0">Mohammed Bin Zayed, COO of Horizon Ventures</p>
                </div>

              </div>
            </div>




            <div class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="bg-white shadow-xl dark:bg-slate-800 rounded-2xl transition duration-300 h-full p-6 testimonial-card">
                <img
        src="../public/static/images/sala.jpeg"
        alt=""
                  class="max-w-full h-auto rounded-full mx-auto"
                  width="120"
                />
                <div class="mt-4">
                  <h4 class="text-2xl font-medium mb-1">Mehmood Hassan</h4>
                  <p class="opacity-50 mb-0">
                    Partnering with Diliate has been one of the best decisions we've made for our marketing strategy. Their innovative ideas and proactive approach have transformed our social media presence and engagement. The team's dedication and expertise are evident in the results we've seen. We highly recommend their services for any company looking to boost their marketing efforts.
                  </p>
                  <p class="opacity-50 mb-0">Mehmood Hassan, Marketing Director at Oasis Enterprises</p>
                </div>


              </div>
            </div>



            <div class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="bg-white shadow-xl dark:bg-slate-800 rounded-2xl transition duration-300 h-full p-6 testimonial-card">
                <img
        src="../public/static/images/ww.png"
        alt=""
                  class="max-w-full h-auto rounded-full mx-auto"
                  width="120"
                />
                <div class="mt-4">
                  <h4 class="text-2xl font-medium mb-1">Sara Ibrahim</h4>
                  <p class="opacity-50 mb-0">
                    Diliate's comprehensive approach to digital marketing has transformed our online presence. From SEO to PPC and content marketing, every aspect of our strategy has been expertly handled. The results speak for themselves – higher traffic, better leads, and increased sales. Thank you, Diliate, for your outstanding work!
                  </p>
                  <p class="opacity-50 mb-0">Sara Ibrahim, Marketing Director at Elite E-commerce</p>
                </div>

              </div>
            </div>
            <div class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="bg-white shadow-xl dark:bg-slate-800 rounded-2xl transition duration-300 h-full p-6 testimonial-card">
                <img
                        src="../public/static/images/we.jpeg"

                  alt=""
                  class="max-w-full h-auto rounded-full mx-auto"
                  width="120"
                />
                <div class="mt-4">
                  <h4 class="text-2xl font-medium mb-1">Omar Khaled</h4>
                  <p class="opacity-50 mb-0">
                    Partnering with Diliate has been one of the best decisions we've made. Their team's deep understanding of the Middle Eastern market and innovative marketing solutions have helped us achieve remarkable growth. The professionalism and responsiveness of Diliate are commendable. We look forward to continued success together.
                  </p>
                  <p class="opacity-50 mb-0">Omar Khaled, Founder of Luxury Living</p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default AboutUs