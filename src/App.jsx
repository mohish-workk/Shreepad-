
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Milestones from './pages/Milestones';
import Work from './pages/Work';
import CommercialWork from './pages/CommercialWork';
import PersonalWork from './pages/PersonalWork';

import BlogPage from './pages/BlogPage';

import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <Router>
      <CustomCursor />
      <div className="min-h-screen bg-background text-white selection:bg-white selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/commercial" element={<CommercialWork />} />
          <Route path="/work/personal" element={<PersonalWork />} />
          <Route path="/blog" element={<BlogPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
