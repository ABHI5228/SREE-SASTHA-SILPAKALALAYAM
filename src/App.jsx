import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import RecentWorks from './components/RecentWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setShowSearchResults(true);
  };

  const closeSearch = () => {
    setShowSearchResults(false);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#0a0908] text-stone-100 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="loader-container"
          >
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold via-gold-dark to-bronze flex items-center justify-center shadow-lg shadow-gold/30">
                <span className="font-serif text-5xl font-bold text-[#0a0908]">श्री</span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-transparent border-t-gold rounded-full"
              />
            </motion.div>

            {/* Business Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-center"
            >
              <h1 className="heading-display text-2xl text-stone-100">SREE SASTHA</h1>
              <p className="text-gold text-sm tracking-[0.2em] mt-1">SILPAKALALAYAM</p>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="h-0.5 bg-gradient-to-r from-gold via-gold-light to-bronze mt-8 rounded-full"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-stone-500 text-sm mt-4 tracking-wider"
            >
              Loading...
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar onSearch={handleSearch} />
            <main>
              <Hero />
              <About />
              <Services />
              <Gallery />
              <RecentWorks />
              <Contact />
            </main>
            <Footer />
            <AnimatePresence>
              {showSearchResults && (
                <SearchResults searchQuery={searchQuery} onClose={closeSearch} />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
