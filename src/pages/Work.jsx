import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ContactFooter from '@/components/ContactFooter';
import AnimatedText from '@/components/AnimatedText';
import PersonalWork from './PersonalWork';
import CommercialWork from './CommercialWork';
import LogosGrid from '@/components/LogosGrid';
import TestimonialsMarquee from '@/components/TestimonialsMarquee';

const Work = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // Default to 'personal' or whatever is in the URL 'tab' param
    // We also support the legacy 'category' param by inferring the tab if needed, 
    // but primarily we drive this by 'tab' param or internal state.
    const initialTab = searchParams.get('tab') || 'commercial';
    const [activeTab, setActiveTab] = useState(initialTab);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Update URL when tab changes, but keep existing params if they belong to the tab?
        // Actually, simpler to just set ?tab=...
        // However, PersonalWork and CommercialWork rely on ?category=...
        // So we should be careful not to wipe out category if it's relevant.

        // If the user manually changes URL ?tab=..., we sync state
        const currentTabParam = searchParams.get('tab');
        if (currentTabParam && ['personal', 'commercial', 'logos', 'testimonials'].includes(currentTabParam)) {
            setActiveTab(currentTabParam);
        }
    }, [searchParams]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        // Update URL to reflect tab change, but we might want to preserve category if switching back?
        // For simplicity, we just set the tab. Child components read their own category defaults.
        setSearchParams({ tab });
        window.scrollTo(0, 0);
    };

    return (
        <HelmetProvider>
            <>
                <Helmet>
                    <title>Work | Shreepad - Photography Portfolio</title>
                    <meta name="description" content="Explore Shreepad's photography portfolio featuring personal projects, commercial work, logo designs, and client testimonials." />
                </Helmet>

                <main className="min-h-screen pt-32 bg-background text-foreground">
                    {/* Header */}
                    <section className="px-6 md:px-12 mb-8">
                        <div className="max-w-7xl mx-auto">
                            <AnimatedText
                                text="Work"
                                autoStart={true}
                                className="text-5xl md:text-7xl font-bold tracking-tight text-white ps-0"
                            />
                        </div>
                    </section>

                    {/* Main Tabs */}
                    <section className="px-6 md:px-12 mb-12 border-b border-neutral-800">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
                                {['commercial', 'personal', 'logos', 'testimonials'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => handleTabChange(tab)}
                                        className={`text-sm uppercase tracking-wider whitespace-nowrap pb-4 border-b-2 transition-colors ${activeTab === tab
                                            ? 'border-white text-white font-medium'
                                            : 'border-transparent text-[#A1A1AA] hover:text-white'
                                            }`}
                                        data-cursor-hover
                                    >
                                        {tab === 'personal' ? 'Personal Projects' :
                                            tab === 'commercial' ? 'Commercial Projects' :
                                                tab === 'logos' ? 'Logos' : 'Testimonials'}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Content Area */}
                    <div className="min-h-[50vh]">
                        {activeTab === 'personal' && <PersonalWork isEmbedded={true} />}
                        {activeTab === 'commercial' && <CommercialWork isEmbedded={true} />}
                        {activeTab === 'logos' && <LogosGrid />}
                        {activeTab === 'testimonials' && <TestimonialsMarquee />}
                    </div>

                    {/* Only show ContactFooter if NOT in personal/commercial since they have their own or we want a global one? 
                        In the provided design, PersonalWork and CommercialWork had their own footers. 
                        But we passed isEmbedded=true which hides their footers. 
                        So we should render the footer here globally. */}
                    <ContactFooter />
                </main>
            </>
        </HelmetProvider>
    );
};

export default Work;
