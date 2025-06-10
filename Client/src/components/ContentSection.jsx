import React from 'react';
import Button from './Button';

const ContentSection = ({ text, imageSrc, imageAlt }) => {
    return (
        <div className="flex items-center justify-center bg-custom-image bg-cover bg-center py-6 md:py-10 px-6 max-h-[820px]"
            style={{
                backgroundColor: "rgba(49, 2, 25, 1)",
                backgroundBlendMode: "overlay",
            }}>
            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-6 py-6 md:py-18">
                <div className="text-white font-thin w-full text-center">
                    {/* <h1 className="text-2xl md:text-3xl font-bold mb-4 py-4">{title}</h1> */}
                    <p>
                        {text.map((paragraph, index) => (
                            <span key={index} className="block mb-4 text-base md:text-xl">
                                {paragraph}
                            </span>
                        ))}
                    </p>
                    <div className="flex justify-center items-center">
                        <Button buttons={[{ href: "/about", label: "read more", variant: "primary" }]} />
                    </div>
                </div>
                {/* <div className="md:w-1/2 flex justify-center">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="max-w-full h-auto"
                    />
                </div> */}
            </div>
        </div>
    );
};

export default ContentSection;
