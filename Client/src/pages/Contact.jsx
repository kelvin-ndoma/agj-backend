import { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Map from "../components/Map";
import { contactInfo, busInfo } from "../assets/data";

const Contact = () => {
  const form = useRef();
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUB_KEY;

  const validateForm = () => {
    let isValid = true;
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    setNameError(name ? '' : 'Name is required');
    setEmailError(email ? (/\S+@\S+\.\S+/.test(email) ? '' : 'Invalid email format') : 'Email is required');
    setMessageError(message ? '' : 'Message is required');

    if (!name || !email || !/\S+@\S+\.\S+/.test(email) || !message) {
      isValid = false;
    }
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(serviceId, templateId, form.current, publicKey)
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            setSuccessMessage('Your message has been received. We will be in touch shortly.');
            form.current.reset();
            setNameError('');
            setEmailError('');
            setMessageError('');
            setTimeout(() => {
              setSuccessMessage('');
            }, 5000);
          },
          (error) => {
            console.error('FAILED...', error);
            setSuccessMessage('Failed to send message. Please try again.');
            setTimeout(() => {
              setSuccessMessage('');
            }, 5000);
          },
        );
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Helmet>
          <title>Contact Us | AGJK - Connect with Grassroots Journalism Kenya</title>
          <meta
            name="description"
            content="Get in touch with AGJK for media collaborations, support, or questions regarding our grassroots journalism programs in Kenya."
          />
          <meta
            name="keywords"
            content="AGJK Kenya contact, grassroots journalism support, media inquiries Kenya, journalism Kenya, contact AGJK, journalist mentorship Kenya"
          />
          <meta property="og:title" content="Contact Us | AGJK Kenya" />
          <meta
            property="og:description"
            content="Reach out to AGJK for media partnerships, support, and general inquiries about empowering grassroots journalists in Kenya."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.agjkenya.com/contact" />
          <meta property="og:image" content="https://www.agjkenya.com/images/og-contact.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Contact Us | AGJK Kenya" />
          <meta
            name="twitter:description"
            content="Have a question or want to collaborate? Contact AGJK and be part of empowering grassroots journalism in Kenya."
          />
          <meta name="twitter:image" content="https://www.agjkenya.com/images/twitter-contact.jpg" />
          <link rel="canonical" href="https://www.agjkenya.com/contact" />
        </Helmet>

        {/* Contact Us Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-8 text-[#640433]">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* form */}
          <div className="one">
            <p className="text-xl font-bold text-start py-4">
              Let's Connect. Your Questions Answered.
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              id="contactForm"
              className="space-y-8 p-4 md:p-8 bg-[#800000]/10 rounded-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className={`shadow-sm border ${nameError ? 'border-red-500' : 'border-gray-300'} text-gray-900 bg-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5`}
                    placeholder="John Doe"
                    required
                    onChange={() => setNameError(form.current.user_name.value.trim() ? '' : 'Name is required')}
                  />
                  {nameError && <p className="mt-1 text-red-500 text-sm">{nameError}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className={`shadow-sm border ${emailError ? 'border-red-500' : 'border-gray-300'} text-gray-900 bg-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5`}
                    placeholder="janedoe@gmail.com"
                    required
                    onChange={() => setEmailError(form.current.user_email.value.trim() ? (/\S+@\S+\.\S+/.test(form.current.user_email.value.trim()) ? '' : 'Invalid email format') : 'Email is required')}
                  />
                  {emailError && <p className="mt-1 text-red-500 text-sm">{emailError}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="title"
                  className="shadow-sm border border-gray-300 text-gray-900 bg-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className={`shadow-sm border ${messageError ? 'border-red-500' : 'border-gray-300'} text-gray-900 bg-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5`}
                  placeholder="Leave a comment..."
                  required
                  onChange={() => setMessageError(form.current.message.value.trim() ? '' : 'Message is required')}
                ></textarea>
                {messageError && <p className="mt-1 text-red-500 text-sm">{messageError}</p>}
              </div>
              <button
                type="submit"
                value="Send"
                className="bg-accentColor focus:ring-4 focus:outline-none rounded-xl text-md font-semibold px-6 py-2 text-center text-white bg-[#640433] hover:bg-[#4c2f3d] sm:w-fit"
              >
                Send message
              </button>
            </form>
            {successMessage && (
              <div className="mt-4 p-4 bg-green-200 text-green-800 rounded-md">
                {successMessage}
              </div>
            )}
          </div>

          {/* info */}
          <div className="two">
            <div className="contact-info">
              <p className="text-base font-semibold text-gray-600 pb-2 md:pb-3">
                If you have any questions, please feel free to get in touch with us via phone, text, email, the form below, or even on social media.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2 p-4 bg-[#800000]/10 rounded-xl">
                  <p className="uppercase font-bold text-base">contact information</p>
                  <hr className="text-gray-500" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-cols-1 gap-6 mb-2 items-center">
                      {contactInfo.map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-4 p-4 border-b-6 border-[#640433] rounded-2xl"
                        >
                          {item.icon && <img src={item.icon} alt={item.title} className="w-12 h-12" />}
                          <div>
                            <h3 className="text-sm capitalize font-semibold mb-1 text-start">{item.title}</h3>
                            <p className="text-sm opacity-75 text-start">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* business info */}
                <div className="space-y-2 p-4 bg-[#800000]/10 rounded-xl">
                  <p className="uppercase font-bold text-base">working hours</p>
                  <hr className="text-gray-500" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-cols-1 gap-6 mb-2 items-center">
                      {busInfo.map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-4 p-2 rounded-2xl"
                        >
                          <div>
                            <h3 className="text-sm capitalize font-semibold mb-1 text-start">{item.days}</h3>
                            <p className="text-sm opacity-75 text-start">{item.hours}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* map */}
        <div className="py-6">
          <Map />
        </div>
      </div>
    </>
  );
};

export default Contact;
