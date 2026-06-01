"use client";

import { motion } from "framer-motion";
import { brands } from "../data/data";
import { ShieldAlert, Award, Grid, Compass } from "lucide-react";

export default function Brands() {
  return (
    <section id="brands" className="py-24 bg-[#F8F6F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8B6B3E] font-bold block">
            AUTHORISED DISTRIBUTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight text-[#2B2B2B]">
            PARTNER BRANDS & MILL NETWORKS
          </h2>
          <div className="h-1 w-20 bg-[#8B6B3E] mx-auto" />
          <p className="text-zinc-600 text-sm max-w-xl mx-auto mt-4">
            We partner with certified mills in South India and Yamuna Nagar to supply premium brands known for high density and strength.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {brands.map((regionGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white border border-[#8B6B3E]/10 p-8 flex flex-col justify-between hover:border-[#8B6B3E]/30 transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Region Title & Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 flex items-center justify-center bg-[#8B6B3E]/10 text-[#8B6B3E]">
                    <Compass size={18} />
                  </div>
                  <h3 className="text-xl font-display font-extrabold uppercase text-[#2B2B2B] tracking-tight">
                    {regionGroup.region} Mills
                  </h3>
                </div>

                <p className="text-zinc-500 text-xs sm:text-sm mb-8 leading-relaxed">
                  {regionGroup.description}
                </p>

                {/* Brands in Region */}
                <div className="space-y-6">
                  {regionGroup.items.map((brand, bIdx) => (
                    <div
                      key={bIdx}
                      className="border-l-2 border-[#8B6B3E] pl-5 space-y-2 group"
                    >
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h4 className="text-base font-extrabold text-[#2B2B2B] uppercase tracking-wide group-hover:text-[#8B6B3E] transition-colors">
                          {brand.name}
                        </h4>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#A67C52] bg-[#F8F6F2] px-2 py-0.5 border border-[#8B6B3E]/10">
                          {brand.type}
                        </span>
                      </div>
                      
                      <div className="text-xs text-zinc-600 space-y-1">
                        <p>
                          <strong className="text-[#2B2B2B]">Core:</strong> {brand.core}
                        </p>
                        <p>
                          <strong className="text-[#2B2B2B]">Best For:</strong> {brand.use}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* B2B Quality Certification Footer */}
              <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center gap-2 text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                <Award size={14} className="text-[#8B6B3E]" />
                <span>IS 303 & IS 710 Compliant Supply</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
