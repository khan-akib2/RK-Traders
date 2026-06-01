"use client";

import { motion } from "framer-motion";
import { testimonials } from "../data/data";
import { Quote, User, MapPin } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#2B2B2B] text-white relative">
      {/* Wood Grain Overlay */}
      <div className="absolute inset-0 wood-grain-overlay opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#A67C52] font-bold block">
            CLIENT ENDORSEMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight text-white">
            WHAT OUR CONTRACTORS & BUILDERS SAY
          </h2>
          <div className="h-1 w-20 bg-[#8B6B3E] mx-auto" />
          <p className="text-zinc-400 text-sm max-w-xl mx-auto mt-4">
            Hear from industry professionals, designers, and logisticians who rely on RK Traders for their critical material supplies.
          </p>
        </div>

        {/* Testimonials Grid (2x2 layout on desktop, 1x1 on mobile) */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#1F1F1F] border border-zinc-800 p-8 flex flex-col justify-between hover:border-[#8B6B3E]/30 transition-all duration-300 relative group"
            >
              {/* Quote Background Watermark */}
              <Quote
                size={70}
                className="absolute right-6 top-6 text-zinc-800 opacity-20 pointer-events-none group-hover:text-[#8B6B3E]/10 transition-colors"
              />

              <div className="space-y-6">
                <Quote size={24} className="text-[#8B6B3E]" />
                
                <p className="text-zinc-300 text-sm sm:text-base italic leading-relaxed relative z-10">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="mt-8 pt-6 border-t border-zinc-850 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400">
                    <User size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                      {test.name}
                    </h4>
                    <p className="text-[11px] text-zinc-400 font-medium">
                      {test.role}, <span className="text-[#A67C52]">{test.company}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                  <MapPin size={12} className="text-[#8B6B3E]" />
                  <span>{test.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
