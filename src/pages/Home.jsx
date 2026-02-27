
import { useEffect } from 'react';
import Hero from '../components/Hero';
import WorkGrid from '../components/WorkGrid';
import Achievements from '../components/Achievements';

import ContactFooter from '../components/ContactFooter';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Hero />
            <WorkGrid />
            <Achievements />

            <ContactFooter />
        </main>
    );
};

export default Home;
