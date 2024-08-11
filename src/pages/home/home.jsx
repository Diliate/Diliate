import { motion } from "framer-motion";
import soboImage from '../../assets/homeimages/sobo.png';
import ladder from "../../assets/homeimages/ladder.png";
import charts from "../../assets/homeimages/charts.png";
import graphics from "../../assets/homeimages/Graphics.png";
import notification from "../../assets/homeimages/notification.png";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useNavigate } from 'react-router-dom';
import TestimonialsSection from "../../components/Testinomial/TestimonialsSection";
import NewHeader from "../../components/NewHeader/newheader";
import "./home.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <NewHeader />
            <div className="home-about" role="region" aria-labelledby="about-section">
                <motion.div className="about-image-container"
                    initial={{ opacity: 0, y: 110 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}>
                    <img className="about-image" src='./static/images/s2.jpg' alt="Team collaboration at Diliate" loading="lazy" />
                </motion.div>

                <div id="about-section" className="about-container">
                    <motion.div
                        style={{ position: "relative", zIndex: "1" }}
                        initial={{ opacity: 0, y: 110 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}>
                        <div className="about-sub">
                            <div className="about-title">
                                <h1 className="font-orbitron text-4xl">Your Trusted Digital Partner</h1>
                            </div>
                        </div>
                        <hr className="adjustable-line" />
                        <div className="about-text-container">
                            <p className="about-text text-lg mt-4">Welcome to Diliate – where we turn digital dreams into decentralized reality!</p>
                            <p className="about-text montserrat-font text-lg mt-8">We're your go-to squad for web development, SEO, content management, and Google Ads. We'll make your online presence hotter than a Delhi summer.</p>
                            <p className="about-text montserrat-font text-lg mt-4">Why Us? We're not your average tech nerds – we're the Jedi masters of digital marketing. Let's soar to new heights together!</p>
                            <p className="about-text montserrat-font text-lg mt-4">Slide into our DMs like you're making a smooth UPI transaction.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <section className="py-10 sm:py-16 lg:py-24" role="region" aria-labelledby="trusted-companies">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div id="trusted-companies" className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight">
                            Trusted by World-Class Companies, Design Teams & Popular Designers
                        </h2>
                    </div>
                    <div className="mt-12 md:mt-20">
                        <div className="flex justify-center items-center mx-auto max-w-4xl bg-gray-50 rounded-3xl p-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-16">
                                {[...Array(12)].map((_, i) => (
                                    <div key={i} className={`flex justify-center ${i >= 4 ? 'hidden md:flex' : ''}`}>
                                        <img
                                            className="object-contain w-full h-8"
                                            src={`https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-${i + 1}.png`}
                                            alt={`Logo of company ${i + 1} that trusts Diliate`}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 bg-white sm:py-16 lg:py-24" role="region" aria-labelledby="easy-projects">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div id="easy-projects" className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <div className="relative lg:mb-12">
                            <img className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg" alt="Decorative Dots Pattern" />
                            <div className="pl-12 pr-6">
                                <img className="relative rounded-3xl" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg" alt="Diliate expert working on a project" loading="lazy" />
                            </div>
                            <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                                <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                                    <div className="px-3 py-4 sm:px-5 sm:py-8">
                                        <div className="flex items-start">
                                            <p className="text-3xl sm:text-4xl">👋</p>
                                            <blockquote className="ml-5">
                                                <p className="text-sm font-medium text-white sm:text-lg">They made it so simple. My new site is so much faster and easier to work with than my old site.</p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="2xl:pl-16">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">We Make Things Easy for Projects at DILIATE</h2>
                            <p className="text-xl leading-relaxed text-gray-900 mt-9">At Diliate, we ensure that your projects run smoothly and efficiently. Our solutions are designed to streamline processes and enhance productivity.</p>
                            <p className="mt-6 text-xl leading-relaxed text-gray-900">Our team of experts is dedicated to providing top-notch service and support, ensuring that your goals are met with ease and precision.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="home-process" role="region" aria-labelledby="process-section">
                <Header spantext="PROCESS" image={ladder} content="Streamlined Digital Process" light={false} />
                <div id="process-section" className="illustrations">
                    <motion.div className="illustration-content"
                        initial={{ opacity: 0, y: 110 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}>
                        <img src={charts} loading="lazy" alt="Data Analysis and Visualization" />
                        <div className="illustration-text">
                            <h4>Data Analysis</h4>
                            <p>Utilizing advanced analytics for informed decision-making.</p>
                        </div>
                    </motion.div>
                    <motion.div className="illustration-content reverse" style={{ marginTop: '40px' }}
                        initial={{ opacity: 0, y: 110 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}>
                        <img src={notification} loading="lazy" alt="Project Management Efficiency" />
                        <div className="illustration-text">
                            <h4>Project Management</h4>
                            <p>Efficient task execution for timely delivery.</p>
                        </div>
                    </motion.div>
                    <motion.div className="illustration-content"
                        initial={{ opacity: 0, y: 110 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}>
                        <img src={graphics} loading="lazy" alt="Tracking Key Performance Metrics" />
                        <div className="illustration-text">
                            <h4>Performance Tracking</h4>
                            <p>Monitoring key metrics for sustainable growth.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <TestimonialsSection />
            <div className="text-[#fff] pb-[2rem] lg:w-[90%] max-w-[1200px] m-auto px-6 md:px-10 mt-[3rem]">
                <div className="relative">
                    <motion.img
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        src={soboImage}
                        alt="Ready to Start a Project?" className="w-full h-auto object-cover rounded-2xl md:rounded-none" />
                    <div className="absolute top-5 left-5 md:top-10 md:left-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="text-2xl md:text-5xl lg:text-[4rem] mb-[1rem] md:mb-[2rem] lg:mb-[3rem] font-bold uppercase lg:w-[90%] md:w-[70%]">
                            Ready to Start a Project?
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.3 }}>
                            <button
                                onClick={() => navigate('/contactUs')}
                                className="bg-black text-white py-2 px-4 rounded-lg font-semibold text-lg">
                                Start Now
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
