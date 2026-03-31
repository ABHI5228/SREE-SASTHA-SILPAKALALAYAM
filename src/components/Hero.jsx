import { motion } from 'framer-motion';
import { FaPhone, FaChevronDown, FaGem, FaAward, FaUsers } from 'react-icons/fa';
import StoneModel from './StoneModel';

// Temple-themed animated elements
const TempleLamp = ({ style, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    style={style}
    className="absolute pointer-events-none hidden sm:block"
  >
    <motion.div
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.8, 1, 0.8]
      }}
      transition={{ duration: 2, repeat: Infinity, delay: delay * 2 }}
      className="relative"
    >
      {/* Lamp Base */}
      <div className="w-8 h-12 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-3 bg-gradient-to-t from-gold-dark to-gold rounded-b-full" />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-4 h-6 bg-gradient-to-t from-gold to-gold-light rounded-t-lg" />
        {/* Flame */}
        <motion.div
          animate={{ 
            scaleY: [1, 1.2, 1],
            opacity: [0.9, 1, 0.9]
          }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-3 h-5 bg-gradient-to-t from-amber via-gold-light to-yellow-200 rounded-full blur-[1px]"
        />
      </div>
    </motion.div>
  </motion.div>
);

const TemplePillar = ({ style, height = 'h-64', side = 'left' }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
    style={style}
    className={`absolute ${height} w-10 md:w-12 pointer-events-none hidden lg:block`}
  >
    <div className="relative h-full w-full">
      {/* Base */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gold/30 via-gold/20 to-transparent rounded-b-lg" />
      {/* Pillar Body */}
      <div className={`absolute bottom-8 top-8 ${side === 'left' ? 'right-1' : 'left-1'} w-8 md:w-10 bg-gradient-to-b from-gold/10 via-gold/5 to-gold/20 rounded-t-lg`}>
        {/* Carvings */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 -translate-x-1/2 w-6 md:w-8 h-px bg-gold/30"
            style={{ top: `${(i + 1) * 18}%` }}
          />
        ))}
      </div>
      {/* Capital */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gold/30 to-gold/10 rounded-t-lg" />
    </div>
  </motion.div>
);

