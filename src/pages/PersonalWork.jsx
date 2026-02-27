import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';
import ContactFooter from '@/components/ContactFooter';
import AnimatedText from '@/components/AnimatedText';

// Placeholder image - will be replaced with actual images
import placeholder from '../assets/placeholder.svg';

// Import all creative images
const horizontalImages = import.meta.glob('../assets/work/Creative/HORIZONTAL/*.webp', { eager: true });
const verticalImages = import.meta.glob('../assets/work/Creative/VERTICAL/*.webp', { eager: true });

const getCreativeImage = (id) => {
    if (id <= 20) {
        return verticalImages[`../assets/work/Creative/VERTICAL/${id}.webp`]?.default || placeholder;
    }
    return horizontalImages[`../assets/work/Creative/HORIZONTAL/${id}.webp`]?.default || placeholder;
};

// SERIES 1 - Creative: "The way I see this world"
const creativeSeries = [
    { id: 1, caption: "Stop burdening yourself with my favours. They were A Father's Responsibility.", image: getCreativeImage(1), orientation: 'vertical' },
    { id: 2, caption: "Game of Hands.", image: getCreativeImage(2), orientation: 'vertical' },
    { id: 3, caption: "Your Eyes don't lie, but can be lied to.", image: getCreativeImage(3), orientation: 'vertical' },
    { id: 4, caption: "He watched them calling The One with a name of their giving; Ganpati.", image: getCreativeImage(4), orientation: 'vertical' },
    { id: 5, caption: "The world is round and Time a straight line.", image: getCreativeImage(5), orientation: 'vertical' },
    { id: 6, caption: "Football gives you wings.", image: getCreativeImage(6), orientation: 'vertical' },
    { id: 7, caption: "He didn't have sleeves and thus nothing under the sleeves that could Save him from drowning.", image: getCreativeImage(7), orientation: 'vertical' },
    { id: 8, caption: "He bowed to his Master's Stick and everyone else thought it was the master he bowed to.", image: getCreativeImage(8), orientation: 'vertical' },
    { id: 9, caption: "Something will light up in my head, and it won't be dark inside anymore.", image: getCreativeImage(9), orientation: 'vertical' },
    { id: 10, caption: "Let out The Poison before you choke on it.", image: getCreativeImage(10), orientation: 'vertical' },
    { id: 11, caption: "Silence, amidst the noisy beats.", image: getCreativeImage(11), orientation: 'vertical' },
    { id: 12, caption: "Between Breaths.", image: getCreativeImage(12), orientation: 'vertical' },
    { id: 13, caption: "Boy on a heap of rocks, mountain in itself.", image: getCreativeImage(13), orientation: 'vertical' },
    { id: 14, caption: "Two-Faced Boy.", image: getCreativeImage(14), orientation: 'vertical' },
    { id: 15, caption: "Bucket full of experiences", image: getCreativeImage(15), orientation: 'vertical' },
    { id: 16, caption: "Who is the Greatest Artist? The man who imagined a beautiful artwork and brought it to life, or the one who imagined the man in this colourful world and gave him life.", image: getCreativeImage(16), orientation: 'vertical' },
    { id: 17, caption: "Two boys, watching a play in my village.", image: getCreativeImage(17), orientation: 'vertical' },
    { id: 18, caption: "Balance is what holds the world together.", image: getCreativeImage(18), orientation: 'vertical' },
    { id: 19, caption: "Instead of getting entangled in the Mesh of questions, he preferred to be lost in the Search for answers. (From Marathi movie Masala, 2012)", image: getCreativeImage(19), orientation: 'vertical' },
    { id: 20, caption: "Hold him with love and devotion; chains are too small for him. (Picture from Kharsundi Yaatra where people are not trying to catch him but the coconut kernels tossed in the air as prasad.)", image: getCreativeImage(20), orientation: 'vertical' },
    { id: 21, caption: "The Burning Man. Clicked at Manikarnika Ghat, Banaras. A man is running on the ground between two pyres, creating an illusion of him burning in fire.", image: getCreativeImage(21), orientation: 'horizontal' },
    { id: 22, caption: "She made sure he couldn't sit peacefully.", image: getCreativeImage(22), orientation: 'horizontal' },
    { id: 23, caption: "He lived under the shelter of the horse.", image: getCreativeImage(23), orientation: 'horizontal' },
    { id: 24, caption: "One head, two legs, two tails", image: getCreativeImage(24), orientation: 'horizontal' },
    { id: 25, caption: "Wait!! Where are you running?", image: getCreativeImage(25), orientation: 'horizontal' },
    { id: 26, caption: "It's always them, Friends.", image: getCreativeImage(26), orientation: 'horizontal' },
    { id: 27, caption: "Abode of the God and Flowers of his abode", image: getCreativeImage(27), orientation: 'horizontal' },
    { id: 28, caption: "A picture of Ganesha of my village mandal.", image: getCreativeImage(28), orientation: 'horizontal' },
    { id: 29, caption: "Play - Farmer's anguish.", image: getCreativeImage(29), orientation: 'horizontal' },
    { id: 30, caption: "They refused to stand still.", image: getCreativeImage(30), orientation: 'horizontal' },
    { id: 31, caption: "He waits without asking why.", image: getCreativeImage(31), orientation: 'horizontal' },
    { id: 32, caption: "Hanuman - even his tail is a legend.", image: getCreativeImage(32), orientation: 'horizontal' },
    { id: 33, caption: "Frames inside frames.", image: getCreativeImage(33), orientation: 'horizontal' },
    { id: 34, caption: "She is Shakti. Without her, even Shiva is like a Shava (lifeless body).", image: getCreativeImage(34), orientation: 'horizontal' },
    { id: 35, caption: "Desire; root cause of creation, and if unfulfilled, of sorrow", image: getCreativeImage(35), orientation: 'horizontal' },
];

