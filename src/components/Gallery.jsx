import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaExpand, FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Temple Idol Carving',
      category: 'Temple Works',
      description: 'Intricately carved deity idol for temple installation',
    },
    {
      id: 2,
      title: 'Stone Pillar Design',
      category: 'Temple Works',
      description: 'Traditional Kerala-style temple pillar with ornate carvings',
    },
    {
      id: 3,
      title: 'Custom Name Board',
      category: 'Custom Designs',
      description: 'Elegant stone name board with traditional motifs',
    },
    {
      id: 4,
      title: 'Architectural Column',
      category: 'Architectural',
      description: 'Decorative stone column for modern architecture',
    },
    {
      id: 5,
      title: 'Garden Sculpture',
      category: 'Décor',
      description: 'Artistic stone sculpture for garden landscaping',
    },
    {
      id: 6,
      title: 'Temple Restoration',
      category: 'Restoration',
      description: 'Heritage temple restoration project',
    },
  ];

  const categories = ['All', 'Temple Works', 'Custom Designs', 'Architectural', 'Décor', 'Restoration'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-24 bg-[#0a0908] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-temple opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">Our Gallery</span>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-100 mb-4 sm:mb-6 px-4">
            Masterpieces in{' '}
            <span className="text-gold-gradient">Stone</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Explore our collection of handcrafted stone works.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-[#0a0908]'
                  : 'bg-stone-900/50 text-stone-400 border border-gold/20 hover:border-gold/40 hover:text-stone-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-square cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(item)}
            >
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-stone-800 border border-gold/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-gold/20 to-bronze/20 flex items-center justify-center">
                      <span className="font-serif text-2xl sm:text-3xl text-gold">श्री</span>
                    </div>
                    <p className="text-stone-500 text-xs sm:text-sm">Image Placeholder</p>
                  </div>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <span className="text-gold text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="heading-display text-base sm:text-xl text-stone-100 mt-1">{item.title}</h3>
                  <p className="text-stone-400 text-xs sm:text-sm mt-1 sm:mt-2 hidden sm:block">{item.description}</p>
                </div>
                <button className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 sm:w-10 h-8 sm:h-10 bg-gold/20 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold hover:text-[#0a0908] transition-all">
                  <FaExpand size={12} className="sm:hidden" />
                  <FaExpand size={14} className="hidden sm:block" />
                </button>
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="inline-flex items-center space-x-2 bg-stone-900/50 border border-gold/20 px-4 sm:px-6 py-2 sm:py-3">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-stone-400 text-xs sm:text-sm">
              More images coming soon. Contact us for complete portfolio.
            </span>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0908]/95 backdrop-blur-lg p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 sm:w-12 h-10 sm:h-12 bg-stone-900 border border-gold/20 flex items-center justify-center text-stone-400 hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes size={18} className="sm:hidden" />
            <FaTimes size={20} className="hidden sm:block" />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video bg-gradient-to-br from-stone-800 via-stone-900 to-stone-800 border border-gold/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-gold/20 to-bronze/20 flex items-center justify-center">
                  <span className="font-serif text-4xl sm:text-5xl text-gold">श्री</span>
                </div>
                <p className="text-stone-500 text-sm sm:text-base">Image Placeholder</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 text-center">
              <span className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h3 className="heading-display text-xl sm:text-2xl text-stone-100 mt-2">{selectedImage.title}</h3>
              <p className="text-stone-400 mt-2 text-sm sm:text-base">{selectedImage.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
