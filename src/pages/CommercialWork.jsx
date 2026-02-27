import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactFooter from '@/components/ContactFooter';
import AnimatedText from '@/components/AnimatedText';
import placeholder from '@/assets/placeholder.svg';
import commercialMetadata from '@/data/commercialMetadata.json';

// Import images for "Hand Prints Chaatne"
const handPrintsImages = import.meta.glob('../assets/work/Commercial/Event/hand prints chaatne/*.webp', { eager: true });

// Import images for "Patrika Lekhan"
const patrikaImages = import.meta.glob('../assets/work/Commercial/Event/patrika lekhan/*.webp', { eager: true });

// Import images for "Hasti AG"
const hastiImages = import.meta.glob('../assets/work/Commercial/Product/hasti ag/*.webp', { eager: true });

// Import images for "One and Eight"
const oneAndEightImages = import.meta.glob('../assets/work/Commercial/Product/oneandeight/*.webp', { eager: true });

// Import images for "BPL"
const bplImages = import.meta.glob('../assets/work/Commercial/sports/bpl/*.webp', { eager: true });

// Import images for "Pride"
const prideImages = import.meta.glob('../assets/work/Commercial/sports/pride/*.webp', { eager: true });

// Import images for "50th Birthday Celebration"
const birthday50thImages = import.meta.glob('../assets/work/Commercial/Event/50th Birthday Celebration./*.webp', { eager: true });

// Import images for "House Warming and Daadu's Suvarna Shidi"
const houseWarmingImages = import.meta.glob('../assets/work/Commercial/Event/House Warming and Daadu_s Suvarna Shidi/*.webp', { eager: true });


// Helper to get image arrays from glob imports
const getImagesFromGlob = (globImages) => {
    return Object.keys(globImages)
        .sort((a, b) => {
            const getNum = (path) => {
                const filename = path.split('/').pop();
                const match = filename.match(/^(\d+)/);
                return match ? parseInt(match[0], 10) : Infinity;
            };
            return getNum(a) - getNum(b);
        })
        .map((key, index) => {
            // key is like "../assets/work/Commercial/Event/hand prints chaatne/1.webp"
            // metadata keys match this format
            const meta = commercialMetadata[key];
            const orientation = meta ? meta.orientation : 'vertical'; // Default to vertical if not found

            return {
                id: index + 1, // Generate a local ID based on index
                image: globImages[key].default,
                path: key,
                orientation: orientation
            };
        });
};

const handPrintsData = getImagesFromGlob(handPrintsImages).map(item => ({ ...item, caption: "Patrika Lekhan 1" }));
const patrikaData = getImagesFromGlob(patrikaImages).map(item => ({ ...item, caption: "Patrika Lekhan 2" }));
const hastiData = getImagesFromGlob(hastiImages).map(item => ({ ...item, caption: "Priash Jewellery" }));
const oneAndEightData = getImagesFromGlob(oneAndEightImages).map(item => ({ ...item, caption: "One and Eight" }));
const bplData = getImagesFromGlob(bplImages).map(item => ({ ...item, caption: "Cricket Portraits" }));
const prideData = getImagesFromGlob(prideImages).map(item => ({ ...item, caption: "Pride Academy" }));
const birthday50thData = getImagesFromGlob(birthday50thImages).map(item => ({ ...item, caption: "50th Birthday Celebration" }));
const houseWarmingData = getImagesFromGlob(houseWarmingImages).map(item => ({ ...item, caption: "House Warming & Suvarna Shidi" }));


const seriesInfo = {
    'hand-prints': {
        title: 'Patrika Lekhan 1',
        subtitle: 'Patrika Lekhan 1',
        data: handPrintsData
    },
    'patrika-lekhan': {
        title: 'Patrika Lekhan 2',
        subtitle: 'Patrika Lekhan 2',
        data: patrikaData
    },
    'hasti-ag': {
        title: 'Priash Jewellery',
        subtitle: 'Priash Jewellery',
        data: hastiData
    },
    'one-and-eight': {
        title: 'One and Eight',
        subtitle: 'One & Eight',
        data: oneAndEightData
    },
    'bpl': {
        title: 'Cricket Portraits',
        subtitle: 'Cricket Portraits',
        data: bplData
    },
    'pride': {
        title: 'Pride Academy',
        subtitle: 'Pride Academy',
        data: prideData
    },
    'birthday-50th': {
        title: '50th Birthday Celebration',
        subtitle: '50th Birthday',
        data: birthday50thData
    },
    'house-warming': {
        title: 'House Warming & Suvarna Shidi',
        subtitle: 'House Warming',
        data: houseWarmingData
    }
};

