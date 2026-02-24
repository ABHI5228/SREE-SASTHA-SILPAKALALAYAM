import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0908] border-t border-gold/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center space-x-4 mb-4 sm:mb-6 justify-center sm:justify-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-gradient-to-br from-gold via-gold-dark to-bronze flex items-center justify-center shadow-lg shadow-gold/20">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#0a0908]">श्री</span>
              </div>
              <div>
                <h3 className="heading-display text-lg sm:text-xl text-stone-100">SREE SASTHA</h3>
                <p className="text-[10px] sm:text-xs text-gold tracking-[0.15em] sm:tracking-[0.2em] uppercase">Silpakalalayam</p>
              </div>
            </div>
            <p className="text-stone-400 leading-relaxed mb-4 sm:mb-6 max-w-md mx-auto sm:mx-0 text-sm sm:text-base">
              Masters of traditional stone carving, preserving Kerala's rich heritage through
              exquisite craftsmanship.
            </p>
            <div className="flex items-center space-x-2 text-stone-500 justify-center sm:justify-start text-sm sm:text-base">
              <FaMapMarkerAlt className="text-gold" />
              <span>Meetna Centre, Ottapalam, Kerala</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="heading-display text-base sm:text-lg text-stone-200 mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-stone-400 hover:text-gold transition-colors inline-flex items-center group text-sm sm:text-base"
                  >
                    <span className="w-0 h-px bg-gold group-hover:w-3 sm:group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="heading-display text-base sm:text-lg text-stone-200 mb-4 sm:mb-6">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Temple Stone Works',
                'Custom Stone Designs',
                'Architectural Works',
                'Interior Décor',
                'Restoration',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-stone-400 hover:text-gold transition-colors inline-flex items-center group text-sm sm:text-base"
                  >
                    <span className="w-0 h-px bg-gold group-hover:w-3 sm:group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gold/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <p className="text-stone-400 mb-1 sm:mb-2 text-sm sm:text-base">Ready to start your project?</p>
              <a
                href="tel:+919744694839"
                className="inline-flex items-center text-gold font-semibold text-base sm:text-lg hover:text-gold-light transition-colors"
              >
                <FaPhone className="mr-2 text-sm sm:text-base" />
                +91 9744694839
              </a>
            </div>
            <motion.a
              href="tel:+919744694839"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-luxury text-sm sm:text-base"
            >
              <FaPhone className="mr-2" />
              Call Now for Stone Works
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-stone-900/30 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-stone-500 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Sree Sastha Silpakalalayam. All rights reserved.
            </p>
            <p className="text-stone-500 text-xs sm:text-sm flex items-center">
              Crafted with <FaHeart className="text-gold mx-1 text-xs sm:text-sm" /> in Kerala, India
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold to-bronze text-[#0a0908] flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-gold/20 transition-shadow z-40"
      >
        <FaArrowUp className="text-sm sm:text-base" />
      </motion.button>
    </footer>
  );
};

export default Footer;
