import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGem, FaAward, FaUsers, FaClock } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: FaGem,
      title: 'Premium Quality',
      description: 'Finest quality stones from trusted quarries across India.',
    },
    {
      icon: FaAward,
      title: 'Master Craftsmen',
      description: 'Generations of traditional stone carving expertise.',
    },
    {
      icon: FaUsers,
      title: 'Client Focused',
      description: 'We bring your vision to life with precision.',
    },
    {
      icon: FaClock,
      title: 'Timely Delivery',
      description: 'Projects completed on schedule, every time.',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-24 bg-[#0a0908] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-temple opacity-30" />
      
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">About Us</span>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-100 mb-4 sm:mb-6 px-4">
            Preserving the Ancient Art of{' '}
            <span className="text-gold-gradient">Stone Carving</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-sm sm:max-w-lg mx-auto">
              {/* Decorative Frame */}
              <div className="absolute inset-0 border border-gold/20 rounded transform rotate-2" />
              <div className="absolute inset-0 border border-gold/10 rounded transform -rotate-2" />

              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-stone-900 to-stone-950 rounded overflow-hidden h-full flex items-center justify-center border border-gold/10">
                {/* Placeholder for actual image */}
                <div className="text-center p-6 sm:p-8">
                  <motion.div
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-gold to-bronze flex items-center justify-center shadow-lg shadow-gold/20"
                  >
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-[#0a0908]">श्री</span>
                  </motion.div>
                  <h3 className="heading-display text-lg sm:text-xl text-stone-200 mb-2">
                    Sree Sastha Silpakalalayam
                  </h3>
                  <p className="text-gold/80 text-xs sm:text-sm tracking-wider">Est. Ottapalam, Kerala</p>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-gold/40" />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-gold/40" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-gold/40" />
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-gold/40" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-stone-900 border border-gold/30 rounded p-3 sm:p-4 shadow-xl"
              >
                <div className="text-2xl sm:text-3xl font-bold text-gold-gradient">50+</div>
                <div className="text-xs sm:text-sm text-stone-400">Years of Excellence</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <h3 className="heading-serif text-xl sm:text-2xl text-stone-200 mb-4 sm:mb-6 text-center lg:text-left">
              A Legacy of Craftsmanship & Excellence
            </h3>

            <div className="space-y-3 sm:space-y-4 text-stone-400 leading-relaxed text-sm sm:text-base">
              <p>
                <span className="text-gold font-semibold">Sree Sastha Silpakalalayam</span> is
                a premier stone carving establishment located in the heart of Ottapalam, Kerala. For
                over two decades, we have been preserving and promoting the ancient art of traditional stone carving.
              </p>

              <p>
                Our skilled artisans specialize in creating exquisite temple stone works, including
                intricately carved idols (vigrahams), majestic pillars, ornamental kurumbadi designs,
                and custom architectural elements.
              </p>

              <p>
                We take immense pride in our commitment to quality, authenticity, and customer
                satisfaction. Each piece we create is a testament to our dedication to the craft.
              </p>
            </div>

            {/* Values */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {['Precision', 'Durability', 'Heritage', 'Trust', 'Excellence'].map((value, index) => (
                <motion.span
                  key={value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-stone-900/50 border border-gold/20 rounded text-xs sm:text-sm text-stone-300 hover:border-gold/40 transition-colors"
                >
                  {value}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="card-luxury text-center group p-4 sm:p-6"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded bg-gradient-to-br from-gold/20 to-bronze/20 flex items-center justify-center group-hover:from-gold/30 group-hover:to-bronze/30 transition-all">
                <feature.icon className="text-xl sm:text-2xl text-gold" />
              </div>
              <h4 className="heading-display text-sm sm:text-lg text-stone-200 mb-1 sm:mb-2">
                {feature.title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 hidden sm:block">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
