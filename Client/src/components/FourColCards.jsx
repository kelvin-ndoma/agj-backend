import React from "react";
import PropTypes from "prop-types";
import { motion } from 'framer-motion';
import { itemVariants } from "./Variants";

export const FourColCards = ({ cards }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* 4 columns on large screens (md), 1 column on small screens (default) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#640433] bg-white"
            variants={itemVariants}
            custom={index}
            whileHover={{ y: -5 }} 
          >
            {/* 4 cols, 1 col sm */}
            {/* Employee details */}
            {card.employeePic &&
              <img
                className="info-icon img-fluid h-full w-full rounded-md"
                src={card.employeePic}
                alt={card.title}
              />
            }
            <h3 className="info-title text-base md:text-xl font-bold text-[#640433] py-2">
              {card.employeeName}
            </h3>
            <p className="info-description text-sm md:text-base text-center font-semibold py-2 md:py-4">
              {card.employeeRole}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

FourColCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      employeePic: PropTypes.string,
      employeeName: PropTypes.string,
      employeeRole: PropTypes.string,
    })
  ).isRequired,
};

export default FourColCards;
