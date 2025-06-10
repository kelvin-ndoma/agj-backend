import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, fadeIn } from './Variants';

const Hero = ({ title, titleExt, subtitle }) => {
    return (
        <motion.section
            className={`w-full  py-24 md:py-32 relative overflow-hidden`}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="absolute inset-0 z-0" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div variants={itemVariants} className="text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray mb-6 leading-tight">
                        {title}<span className="text-yellow-500 pl-4">{titleExt}</span> 
                    </h1>
                    <motion.p
                        className="text-xl text-gray/90 max-w-3xl mx-auto"
                        variants={fadeIn}
                    >
                        {subtitle}
                    </motion.p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;