// Import all captions images
const captionsHorizontalImages = import.meta.glob('../assets/work/Captions/HORIZONTAL/*.webp', { eager: true });
const captionsVerticalImages = import.meta.glob('../assets/work/Captions/VERTICAL/*.webp', { eager: true });

const getCaptionsImage = (id) => {
    const fileNum = id - 100;
    if (fileNum <= 14) {
        return captionsHorizontalImages[`../assets/work/Captions/HORIZONTAL/${fileNum}.webp`]?.default || placeholder;
    }
    return captionsVerticalImages[`../assets/work/Captions/VERTICAL/${fileNum}.webp`]?.default || placeholder;
};

// SERIES 2 - Captions: "Here, the photo is a lifeless body and caption its soul"
// id <= 114 is Horizontal, else Vertical
const captionsSeries = [
    { id: 101, caption: "He sat in a corner and just watched.", image: getCaptionsImage(101), orientation: 'horizontal' },
    { id: 102, caption: "They hanged us and left.", image: getCaptionsImage(102), orientation: 'horizontal' },
    { id: 103, caption: "I had a choice to see her every day or death. I chose her.", image: getCaptionsImage(103), orientation: 'horizontal' },
    { id: 104, caption: "Deaf were those ears, and Blind were those eyes.", image: getCaptionsImage(104), orientation: 'horizontal' },
    { id: 105, caption: "We are lifeless, but we carry life in us. Does that make us alive like you?", image: getCaptionsImage(105), orientation: 'horizontal' },
    { id: 106, caption: "I don't love you for the way you look. I love you because I know what you have got inside you.", image: getCaptionsImage(106), orientation: 'horizontal' },
    { id: 107, caption: "On a road with traffic, they are the unpredictable ones.", image: getCaptionsImage(107), orientation: 'horizontal' },
    { id: 108, caption: "Everyday, a messenger came to our home from heaven with nectar for us.", image: getCaptionsImage(108), orientation: 'horizontal' },
    { id: 109, caption: "They burned at the temple and became sacred.", image: getCaptionsImage(109), orientation: 'horizontal' },
    { id: 110, caption: "I wanted to help.", image: getCaptionsImage(110), orientation: 'horizontal' },
    { id: 111, caption: "Is the old man unlucky to walk on his legs or lucky to have his loved ones around?", image: getCaptionsImage(111), orientation: 'horizontal' },
    { id: 112, caption: "How can helping a person reach their destination be a small job?", image: getCaptionsImage(112), orientation: 'horizontal' },
    { id: 113, caption: "What is bigger, brains?", image: getCaptionsImage(113), orientation: 'horizontal' },
    { id: 114, caption: "Or buffalo?", image: getCaptionsImage(114), orientation: 'horizontal' },
    { id: 115, caption: "Kaam hogaya (Task is done.)", image: getCaptionsImage(115), orientation: 'vertical' },
    { id: 116, caption: "Eyes never lie.", image: getCaptionsImage(116), orientation: 'vertical' },
    { id: 117, caption: "Sher is drinking water.", image: getCaptionsImage(117), orientation: 'vertical' },
    { id: 118, caption: "-Why are you laughing? -They said, 'Marathi man can't do business.'", image: getCaptionsImage(118), orientation: 'vertical' },
    { id: 119, caption: "He says it's a gun.", image: getCaptionsImage(119), orientation: 'vertical' },
    { id: 120, caption: "If I had money, I wouldn't be standing here alone.", image: getCaptionsImage(120), orientation: 'vertical' },
    { id: 121, caption: "She fears losing him, and he was tired of telling fear is in her mind.", image: getCaptionsImage(121), orientation: 'vertical' },
    { id: 122, caption: "Father happily sees his child succeed in fighting the tides.", image: getCaptionsImage(122), orientation: 'vertical' },
];

