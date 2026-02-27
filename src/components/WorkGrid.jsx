import { Link } from 'react-router-dom';
import work1 from '../assets/subsection2  work/1.webp';
import work2 from '../assets/subsection2  work/2.webp';
import work3 from '../assets/subsection2  work/3.webp';
import work4 from '../assets/subsection2  work/4.webp';
import work5 from '../assets/subsection2  work/5.webp';
import work6 from '../assets/subsection2  work/6.webp';

const projects = [
    { id: 1, title: "THE BURNING MAN", description: "The Burning Man. The man was not harmed and is safe. HOW?", image: work1, categories: ["Selected Works"] },
    { id: 2, title: "BLINDED", description: "She was blinded not by the darkness, but by the bright light.", image: work2, categories: ["Work"] },
    { id: 3, title: "DANCE", description: "Dance was his portal to another world.", image: work3, categories: ["Stories"] },
    { id: 4, title: "SHE ATE 8", description: "She ate 8 of them.", image: work4, categories: ["Experimental"] },
    { id: 5, title: "MOO", description: "Moo", image: work5, categories: ["Nature"] },
    { id: 6, title: "HOPE", description: "Her name is HOPE", image: work6, categories: ["Selected Works"] }
];

const WorkGrid = () => {
    return (
        <section className="px-4 xs:px-8 py-24 bg-black text-white" aria-labelledby="work-heading">
            <div className="mb-12">
                <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-4">Selected Works</p>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <h2 id="work-heading" className="text-6xl font-medium tracking-tight">Work</h2>
                    <Link to="/work" className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest">
                        View All Work
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {projects.map((project, index) => (
                    <div key={project.id} className="group flex flex-col">
                        {/* FIX: overflow-hidden prevents the image scale from leaking.
                            The negative margin/scale combo kills the white border. 
                        */}
                        <div className="mb-2 md:mb-6 relative bg-black overflow-hidden">
                            <img
                                src={project.image}
                                alt={`Project: ${project.title}`}
                                loading="eager"
                                className="w-full h-auto block object-cover transition-transform duration-500 group-hover:scale-[1.03] scale-[1.01] border-none outline-none"
                                style={{
                                    margin: '-1px',
                                    width: 'calc(100% + 2px)',
                                    filter: 'contrast(1.01)' // Optional: subtle punch to match black bg
                                }}
                            />
                        </div>

                        <div className="md:mt-auto">
                            <p className="text-sm font-light leading-relaxed text-neutral-400">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkGrid;