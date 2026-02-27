import { motion } from 'framer-motion';

const testimonialsImages = import.meta.glob('../assets/work/4 Testimonials/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const testimonialsList = Object.keys(testimonialsImages).map((key, index) => ({
    id: index + 1,
    image: testimonialsImages[key].default
}));

const TestimonialsMarquee = () => {
    return (
        <section className="px-6 md:px-12 py-16 mb-20">
            <div className="max-w-7xl mx-auto">
                {/* Marquee Container */}
                <div className="relative overflow-hidden w-full">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

                    <motion.div
                        className="flex gap-8 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                    >
                        {/* Tripling the list to ensure smooth continuous scroll */}
                        {[...testimonialsList, ...testimonialsList, ...testimonialsList, ...testimonialsList].map((testimonial, index) => (
                            <div
                                key={`${testimonial.id}-${index}`}
                                className="flex-shrink-0"
                            >
                                <img
                                    src={testimonial.image}
                                    alt="Client Testimonial"
                                    className="h-[300px] w-auto object-contain rounded-sm"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsMarquee;
