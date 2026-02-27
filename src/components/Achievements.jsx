import achievementImage from '../assets/1-2.webp';

const Achievements = () => {
    return (
        <section className="px-8 py-24 bg-background relative mb-20">
            <div className="mb-12">
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-4">Recognition</h4>
                <h2 className="text-6xl font-medium tracking-tight text-white mb-12">Achievements</h2>
            </div>

            <div className="flex flex-col gap-6 items-start">
                <div className="relative group overflow-hidden">
                    <img
                        src={achievementImage}
                        alt="Achievement Highlight"
                        className="w-auto h-auto max-w-full"
                    />
                </div>

                <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-300 max-w-4xl">
                    A photo I clicked was displayed at the Visual Poetries Photography Awards and Festival 2025 at Surat.
                </p>
            </div>
        </section>
    );
};

export default Achievements;