// Import all animal images
const animalsHorizontalImages = import.meta.glob('../assets/work/Animal/HORIZONTAL/*.webp', { eager: true });
const animalsVerticalImages = import.meta.glob('../assets/work/Animal/VERTICAL/*.webp', { eager: true });

const getAnimalsImage = (id) => {
    const fileNum = id - 200;
    if (fileNum <= 12) {
        return animalsVerticalImages[`../assets/work/Animal/VERTICAL/${fileNum}.webp`]?.default || placeholder;
    }
    return animalsHorizontalImages[`../assets/work/Animal/HORIZONTAL/${fileNum}.webp`]?.default || placeholder;
};

// SERIES 3 - Animals: "The Misunderstood Ones"
// id <= 212 is Vertical, else Horizontal
const animalsSeries = [
    { id: 201, caption: "Even they understand the language of love.", image: getAnimalsImage(201), orientation: 'vertical' },
    { id: 202, caption: "We love each other than humans love each other.", image: getAnimalsImage(202), orientation: 'vertical' },
    { id: 203, caption: "Move aside, you little devil.", image: getAnimalsImage(203), orientation: 'vertical' },
    { id: 204, caption: "Freedom.", image: getAnimalsImage(204), orientation: 'vertical' },
    { id: 205, caption: "One of us, loved a man so much that he fought beside the man, and when kaal (death) demanded one life, he sacrificed his own. (Chetak of Maharana Pratap)", image: getAnimalsImage(205), orientation: 'vertical' },
    { id: 206, caption: "Zombie apocalypse.", image: getAnimalsImage(206), orientation: 'vertical' },
    { id: 207, caption: "What are you staring at?", image: getAnimalsImage(207), orientation: 'vertical' },
    { id: 208, caption: "Stay away from my beautiful wife. You pervert.", image: getAnimalsImage(208), orientation: 'vertical' },
    { id: 209, caption: "I carry the weight of a buffalo on my back.", image: getAnimalsImage(209), orientation: 'vertical' },
    { id: 210, caption: "Frog of the bucket. He is the biggest here.", image: getAnimalsImage(210), orientation: 'vertical' },
    { id: 211, caption: "What if a cat listens to you? Don't waste your time thinking about things that are never going to happen.", image: getAnimalsImage(211), orientation: 'vertical' },
    { id: 212, caption: "Yawning cat.", image: getAnimalsImage(212), orientation: 'vertical' },
    { id: 213, caption: "If it walks, flies, swims, crawls, or stands just there. Life is life. Not small or big.", image: getAnimalsImage(213), orientation: 'horizontal' },
    { id: 214, caption: "Affection is the fire that keeps away the cold of loneliness.", image: getAnimalsImage(214), orientation: 'horizontal' },
    { id: 215, caption: "Amar Akbar Anthony", image: getAnimalsImage(215), orientation: 'horizontal' },
    { id: 216, caption: "She could see desire in his eyes.", image: getAnimalsImage(216), orientation: 'horizontal' },
    { id: 217, caption: "Is it you with whom I shared my mother's milk?", image: getAnimalsImage(217), orientation: 'horizontal' },
    { id: 218, caption: "Photo from a festival where they worshipped a elephant-headed God. (Gajamukha)", image: getAnimalsImage(218), orientation: 'horizontal' },
    { id: 219, caption: "She kept spinning the webs around her prey.", image: getAnimalsImage(219), orientation: 'horizontal' },
    { id: 220, caption: "A mother ready to sacrifice herself for the safety of her child.", image: getAnimalsImage(220), orientation: 'horizontal' },
];

// Import all kids images
const kidsHorizontalImages = import.meta.glob('../assets/work/Kids/HORIZONTAL/*.webp', { eager: true });
const kidsVerticalImages = import.meta.glob('../assets/work/Kids/VERTICAL/*.webp', { eager: true });

