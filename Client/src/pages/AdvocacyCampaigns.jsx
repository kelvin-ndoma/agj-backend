import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import youthVoicesImage from '../gallery/Youth Voice.jpg';
import tukisongaImage from '../assets/songa.jpg';
import polandKenyaImage from '../gallery/poland.jpg';


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

const AdvocacyCampaigns = () => {
  return (
    <div className="w-full bg-gray-50">
       <Helmet>
        <title>Advocacy Campaigns | AGJK - Empowering Communities Through Media</title>
        <meta 
          name="description" 
          content="Discover AGJK's impactful advocacy campaigns including Youth Voices Project, Tukisonga SRHR initiative, and Kenya-Poland media collaborations. Empowering communities through media." 
        />
        <meta 
          name="keywords" 
          content="AGJK, advocacy campaigns, youth empowerment, digital literacy, SRHR, Kenya-Poland media, community radio, grassroots journalism" 
        />
        <meta property="og:title" content="Advocacy Campaigns | AGJK - Empowering Communities Through Media" />
        <meta 
          property="og:description" 
          content="Explore our transformative media initiatives that empower youth, promote SRHR, and foster international media collaborations." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.agjkenya.com/advocacy-campaigns" />
        <meta property="og:image" content="https://www.agjkenya.com/images/og-advocacy-campaigns.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advocacy Campaigns | AGJK" />
        <meta 
          name="twitter:description" 
          content="Our initiatives empower communities through media, education, and cross-cultural collaborations." 
        />
        <meta name="twitter:image" content="https://www.agjkenya.com/images/twitter-advocacy-campaigns.jpg" />
        <link rel="canonical" href="https://www.agjkenya.com/advocacy-campaigns" />
      </Helmet>
      {/* Hero Section */}
      <motion.section 
        className="w-full bg-gradient-to-br py-24 md:py-32 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0  z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 mb-6 leading-tight">
              Advocacy <span className="text-yellow-500">Campaigns</span>
            </h1>
            <motion.p 
              className="text-xl text-gray/90 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Our initiatives empower communities through media, education, and cross-cultural collaborations.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Youth Voices Project */}
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
            Youth Voices Project
          </motion.h2>
          
          {/* Image Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
            variants={itemVariants}
          >
            <div className="relative h-64 md:h-80">
              <img 
                src={youthVoicesImage} 
                alt="Youth participating in digital literacy training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <span className="inline-block bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
                    Active Campaign
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    Empowering Youth Through Digital Literacy: The Youth Voices Project – Sauti ya Mukuru
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                The Youth Voices Project – Sauti ya Mukuru is an exciting initiative dedicated to equipping young people from Mukuru Slums, one of the largest informal settlements in Nairobi, with essential skills in entrepreneurship, employability, digitization, and content monetization. This transformative program, implemented by the Association of Grassroot Journalists Kenya (AGJK) with funding from Shining Hope for Communities (SHOFCO), seeks to empower youth to harness digital platforms for economic and social impact.
              </p>
            </div>
          </motion.div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Key Focus Areas */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#640433]"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-[#640433] mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Key Focus Areas
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#800000] mr-2 mt-1">•</span>
                  <span><strong>Entrepreneurship and Financial Literacy</strong> – Equipping youth with knowledge on business development, financial management, and sustainability.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#800000] mr-2 mt-1">•</span>
                  <span><strong>Employability Skills</strong> – Preparing participants for the job market through training on communication, networking, and digital job opportunities.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#800000] mr-2 mt-1">•</span>
                  <span><strong>Digital Literacy & Content Creation</strong> – Enhancing skills in digital storytelling, videography, photography, and creative writing.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#800000] mr-2 mt-1">•</span>
                  <span><strong>Monetization Strategies</strong> – Teaching participants how to generate income through content creation, freelancing, and online business platforms.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#800000] mr-2 mt-1">•</span>
                  <span><strong>Article Writing & Podcast Production</strong> – Providing hands-on training in storytelling, blogging, and audio content creation to help participants share their stories and engage audiences effectively.</span>
                </li>
              </ul>
            </motion.div>

            {/* Project Details */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#640433]"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-[#640433] mb-4">The Journey So Far</h3>
              <p className="text-gray-700 mb-4">
                The project, which kicked off in September 2024, has already seen tremendous engagement and enthusiasm from participants. With ongoing training sessions, hands-on practice, and mentorship, the youth are set to emerge as digital entrepreneurs and change-makers in their communities.
              </p>
              <h3 className="text-xl font-bold text-[#640433] mb-4 mt-6">Looking Ahead</h3>
              <p className="text-gray-700 mb-4">
                As we continue to empower the next generation, we invite stakeholders, digital professionals, and the community to support and collaborate in this journey. The future of digital content creation in Kenya is bright, and through projects like Sauti ya Mukuru, we are shaping a more inclusive and economically empowered society.
              </p>
              <p className="text-gray-700">
                Stay tuned for updates as we showcase the incredible stories and content created by our young changemakers!
              </p>
              <div className="bg-[#640433]/12 p-4 rounded-lg mt-4">
                <p className="text-[#640433] font-medium">
                  Join the conversation: <span className="font-bold">#YouthVoices #SautiyaMukuru #DigitalEmpowerment</span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tukisonga Campaign */}
        <motion.div 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center"
            variants={itemVariants}
          >
            Tukisonga Campaign by Girl Effect
          </motion.h2>
          
          {/* Image Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
            variants={itemVariants}
          >
            <div className="relative h-64 md:h-80">
              <img 
                src={tukisongaImage} 
                alt="Tukisonga campaign participants"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <span className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
                    Completed
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    Tuki Series: A Successful 12-Week SRHR Advocacy Campaign
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                We are thrilled to share the success of the Tuki Series campaign, a Sexual and Reproductive Health and Rights (SRHR) advocacy initiative by Girl Effect under the Wazzi Chatbot. This groundbreaking campaign, which ran from December 27, 2024, to March 14, 2025, leveraged community radio and digital engagement to spark meaningful conversations on SRHR across Kenya.
              </p>
            </div>
          </motion.div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campaign Overview */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Campaign Overview
              </h3>
              <p className="text-gray-700 mb-4">
                The Tuki Series campaign aimed to create awareness and foster dialogue on SRHR issues among young people by utilizing multiple media platforms. Our engagement involved:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>10 community radio stations</strong> – 5 in Nairobi and 5 in Migori County</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>12 weeks of content airing</strong>, featuring Tuki Podcast episodes, radio dramas, and interactive social media discussions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Thousands of listeners engaged</strong>, with enthusiastic participation from young people, community leaders, and SRHR advocates</span>
                </li>
              </ul>
            </motion.div>

            {/* Impact and Success */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-green-700 mb-4">Impact and Success</h3>
              <p className="text-gray-700 mb-4">
                The campaign was met with overwhelming success, as evidenced by:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span>Increased awareness and knowledge of SRHR topics among young audiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span>Vibrant listener participation through call-ins, social media interactions, and community dialogues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span>Strengthened collaboration between media outlets, grassroots organizations, and SRHR stakeholders</span>
                </li>
              </ul>
            </motion.div>

            {/* Looking Ahead */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600 md:col-span-2"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-green-700 mb-4">Looking Ahead</h3>
              <p className="text-gray-700">
                The success of the Tuki Series highlights the power of media-driven advocacy in shaping healthier communities. We look forward to building on these gains, expanding our reach, and continuing to empower young people with the knowledge and confidence to make informed decisions about their health.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Transcontinental Dialogues */}
        <motion.div 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center"
            variants={itemVariants}
          >
            Transcontinental Dialogues: Kenya – Poland (Human Doc)
          </motion.h2>
          
          {/* Image Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
            variants={itemVariants}
          >
            <div className="relative h-64 md:h-80">
              <img 
                src={polandKenyaImage} 
                alt="Kenyan and Polish journalists collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
                    Ongoing Project
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    Transcontinental Dialogues: Poland in Kenya Media Spaces
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                The Transcontinental Dialogues: Poland in Kenya Media Spaces project is an innovative media collaboration designed to foster cross-cultural exchange, professional development, and knowledge sharing between Kenyan and Polish journalists. Funded by the Polish Ministry of Foreign Affairs through Human Doc, and implemented in Kenya with AGJK as the strategic media partner, this initiative aims to enhance journalistic standards while strengthening international media cooperation.
              </p>
            </div>
          </motion.div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Overview - Enhanced Styling */}
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">Project Overview</h3>
                  <p className="text-blue-900/90">
                    The project is structured into three comprehensive modules, each designed to build capacity, exchange best practices, and explore global media trends.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 pl-14">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-bold">
                      1
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">
                      <strong>Strategic Visit to Poland</strong> - Kenyan journalists engaged with Polish media organizations and conducted research on Poland's representation in Kenyan media.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-bold">
                      2
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">
                      <strong>Content Creation</strong> - Production and dissemination of multimedia content to strengthen Polish-Kenyan media relations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-bold">
                      3
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">
                      <strong>Nairobi Conference</strong> - Final event to showcase project outcomes and foster future collaborations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-blue-100">
                <p className="text-blue-800 italic">
                  "Through immersive experiences and strategic dialogues, the initiative promotes ethical reporting, media literacy, and cultural understanding."
                </p>
              </div>
            </motion.div>

            {/* Project Modules */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Project Modules
              </h3>
              
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200">
                    <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-blue-600 -ml-1"></div>
                  </div>
                  <div className="pb-6">
                    <h4 className="text-xl font-bold text-blue-700 mb-2">Module 1: Strategic Visit to Poland & Media Research</h4>
                    <p className="text-gray-700 mb-3">
                      The first phase involved an eight-day strategic visit to Poland by a team of distinguished Kenyan journalists including Dennis Beru (AGJK Team Lead), Bosco Kathima (Programs Lead), and three journalists.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800">
                        The delegation engaged in high-level discussions with Polish media organizations, participated in workshops, and explored Poland's dynamic media landscape.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200">
                    <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-blue-600 -ml-1"></div>
                  </div>
                  <div className="pb-6">
                    <h4 className="text-xl font-bold text-blue-700 mb-2">Module 2: Content Creation & Dissemination</h4>
                    <p className="text-gray-700 mb-3">
                      Scheduled to begin in April, this module will focus on content creation, production, and dissemination through both traditional and digital media platforms.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Multimedia storytelling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Investigative journalism</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Collaborative productions</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200">
                    <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-blue-600 -ml-1"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-700 mb-2">Module 3: Nairobi Conference & Project Conclusion</h4>
                    <p className="text-gray-700">
                      The final module will culminate in a conference in Nairobi to launch reports and highlight the initiative's impact, bringing together media professionals, policymakers, and stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Impact */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 md:col-span-2"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Project Impact
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">Capacity Building</h4>
                    <p className="text-gray-700">Strengthening skills and ethical journalism practices for Kenyan journalists.</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">Cultural Exchange</h4>
                    <p className="text-gray-700">Fostering mutual understanding between Polish and Kenyan media professionals.</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">Media Innovation</h4>
                    <p className="text-gray-700">Exploring new trends in digital storytelling and investigative journalism.</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">Sustainability</h4>
                    <p className="text-gray-700">Establishing long-term partnerships between media entities in both countries.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Join Conversation */}
            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-xl shadow-lg md:col-span-2 relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 opacity-20">
                <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Join the Conversation</h3>
                <p className="text-blue-100 mb-6">
                  Stay updated with the latest activities, insights, and impact stories from the Transcontinental Dialogues: Poland in Kenya Media Spaces project. Follow AGJK and Human Doc on social media for real-time updates and behind-the-scenes coverage.
                </p>
                <p className="font-bold text-white text-lg">
                  Together, we shape the future of journalism beyond borders!
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-blue-700">
                    #TranscontinentalDialogues
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-blue-700">
                    #KenyaPolandMedia
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-blue-700">
                    #JournalismWithoutBorders
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Ongoing & Recent Campaigns */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#640433] mb-8 text-center"
            variants={itemVariants}
          >
            Ongoing & Recent Campaigns
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SATO Products Activation */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#800000]"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-[#800000]/10 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  🚽
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">SATO Products Activation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Empowering Communities through the Sato Engagement: A 10-Week Radio Campaign Across Kenya
              </p>
              <p className="text-gray-700 mb-4">
                We are excited to announce the launch of the Sato Engagement, a dynamic 10-week media initiative designed to promote improved sanitation and hygiene practices in Kenyan communities. This campaign is being implemented across five radio stations strategically located in different counties to ensure wide reach and local impact.
              </p>
              <div className="bg-[#640433]/10 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-[#640433] mb-2">Participating Stations:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Lulu FM – Mombasa County</li>
                  <li>• Mwanedu FM – Taita Taveta County</li>
                  <li>• Ekialo Kiona – Homa Bay County</li>
                  <li>• Gospo FM – Narok County</li>
                  <li>• Radio Injili – Kericho County</li>
                </ul>
              </div>
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Ongoing
              </span>
            </motion.div>

            {/* SRHR Campaign by AFOSI */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#800000]"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-[#800000]/10 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  ❤️
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">SRHR Campaign by AFOSI</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Amplifying Voices on SRHR: A Community Radio Engagement with AFOSI
              </p>
              <p className="text-gray-700 mb-4">
                We are proud to partner with Action for Sustainability Initiative (AFOSI) to roll out a vital Sexual and Reproductive Health and Rights (SRHR) awareness campaign across five community radio stations in Nairobi.
              </p>
              <div className="bg-[#640433]/10 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-[#640433] mb-2">Participating Stations:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Ghetto FM – Majengo</li>
                  <li>• Ruben FM – Mukuru Slums</li>
                  <li>• Pamoja FM – Kibra Slums</li>
                  <li>• Koch FM – Korogocho</li>
                  <li>• Radio Domus – Ngong Area</li>
                </ul>
              </div>
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Ongoing
              </span>
            </motion.div>

            {/* Breathe Nairobi */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#800000]"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-[#800000]/10 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  🌿
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Breathe Nairobi</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Community Voices Drive the Breathe Nairobi Initiative
              </p>
              <p className="text-gray-700 mb-4">
                In partnership with The Nairobi County Government, Muungano wa Wanavijiji, Climate and Clean Air Coalition, Clean Air Fund and National Public Transport Alliance, AGJK conducted a media campaign under the Breathe Nairobi Initiative.
              </p>
              <div className="bg-[#640433]/10 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-[#640433] mb-2">Campaign Highlights:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Daily Presenter Mentions & Radio Spots</li>
                  <li>• Interactive Talk Shows with community participation</li>
                  <li>• Social Media Integration for wider reach</li>
                </ul>
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Completed
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 

export default AdvocacyCampaigns;