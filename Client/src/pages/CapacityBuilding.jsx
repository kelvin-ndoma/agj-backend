import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import community from '../gallery/community.jpg';
import conferenceImg from '../assets/mic.jpg';
import Awards from '../gallery/Awards.jpg';
import trainingImg from '../assets/workshop.jpg';
import networkingImg from '../assets/work.png';
import Media from '../gallery/media.jpg'
import pannel from '../assets/pannel.jpg'
import Highlight1 from '../assets/Awards1.jpg'
import Highlight2 from '../gallery/Awards2.jpg'
import Highlight3 from '../gallery/Awards3.jpg'
import Highlight4 from '../gallery/Awards4.jpg'
import Highlight5 from '../gallery/Highlight5.jpg'
import Highlight6 from '../gallery/Awards 6.jpg'
import Highlight7 from '../gallery/Highlight7.jpg'
import Highlight8 from '../gallery/Awards8.jpg'
import Highlight9 from '../gallery/Awards9.jpg'
import Highlight10 from '../gallery/Awards10.jpg'





const externalGalleryUrl = "https://agjk83.pixieset.com/associationofgrassrootjournalistsofkenyaagjkconference/highlights/"
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const CapacityBuilding = () => {
  return (
    <div className="w-full bg-gray-50">

      <Helmet>
        <title>Capacity Building Programs | AGJK - Empowering Grassroots Journalists in Kenya</title>
        <meta
          name="description"
          content="AGJK offers comprehensive capacity building programs including mentorship, media conferences, and journalism awards to empower grassroots journalists across Kenya."
        />
        <meta
          name="keywords"
          content="AGJK Kenya, journalism training Kenya, media mentorship, community journalism awards, grassroots media, journalist capacity building, Kenya media conferences"
        />
        <meta property="og:title" content="Capacity Building Programs | AGJK Kenya" />
        <meta
          property="og:description"
          content="Enhancing journalism skills through mentorship, training, and recognition programs for community journalists in Kenya."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.agjkenya.com/capacity-building" />
        <meta property="og:image" content="https://www.agjkenya.com/images/og-capacity-building.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Capacity Building Programs | AGJK Kenya" />
        <meta
          name="twitter:description"
          content="Empowering journalists through training, mentorship, and professional development in Kenya."
        />
        <meta name="twitter:image" content="https://www.agjkenya.com/images/twitter-capacity-building.jpg" />
        <link rel="canonical" href="https://www.agjkenya.com/capacity-building" />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        className="w-full py-24 md:py-32 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 mb-6 leading-tight">
              Capacity <span className="text-yellow-500">Building</span>
            </h1>
            <motion.p
              className="text-xl text-gray/90 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Empowering journalists through training, mentorship, and professional development
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mentorship Program */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#640433] mb-8 text-center"
            variants={itemVariants}
          >
            Mentorship Program
          </motion.h2>

          {/* Image Card */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
            variants={itemVariants}
          >
            <div className="relative w-full aspect-video max-h-[400px]">
              <img
                src={community}
                alt="Journalists in mentorship session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 md:p-6">
                <div className="w-full max-w-4xl mx-auto">
                  <span className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold mb-2">
                    Active Program
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                    AGJK Mentorship Program 2025
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-700 mb-4">
                The AGJK Mentorship Program is a transformative initiative designed to equip 160 journalists across Kenya with specialized skills in health reporting, climate change, gender-sensitive reporting, and audio production. This program combines expert-led training with hands-on story development to create impactful journalism.
              </p>
            </div>
          </motion.div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Program Focus */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#640433]"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-[#640433] mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Program Focus Areas
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2 mt-1">•</span>
                  <span><strong>Health Reporting (SRHR)</strong> – Training on sensitive and accurate reporting of sexual and reproductive health issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2 mt-1">•</span>
                  <span><strong>Climate Change & Environment</strong> – Developing skills to report on environmental challenges and solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2 mt-1">•</span>
                  <span><strong>Gender-Sensitive Reporting</strong> – Promoting balanced and inclusive journalism practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2 mt-1">•</span>
                  <span><strong>Audio Production</strong> – Skills development for podcasting and radio journalism</span>
                </li>
              </ul>
            </motion.div>

            {/* Program Details */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#640433]"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-[#640433] mb-4">Program Structure</h3>
              <p className="text-gray-700 mb-4">
                The 5-month program (April-August 2025) combines virtual and in-person sessions, with participants receiving personalized mentorship from seasoned journalists. Each participant will develop and publish at least one in-depth story in their focus area.
              </p>
              <h3 className="text-xl font-bold text-[#640433] mb-4 mt-6">Expected Outcomes</h3>
              <p className="text-gray-700 mb-4">
                Participants will emerge with enhanced reporting skills, a stronger professional network, and published work that demonstrates their expertise. Outstanding stories will be recognized at the AGJK Community Journalism Awards.
              </p>
              <div className="bg-[#640433]/10 p-4 rounded-lg mt-4">
                <p className="text-[#640433] font-medium">
                  Join the conversation: <span className="font-bold">#AGJKMentorship #JournalismForImpact</span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Media Conference */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#640433] mb-8 text-center"
            variants={itemVariants}
          >
            Community Media Conference
          </motion.h2>

          {/* Image Card */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
            variants={itemVariants}
          >
            <div className="relative h-64 md:h-80">
              <img
                src={Media}
                alt="Media conference attendees"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <span className="inline-block bg-[#640433] text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
                    Completed
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    AGJK Community Media Conference 2024
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                The AGJK Community Media Conference 2024 brought together 100 journalists and media stakeholders in Mombasa to discuss "Unlocking the Potential of Community Media in Kenya". The two-day event featured panel discussions, workshops, and networking opportunities.
              </p>
            </div>
          </motion.div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Conference Highlights */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#640433]"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-[#640433] mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Conference Highlights
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2">✓</span>
                  <span><strong>Keynote addresses</strong> from media leaders and policymakers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2">✓</span>
                  <span><strong>Panel discussions</strong> on SRHR reporting, climate journalism, and media sustainability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2">✓</span>
                  <span><strong>Skills workshops</strong> on investigative techniques and digital storytelling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2">✓</span>
                  <span><strong>Networking sessions</strong> with media organizations and CSOs</span>
                </li>
              </ul>
            </motion.div>

            {/* Partner Organizations */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#640433]"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-[#640433] mb-4">Partner Organizations</h3>
              <p className="text-gray-700 mb-4">
                The conference featured participation from leading organizations including:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Habitat for Humanity",
                  "MSF",
                  "Girl Effect",
                  "Human Doc Foundation",
                  "SATO",
                  "WSUP",
                  "KenGen",
                  "TICAH",
                  "TISA"
                ].map((org, index) => (
                  <span key={index} className="bg-[#640433]/10 text-[#640433] px-3 py-1 rounded-full text-sm">
                    {org}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Conference Outcomes */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#640433] md:col-span-2"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Content Section */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#640433] mb-4">Conference Outcomes</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#640433] mr-2">→</span>
                      <span>Strengthened networks among community journalists across Kenya</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#640433] mr-2">→</span>
                      <span>Development of a community media charter outlining best practices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#640433] mr-2">→</span>
                      <span>Commitments from partners to support grassroots journalism initiatives</span>
                    </li>
                  </ul>
                </div>

                {/* Button Section - Aligned to the right */}
                <div className="md:self-center">
                  <Link
                    to="/highlights"
                    className="inline-block bg-[#640433] hover:bg-[#8a0550] text-white font-bold py-3 px-10 rounded-xl shadow-md transition-colors duration-300 whitespace-nowrap"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Journalism Awards */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#640433] mb-8 text-center"
            variants={itemVariants}
          >
            Community Journalism Awards
          </motion.h2>

          {/* Image Card */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
            variants={itemVariants}
          >
            <div className="relative h-64 md:h-80">
              <img
                src={Awards}
                alt="Journalism awards ceremony"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <span className="inline-block bg-[#640433] text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
                    Annual Event
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    AGJK Community Journalism Awards
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Launched in 2022, the AGJK Community Journalism Awards recognize excellence in grassroots reporting across Kenya. The awards celebrate journalists who produce impactful stories on community issues, often with limited resources.
              </p>
            </div>
          </motion.div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Award Categories */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#640433]"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-[#640433] mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Award Categories
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2 mt-1">•</span>
                  <span>Health Reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2 mt-1">•</span>
                  <span>Investigative Reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2 mt-1">•</span>
                  <span>Environment And Climate Change Reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2 mt-1">•</span>
                  <span>Governance And Advocacy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2 mt-1">•</span>
                  <span>Technology Innovations And Business Reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2 mt-1">•</span>
                  <span>Gender Reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2 mt-1">•</span>
                  <span>Sports And Culture Reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2 mt-1">•</span>
                  <span>Humanitarian Reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#640433] mr-2 mt-1">•</span>
                  <span>Children Reporting</span>
                </li>
              </ul>
            </motion.div>

            {/* Award Impact */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#640433]"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-[#640433] mb-4">Impact of the Awards</h3>
              <p className="text-gray-700 mb-4">
                Since inception, the awards have recognized over 50 journalists from across Kenya. Winners receive cash prizes, mentorship opportunities, and platforms to showcase their work to wider audiences.
              </p>
              <h3 className="text-xl font-bold text-[#640433] mb-4 mt-6">2024 Highlights</h3>
              <p className="text-gray-700">
                The 2024 awards ceremony was held in Mombasa, with winners selected from over 399 submissions. Winning stories addressed critical issues including maternal health, climate adaptation, and gender-based violence.
              </p>
              <div className="mt-10">
                <a
                  href={externalGalleryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group"
                >
                  <button className="relative overflow-hidden bg-gradient-to-r from-[#7a053d] to-[#640433] text-white px-6 py-3 rounded-lg hover:to-[#7a053d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <span className="relative z-10 flex items-center">
                      See Highlights
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#8a0745] to-[#7a053d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                  </button>
                </a>
              </div>
            </motion.div>

            {/* Awards Highlights Carousel */}
            <motion.div
              className="md:col-span-2"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-[#640433] mb-6 text-center">Awards Highlights Gallery</h3>
              <div className="relative w-full overflow-hidden">
                <div className="flex space-x-4 py-4 overflow-x-auto snap-x snap-mandatory scroll-smooth">
                  {/* Replace these image sources with your actual award highlight images */}
                  <div className="flex-shrink-0 w-80 h-64 snap-center">
                    <img
                      src={Highlight1}
                      alt="Award ceremony highlight 1"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-shrink-0 w-80 h-64 snap-center">
                    <img
                      src={Highlight2}
                      alt="Award ceremony highlight 2"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-shrink-0 w-80 h-64 snap-center">
                    <img
                      src={Highlight3}
                      alt="Award ceremony highlight 3"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-shrink-0 w-80 h-64 snap-center">
                    <img
                      src={Highlight4}
                      alt="Award ceremony highlight 4"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-shrink-0 w-80 h-64 snap-center">
                    <img
                      src={Highlight5}
                      alt="Award ceremony highlight 5"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-shrink-0 w-80 h-64 snap-center">
                    <img
                      src={Highlight6}
                      alt="Award ceremony highlight 6"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-shrink-0 w-80 h-64 snap-center">
                    <img
                      src={Highlight7}
                      alt="Award ceremony highlight 7"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-shrink-0 w-80 h-64 snap-center">
                    <img
                      src={Highlight8}
                      alt="Award ceremony highlight 8"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-shrink-0 w-80 h-64 snap-center">
                    <img
                      src={Highlight9}
                      alt="Award ceremony highlight 9"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-shrink-0 w-80 h-64 snap-center">
                    <img
                      src={Highlight10}
                      alt="Award ceremony highlight 10"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Join Conversation */}
            <motion.div
              className="bg-gradient-to-r from-[#640433] to-[#420218] p-6 rounded-xl shadow-lg md:col-span-2"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-white mb-4">Nominate for 2025 Awards</h3>
              <p className="text-[#ffffffcc] mb-4">
                Nominations for the 2025 AGJK Community Journalism Awards will open in September 2025. Stay tuned for updates on categories, judging criteria, and submission guidelines.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-[#640433]">
                  #AGJKAwards
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-[#640433]">
                  #CommunityJournalism
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Training Gallery */}
        <motion.div
          className="mb-16 px-4 sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#640433] mb-6 sm:mb-8 text-center"
            variants={itemVariants}
          >
            Training Gallery
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                image: trainingImg,
                title: "Workshops",
                description: "Hands-on training sessions with industry experts"
              },
              {
                image: networkingImg,
                title: "Networking",
                description: "Building connections among media professionals"
              },
              {
                image: pannel,
                title: "Panel Discussions",
                description: "Engaging conversations on media topics"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#640433]"
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-40 sm:h-48 mb-3 sm:mb-4 rounded-md sm:rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.section
          className="text-center bg-[#640433] rounded-2xl py-16 px-6 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to enhance your journalism skills?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl opacity-90">
            Join our programs and become part of a growing network of community journalists.
          </p>
          <div className="mt-8">
            <motion.button
              className="px-8 py-4 border-2 border-white text-base font-medium rounded-md text-[#640433] bg-white hover:bg-transparent hover:text-white transition-colors md:py-4 md:text-lg md:px-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Involved
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CapacityBuilding;