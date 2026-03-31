import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaExpand, FaTimes, FaCalendarAlt, FaMapMarkerAlt, FaSearchPlus, FaSearchMinus } from 'react-icons/fa';

const RecentWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const recentWorks = [
    {
      id: 1,
      title: 'Sree Krishna Temple Idol',
      category: 'Temple Idol',
      date: 'January 2026',
      location: 'Ottapalam, Kerala',
      description: 'Intricately carved Lord Krishna idol with traditional ornaments and divine expressions',
    },
    {
      id: 2,
      title: 'Traditional Temple Pillar',
      category: 'Temple Architecture',
      date: 'December 2025',
      location: 'Mannarkkad, Kerala',
      description: 'Ornate pillar with intricate carvings depicting mythological scenes',
    },
    {
      id: 3,
      title: 'Residential Name Board',
      category: 'Custom Design',
      date: 'November 2025',
      location: 'Palakkad, Kerala',
      description: 'Elegant stone name board with traditional Kerala motifs',
    },
    {
      id: 4,
      title: 'Temple Door Frame',
      category: 'Architectural',
      date: 'October 2025',
      location: 'Kottayam, Kerala',
      description: 'Carved door frame with traditional floral patterns',
    },
    {
      id: 5,
      title: 'Garden Stone Fountain',
      category: 'Landscape',
      date: 'September 2025',
      location: 'Thrissur, Kerala',
      description: 'Beautiful stone fountain with elephant motifs',
    },
    {
      id: 6,
      title: 'Lord Ganesha Idol',
      category: 'Temple Idol',
      date: 'August 2025',
      location: 'Kochi, Kerala',
      description: 'Hand-carved Ganesha idol with intricate details',
    },
    {
      id: 7,
      title: 'Temple Renovation',
      category: 'Restoration',
      date: 'July 2025',
      location: 'Kollam, Kerala',
      description: 'Complete restoration of ancient temple carvings',
    },
    {
      id: 8,
      title: 'Window Frame Design',
      category: 'Architectural',
      date: 'June 2025',
      location: 'Malappuram, Kerala',
      description: 'Traditional window frame with lattice work',
    },
    {
      id: 9,
      title: 'Shiva Lingam',
      category: 'Temple Idol',
      date: 'May 2025',
      location: 'Thiruvananthapuram, Kerala',
      description: 'Sacred Shiva Lingam with Nandi sculpture',
    },
  ];

  const handleImageClick = (item) => {
    setSelectedImage(item);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  };

  return (
    <section
      id="recent-works"
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-24 bg-[#0a0908] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-temple opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

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
            <span className="text-gold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">Our Projects</span>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-100 mb-4 sm:mb-6 px-4">
            Recently{' '}
            <span className="text-gold-gradient">Completed</span>{' '}
            Works
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Explore our latest stone carving projects showcasing traditional craftsmanship.
          </p>
        </motion.div>

        {/* Recent Works Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {recentWorks.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden"
              onClick={() => handleImageClick(item)}
            >
              {/* Image Container with Hover Zoom */}
              <div className="aspect-[4/3] overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-stone-800 via-stone-900 to-stone-800 border border-gold/10">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-gold/20 to-bronze/20 flex items-center justify-center">
                          <span className="font-serif text-2xl sm:text-3xl text-gold">श्री</span>
                        </div>
                        <p className="text-stone-500 text-xs sm:text-sm">Project Image</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 sm:w-10 h-8 sm:h-10 bg-gold/20 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold hover:text-[#0a0908] transition-all">
                    <FaExpand size={12} className="sm:hidden" />
                    <FaExpand size={14} className="hidden sm:block" />
                  </button>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <span className="text-gold text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="heading-display text-base sm:text-xl text-stone-100 mt-1">{item.title}</h3>
                    <div className="flex items-center gap-3 mt-2 text-stone-400 text-xs">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt size={10} />
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Border Animation */}
                <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 transition-colors duration-300 pointer-events-none" />
              </div>

              {/* Info Below Image */}
              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-stone-900/50 border border-gold/10">
                <h3 className="heading-display text-sm sm:text-lg text-stone-100">{item.title}</h3>
                <div className="flex items-center gap-2 mt-2 text-stone-500 text-xs">
                  <FaCalendarAlt size={10} />
                  <span>{item.date}</span>
                  <span className="mx-1">•</span>
                  <FaMapMarkerAlt size={10} />
                  <span>{item.location}</span>
                </div>
                <p className="text-stone-400 text-xs mt-2 line-clamp-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-stone-900/50 border border-gold/20 px-4 sm:px-6 py-2 sm:py-3">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-stone-400 text-xs sm:text-sm">
              More projects coming soon. Contact us for custom orders.
            </span>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal with Zoom */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0908]/95 backdrop-blur-lg p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 sm:w-12 h-10 sm:h-12 bg-stone-900 border border-gold/20 flex items-center justify-center text-stone-400 hover:text-gold transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes size={18} className="sm:hidden" />
              <FaTimes size={20} className="hidden sm:block" />
            </button>

            <div 
              className="max-w-5xl w-full max-h-[90vh] overflow-y-auto" 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Zoom Controls */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-stone-400 text-sm">
                  Zoom: {Math.round(zoomLevel * 100)}%
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleZoomOut}
                    className="w-8 h-8 bg-stone-900 border border-gold/20 flex items-center justify-center text-stone-400 hover:text-gold transition-colors"
                  >
                    <FaSearchMinus size={14} />
                  </button>
                  <button
                    onClick={handleZoomIn}
                    className="w-8 h-8 bg-stone-900 border border-gold/20 flex items-center justify-center text-stone-400 hover:text-gold transition-colors"
                  >
                    <FaSearchPlus size={14} />
                  </button>
                </div>
              </div>

              {/* Main Image with Zoom */}
              <motion.div
                className="aspect-video bg-gradient-to-br from-stone-800 via-stone-900 to-stone-800 border border-gold/10 flex items-center justify-center overflow-hidden"
                animate={{ scale: zoomLevel }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-gold/20 to-bronze/20 flex items-center justify-center">
                    <span className="font-serif text-4xl sm:text-5xl text-gold">श्री</span>
                  </div>
                  <p className="text-stone-500 text-sm sm:text-base">Project Image</p>
                </div>
              </motion.div>
              
              {/* Project Info */}
              <div className="text-center">
                <span className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="heading-display text-xl sm:text-2xl text-stone-100 mt-2">{selectedImage.title}</h3>
                
                <div className="flex items-center justify-center gap-4 mt-3 text-stone-400 text-sm">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt size={12} />
                    {selectedImage.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt size={12} />
                    {selectedImage.location}
                  </span>
                </div>
                
                <p className="text-stone-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">{selectedImage.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RecentWorks;
