import React from "react";
import PropTypes from "prop-types";
import { motion } from 'framer-motion';
import { itemVariants } from "./Variants";

export const Cards = ({ cards }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* card content */}
      {/* 3 cols, 1 col sm */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#640433] bg-white space-y-4"
            variants={itemVariants}
            custom={index}
            whileHover={{ y: -5 }}
          >
            {/* ToDo: add a hover property for svg images?? switch imgs || change imgcolor || add img color property || use classnames */}
            {/* rm rounded-full && bg */}
            {card.imgSrc &&
              <img
                className="info-icon img-fluid w-16 h-16 rounded-full mx-auto"
                src={card.imgSrc}
                alt={card.title}
              />
            }

            <h3 className="info-title text-base md:text-xl font-bold text-gray-800 uppercase py-2">
              {card.title}
            </h3>
            <p className="info-description text-gray-600 text-sm md:text-base text-center py-2 md:py-4 px-2 md:px-6">
              {card.description}
            </p>
          </motion.div >
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Cards;
