import React from 'react';
import fb from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import xLogo from '../assets/xLogo.svg';

const Footer = () => {
    return (
        <footer className="bg-[#640433] text-white p-4 mt-2 md:mt-8">
            <div className="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
                <span className="block text-center font-bold">
                    © {new Date().getFullYear()} <a href="/" className="hover:underline">Association of Grassroot Journalists of Kenya™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 gap-6 text-sm font-medium sm:mt-0">
                    <li>
                        <a href="https://www.facebook.com/Agjk1/?ref=your_pages" target="_blank" rel="noopener noreferrer">
                            <img className="w-6 h-6 filter brightness-0 invert" src={fb} alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/agj_kenya" target="_blank" rel="noopener noreferrer">
                            <img className="w-6 h-6 filter brightness-0 invert" src={xLogo} alt="X (formerly Twitter)" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/association-of-grassroot-journalists-kenya/about" target="_blank" rel="noopener noreferrer">
                            <img className="w-6 h-6 filter brightness-0 invert" src={linkedin} alt="LinkedIn" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;