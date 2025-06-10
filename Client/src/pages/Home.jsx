import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import Button from '../components/Button';
import { itemVariants } from '../components/Variants';
import { Testimonials } from './Testimonials';
import Partners from '../components/Partners';
// Data imports
import { textContent } from '../components/constants'

// home svg elements
const FirstSVG = ({ fill, size }) => (
  <svg fill={fill} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M0 5.04V4l4-4h8l4 4v1.04L8 16 0 5.04zM2 5l6 8.5L4 5H2zm12 0h-2l-4 8.5L14 5zM6 5l2 6 2-6H6zM4 2L2 4h2l2-2H4zm8 0h-2l2 2h2l-2-2zM7 2L6 4h4L9 2H7z" fillRule="evenodd"></path>
    </g>
  </svg>
);

const SecondSVG = ({ fill, size }) => (
  <svg fill={fill} viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier"><path d="M16.434 8.596c1.152 0 2.237.449 3.053 1.264.815.816 1.266 1.9 1.266 3.056s-.45 2.239-1.268 3.056c-.813.815-1.898 1.266-3.053 1.266s-2.238-.449-3.055-1.266l-1.376-1.32-1.395 1.338c-.797.799-1.882 1.248-3.036 1.248-1.154 0-2.239-.449-3.054-1.267-.815-.813-1.265-1.899-1.265-3.053s.45-2.237 1.267-3.056c.814-.813 1.898-1.266 3.053-1.266 1.154 0 2.239.449 3.055 1.266l1.375 1.32 1.396-1.34c.798-.797 1.882-1.246 3.037-1.246m0-2c-1.679 0-3.25.645-4.433 1.813-1.163-1.159-2.746-1.813-4.43-1.813-1.688 0-3.274.657-4.467 1.853-1.194 1.192-1.852 2.78-1.852 4.469s.658 3.274 1.852 4.468c1.191 1.192 2.779 1.852 4.468 1.852 1.679 0 3.251-.645 4.431-1.814 1.163 1.16 2.746 1.814 4.431 1.814 1.689 0 3.276-.658 4.469-1.854 1.193-1.188 1.852-2.776 1.852-4.467 0-1.688-.658-3.274-1.852-4.47-1.197-1.195-2.783-1.851-4.469-1.851zM7.571 12.096c.225 0 .426.088.612.271l.57.548-.603.579c-.141.142-.352.223-.578.223-.227 0-.438-.08-.58-.223-.155-.155-.24-.36-.24-.578 0-.221.084-.422.243-.581.156-.155.355-.239.576-.239m0-1c-.486 0-.942.189-1.285.533-.345.346-.535.801-.535 1.287 0 .484.189.941.533 1.285.344.344.815.516 1.287.516.471 0 .942-.172 1.285-.516l1.339-1.285-1.321-1.27c-.36-.361-.817-.55-1.303-.55zM16.434 12.113c.228 0 .438.08.576.219.158.159.242.359.242.582s-.083.422-.243.581c-.144.146-.352.228-.571.228-.23 0-.444-.088-.617-.261l-.571-.548.603-.578c.141-.143.353-.223.581-.223m0-1c-.472 0-.943.172-1.287.516l-1.34 1.285 1.322 1.27c.362.361.838.539 1.311.539.472 0 .937-.177 1.279-.521.346-.344.534-.801.534-1.287s-.188-.941-.532-1.287c-.346-.344-.817-.515-1.287-.515z"></path></g>
  </svg>
);

const ThirdSVG = ({ fill, size }) => (
  <svg fill={fill} viewBox="-1 -1 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" width={size} height={size} className="jam jam-plane-f">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier"><path d="M12.685 13.285l-3.44 3.06.528 2.423-2.488 2.488-2.507-3.921-3.921-2.507 2.488-2.488L5.9 13l2.927-3.573-6.171-4.114 2.828-2.829L13.2 5.057l3.793-3.793c1.171-1.172 2.985-1.258 4.05-.193s.978 2.878-.193 4.05l-3.793 3.793 2.571 7.713-2.828 2.829-4.114-6.171z"></path></g>
  </svg>
);

export default function Home() {
  const cardInfo = [
    {
      icon: <FirstSVG />,
      title: "objective",
      description: "To form a vital network of community media outlets and journalists across the country"
    },
    {
      icon: <SecondSVG />,
      title: "OUR VISION",
      description: 'To inspire and empower generations of journalists to engage communities through localized factual solution-based reporting.'
    },
    {
      icon: <ThirdSVG />,
      title: "OUR MISSION",
      description: 'To promote the flow of information while creating viable media, championing innovation.'
    }
  ];

  return (
    <div className="home">
      <Helmet>
        <title>AGJK Kenya | Association of Grassroot Journalists of Kenya</title>
        <meta 
          name="description" 
          content="The Association of Grassroot Journalists of Kenya (AGJK) connects and empowers community media professionals across Kenya to promote factual, solution-based journalism." 
        />
        <meta 
          name="keywords" 
          content="AGJK, Kenya journalists, community media Kenya, grassroots journalism, Kenyan reporters, media association Kenya, journalism network" 
        />
        <meta property="og:title" content="AGJK Kenya | Empowering Community Journalists" />
        <meta 
          property="og:description" 
          content="Connecting and supporting grassroots journalists across Kenya to promote factual, community-focused reporting." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.agjkenya.com" />
        <meta property="og:image" content="https://www.agjkenya.com/images/og-agjk-home.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AGJK Kenya | Association of Grassroot Journalists of Kenya" />
        <meta 
          name="twitter:description" 
          content="The voice of community journalists in Kenya - promoting professional standards and factual reporting." 
        />
        <meta name="twitter:image" content="https://www.agjkenya.com/images/twitter-agjk-home.jpg" />
        <link rel="canonical" href="https://www.agjkenya.com" />
        
        {/* Structured data for SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Association of Grassroot Journalists of Kenya",
              "alternateName": "AGJK",
              "url": "https://www.agjkenya.com",
              "logo": "https://www.agjkenya.com/images/agjk-logo.png",
              "sameAs": [
                "https://www.facebook.com/AGJKenya",
                "https://twitter.com/AGJKenya",
                "https://www.linkedin.com/company/agjkenya"
              ],
              "description": "Professional association connecting and empowering community journalists across Kenya"
            }
          `}
        </script>
      </Helmet>

      <HeroSection />
      <Cards cards={cardInfo} iconSize={48} />
      
      {/* Join Section */}
      <motion.div className="flex flex-col items-center justify-center bg-[#640433] max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white text-center rounded-2xl"
        variants={itemVariants}>
        <div className="max-w-3xl space-y-10">
          <p className="text-xl md:text-2xl py-2 font-bold capitalize">Join Us</p>
          <p className="text-sm md:text-base font-light">
            AGJK recognizes that there are many community media journalists spread out across community radio stations, television stations, freelancers, bloggers, and media practitioners who are dedicated to upholding the highest professional standards in their journalistic work, producing and disseminating factual and relevant information to the Kenyan masses through different community-based platforms.
          </p>
          <div className="flex justify-center mt-4">
            <Link
              to="/contact"
              className="bg-white text-[#640433] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Join Now
            </Link>
          </div>
        </div>
      </motion.div>

      {/* partners section */}
      <Partners />

      {/* Registered */}
      <Testimonials />
    </div>
  );
}