const categories = {
    'Event': ['house-warming', 'birthday-50th', 'hand-prints', 'patrika-lekhan'],
    'Product': ['hasti-ag', 'one-and-eight'],
    'Sports': ['bpl', 'pride']
};

// Helper to find category for a given series
const getCategoryForSeries = (seriesKey) => {
    for (const [cat, seriesList] of Object.entries(categories)) {
        if (seriesList.includes(seriesKey)) return cat;
    }
    return 'Event'; // Default fallback
};

const CommercialWork = ({ isEmbedded = false }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    // Initialize activeSeries from URL or default
    const initialSeries = searchParams.get('category') || 'house-warming';
    const [activeSeries, setActiveSeries] = useState(initialSeries);

    // Initialize activeMainTab based on activeSeries
    const [activeMainTab, setActiveMainTab] = useState(() => getCategoryForSeries(initialSeries));

    const [activeOrientation, setActiveOrientation] = useState('vertical');
    const [lightboxImage, setLightboxImage] = useState(null);

    // Effect to handle URL param changes (external navigation)
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam && seriesInfo[categoryParam]) {
            setActiveSeries(categoryParam);
            setActiveMainTab(getCategoryForSeries(categoryParam));
        } else if (!categoryParam) {
            // If no param, we might want to default, but usually we just keep state
            // Or if we want to ensure URL always reflects state:
            // setSearchParams({ category: activeSeries }, { replace: true });
        }

        if (!isEmbedded) {
            window.scrollTo(0, 0);
        }
    }, [searchParams, isEmbedded]);

    // Handle main tab change (switch to first project of that category)
    const handleMainTabChange = (mainTab) => {
        setActiveMainTab(mainTab);
        const firstSeriesInCat = categories[mainTab][0];
        setActiveSeries(firstSeriesInCat);
        setSearchParams({ category: firstSeriesInCat });
        setLightboxImage(null);
    };

    // Handle sub tab change
    const handleSubTabChange = (seriesKey) => {
        setActiveSeries(seriesKey);
        setSearchParams({ category: seriesKey });
        setLightboxImage(null);
    };

    // Reset orientation when switching series
    useEffect(() => {
        if (activeSeries === 'house-warming' || activeSeries === 'birthday-50th') {
            setActiveOrientation('horizontal');
        } else {
            setActiveOrientation('vertical');
        }
    }, [activeSeries]);

    const currentSeries = seriesInfo[activeSeries];

    // Filter logic
    const displayedImages = currentSeries.data.filter(item => item.orientation === activeOrientation);

    const navigateLightbox = (direction) => {
        if (lightboxImage === null) return;
        const currentIndex = displayedImages.findIndex(w => w.id === lightboxImage);
        if (currentIndex === -1) return;

        if (direction === 'prev') {
            const newIndex = currentIndex > 0 ? currentIndex - 1 : displayedImages.length - 1;
            setLightboxImage(displayedImages[newIndex].id);
        } else {
            const newIndex = currentIndex < displayedImages.length - 1 ? currentIndex + 1 : 0;
            setLightboxImage(displayedImages[newIndex].id);
        }
    };

    const currentLightboxItem = currentSeries?.data.find(w => w.id === lightboxImage);

    // If no data exists (e.g. empty folders), fallback or show empty state
    // But we are filtering now, so we check displayedImages length for empty state in current orientation
    const hasData = displayedImages.length > 0;

    const content = (
        <div className={!isEmbedded ? "min-h-screen pt-32 bg-background text-foreground" : "text-foreground"}>
            {!isEmbedded && (
                <section className="px-6 md:px-12 mb-8">
                    <div className="max-w-7xl mx-auto">
                        <Link
                            to="/work"
                            className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-white transition-colors mb-8 group"
                            data-cursor-hover
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm tracking-wider uppercase">Back to Work</span>
                        </Link>
                        <span className="text-[#A1A1AA] block mb-4 text-xs tracking-[0.2em] uppercase font-medium">Commercial Projects</span>
                        <AnimatedText
                            text="Events & Brands"
                            className="text-5xl md:text-7xl font-bold tracking-tight text-white ps-0"
                        />
                    </div>
                </section>
            )}

            {/* Category Tabs (Level 1) */}
            <section className="px-6 md:px-12 mb-8 border-b border-neutral-800">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
                        {Object.keys(categories).map((mainTab) => (
                            <button
                                key={mainTab}
                                onClick={() => handleMainTabChange(mainTab)}
                                className={`text-base uppercase tracking-wider whitespace-nowrap pb-4 border-b-2 transition-colors ${activeMainTab === mainTab
                                    ? 'border-white text-white font-semibold'
                                    : 'border-transparent text-[#A1A1AA] hover:text-white'
                                    }`}
                                data-cursor-hover
                            >
                                {mainTab}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Sub-Tabs (Level 2) - Only show if there's more than 1 project in the filtered category?
                 Request asks for specific tabs, so we show them. */}
            <section className="px-6 md:px-12 mb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-4 flex-wrap">
                        {categories[activeMainTab].map((seriesKey) => (
                            <button
                                key={seriesKey}
                                onClick={() => handleSubTabChange(seriesKey)}
                                className={`px-6 py-2.5 text-xs uppercase tracking-widest rounded-full border transition-all min-w-[180px] text-center ${activeSeries === seriesKey
                                    ? 'bg-white text-black border-white font-medium shadow-lg shadow-white/10'
                                    : 'bg-transparent text-[#A1A1AA] border-neutral-800 hover:border-neutral-600 hover:text-white'
                                    }`}
                                data-cursor-hover
                            >
                                {seriesInfo[seriesKey].subtitle}
                            </button>
                        ))}
                    </div>
                </div>
            </section>


            {/* Series Header & Content */}
            <section className="px-6 md:px-12 mb-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        key={activeSeries}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Show redundant sub-label or remove since we have clear tabs now? 
                             Keeping simpler header since tabs explain context. */}
                        <h2 className="text-3xl font-medium text-white max-w-3xl">{currentSeries.title}</h2>

                        <div className="flex items-center justify-between flex-wrap gap-4 mt-6">
                            <p className="text-[#A1A1AA] font-light">{displayedImages.length} photographs</p>

                            {/* Orientation Tabs */}
                            <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 p-1 rounded-md">
                                {['vertical', 'horizontal']
                                    .filter(orientation => !(orientation === 'vertical' && (activeSeries === 'house-warming' || activeSeries === 'birthday-50th')))
                                    .map((orientation) => (
                                        <button
                                            key={orientation}
                                            onClick={() => setActiveOrientation(orientation)}
                                            className={`px-4 py-1.5 text-xs uppercase tracking-wider rounded-sm transition-all ${activeOrientation === orientation
                                                ? 'bg-white text-black font-medium'
                                                : 'text-[#A1A1AA] hover:text-white'
                                                }`}
                                            data-cursor-hover
                                        >
                                            {orientation}
                                        </button>
                                    ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="px-6 md:px-12 py-8">
                <div className="max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        {!hasData ? (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-neutral-500 italic py-12 text-center"
                            >
                                No {activeOrientation} images found for this project.
                            </motion.div>
                        ) : (
                            <motion.div
                                key={activeSeries + activeOrientation}
                                className={`grid gap-6 ${activeOrientation === 'horizontal' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {displayedImages.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        className="cursor-pointer group"
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={() => setLightboxImage(item.id)}
                                        data-cursor-hover
                                    >
                                        <div className="relative bg-neutral-900 rounded-sm">
                                            <div>
                                                <img
                                                    src={item.image || placeholder}
                                                    alt={item.caption}
                                                    loading="eager"
                                                    className="w-full h-auto transition-transform duration-700"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {!isEmbedded && <ContactFooter />}

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxImage !== null && currentLightboxItem && (
                    <motion.div
                        className="fixed inset-0 bg-black/95 z-[60] flex flex-col items-center justify-center p-8 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            onClick={() => setLightboxImage(null)}
                            className="absolute top-8 right-8 p-3 hover:bg-white/10 rounded-full transition-colors text-white z-50 mix-blend-difference"
                            data-cursor-hover
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
                            className="absolute left-8 p-3 hover:bg-white/10 rounded-full transition-colors text-white z-50 mix-blend-difference"
                            data-cursor-hover
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
                            className="absolute right-8 p-3 hover:bg-white/10 rounded-full transition-colors text-white z-50 mix-blend-difference"
                            data-cursor-hover
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        <motion.div
                            className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.img
                                key={lightboxImage}
                                src={currentLightboxItem.image || placeholder}
                                alt={currentLightboxItem.caption}
                                className="max-w-full max-h-[70vh] object-contain shadow-2xl mb-8"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            />

                            <motion.div
                                className="max-w-xl text-center"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="text-[#A1A1AA] text-xs tracking-widest block mb-3 uppercase">
                                    {seriesInfo[activeSeries].subtitle} • {activeOrientation} • {String(displayedImages.indexOf(currentLightboxItem) + 1).padStart(2, '0')} / {String(displayedImages.length).padStart(2, '0')}
                                </span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    if (isEmbedded) {
        return content;
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Commercial Work | Shreepad Photography</title>
                <meta name="description" content="Commercial photography projects including events and product shoots." />
            </Helmet>
            {content}
        </HelmetProvider>
    );
};

export default CommercialWork;

