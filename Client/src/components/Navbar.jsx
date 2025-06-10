import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktopProgramsOpen, setIsDesktopProgramsOpen] = useState(false);
    const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);
    const location = useLocation();
    const desktopDropdownRef = useRef(null);
    const mobileDropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
                setIsDesktopProgramsOpen(false);
            }
            if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
                setIsMobileProgramsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        setIsMobileProgramsOpen(false);
        setIsDesktopProgramsOpen(false);
    }, [location]);

    // Fixed isActive to prevent multiple active items
    const isActive = (path) => {
        // Exact match for root ("/")
        if (path === '/') return location.pathname === path;
        // Strict match for other paths
        return location.pathname === path;
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <Link to="/" className="flex-shrink-0 flex items-center">
                        <img className="h-22 w-auto" src={logo} alt="AGJ Kenya" />
                        <span className="ml-2 text-xl font-semibold text-[#640433] hidden md:block">
                            AGJ Kenya
                        </span> 
                    </Link>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-[#640433] hover:text-[#600000] focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-1">
                        <Link
                            to="/"
                            className={`px-4 py-2 rounded-md text-sm font-medium ${
                                isActive('/') 
                                    ? 'bg-[#640433] text-white' 
                                    : 'text-[#640433] hover:bg-[#640433]/10'
                            }`}
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className={`px-4 py-2 rounded-md text-sm font-medium ${
                                isActive('/about')
                                    ? 'bg-[#640433] text-white'
                                    : 'text-[#640433] hover:bg-[#640433]/10'
                            }`}
                        >
                            About Us
                        </Link>

                        {/* Programs Dropdown */}
                        <div
                            className="relative"
                            ref={desktopDropdownRef}
                            onMouseEnter={() => setIsDesktopProgramsOpen(true)}
                            onMouseLeave={() => setIsDesktopProgramsOpen(false)}
                        >
                            <button
                                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${
                                    isActive('/capacity-building') || isActive('/advocacy-campaigns')
                                        ? 'bg-[#640433] text-white'
                                        : 'text-[#640433] hover:bg-[#640433]/10'
                                }`}
                            >
                                Our Programs
                                <svg
                                    className={`ml-1 h-4 w-4 transition-transform ${
                                        isDesktopProgramsOpen ? 'rotate-180' : ''
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {isDesktopProgramsOpen && (
                                <div className="absolute z-10 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="py-1">
                                        <Link
                                            to="/capacity-building"
                                            className={`block px-4 py-2 text-sm ${
                                                isActive('/capacity-building')
                                                    ? 'bg-[#640433] text-white'
                                                    : 'text-[#640433] hover:bg-[#640433]/10'
                                            }`}
                                        >
                                            Capacity Building
                                        </Link>
                                        <Link
                                            to="/advocacy-campaigns"
                                            className={`block px-4 py-2 text-sm ${
                                                isActive('/advocacy-campaigns')
                                                    ? 'bg-[#640433] text-white'
                                                    : 'text-[#640433] hover:bg-[#640433]/10'
                                            }`}
                                        >
                                            Advocacy Campaigns
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Other Navigation Links */}
                        {['/contact', '/gallery', '/blogs'].map((path) => (
                            <Link
                                key={path}
                                to={path}
                                className={`px-4 py-2 rounded-md text-sm font-medium ${
                                    isActive(path)
                                        ? 'bg-[#640433] text-white'
                                        : 'text-[#640433] hover:bg-[#640433]/10'
                                }`}
                            >
                                {path.replace('/', '').replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden px-2 pt-2 pb-4 bg-gray-50 shadow-inner">
                    <Link
                        to="/"
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                            isActive('/') ? 'bg-[#640433] text-white' : 'text-[#640433] hover:bg-[#640433]/10'
                        }`}
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                            isActive('/about') ? 'bg-[#640433] text-white' : 'text-[#640433] hover:bg-[#640433]/10'
                        }`}
                    >
                        About Us
                    </Link>

                    <div ref={mobileDropdownRef}>
                        <button
                            onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                            className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                                isActive('/capacity-building') || isActive('/advocacy-campaigns')
                                    ? 'bg-[#640433] text-white'
                                    : 'text-[#640433] hover:bg-[#640433]/10'
                            }`}
                        >
                            Our Programs
                            <svg
                                className={`ml-1 h-4 w-4 transition-transform ${
                                    isMobileProgramsOpen ? 'rotate-180' : ''
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {isMobileProgramsOpen && (
                            <div className="pl-4 space-y-1">
                                <Link
                                    to="/capacity-building"
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                                        isActive('/capacity-building')
                                            ? 'bg-[#640433] text-white'
                                            : 'text-[#640433] hover:bg-[#640433]/10'
                                    }`}
                                >
                                    Capacity Building
                                </Link>
                                <Link
                                    to="/advocacy-campaigns"
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                                        isActive('/advocacy-campaigns')
                                            ? 'bg-[#640433] text-white'
                                            : 'text-[#640433] hover:bg-[#640433]/10'
                                    }`}
                                >
                                    Advocacy Campaigns
                                </Link>
                            </div>
                        )}
                    </div>

                    {['/contact', '/gallery', '/blogs' ].map((path) => (
                        <Link
                            key={path}
                            to={path}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${
                                isActive(path)
                                    ? 'bg-[#640433] text-white'
                                    : 'text-[#640433] hover:bg-[#640433]/10'
                            }`}
                        >
                            {path.replace('/', '').replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;