import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaBars, FaTimes, FaSearch, FaGem } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Search through all text content on the page
      const searchTerm = searchQuery.toLowerCase();
      const sections = ['home', 'about', 'services', 'gallery', 'contact'];
      
      // Find matching section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const text = element.textContent.toLowerCase();
          if (text.includes(searchTerm)) {
            element.scrollIntoView({ behavior: 'smooth' });
            break;
          }
        }
      }
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-dark border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-4 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded bg-gradient-to-br from-gold via-gold-dark to-bronze flex items-center justify-center shadow-lg shadow-gold/20">
                <span className="font-serif text-2xl font-bold text-[#0a0908]">श्री</span>
              </div>
              <div className="absolute inset-0 rounded bg-gold/30 animate-pulse" style={{ animationDuration: '2s' }} />
              {/* Decorative dots around logo */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full opacity-60" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gold rounded-full opacity-60" />
            </div>
            <div className="hidden sm:block">
              <h1 className="heading-display text-lg text-stone-100 leading-tight group-hover:text-gold transition-colors">
                SREE SASTHA
              </h1>
              <p className="text-[10px] text-gold tracking-[0.2em] uppercase">
                Silpakalalayam
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative px-5 py-2 text-sm text-stone-300 hover:text-gold transition-colors duration-300 tracking-wider uppercase font-light group"
              >
                {link.name}
                {/* Diamond indicator on hover */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Right Side - Search & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Bar */}
            <AnimatePresence>
              {isSearchOpen ? (
                <motion.form
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  onSubmit={handleSearch}
                  className="relative"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services..."
                    className="w-48 px-4 py-2 bg-stone-900/80 border border-gold/30 text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-gold"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-500 hover:text-gold"
                  >
                    <FaTimes size={14} />
                  </button>
                </motion.form>
              ) : (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-stone-400 hover:text-gold transition-colors group"
                >
                  <FaSearch size={18} className="group-hover:scale-110 transition-transform" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Decorative Element */}
            <div className="hidden xl:flex items-center space-x-2 text-gold/40">
              <FaGem size={12} />
              <span className="text-xs tracking-widest">HERITAGE</span>
              <FaGem size={12} />
            </div>

            {/* CTA Button */}
            <motion.a
              href="tel:+919744694839"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-luxury text-sm"
            >
              <FaPhone className="mr-2" />
              <span>Call Now</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gold hover:text-gold-light transition-colors"
            >
              <FaSearch size={20} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gold hover:text-gold-light transition-colors"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.form
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              onSubmit={handleSearch}
              className="lg:hidden pb-4"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, gallery..."
                className="w-full px-4 py-3 bg-stone-900/80 border border-gold/30 text-stone-200 placeholder-stone-500 focus:outline-none focus:border-gold"
              />
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-dark border-t border-gold/10"
          >
            <div className="px-4 py-8 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-lg text-stone-300 hover:text-gold transition-colors py-3 border-b border-stone-800/50 tracking-wider uppercase"
                >
                  <span>{link.name}</span>
                  <span className="w-1.5 h-1.5 bg-gold rotate-45" />
                </motion.a>
              ))}
              <motion.a
                href="tel:+919744694839"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="btn-luxury w-full flex items-center justify-center space-x-2 mt-6"
              >
                <FaPhone className="text-sm" />
                <span>Call Now for Stone Works</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
