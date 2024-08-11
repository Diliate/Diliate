import React, { useState } from "react";
import { motion } from "framer-motion";
import Nav from "../../components/navigation/navigation";
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
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionAttempted, setSubmissionAttempted] = useState(false);

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionAttempted(true);

    try {
      await addDoc(collection(db, "query"), formData);
      setIsSubmitted(true);
    } catch (error) {
      setIsSubmitted(false);
    }
  };
  return (
    <div>
      <Nav page="contact" />

      <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <div class="flow-root mt-12 sm:mt-16">
            <div class="divide-y divide-gray-200 -my-9">
              <div class="py-9">
                <p class="text-xl font-semibold text-black">
                  How do I create an account with Diliate?
                </p>
                <p class="mt-3 text-base text-gray-600">
                  Creating an account with Diliate is simple. Click on the "Get
                  Started" button on our homepage, fill in your details, and
                  you'll be ready to leverage our digital marketing services in
                  no time.
                </p>
                <p class="mt-3 text-base text-gray-600">
                  If you encounter any issues during the process, our support
                  team is here to help. Feel free to reach out to us for
                  assistance.
                </p>
              </div>

              <div class="py-9">
                <p class="text-xl font-semibold text-black">
                  What payment methods do you support?
                </p>
                <p class="mt-3 text-base text-gray-600">
                  At Diliate, we support a variety of payment methods to ensure
                  convenience for our clients. You can pay using credit cards,
                  debit cards, and online payment gateways such as PayPal and
                  Stripe.
                </p>
                <p class="mt-3 text-base text-gray-600">
                  For more information about our payment options, please visit
                  our Payment Methods page or contact our support team.
                </p>
              </div>

              <div class="py-9">
                <p class="text-xl font-semibold text-black">
                  How can I track the progress of my marketing campaigns?
                </p>
                <p class="mt-3 text-base text-gray-600">
                  Diliate provides detailed reporting and analytics for all your
                  marketing campaigns. You can log in to your account dashboard
                  to view real-time data and insights.
                </p>
                <p class="mt-3 text-base text-gray-600">
                  Our team also provides regular updates and performance reviews
                  to ensure you are always informed about the progress of your
                  campaigns.
                </p>
              </div>

              <div class="py-9">
                <p class="text-xl font-semibold text-black">
                  How do you provide support?
                </p>
                <p class="mt-3 text-base text-gray-600">
                  At Diliate, we prioritize our clients' needs. Our support team
                  is available 24/7 to assist you with any queries or issues.
                  You can reach us via email at{" "}
                  <a
                    href="mailto:support@diliate.com"
                    class="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                  >
                    info@diliate.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
          <div class="text-center">
            <p class="font-medium text-blue-500 dark:text-blue-400">
              Contact us
            </p>

            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              Get in touch
            </h1>

            <p class="mt-3 text-gray-500 dark:text-gray-400">
              Our friendly team is always here to chat.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col items-center justify-center text-center">
              <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Email
              </h2>
              <p class="mt-2 text-gray-500 dark:text-gray-400">
                Our friendly team is here to help.
              </p>
              <p class="mt-2 text-blue-500 dark:text-blue-400">
                Info@diliate.com
              </p>
            </div>

            <div class="flex flex-col items-center justify-center text-center">
              <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Office
              </h2>
              <p class="mt-2 text-gray-500 dark:text-gray-400">
                Come say hello at our office HQ.
              </p>
              <p class="mt-2 text-blue-500 dark:text-blue-400">
                Faridabad, Haryana, 121001
              </p>
            </div>
            <div class="flex flex-col items-center justify-center text-center">
              <a
                href="https://api.whatsapp.com/send?phone=7982169989"
                target="_blank"
                rel="noopener noreferrer"
                class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </a>
              <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Phone / Whatsapp
              </h2>
              <p class="mt-2 text-gray-500 dark:text-gray-400"></p>
              <a
                href="https://api.whatsapp.com/send?phone=7982169989"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-2 text-blue-500 dark:text-blue-400"
              >
                7982169989
              </a>
            </div>
          </div>
        </div>
        <div class="bg-white h-[15px]"></div>
      </section>
      <motion.div
        className="contactus-form"
        initial={{ opacity: 0, y: 110 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="contactus-form-inner">
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "auto",
              padding: "20px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Contact Us</h2>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                color: "white",
                backgroundColor: "#007bff",
                textAlign: "center",
                cursor: "pointer",
                border: "none",
                borderRadius: "4px",
                transition: "background-color 0.3s ease",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5px",
        }}
      >
        {isSubmitted && (
          <p style={{ marginRight: "-20px", color: "black" }}>
            Your message has been sent!
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
