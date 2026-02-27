import { useRef, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';

import milestone1 from '@/assets/milestones/milestone-1.webp';
import milestone2 from '@/assets/milestones/milestone-2.webp';
import milestone3 from '@/assets/milestones/milestone-3.webp';
import ContactFooter from '@/components/ContactFooter';

const milestones = [
    {
        id: 1,
        image: milestone1,
        caption: "This photo I clicked was displayed at The Visual Poetries Photography Awards and festival 2025 at Surat for the theme 'Emotions.'",
    },
    {
        id: 2,
        image: milestone2,
        caption: "Some friends of mine tell me that I take good pictures and write well. And I call that achievement.",
    },
    {
        id: 3,
        image: milestone3,
        caption: "When I took this picture, the woman in the middle held my face in her hands with love. These are the achievements that keep me going.",
    },
];

const Milestones = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Milestones | Shreepad Photography</title>
                <meta name="description" content="Personal milestones and meaningful moments in Shreepad's photography journey." />
            </Helmet>

            <main className="pt-32 min-h-screen bg-background text-white">
                {/* Header */}
                <section ref={ref} className="px-6 md:px-12 mb-24">
                    <div className="max-w-7xl mx-auto">
                        <motion.span
                            className="text-[#A1A1AA] block mb-4 text-xs tracking-[0.2em] uppercase font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            Journey
                        </motion.span>
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold tracking-tight"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Milestones
                        </motion.h1>
                    </div>
                </section>

                {/* Milestones Grid */}
                <section className="px-6 md:px-12 pb-32">
                    <div className="max-w-5xl mx-auto space-y-24">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.id}
                                className="flex flex-col"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Image */}
                                <div className="rounded-sm mb-6 bg-neutral-900 flex justify-center">
                                    <img
                                        src={milestone.image}
                                        alt={milestone.caption}
                                        loading="lazy"
                                        className="max-w-full h-auto"
                                    />
                                </div>
                                {/* Caption */}
                                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl font-light">
                                    {milestone.caption}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <ContactFooter />
            </main>
        </HelmetProvider>
    );
};

export default Milestones;
