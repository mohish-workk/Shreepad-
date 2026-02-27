import heroImage from '../assets/1.webp';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image Placeholder - using a high quality dark moody portrait/landscape from Unsplash */}
            <div className="absolute inset-0 bg-neutral-900">
                <img
                    src={heroImage}
                    alt="Atmospheric portrait of Shreepad Salunkhe - Visual Storyteller"
                    width="1920"
                    height="1080"
                    fetchpriority="high"
                    className="w-full h-full object-cover opacity-60 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end items-center text-center px-2 pb-32">
                <h1 className="text-[10vw] leading-none font-bold tracking-tighter mix-blend-overlay opacity-90 break-all">
                    SHREEPAD
                </h1>
                <p className="mt-4 text-lg md:text-3xl font-light tracking-wide text-neutral-300 max-w-4xl leading-relaxed break-words">
                    Photographer, Illustrator, Writer, Visual Storyteller.
                </p>
                <div className="mt-4 italic text-neutral-500 font-serif">
                    One's vision is what makes one different from others.
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 group cursor-pointer">
                <div className="animate-bounce">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                    >
                        <path d="M7 13l5 5 5-5M12 6v12" />
                    </svg>
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-white/80">Scroll</span>
            </div>

            {/* Side Vertical Text (Based on Image 4) */}


        </section>
    );
};

export default Hero;
