"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Compass, Navigation } from "lucide-react";

export default function Location() {
  const mapEmbedUrl = "https://maps.google.com/maps?q=19.1503452,73.0445769+(RK+TRADERS)&z=17&output=embed";
  const directionsUrl = "https://maps.app.goo.gl/NnrnK8ukWUNq6oEv8";

  return (
    <section id="location" className="py-20 bg-[#F8F6F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest text-[#8B6B3E] font-bold block">
            VISIT OUR YARD
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight text-[#2B2B2B]">
            LOCATION & SITE NAVIGATION
          </h2>
          <div className="h-1 w-20 bg-[#8B6B3E] mx-auto" />
        </div>

        {/* Map & Card Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Directions & Address Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 bg-white border border-[#8B6B3E]/10 p-8 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#A67C52]">
                  Registered Address
                </span>
                <h3 className="text-xl font-display font-black uppercase text-[#2B2B2B]">
                  RK TRADERS YARD
                </h3>
              </div>

              {/* Address details */}
              <div className="space-y-4 text-xs sm:text-sm text-zinc-600">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#8B6B3E] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Gala No. 02, House No. 604/605, <br />
                    Diva Shil Road, Shilgaon, <br />
                    Navi Mumbai, Thane, <br />
                    Maharashtra - 400612
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#8B6B3E] shrink-0" />
                  <a href="tel:+918591044102" className="hover:text-[#8B6B3E] transition-colors font-semibold">
                    +91 85910 44102
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#8B6B3E] shrink-0" />
                  <a href="mailto:rktraders488@gmail.com" className="hover:text-[#8B6B3E] transition-colors font-semibold">
                    rktraders488@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="space-y-3 mt-8">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#8B6B3E] hover:bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wider py-4 border border-[#8B6B3E] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Navigation size={14} />
                <span>Get Directions</span>
              </a>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+918591044102"
                  className="bg-transparent hover:bg-[#2B2B2B] text-zinc-700 hover:text-white border border-zinc-300 hover:border-[#2B2B2B] text-center text-[10px] font-bold uppercase tracking-wider py-3 transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <Phone size={12} />
                  <span>Call Us</span>
                </a>
                <a
                  href="mailto:rktraders488@gmail.com"
                  className="bg-transparent hover:bg-[#2B2B2B] text-zinc-700 hover:text-white border border-zinc-300 hover:border-[#2B2B2B] text-center text-[10px] font-bold uppercase tracking-wider py-3 transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <Mail size={12} />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Embedded Map Iframe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 h-[400px] lg:h-auto min-h-[350px] border border-[#8B6B3E]/10 bg-zinc-200 relative shadow-sm"
          >
            <iframe
              src={mapEmbedUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RK Traders Google Maps Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