const getKidsImage = (id) => {
    let fileNum = id - 300;
    // Skip 11 and 12 as they don't exist in the file sequence
    if (fileNum >= 11) {
        fileNum += 2;
    }

    if (fileNum <= 7) {
        return kidsVerticalImages[`../assets/work/Kids/VERTICAL/${fileNum}.webp`]?.default || placeholder;
    }
    return kidsHorizontalImages[`../assets/work/Kids/HORIZONTAL/${fileNum}.webp`]?.default || placeholder;
};

// SERIES 4 - Kids: "The Innocent Ones"
// id <= 307 is Vertical, else Horizontal
const kidsSeries = [
    { id: 301, caption: "Beginning the journey of life.", image: getKidsImage(301), orientation: 'vertical' },
    { id: 302, caption: "Broken chain. Laughing face.", image: getKidsImage(302), orientation: 'vertical' },
    { id: 303, caption: "Teary eyes, a flowing nose, and then a bright smile.", image: getKidsImage(303), orientation: 'vertical' },
    { id: 304, caption: "Everything blurred for him but the ball, which is otherwise in the photo.", image: getKidsImage(304), orientation: 'vertical' },
    { id: 305, caption: "She was lost in the world of wonders.", image: getKidsImage(305), orientation: 'vertical' },
    { id: 306, caption: "Without each other, it would be like them getting older without childhood.", image: getKidsImage(306), orientation: 'vertical' },
    { id: 307, caption: "Family.", image: getKidsImage(307), orientation: 'vertical' },
    { id: 308, caption: "It is her brother's birthday today.", image: getKidsImage(308), orientation: 'horizontal' },
    { id: 309, caption: "One day, she will be tall enough.", image: getKidsImage(309), orientation: 'horizontal' },
    { id: 310, caption: "He and his roots.", image: getKidsImage(310), orientation: 'horizontal' },
    { id: 311, caption: "Sparkling White.", image: getKidsImage(311), orientation: 'horizontal' },
    { id: 312, caption: "One day, she will make her mother proud.", image: getKidsImage(312), orientation: 'horizontal' },
    { id: 313, caption: "He didn't fail to understand them.", image: getKidsImage(313), orientation: 'horizontal' },
    { id: 314, caption: "Guavas", image: getKidsImage(314), orientation: 'horizontal' },
    { id: 315, caption: "Phone is ripping off their childhood.", image: getKidsImage(315), orientation: 'horizontal' },
    { id: 316, caption: "One day, they will realize these were the best days of their life.", image: getKidsImage(316), orientation: 'horizontal' },
    { id: 317, caption: "They love me as much as the treats I bring for them.", image: getKidsImage(317), orientation: 'horizontal' },
    { id: 318, caption: "Dream big, little one.", image: getKidsImage(318), orientation: 'horizontal' },
];

// Import all people images
const peopleHorizontalImages = import.meta.glob('../assets/work/People/HORIZONTAL/*.webp', { eager: true });
const peopleVerticalImages = import.meta.glob('../assets/work/People/VERTICAL/*.webp', { eager: true });

const getPeopleImage = (id) => {
    const fileNum = id - 400;
    if (fileNum <= 20) {
        // Since we import * .webp, the key will contain the extension. We need to find the key that matches.
        const key = Object.keys(peopleVerticalImages).find(k => k.toLowerCase().includes(`/vertical/${fileNum}.webp`));
        return key ? peopleVerticalImages[key].default : placeholder;
    }
    return peopleHorizontalImages[`../assets/work/People/HORIZONTAL/${fileNum}.webp`]?.default || placeholder;
};

// SERIES 5 - People: "Portraits of Life"
// IDs 401-420 Vertical, 421-435 Horizontal
const peopleSeries = Array.from({ length: 35 }, (_, i) => {
    const id = 401 + i;
    const isVertical = id <= 420;
    return {
        id,
        caption: "Portraits of Life", // Generic caption
        image: getPeopleImage(id),
        orientation: isVertical ? 'vertical' : 'horizontal'
    };
});

const seriesInfo = {
    creative: {
        title: 'The way I see this world',
        subtitle: 'Creative',
        data: creativeSeries
    },
    captions: {
        title: 'Here, the photo is a lifeless body and caption its soul',
        subtitle: 'Captions',
        data: captionsSeries
    },
    animals: {
        title: 'The Misunderstood Ones',
        subtitle: 'Animals',
        data: animalsSeries
    },
    kids: {
        title: 'The Innocent Ones',
        subtitle: 'Kids',
        data: kidsSeries
    },
    people: {
        title: 'Portraits of Life',
        subtitle: 'People',
        data: peopleSeries
    },
};

