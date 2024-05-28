import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import soboImage from '../../assets/homeimages/sobo.png';
import ladder from "../../assets/homeimages/ladder.png"
import charts from "../../assets/homeimages/charts.png"
import graphics from "../../assets/homeimages/Graphics.png"
import notification from "../../assets/homeimages/notification.png"
import Nav from "../../components/navigation/navigation"
import ServicesContainer from "../../components/services-component/services-container"
import Header from "../../components/header/header"
import "./home.css"
import Footer from "../../components/footer/footer";
import { useNavigate } from 'react-router-dom';



// Why use this concept?
// Organization: It helps in organizing content in a structured and user-friendly manner. Users can easily navigate through different topics by expanding or collapsing sections.
// Space Efficiency: It saves space on the page by hiding content that is not immediately relevant to the user. Only the headers are visible, and the content is revealed upon interaction.
// User Experience: It improves the user experience by making the content more digestible and easier to navigate. Users can focus on one topic at a time, reducing cognitive load.



/* The map Function: This is a method available on arrays in JavaScript. It's used to create a new array by applying a function to each element of the original array. This is particularly useful when you want to transform an array of data into a different format. */
/* Why Use map in React?: In React, map is often used to render lists of components. Each item in the array can represent data for a component, and map allows you to iterate over this data to create a list of components. This is a common pattern in React for displaying dynamic data, such as a list of users, products, or any other collection of items. */
/* How It Works: When you use map to render a list in React, you typically pass a function to map that returns a JSX element for each item in the array. This function is called for each item in the array, and it receives the current item and its index as arguments. The index can be used as a key for each element in the list, which helps React identify which items have changed, are added, or are removed. */
/* Example: Consider an array of objects, where each object represents a user with a name and an email. You want to render a list of these users in a React component. Here's how you might use map to achieve this: */
/* Iterating Over the Array: map is used to iterate over the array of users. For each user, it creates a list item that displays the user's name and email. */
/* Using the Index as a Key: The key prop is set to the index of the user in the array, which is used by React to optimize the rendering of the list. However, using the index as a key is generally not recommended if the list can change, as it can lead to performance issues and bugs. A unique identifier from the data itself (like a user ID) is usually a better choice. */


function Home() {

    const navigate = useNavigate();

    return (
        <div>
            <header className="hero">
                <Nav page="home" />

                <div className="banner">
                    <div className="banner-content">
                    <h1 style={{ margin: '0px' }} className="banner-text">A Fully Integrated Digital
                            <span style={{ color: '#5956e8' }}> Marketing </span>Agency
                        </h1>
                        <p style={{ margin: '0px' }} className='dummy-text'>We understand our customer's needs and hence our work approach & systems
                            will tend to know many things about the project result.</p>

                        <div className="banner-buttons">

                            <Link to="/login" className="banner-services">Get Started</Link>
                            <Link to="/services" className="banner-services">Services</Link>
                        </div>

                    </div>
                    <div className="banner-image" style={{ overflow: 'hidden' }}>
                    <motion.img
    src='./static/images/Blue Clay Hovering Geometry Pack.png'
    className="monitor"
    alt=""
    whileHover={{ scale: 1, rotate: 60 }} // Scale up on hover
    whileTap={{ scale: 1, rotate: 0 }} // Scale up on tap
    initial={{ scale: 1, rotate: 180 }} // Initial state
    animate={{ scale: 1.3, rotate: 360 }} // Animation to apply (rotate by 360 degrees)
    transition={{ duration: 2 }} // Transition duration
/>




</div>
                </div>
            </header>
            <ServicesContainer />
            <div className="home-about">
                <motion.div className="about-image-container"
                    initial={{ opacity: 0, y: 110 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}>
                    <img className="about-image" src='./static/images/s2.jpg' loading="lazy" />
                </motion.div>
                <div className="about-container">
            <motion.div
                style={{ position: "relative", zIndex: "1" }}
                initial={{ opacity: 0, y: 110 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className="about-sub">
                    <div></div>
                    <div className="about-title">
                        <div></div>
                        <p className="about-info"><span></span></p>
                        <h2 className="font-orbitron text-4xl">Your Trusted Digital Partner</h2>
                    </div>
                </div>
                <hr className="adjustable-line" />
<div className="about-text-container">
<hr className="adjustable-line" />
<p className="about-text text-lg mt-4">Welcome to Diliate – where we turn digital dreams into decentralized reality!</p>
    <p className="about-text montserrat-font text-lg mt-4"> we're your go-to squad for webDev, Seo, CM, GoogleAds . We'll make your online presence hotter than a Delhi summer.</p>
    <p className="about-text montserrat-font text-lg mt-4">Why Us? We're not your average tech nerds – we're the Jedi masters of the Digital marketing .Let's soar to new heights together!</p>
    <p className="about-text montserrat-font text-lg mt-4">Slide into our DMs like you're making a smooth UPI transaction .</p>


</div>

            </motion.div>
        </div>
            </div>
            <div className="home-process">
                <Header spantext="PROCESS" image={ladder} content="Streamlined Digital Process" light={false} />
                <div className="illustrations">
                    <motion.div className="illustration-content"
                        initial={{ opacity: 0, y: 110 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}>
                        <img src={charts} loading="lazy" alt="Data Visualization" />
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
                        <img src={notification} loading="lazy" alt="Task Management" />
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
                        <img src={graphics} loading="lazy" alt="Growth Metrics" />
                        <div className="illustration-text">
                            <h4>Performance Tracking</h4>
                            <p>Monitoring key metrics for sustainable growth.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="text-[#fff] pb-[2rem] lg:w-[90%] max-w-[1200px] m-auto px-6 md:px-10 mt-[3rem]">
                <div className="relative">
                    <motion.img
                        initial={{
                            opacity: 0,
                            y: 150,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8, delay: 0.4 },
                        }}
                        src={soboImage}
                        alt=""
                        className="w-full h-auto object-cover rounded-2xl md:rounded-none"
                    />
                    <div className="absolute top-5 left-5 md:top-10 md:left-10">
                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.8, delay: 0.9 },
                            }}
                            className="text-2xl md:text-5xl lg:text-[4rem] mb-[1rem] md:mb-[2rem] lg:mb-[3rem] font-bold uppercase lg:w-[90%] md:w-[70%]"
                        >
                            Ready to start a project ?
                        </motion.h2>

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.8, delay: 1.3 },
                            }}
                        >
                            <button
                                onClick={() => navigate('/contactUs')}
                                className="bg-black text-white py-2 px-4 rounded-lg font-semibold text-lg"
                            >
                                Start Now
                            </button>

                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home