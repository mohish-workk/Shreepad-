import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => {
        return 'text-white';
    };

    const links = [
        { name: 'HOME', href: '/' },
        { name: 'WORK', href: '/work' },
        { name: 'MILESTONES', href: '/milestones' },
        { name: 'ABOUT', href: '/about' },
        { name: 'BLOG', href: '/blog' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 px-1 xs:px-5 md:px-16 py-8 flex items-center transition-colors duration-500 ${isScrolled ? 'backdrop-blur-md bg-black/50' : 'bg-transparent'}`}
        >
            {/* Desktop & Mobile Menu - Ultra-compact for small screens */}
            <ul className="flex w-full justify-center gap-1 xs:gap-5 md:gap-16 items-center text-[7px] xs:text-[10px] sm:text-xs md:text-sm tracking-normal xs:tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] font-bold text-white uppercase">
                {links.map((link) => (
                    <li key={link.name} className="shrink-0">
                        {link.href.startsWith('/#') ? (
                            <a
                                href={link.href}
                                className={`transition-colors duration-300 ${isActive(link.href)}`}
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                to={link.href}
                                className={`transition-colors duration-300 ${isActive(link.href)}`}
                            >
                                {link.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