const PersonalWork = ({ isEmbedded = false }) => {
    const [searchParams] = useSearchParams();
    const [activeSeries, setActiveSeries] = useState(searchParams.get('category') || 'creative');
    const [activeOrientation, setActiveOrientation] = useState('vertical');
    const [lightboxImage, setLightboxImage] = useState(null);

    useEffect(() => {
        const category = searchParams.get('category');
        if (category && seriesInfo[category]) {
            setActiveSeries(category);
        }
        if (!isEmbedded) {
            window.scrollTo(0, 0);
        }
    }, [searchParams, isEmbedded]);

    // Reset orientation to vertical when switching series
    useEffect(() => {
        setActiveOrientation('vertical');
    }, [activeSeries]);

    const currentSeries = seriesInfo[activeSeries];

    // Filter logic
    const displayedImages = currentSeries.data.filter(item => item.orientation === activeOrientation);

    const navigateLightbox = (direction) => {
        if (lightboxImage === null) return;
        // Navigate through the filtered list
        const currentIndex = displayedImages.findIndex(w => w.id === lightboxImage);
        if (currentIndex === -1) return; // Should not happen

        if (direction === 'prev') {
            const newIndex = currentIndex > 0 ? currentIndex - 1 : displayedImages.length - 1;
            setLightboxImage(displayedImages[newIndex].id);
        } else {
            const newIndex = currentIndex < displayedImages.length - 1 ? currentIndex + 1 : 0;
            setLightboxImage(displayedImages[newIndex].id);
        }
    };

    const currentLightboxItem = currentSeries.data.find(w => w.id === lightboxImage);

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
                        <span className="text-[#A1A1AA] block mb-4 text-xs tracking-[0.2em] uppercase font-medium">Personal Projects</span>
                        <AnimatedText
                            text="My Vision"
                            className="text-5xl md:text-7xl font-bold tracking-tight text-white ps-0"
                        />
                    </div>
                </section>
            )}

            {/* Series Tabs */}
            <section className="px-6 md:px-12 mb-12 border-b border-neutral-800">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
                        {Object.keys(seriesInfo).map((key) => (
                            <button
                                key={key}
                                onClick={() => {
                                    setActiveSeries(key);
                                    setLightboxImage(null);
                                }}
                                className={`text-sm uppercase tracking-wider whitespace-nowrap pb-4 border-b-2 transition-colors ${activeSeries === key
                                    ? 'border-white text-white font-medium'
                                    : 'border-transparent text-[#A1A1AA] hover:text-white'
                                    }`}
                                data-cursor-hover
                            >
                                {seriesInfo[key].subtitle}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Series Header & Sub-tabs */}
            <section className="px-6 md:px-12 mb-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        key={activeSeries}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-[#A1A1AA] block mb-2 text-xs tracking-widest uppercase">Series {Object.keys(seriesInfo).indexOf(activeSeries) + 1}</span>
                        <h2 className="text-3xl font-medium text-white max-w-3xl">{currentSeries.title}</h2>

                        <div className="flex items-center justify-between flex-wrap gap-4 mt-6">
                            <p className="text-[#A1A1AA] font-light">{displayedImages.length} photographs</p>

                            {/* Orientation Tabs */}
                            <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 p-1 rounded-md">
                                {['vertical', 'horizontal'].map((orientation) => (
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
                                                src={item.image}
                                                alt={item.caption}
                                                loading="eager"
                                                className="transition-transform duration-700 w-full h-auto"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3 px-1">
                                        <span className="text-[#A1A1AA] text-[10px] tracking-widest block mb-2">{String(item.id % 100).padStart(2, '0')}</span>
                                        <p className="text-sm leading-relaxed text-neutral-400 group-hover:text-white transition-colors font-light font-sans">
                                            {item.caption}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
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
                                src={currentLightboxItem.image}
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
                                    {activeSeries} • {activeOrientation} • {String(displayedImages.indexOf(currentLightboxItem) + 1).padStart(2, '0')} / {String(displayedImages.length).padStart(2, '0')}
                                </span>
                                <p className="text-lg md:text-xl leading-relaxed text-white font-light font-serif italic">"{currentLightboxItem.caption}"</p>
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
                <title>Personal Projects | Shreepad Photography</title>
                <meta name="description" content="Personal photography projects by Shreepad - exploring creative vision, emotions, animals, and the innocence of childhood." />
            </Helmet>
            {content}
        </HelmetProvider>
    );
};

export default PersonalWork;
