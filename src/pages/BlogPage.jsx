
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogData';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AnimatedText from '../components/AnimatedText';
import ContactFooter from '../components/ContactFooter';

const BlogPage = () => {
    useEffect(() => {
        // Wrap in timeout to ensure it runs after any browser scroll restoration and initial render
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <HelmetProvider>
            <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-32">
                <Helmet>
                    <title>Blog | Shreepad - Photography & Stories</title>
                    <meta name="description" content="Explore stories behind the lens, personal reflections, and visual interpretations by Shreepad." />
                </Helmet>

                <main>

                    {/* Blog Posts */}
                    <section className="px-6 md:px-12 pb-16 md:pb-32">
                        <div className="max-w-4xl mx-auto">
                            {blogPosts.map((post, index) => {
                                const isShortPost = ['1a', '1b', '2', '3a', '3b', '4a', '4b', '5a', '5b', '5c', '5d'].includes(post.title);
                                const hasTitle = !isShortPost;

                                return (
                                    <div key={post.id} className={index === blogPosts.length - 1 ? "" : "mb-24 md:mb-40"}>
                                        <article className={`${hasTitle ? 'border-b-4 border-neutral-700' : 'border-b-2 border-neutral-800'} ${isShortPost ? 'pb-12 md:pb-20' : 'pb-20 md:pb-32'} ${index === blogPosts.length - 1 ? 'border-0 pb-0' : ''}`}>
                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={index === 0 ? { opacity: 1, y: 0 } : undefined}
                                                whileInView={index !== 0 ? { opacity: 1, y: 0 } : undefined}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                {post.topQuote && (
                                                    <>
                                                        <div className="py-16 text-center">
                                                            <p className="text-lg md:text-2xl text-neutral-500 font-light italic tracking-wide">
                                                                {post.topQuote}
                                                            </p>
                                                        </div>
                                                        <div className="max-w-xs mx-auto border-t border-neutral-800 mb-20" />
                                                    </>
                                                )}
                                                <div className={(hasTitle || post.image) ? "mb-12" : ""}>
                                                    {hasTitle && (
                                                        <>
                                                            <h2 className="text-3xl md:text-6xl font-bold tracking-tight leading-tight mb-8">
                                                                {post.title}
                                                            </h2>
                                                        </>
                                                    )}

                                                    {post.image && (
                                                        <div className="w-full bg-neutral-900 mb-12 rounded-sm">
                                                            <img
                                                                src={post.image}
                                                                alt={post.title}
                                                                loading={index === 0 ? "eager" : "lazy"}
                                                                fetchpriority={index === 0 ? "high" : "auto"}
                                                                className="w-full h-auto"
                                                            />
                                                        </div>
                                                    )}
                                                </div>



                                                <div className="text-base md:text-xl text-neutral-300 font-light leading-relaxed space-y-6 md:space-y-8">
                                                    {post.content.split('\n\n').map((paragraph, i) => (
                                                        <p key={i} className="whitespace-pre-line">
                                                            {paragraph.split('\n').map(line => line.trim()).join('\n')}
                                                        </p>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </article>



                                        {post.title === "Death's Door" && (
                                            <div className="py-24 text-center">
                                                <p className="text-xl md:text-2xl text-neutral-500 font-light italic tracking-wide">
                                                    Does procrastinating procrastination mean not procrastinating !?
                                                </p>
                                            </div>
                                        )}

                                        {post.title === '5d' && (
                                            <div className="py-12 md:py-24 text-center">
                                                <p className="text-lg md:text-2xl text-neutral-500 font-light italic tracking-wide">
                                                    Man does crazy things to get paid and laid.
                                                </p>
                                            </div>
                                        )}


                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    <ContactFooter />
                </main>
            </div>
        </HelmetProvider>
    );
};

export default BlogPage;
