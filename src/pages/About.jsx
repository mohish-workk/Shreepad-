import { useRef, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import ContactFooter from '@/components/ContactFooter';

// Placeholder imports using Vite's glob import or direct imports if placeholders exist
import picture1 from '@/assets/about/picture-1.webp';
import picture2 from '@/assets/about/picture-2.webp';
import picture3 from '@/assets/about/picture-3.webp';
import picture4 from '@/assets/about/picture-4.webp';
import picture5 from '@/assets/about/picture-5.webp';
import picture6 from '@/assets/about/picture-6.webp';
import picture7 from '@/assets/about/picture-7.webp';
import picture8 from '@/assets/about/picture-8.webp';
import picture9 from '@/assets/about/picture-9.webp';
import picture10 from '@/assets/about/picture-10.webp';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <HelmetProvider>
            <Helmet>
                <title>About | Shreepad Photography</title>
                <meta name="description" content="Learn about Shreepad's journey as a photographer, his unique style, creative approach, and future aspirations in visual storytelling." />
            </Helmet>

            <main className="pt-32 bg-background text-white min-h-screen">
                {/* Header */}
                <section ref={ref} className="px-6 md:px-12 mb-24">
                    <div className="max-w-4xl mx-auto">
                        <motion.span
                            className="text-[#A1A1AA] block mb-4 text-xs tracking-[0.2em] uppercase font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            About
                        </motion.span>
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-tight"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            The Art of Seeing What Others Miss
                        </motion.h1>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="px-6 md:px-12 pb-32">
                    <div className="max-w-4xl mx-auto space-y-24">

                        {/* Who am I? */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-medium mb-8">Who am I?</h2>

                            <div className="mb-8 overflow-hidden bg-neutral-900">
                                <img src={picture1} alt="Portrait of Shreepad Salunkhe" width="1200" height="800" loading="eager" fetchpriority="high" className="w-full h-auto" />
                            </div>

                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
                                I'm a photographer, visual storyteller, and artist, driven by observing people, emotions, and moments that often go unnoticed.
                            </p>
                        </motion.div>

                        {/* Journey */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-medium mb-8">Journey?</h2>

                            <div className="mb-8 overflow-hidden bg-neutral-900">
                                <img src={picture2} alt="Atmospheric journey image" width="1200" height="800" loading="eager" fetchpriority="high" className="w-full h-auto" />
                            </div>

                            <p className="text-[#A1A1AA] text-sm mb-8 italic">
                                He had the power to turn anything he touched into gold—yet he didn't even know it.
                            </p>

                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 font-light">
                                As a child, I was observant, sensitive, imaginative, and curious — but my father saw only my intelligence. I began on a path my family had decided for me, yet deep down I knew it wasn't my own. I eventually dropped out of college just before the last semester of my final year (2023).
                            </p>

                            <div className="mb-4 overflow-hidden bg-neutral-900">
                                <img src={picture3} alt="Clearing fog at sunrise" width="1200" height="800" loading="lazy" className="w-full h-auto" />
                            </div>
                            <p className="text-[#A1A1AA] text-sm mb-8 italic">The fog had started to clear up.</p>

                            <div className="mb-4 overflow-hidden bg-neutral-900">
                                <img src={picture4} alt="Shining sun over landscape" width="1200" height="800" loading="lazy" className="w-full h-auto" />
                            </div>
                            <p className="text-[#A1A1AA] text-sm mb-8 italic">And the sun was about to shine.</p>

                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 font-light">
                                In 2021, I had bought a Canon 200D with the money I had saved and fell in love with photography. I was a boy with a camera, capturing the world as I saw it. I started taking on small projects, but was inconsistent — I hadn't yet realized that photography and visual storytelling were where I could truly excel. Now I know.
                            </p>

                            <div className="mb-4 overflow-hidden bg-neutral-900">
                                <img src={picture5} alt="Pluto - First picture taken with camera" width="1200" height="800" loading="lazy" className="w-full h-auto" />
                            </div>
                            <p className="text-[#A1A1AA] text-sm mb-8 italic">One of the first pictures I took with my camera. (Pluto- that's his name.)</p>

                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
                                I have no formal education in this field; everything I know has come from life itself — from experiences, failures, and persistent practice. Every project I take on reflects the lessons I've learned and the path I've chosen to follow my own vision.
                            </p>
                        </motion.div>

                        {/* Style */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-medium mb-8">Style?</h2>

                            <div className="mb-4 overflow-hidden bg-neutral-900">
                                <img src={picture6} alt="Shreepad's photography style" width="1200" height="800" loading="lazy" className="w-full h-auto" />
                            </div>
                            <p className="text-[#A1A1AA] text-sm mb-8 italic">I feel</p>

                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
                                I photograph people and moments as they are — natural, candid, and true. Every frame carries a story, evokes emotion, and highlights subtle details often overlooked, creating visuals that feel real and meaningful.
                            </p>
                        </motion.div>

                        {/* What do I shoot? */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-medium mb-8">What do I shoot?</h2>

                            <div className="mb-8 overflow-hidden bg-neutral-900">
                                <img src={picture7} alt="Variety of subjects photographed by Shreepad" width="1200" height="800" loading="lazy" className="w-full h-auto" />
                            </div>

                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
                                I capture people, portraits, streets, landscapes, and events, focusing on authentic moments, subtle emotions, and stories that speak for themselves.
                            </p>
                        </motion.div>

                        {/* My approach while shooting */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-medium mb-8">My approach while shooting</h2>

                            <div className="mb-4 overflow-hidden bg-neutral-900">
                                <img src={picture8} alt="Shreepad camouflaged while shooting" width="1200" height="800" loading="lazy" className="w-full h-auto" />
                            </div>
                            <p className="text-[#A1A1AA] text-sm mb-8 italic">Camouflaged, I became part of the scene.</p>

                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
                                My approach varies depending on the subject and the moment, allowing each situation to guide me naturally. I focus on emotion, composition, light, and storytelling to create complete visuals. I aim to make people feel comfortable and warm, allowing their authentic selves to shine through in every frame.
                            </p>
                        </motion.div>

                        {/* Personal touch */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-medium mb-8">Personal touch.</h2>

                            <div className="mb-4 overflow-hidden bg-neutral-900">
                                <img src={picture9} alt="Observation of a fallen tree" width="1200" height="800" loading="lazy" className="w-full h-auto" />
                            </div>
                            <p className="text-[#A1A1AA] text-sm mb-8 italic">One sees a fallen tree.</p>

                            <div className="mb-4 overflow-hidden bg-neutral-900">
                                <img src={picture10} alt="Tree standing strong and tall" width="1200" height="800" loading="lazy" className="w-full h-auto" />
                            </div>
                            <p className="text-[#A1A1AA] text-sm mb-8 italic">But I see it standing strong and tall.</p>

                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
                                A unique perspective and vision define my work. I notice moments, patterns, and coincidences that others often miss, using composition, raw emotion, and storytelling to preserve the essence of each moment. Years later, people see my photos and remember not just how it looked, but how it truly felt. Every frame is playful yet meaningful, authentic, and unmistakably my own.
                            </p>
                        </motion.div>

                    </div>
                </section>

                <ContactFooter />
            </main>
        </HelmetProvider>
    );
};

export default About;
