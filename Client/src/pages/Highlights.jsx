import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { galleryImages, focusAreas } from "../assets/data";

const HighlightsPage = () => {
  // Key Objectives Data
  const objectives = [
    {
      title: "RAISE AWARENESS",
      description: "The conference aims to increase awareness and understanding of the impact of community media. By highlighting the importance of sustainable practices in the industry, we seek to inspire attendees to take action and drive positive change.",
      icon: "🔍"
    },
    {
      title: "SHARE BEST PRACTICES",
      description: "The conference will provide a platform for industry experts and leaders to share their experiences, success stories, and best practices in community media. Attendees will gain valuable insights and practical strategies to implement in their own newsrooms.",
      icon: "💡"
    },
    {
      title: "FOSTER COLLABORATION",
      description: "Collaboration is essential for driving meaningful change. The conference will facilitate networking opportunities and foster collaboration among professionals from various sectors of the media industry.",
      icon: "🤝"
    },
    {
      title: "PROMOTE INNOVATION",
      description: "Innovation plays a crucial role in advancing sustainability in media. The conference will showcase innovative approaches, technologies, and initiatives that are making a positive impact.",
      icon: "🚀"
    },
    {
      title: "ADDRESS CHALLENGES",
      description: "The conference will provide a platform for discussing the challenges and barriers faced by the industry. Through partnerships and interactive sessions, we aim to identify solutions to overcome these challenges.",
      icon: "🛠️"
    },
    {
      title: "EMPOWER PROFESSIONALS",
      description: "The conference seeks to empower media professionals by equipping them with the knowledge, tools, and resources to incorporate sustainability into their work.",
      icon: "💪"
    }
  ];

  // Gallery state management
  const [showAllImages, setShowAllImages] = useState(false);
  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 12);
  const externalGalleryUrl = "https://agjk83.pixieset.com/associationofgrassrootjournalistsofkenyaagjkconference/";

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Highlights 2024 | AGJK - Celebrating Community Journalism in Kenya</title>
        <meta
          name="description"
          content="Explore the 2024 AGJK Conference highlights, including key objectives, focus areas, and a gallery of impactful moments celebrating grassroots journalism in Kenya."
        />
        <meta
          name="keywords"
          content="AGJK 2024 highlights, grassroots journalism Kenya, media conference Kenya, community journalism photos, journalism best practices, AGJK objectives, AGJK events"
        />
        <meta property="og:title" content="Highlights 2024 | AGJK Kenya" />
        <meta
          property="og:description"
          content="Dive into the 2024 AGJK Conference: key insights, focus areas, and a visual gallery honoring grassroots media professionals across Kenya."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.agjkenya.com/highlights-2024" />
        <meta property="og:image" content="https://www.agjkenya.com/images/og-highlights-2024.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Highlights 2024 | AGJK Kenya" />
        <meta
          name="twitter:description"
          content="Relive the moments from AGJK’s 2024 Conference – where grassroots journalists united for innovation, awareness, and impact."
        />
        <meta name="twitter:image" content="https://www.agjkenya.com/images/twitter-highlights-2024.jpg" />
        <link rel="canonical" href="https://www.agjkenya.com/highlights-2024" />
      </Helmet>


      {/* Hero Section */}
      <div className="bg-[#640433] text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Highlights 2024</h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto">
          Celebrating Excellence in Community Journalism
        </p>
      </div>


      {/* Areas of Focus */}
      <div className="bg-[#f8f4f4] py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#640433] mb-12 text-center">Areas of Focus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#640433] hover:border-t-8"
              >
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3 className="text-xl font-bold text-[#640433] mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Objectives */}
      <div className="container mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-[#640433] mb-12 text-center">Key Objectives</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{obj.icon}</div>
                <h3 className="text-xl font-bold text-[#640433]">{obj.title}</h3>
              </div>
              <p className="text-gray-600 pl-12">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-gray-100 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#640433] mb-12 text-center">Gallery</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {displayedImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {galleryImages.length > 12 && !showAllImages && (
              <button
                onClick={() => setShowAllImages(true)}
                className="bg-[#640433] hover:bg-[#530322] text-white px-6 py-3 rounded-lg font-medium transition flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                View All Photos ({galleryImages.length})
              </button>
            )}

            <a
              href={externalGalleryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#530322] hover:bg-[#420218] text-white px-6 py-3 rounded-lg font-medium transition flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
              View Full Gallery
            </a>

            <a
              href="/gallery"
              className="bg-[#640433] hover:bg-[#4e0125] text-white px-6 py-3 rounded-lg font-medium transition flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 3a1 1 0 011-1h10a1 1 0 011 1v3h-2V4H6v12h8v-2h2v3a1 1 0 01-1 1H5a1 1 0 01-1-1V3z" />
                <path d="M13 7l5 3-5 3V7z" />
              </svg>
              Go to Internal Gallery
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HighlightsPage;