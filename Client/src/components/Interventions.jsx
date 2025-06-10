import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { containerVariants } from "./Variants";

export const Interventions = ({ interventions }) => {
  const navigate = useNavigate();

  // Emoji mapping based on intervention title
  const getInterventionEmoji = (title) => {
    switch(title) {
      case "Gender":
        return "👩‍💼"; // Woman professional
      case "Health":
        return "📰❓"; // No symbol (for misinformation)
      case "Governance & Social Accountability":
        return "⚖️"; // Scales of justice
      case "Environment and Climate Change":
        return "🌱"; // Seedling
      case "Technology and Artificial Intelligence":
        return "🤖"; // Robot
      case "Peace and Reconciliation":
        return "🕊️"; // Peace dove
      default:
        return "🌍"; // Earth as fallback
    }
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {interventions.map((intervention, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#640433]"
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -5 }}
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#640433]/10 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                {getInterventionEmoji(intervention.title)}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {intervention.header}
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  {intervention.title}
                </span>
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{intervention.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Rest of the component remains unchanged */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50 p-6 rounded-lg"
      >
        <p className="text-gray-700 text-center md:text-left md:max-w-[60%]">
          Want to know how we make impact? Explore our mission and methodology.
        </p>
        <button
          onClick={() => navigate("/our-team")}
          className="whitespace-nowrap bg-[#640433] text-white px-6 py-2 rounded-md hover:bg-[#4a0326] transition-colors font-medium shadow-sm hover:shadow-md"
        >
          Learn More →
        </button>
      </motion.div>
    </div>
  );
};

// Prop types remain unchanged
Interventions.propTypes = {
  interventions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      header: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Interventions;