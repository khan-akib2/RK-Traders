"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Factory, ShieldCheck, Users, Milestone } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-[#F8F6F2] relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-[#8B6B3E]/5 rounded-none blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Image with Industrial Border */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#8B6B3E] pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#A67C52] pointer-events-none" />

            {/* Main Warehouse Image */}
            <div className="relative h-[480px] w-full overflow-hidden border border-[#8B6B3E]/20 bg-zinc-200">
              <Image
                src="/images/about-warehouse-staff.jpg"
                alt="RK Traders loading premium plywood sheets"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 576px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#2B2B2B]/20" />
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-[#2B2B2B] text-white p-5 border-l-4 border-[#8B6B3E] shadow-xl max-w-xs">
              <span className="block text-3xl font-display font-black text-[#A67C52]">
                ESTD. 2011
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
                Supplying Grade-A Materials for 15 Years
              </span>
            </div>
          </motion.div>

          {/* Right Column: Content and Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#8B6B3E] font-bold block">
                OUR LEGACY & SERVICE
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-[#2B2B2B] uppercase tracking-tight">
                WHO WE ARE & WHAT WE STAND FOR
              </h2>
              <div className="h-1 w-20 bg-[#8B6B3E]" />
            </div>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Based in <strong>Shilgaon, Navi Mumbai</strong>, RK Traders has established itself as a premier supplier and wholesale dealer of plywood, laminates, MDF boards, solid flush doors, and heavy-duty wooden packaging materials. We serve builders, contractors, and interior designers across Maharashtra.
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Our business is built on the cornerstone of <strong>Trust, Superior Product Integrity, and Punctual Site Delivery</strong>. Whether supplying BWP marine plywood for luxury modular kitchens or custom pine wood pallets for global cargo export, we maintain rigorous QA standards and direct mill wholesale pricing.
            </p>

            {/* Core Values / Features Icons */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {aboutFeatures.map((item, idx) => (
                <div key={idx} className="flex gap-3 text-left">
                  <div className="p-2 h-10 w-10 flex items-center justify-center bg-[#8B6B3E]/10 text-[#8B6B3E] border border-[#8B6B3E]/20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#2B2B2B] uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const aboutFeatures = [
  {
    icon: <Factory size={18} />,
    title: "Direct Mill Sourcing",
    desc: "Wholesale prices passed directly to contractors and developers."
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "Certified QA Testing",
    desc: "Every batch verified for boiling-water resistance and termite protection."
  },
  {
    icon: <Users size={18} />,
    title: "Architectural Consulting",
    desc: "Expert material recommendations matching project budget and load requirements."
  },
  {
    icon: <Milestone size={18} />,
    title: "Regional Delivery Networks",
    desc: "Express logistics to sites in Navi Mumbai, Thane, Kalyan, and Mumbai."
  }
];