const LotusFlower = ({ style, size = 40, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.8, type: 'spring' }}
    style={style}
    className="absolute pointer-events-none hidden md:block"
  >
    <motion.div
      animate={{ rotate: [0, 5, 0, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, delay }}
      className="relative"
      style={{ width: size, height: size }}
    >
      {/* Petals */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-gradient-to-t from-gold/60 to-gold-light/80 rounded-full"
          style={{
            width: size * 0.3,
            height: size * 0.6,
            left: '50%',
            top: '50%',
            transformOrigin: 'center bottom',
            transform: `translateX(-50%) translateY(-100%) rotate(${i * 45}deg)`,
          }}
        />
      ))}
      {/* Center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gold rounded-full" />
    </motion.div>
  </motion.div>
);

const MandalaPattern = ({ style }) => (
  <motion.div
    initial={{ opacity: 0, rotate: 0 }}
    animate={{ opacity: 0.1, rotate: 360 }}
    transition={{ 
      opacity: { duration: 1 },
      rotate: { duration: 120, repeat: Infinity, ease: 'linear' }
    }}
    style={style}
    className="absolute pointer-events-none hidden lg:block"
  >
    <svg width="300" height="300" viewBox="0 0 300 300">
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>
      {[...Array(12)].map((_, i) => (
        <circle
          key={i}
          cx="150"
          cy="150"
          r={30 + i * 10}
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="0.5"
          strokeDasharray={i % 2 === 0 ? '5,5' : 'none'}
        />
      ))}
      {[...Array(8)].map((_, i) => (
        <line
          key={`line-${i}`}
          x1="150"
          y1="150"
          x2={150 + 140 * Math.cos((i * Math.PI) / 4)}
          y2={150 + 140 * Math.sin((i * Math.PI) / 4)}
          stroke="url(#goldGrad)"
          strokeWidth="0.5"
        />
      ))}
    </svg>
  </motion.div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Static Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0908] via-[#12100e] to-[#0a0908]" />
      
      {/* Temple Pattern Overlay */}
      <div className="absolute inset-0 pattern-temple opacity-30" />

      {/* Mandala Background Patterns */}
      <MandalaPattern style={{ top: '10%', left: '-5%' }} />
      <MandalaPattern style={{ bottom: '10%', right: '-5%' }} />

      {/* Temple Pillars */}
      <TemplePillar style={{ left: '3%', top: '50%', transform: 'translateY(-50%)' }} height="h-72 lg:h-80" side="left" />
      <TemplePillar style={{ right: '3%', top: '50%', transform: 'translateY(-50%)' }} height="h-72 lg:h-80" side="right" />

      {/* Traditional Oil Lamps */}
      <TempleLamp style={{ top: '15%', left: '10%' }} delay={0.2} />
      <TempleLamp style={{ top: '15%', right: '10%' }} delay={0.4} />
      <TempleLamp style={{ bottom: '20%', left: '15%' }} delay={0.6} />
      <TempleLamp style={{ bottom: '20%', right: '15%' }} delay={0.8} />

      {/* Lotus Flowers */}
      <LotusFlower style={{ top: '12%', left: '20%' }} size={30} delay={0.3} />
      <LotusFlower style={{ top: '12%', right: '20%' }} size={25} delay={0.5} />
      <LotusFlower style={{ bottom: '25%', left: '8%' }} size={35} delay={0.7} />
      <LotusFlower style={{ bottom: '25%', right: '8%' }} size={28} delay={0.9} />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Decorative Top Element */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 mb-6 sm:mb-8"
            >
              <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent to-gold" />
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gold rotate-45" />
                <span className="text-gold/80 text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-light">
                  Est. Kerala
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gold rotate-45" />
              </div>
              <div className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent to-gold" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6"
            >
              <span className="block text-stone-100 mb-1 sm:mb-2">SREE SASTHA</span>
              <span className="block text-shimmer text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                SILPAKALALAYAM
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="heading-serif text-lg sm:text-xl md:text-2xl text-gold-light/90 mb-3 sm:mb-4"
            >
              Masters of Traditional Stone Carving
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-stone-400 mb-6 sm:mb-8 text-sm sm:text-base"
            >
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="tracking-wide">Meetna Centre, Ottapalam, Kerala</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-stone-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Experience the timeless art of stone carving. We specialize in temple stone works,
              custom designs, and architectural masterpieces crafted by skilled artisans.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12"
            >
              <motion.a
                href="tel:+919744694839"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-luxury text-sm sm:text-base"
              >
                <FaPhone className="mr-2 sm:mr-3" />
                Call Now for Stone Works
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline-gold text-sm sm:text-base"
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-gold/20"
            >
              {[
                { number: '50+', label: 'Years', icon: FaAward },
                { number: '1000+', label: 'Projects', icon: FaGem },
                { number: '100%', label: 'Happy', icon: FaUsers },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center lg:text-left group"
                >
                  <stat.icon className="text-gold/60 text-base sm:text-lg mb-1 sm:mb-2 mx-auto lg:mx-0 group-hover:text-gold transition-colors" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gold-gradient">
                    {stat.number}
                  </div>
                  <div className="text-[10px] sm:text-xs text-stone-500 tracking-wider uppercase mt-0.5 sm:mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            {/* Glow Behind Model */}
            <div className="absolute inset-0 bg-gradient-radial from-gold/20 via-transparent to-transparent blur-3xl" />
            
            {/* Decorative Frame */}
            <div className="absolute -inset-2 sm:-inset-4 border border-gold/10 rounded-lg pointer-events-none" />
            <div className="absolute -inset-4 sm:-inset-8 border border-gold/5 rounded-lg pointer-events-none hidden sm:block" />
            
            <StoneModel />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gold/60 hover:text-gold transition-colors"
        >
          <span className="text-[10px] sm:text-xs tracking-widest uppercase mb-1 sm:mb-2">Scroll</span>
          <FaChevronDown />
        </motion.a>
      </motion.div>

      {/* Corner Decorations - Hidden on mobile */}
      <div className="absolute top-20 sm:top-24 left-4 sm:left-8 w-16 sm:w-24 h-16 sm:h-24 border-l-2 border-t-2 border-gold/20 pointer-events-none" />
      <div className="absolute top-20 sm:top-24 right-4 sm:right-8 w-16 sm:w-24 h-16 sm:h-24 border-r-2 border-t-2 border-gold/20 pointer-events-none" />
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-16 sm:w-24 h-16 sm:h-24 border-l-2 border-b-2 border-gold/20 pointer-events-none" />
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-16 sm:w-24 h-16 sm:h-24 border-r-2 border-b-2 border-gold/20 pointer-events-none" />
    </section>
  );
};

export default Hero;
