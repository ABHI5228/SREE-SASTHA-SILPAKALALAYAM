import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaWhatsapp,
} from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello, I'm ${formData.name}. ${formData.message} Contact: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/919744694839?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: '+91 9744694839',
      link: 'tel:+919744694839',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      details: 'Meetna Centre, Ottapalam, Kerala',
      link: 'https://maps.google.com/?q=Ottapalam,Kerala',
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      details: 'Mon - Sat: 9:00 AM - 6:00 PM',
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#0a0908] via-[#0d0b09] to-[#0a0908] overflow-hidden"
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
          className="text-center mb-10 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">Contact Us</span>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-100 mb-4 sm:mb-6 px-4">
            Let's Create Something{' '}
            <span className="text-gold-gradient">Extraordinary</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Ready to bring your vision to life? Contact us today to discuss your stone carving project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="heading-display text-lg sm:text-xl text-stone-200 mb-6 sm:mb-8 text-center lg:text-left">Get in Touch</h3>

            {/* Contact Cards */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="card-luxury flex items-center space-x-3 sm:space-x-4 group p-4 sm:p-6"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded bg-gradient-to-br from-gold to-bronze flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-base sm:text-xl text-[#0a0908]" />
                  </div>
                  <div>
                    <h4 className="heading-display text-xs sm:text-sm text-stone-200 group-hover:text-gold transition-colors">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-stone-400 hover:text-gold transition-colors text-sm sm:text-base"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-stone-400 text-sm sm:text-base">{info.details}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.a
                href="tel:+919744694839"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-luxury flex-1 justify-center text-sm sm:text-base"
              >
                <FaPhone className="mr-2" />
                Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/919744694839"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline-gold flex-1 justify-center text-sm sm:text-base !border-green-500 !text-green-500 hover:!bg-green-500 hover:!text-white"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp
              </motion.a>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-6 sm:mt-8 overflow-hidden border border-gold/10"
            >
              <div className="aspect-video bg-gradient-to-br from-stone-900 to-stone-950 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-3xl sm:text-4xl text-gold mx-auto mb-2 sm:mb-3" />
                  <p className="text-stone-400 text-sm sm:text-base">Ottapalam, Kerala</p>
                  <a
                    href="https://maps.app.goo.gl/g44dATADUKuimZ7dA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs sm:text-sm hover:underline mt-2 inline-block"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="card-luxury p-4 sm:p-6">
              <h3 className="heading-display text-lg sm:text-xl text-stone-200 mb-4 sm:mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-stone-400 mb-1.5 sm:mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-luxury text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-stone-400 mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-luxury text-sm sm:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-stone-400 mb-1.5 sm:mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="input-luxury resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-luxury w-full justify-center text-sm sm:text-base"
                >
                  <FaPaperPlane className="mr-2" />
                  Send via WhatsApp
                </motion.button>

                <p className="text-[10px] sm:text-xs text-stone-500 text-center">
                  Your message will be sent via WhatsApp for quick response
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
