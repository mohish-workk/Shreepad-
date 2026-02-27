import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Specific imports for the requested logos
import kasa1 from '../assets/work/3 Logos/KASA1.webp';
import kasa2 from '../assets/work/3 Logos/KASA2.webp';
import magicalMoments from '../assets/work/3 Logos/magicalmomentsphoytography.webp';

const LogosGrid = () => {
    const [activeTab, setActiveTab] = useState('kasa');
    const [kasaIndex, setKasaIndex] = useState(0);

    const kasaLogos = [
        { id: 1, image: kasa1, title: 'Kasa Logo 1' },
        { id: 2, image: kasa2, title: 'Kasa Logo 2' }
    ];

    const magicalMomentsLogos = [
        { id: 3, image: magicalMoments, title: 'Magical Moments' }
    ];

    const nextKasa = () => {
        setKasaIndex((prev) => (prev + 1) % kasaLogos.length);
    };

    const prevKasa = () => {
        setKasaIndex((prev) => (prev - 1 + kasaLogos.length) % kasaLogos.length);
    };

    // Swipe handlers
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    const minSwipeDistance = 50

    const onTouchStart = (e) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        if (isLeftSwipe) {
            nextKasa()
        }
        if (isRightSwipe) {
            prevKasa()
        }
    }

    return (
        <section className="px-6 md:px-12 py-8 min-h-[50vh]">
            <div className="max-w-7xl mx-auto">
                {/* Sub-tabs */}
                <div className="flex gap-8 mb-12 border-b border-neutral-800 pb-4">
                    <button
                        onClick={() => setActiveTab('kasa')}
                        className={`text-sm uppercase tracking-wider transition-colors ${activeTab === 'kasa'
                            ? 'text-white font-medium'
                            : 'text-[#A1A1AA] hover:text-white'
                            }`}
                    >
                        Kasa
                    </button>
                    <button
                        onClick={() => setActiveTab('magical-moments')}
                        className={`text-sm uppercase tracking-wider transition-colors ${activeTab === 'magical-moments'
                            ? 'text-white font-medium'
                            : 'text-[#A1A1AA] hover:text-white'
                            }`}
                    >
                        Magical Moments
                    </button>
                </div>

                {/* Content */}
                <div className="flex justify-center items-center min-h-[500px]">
                    {activeTab === 'kasa' && (
                        <div className="relative w-full max-w-4xl flex flex-col items-center justify-center p-8 bg-black border border-neutral-800">
                            {/* Arrows */}
                            <button
                                onClick={prevKasa}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:bg-neutral-800 rounded-full transition-colors text-white z-10"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                onClick={nextKasa}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-neutral-800 rounded-full transition-colors text-white z-10"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Image Carousel */}
                            <div
                                className="w-full flex items-center justify-center overflow-hidden min-h-[400px]"
                                onTouchStart={onTouchStart}
                                onTouchMove={onTouchMove}
                                onTouchEnd={onTouchEnd}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={kasaLogos[kasaIndex].id}
                                        src={kasaLogos[kasaIndex].image}
                                        alt={kasaLogos[kasaIndex].title}
                                        width="800"
                                        height="600"
                                        loading="lazy"
                                        className="w-auto h-auto max-w-full max-h-[600px] object-contain"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Indicators */}
                            <div className="mt-8 flex gap-2">
                                {kasaLogos.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2 h-2 rounded-full transition-colors ${idx === kasaIndex ? 'bg-white' : 'bg-neutral-700'}`}
                                    />
                                ))}
                            </div>

                            {/* Caption */}
                            <p className="mt-6 text-[#A1A1AA] text-sm md:text-base max-w-lg text-center font-light leading-relaxed">
                                Logo designed for Kasa, a furniture store located near Harinivas Circle, Thane. The word ‘Kasa’ is hidden in the logo. Can you find it?
                            </p>
                        </div>
                    )}

                    {activeTab === 'magical-moments' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full max-w-4xl flex flex-col items-center justify-center p-8 bg-black border border-neutral-800 min-h-[400px]"
                        >
                            <img
                                src={magicalMomentsLogos[0].image}
                                alt={magicalMomentsLogos[0].title}
                                width="800"
                                height="600"
                                loading="lazy"
                                className="w-auto h-auto max-w-full max-h-[600px] object-contain"
                            />
                            <p className="mt-6 text-[#A1A1AA] text-sm md:text-base max-w-lg text-center font-light leading-relaxed">
                                An old logo I had designed for myself when I started photography.
                                The logo is a triangle, suggesting the 3 fundamentals of photography—Aperture, Shutter speed, and ISO.
                                The mountains in the middle of the logo form the 2 ‘Ms’ of Magical Moments.
                                The sun has a meaning too. The sun is just above the mountains, meaning it is sunrise or sunset. It is the Golden hour. The best natural light of the day for photography.
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LogosGrid;
