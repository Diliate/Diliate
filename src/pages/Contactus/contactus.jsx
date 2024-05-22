import React, { useState } from 'react';
import { motion } from "framer-motion";
import handshake from "../../assets/aboutimages/handshake.png";
import phone from "../../assets/aboutimages/phone 2.png";
import location from "../../assets/aboutimages/location.png";
import envelope from "../../assets/aboutimages/envelope 2.png";
import Nav from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import ContactBox from "../../components/contactbox/contactbox";
import Footer from "../../components/footer/footer";
import "./contactus.css";
import { db } from "../../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
    const [setSubmissionAttempted] = useState(false); // New state to track submission attempts

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        setSubmissionAttempted(true); // Mark that a submission attempt has been made

        try {
            // Save form data to Firestore
            await addDoc(collection(db, "query"), formData);
            console.log("Document successfully written!");
            setIsSubmitted(true); // Update isSubmitted state to true upon successful submission
        } catch (error) {
            console.error("Error writing document: ", error);
            setIsSubmitted(false); // Reset isSubmitted state if there's an error
        }
    };

    

    return (
        <div>
            <header className="services-hero" style={{ background: "linear-gradient(111.23deg, #F5E9FF 9.95%, #FFDBD5 85.17%)" }}>
                <Nav page="contact" />
                <div className="banner-container">
                    <Banner text="Contact" bluetext="us" first="#FFFA76" second="#E326AE" third="#ffc4bb" />
                </div>
            </header>
            <div className="contactus-contact-container">
                <div className="contactus-contact-header">
                    <Header image={handshake} spantext="CONTACT US" content="Let's market awesome together" light={false} />
                </div>
                <div className="contactus-cards">
                    <ContactBox image={envelope} buttontext="Contact" title="Email" text="Info@diliate.com" />
                    <ContactBox image={phone} buttontext="Call" title="Phone" text="7982169989" />
                    <ContactBox image={location} buttontext="Office" title="Location" text="FCA – 2104, SGM Nagar Faridabad, Haryana, 121001" />
                </div>
            </div>
            <motion.div className="contactus-form"
                initial={{ opacity: 0, y: 110 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}>
                <div className="contactus-form-inner">
                    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ marginBottom: '20px' }}>Contact Us</h2>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }} />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }} />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Company</label>
                            <input type="text" name="company" value={formData.company} onChange={handleChange} style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }} />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Subject</label>
                            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }} />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} required style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
                        </div>
                        <button type="submit" style={{ padding: '10px 20px', color: 'white', backgroundColor: '#007bff', textAlign: 'center', cursor: 'pointer', border: 'none', borderRadius: '4px', transition: 'background-color 0.3s ease' }}>Send Message</button>
                    </form>
                </div>
            </motion.div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5px' }}>
    {isSubmitted && <p style={{ marginRight: '-20px', color: 'black' }}>Your message has been sent!</p>}
</div> 
            <Footer />
        </div>
    );
}

export default ContactUs;
