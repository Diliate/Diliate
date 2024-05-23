import React from "react"
import Nav from "../../components/navigation/navigation"
import Banner from "../../components/banner/banner"
import Footer from "../../components/footer/footer"
import "./about.css"

function AboutUs() {
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


            <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
        <div class="text-center">
            <p class="font-medium text-blue-500 dark:text-blue-400">Contact us</p>

            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>

            <p class="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat.</p>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </span>

                <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
                <p class="mt-2 text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                <p class="mt-2 text-blue-500 dark:text-blue-400">Info@diliate.com</p>
            </div>

            <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </span>
                
                <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">Office</h2>
                <p class="mt-2 text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                <p class="mt-2 text-blue-500 dark:text-blue-400">
                 Faridabad, Haryana, 121001</p>
            </div>
            <div class="flex flex-col items-center justify-center text-center">
    <a href="https://api.whatsapp.com/send?phone=7982169989" target="_blank" rel="noopener noreferrer" class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
    </a>
    <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">Phone / Whatsapp</h2>
    <p class="mt-2 text-gray-500 dark:text-gray-400"></p>
    <a href="https://api.whatsapp.com/send?phone=7982169989" target="_blank" rel="noopener noreferrer" class="mt-2 text-blue-500 dark:text-blue-400">7982169989</a>
</div>

        </div>
    </div>
    <div class="bg-white h-[15px]"></div>

</section>


            <Footer />
        </div>
    )
}

export default AboutUs