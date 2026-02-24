import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaPlaceOfWorship,
  FaPencilRuler,
  FaBuilding,
  FaHome,
  FaTools,
  FaGem,
} from 'react-icons/fa';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: FaPlaceOfWorship,
      title: 'Temple Stone Works',
      description:
        'Sacred stone carvings for temples including idols, pillars, and ornamental carvings.',
      features: ['Idols & Vigrahams', 'Temple Pillars', 'Kurumbadi Designs'],
    },
    {
      icon: FaPencilRuler,
      title: 'Custom Stone Designs',
      description:
        'Personalized stone creations including name boards, logo stones, and name plates.',
      features: ['Name Boards', 'Logo Stones', 'House Name Plates'],
    },
    {
      icon: FaBuilding,
      title: 'Architectural Works',
      description:
        'Structural stone elements including door frames, window frames, arches, and columns.',
      features: ['Door Frames', 'Window Frames', 'Arches & Columns'],
    },
    {
      icon: FaHome,
      title: 'Interior & Exterior Décor',
      description:
        'Decorative stone elements for homes and commercial spaces.',
      features: ['Wall Panels', 'Murals', 'Garden Stones'],
    },
    {
      icon: FaTools,
      title: 'Renovation & Restoration',
      description:
        'Expert restoration of old stone structures and temple elements.',
      features: ['Temple Restoration', 'Heritage Conservation', 'Stone Repair'],
    },
    {
      icon: FaGem,
      title: 'Premium Stone Selection',
      description:
        'We work with the finest quality stones including granite, sandstone, and marble.',
      features: ['Granite Works', 'Sandstone Carving', 'Marble Sculpting'],
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#0a0908] via-[#0d0b09] to-[#0a0908] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-temple opacity-20" />

      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">Our Services</span>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-100 mb-4 sm:mb-6 px-4">
            Crafting Excellence in{' '}
            <span className="text-gold-gradient">Stone Artistry</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
            From sacred temple carvings to modern architectural elements, we offer comprehensive
            stone crafting services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-luxury h-full flex flex-col p-4 sm:p-6">
                {/* Icon & Number */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded bg-gradient-to-br from-gold/20 to-bronze/20 flex items-center justify-center group-hover:from-gold/30 group-hover:to-bronze/30 transition-all duration-300">
                    <service.icon className="text-lg sm:text-2xl text-gold" />
                  </div>
                  <span className="text-2xl sm:text-4xl font-bold text-gold/10 group-hover:text-gold/20 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="heading-display text-base sm:text-xl text-stone-200 mb-2 sm:mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-3 sm:pt-4 border-t border-gold/10">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 bg-stone-900/50 border border-gold/10 text-stone-400 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-10 sm:mt-16"
        >
          <p className="text-stone-400 mb-4 sm:mb-6 text-sm sm:text-base">
            Have a unique project in mind? Let's discuss your requirements.
          </p>
          <motion.a
            href="tel:+919744694839"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-luxury inline-flex items-center text-sm sm:text-base"
          >
            <span>Call Now for Stone Works</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
