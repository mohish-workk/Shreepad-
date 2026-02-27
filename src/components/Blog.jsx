
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const Blog = () => {
    return (
        <section id="blog" className="px-6 md:px-12 py-16 md:py-24 border-t border-neutral-900 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-[#A1A1AA] block mb-2 text-xs tracking-[0.2em] uppercase font-medium">Stories</span>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white italic">Blog</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-white">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="flex flex-col group"
                        >
                            <Link to={`/blog/${post.id}`} className="block relative overflow-hidden mb-6 rounded-sm bg-neutral-900">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                            </Link>

                            <h3 className="text-xl md:text-2xl font-medium mb-4 group-hover:text-neutral-400 transition-colors">
                                <Link to={`/blog/${post.id}`}>{post.title}</Link>
                            </h3>
                            <p className="text-neutral-400 font-light leading-relaxed mb-6 line-clamp-2">
                                {post.excerpt}
                            </p>

                            <Link
                                to={`/blog/${post.id}`}
                                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-bold border-b border-white/20 pb-1 w-fit group-hover:border-white transition-all"
                            >
                                Read Article
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
