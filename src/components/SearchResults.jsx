import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaSearch, FaTimes, FaImage } from 'react-icons/fa';

const SearchResults = ({ searchQuery, onClose }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Product data with images
  const products = [
    { name: 'Temple Idol Carving', category: 'Temple Works', description: 'Intricately carved deity idols for temple installation with traditional designs', keywords: ['idol', 'temple', 'carving'] },
    { name: 'Stone Pillar Design', category: 'Temple Works', description: 'Traditional Kerala-style temple pillars with ornate carvings and mythological scenes', keywords: ['pillar', 'temple', 'design'] },
    { name: 'Custom Name Board', category: 'Custom Designs', description: 'Elegant stone name boards with traditional Kerala motifs and modern designs', keywords: ['name', 'board', 'custom'] },
    { name: 'Architectural Column', category: 'Architectural', description: 'Decorative stone columns for modern and traditional architecture', keywords: ['column', 'architectural'] },
    { name: 'Garden Sculpture', category: 'Décor', description: 'Artistic stone sculptures and garden landscaping elements', keywords: ['garden', 'sculpture'] },
    { name: 'Temple Restoration', category: 'Restoration', description: 'Heritage temple restoration and ancient stone work preservation', keywords: ['temple', 'restoration'] },
    { name: 'Door Frame Carving', category: 'Architectural', description: 'Traditional doorway frames with intricate floral and geometric patterns', keywords: ['door', 'frame', 'carving'] },
    { name: 'Window Frame Design', category: 'Architectural', description: 'Traditional window frames with lattice work and ornamental designs', keywords: ['window', 'frame'] },
    { name: 'House Name Plate', category: 'Custom Designs', description: 'Customized stone name plates for residences with various styles', keywords: ['house', 'name', 'plate'] },
    { name: 'Kurumbadi Design', category: 'Temple Works', description: 'Traditional kurumbadi designs for temple entrances', keywords: ['kurumbadi', 'design'] },
    { name: 'Lord Ganesha Idol', category: 'Temple Idol', description: 'Hand-carved Ganesha idols with intricate details and traditional ornaments', keywords: ['ganesha', 'idol'] },
    { name: 'Lord Krishna Idol', category: 'Temple Idol', description: 'Divine Krishna idols with traditional attire and musical instruments', keywords: ['krishna', 'idol'] },
    { name: 'Lord Shiva Lingam', category: 'Temple Idol', description: 'Sacred Shiva Lingam with Nandi sculpture and protective base', keywords: ['shiva', 'lingam'] },
    { name: 'Nandi Sculpture', category: 'Temple Idol', description: 'Nandi bull sculptures for temple sanctuaries', keywords: ['nandi', 'sculpture'] },
    { name: 'Granite Work', category: 'Materials', description: 'High-quality granite stone works for various applications', keywords: ['granite'] },
    { name: 'Marble Work', category: 'Materials', description: 'Elegant marble carvings and decorative stone work', keywords: ['marble'] },
    { name: 'Sandstone Work', category: 'Materials', description: 'Natural sandstone carvings and architectural elements', keywords: ['sandstone'] },
    { name: 'Stone Mural', category: 'Décor', description: 'Beautiful stone murals and wall art compositions', keywords: ['mural', 'stone'] },
    { name: 'Wall Panel', category: 'Décor', description: 'Decorative wall panels for interior and exterior', keywords: ['wall', 'panel'] },
    { name: 'Decorative Panel', category: 'Décor', description: 'Ornamental panels with traditional and contemporary designs', keywords: ['decorative', 'panel'] },
  ];

  // Filter products based on search query
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Sample images for each product (using placeholder with different colors)
  const getImageColor = (index) => {
    const colors = ['from-stone-700', 'from-stone-800', 'from-amber-900', 'from-yellow-900', 'from-orange-900', 'from-stone-600'];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#0a0908] overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 bg-stone-950/95 backdrop-blur-sm border-b border-gold/10 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h2 className="heading-display text-xl sm:text-2xl text-stone-100">
              Search Results for "{searchQuery}"
            </h2>
            <p className="text-stone-400 text-sm mt-1">
              Found {filteredProducts.length} results
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-3 bg-stone-900 border border-gold/20 text-stone-400 hover:text-gold transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>
      </div>

      {/* Results Grid */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group bg-stone-900/50 border border-gold/10 hover:border-gold/30 transition-all duration-300"
              >
                {/* Image */}
                <div className={`aspect-square bg-gradient-to-br ${getImageColor(index)} to-stone-900 relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-full bg-gold/10 flex items-center justify-center">
                        <FaImage className="text-gold/50 text-2xl sm:text-3xl" />
                      </div>
                      <p className="text-stone-500 text-xs sm:text-sm">Product Image</p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-gold/20 backdrop-blur-sm">
                    <span className="text-gold text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="heading-display text-base sm:text-lg text-stone-100 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {product.keywords.map((keyword, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 bg-stone-800 text-stone-500">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-stone-900 flex items-center justify-center">
              <FaSearch className="text-stone-500 text-3xl" />
            </div>
            <h3 className="heading-display text-xl text-stone-300 mb-2">No Results Found</h3>
            <p className="text-stone-500 max-w-md mx-auto">
              We couldn't find any products matching "{searchQuery}". Try different keywords or browse our services.
            </p>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="border-t border-gold/10 p-6 sm:p-8 bg-stone-950/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-stone-400 mb-4">Can't find what you're looking for?</p>
          <a 
            href="#contact" 
            className="btn-luxury inline-flex items-center"
            onClick={onClose}
          >
            <FaPhone className="mr-2" />
            Contact Us for Custom Orders
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchResults;