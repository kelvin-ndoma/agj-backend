import React from 'react';
import { motion } from 'framer-motion';
import geffect from '../assets/girl-effect.svg';
import partner from '../assets/hdoc.svg';
import grow from '../assets/grow.svg';
import ad from '../assets/ad.svg';
import cap from '../assets/cap.svg'
import TestimonialCard from '../components/TestimonialsCard';
import { ThematicAreaCard } from '../components/ThematicAreaCard';
import Interventions from '../components/Interventions';
import { interventionData } from '../components/constants';
import { itemVariants } from '../components/Variants';
export const Testimonials = () => {
    // thematic focus
    const thematicAreaData = [
    {
        title: 'Capacity Building',
        description: 'AGJK empowers community journalists through training, mentorship, and practical skills in ethics, storytelling, fact-checking, media law, and emerging tech.',
        icon: cap,
    },
    {
        title: 'Advocacy / Campaigns',
        description: 'Through a network of 80+ community media outlets, AGJK drives impactful campaigns that amplify grassroots voices and promote social justice.',
        icon: ad,
    },
    {
        title: 'Organizational Growth',
        description: 'AGJK strengthens its internal systems, partnerships, and sustainability to lead by example and remain effective and transparent.',
        icon: grow,
    },
];

    const testimonialsData = [
        {
            quote: "'Equity is not about equality for women but rather an equal platform for all players'",
            name: 'Bev Watkinson',
            title: 'CONSULTANT',
            image: partner,
        }
        
    ];

    return (
        <div className="bg-white py-4 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Thematic Areas of Focus */}
            <ThematicAreaCard
                join={thematicAreaData}
            />
            {/* Interventions */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-[#640433] mb-8 text-center"
                    variants={itemVariants}
                >
                    Our Interventions
                </motion.h2>
                <Interventions interventions={interventionData} />
            </div>
            {/* What people say? */}
            <motion.div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white text-center rounded-2xl">
                <p className="text-2xl md:text-4xl font-bold text-[#640433] mb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-8">What people say?</p>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:gap-8">
                {testimonialsData.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>

        </div>
    );
};

export default Testimonials; 