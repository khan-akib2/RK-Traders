"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Clock, Truck } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#2B2B2B] overflow-hidden pt-20"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-warehouse.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B] via-[#2B2B2B]/60 to-[#2B2B2B]/90 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 text-center lg:text-left py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 border border-[#8B6B3E]/40 bg-[#8B6B3E]/10 py-1.5 px-4 text-[#A67C52] text-xs font-bold uppercase tracking-widest"
            >
              <Award size={14} />
              <span>WHOLESALE SUPPLIER & DEALER</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display text-white font-black uppercase tracking-tight leading-[1.05]"
            >
              Premium Plywood, <br />
              <span className="text-[#A67C52]">Laminates & Doors</span> Solutions
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
            >
              Trusted B2B Supplier of high-grade wood products for residential, commercial, and heavy industrial packaging projects in Navi Mumbai, Thane, and across Maharashtra.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => handleScrollTo("contact")}
                className="w-full sm:w-auto bg-[#8B6B3E] hover:bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wider py-4 px-8 border border-[#8B6B3E] hover:border-[#A67C52] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Free Quote</span>
                <ArrowRight size={14} />
              </button>
              <button
                onClick={() => handleScrollTo("about")}
                className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white text-xs font-bold uppercase tracking-wider py-4 px-8 border border-white/20 hover:border-white transition-all duration-300 cursor-pointer"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 border-t border-white/10 pt-8"
        >
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#2B2B2B]/60 backdrop-blur-sm border border-[#8B6B3E]/10 p-5 text-left transition-all duration-300 hover:border-[#8B6B3E]/40"
            >
              <div className="flex items-center gap-3 mb-2 text-[#A67C52]">
                {stat.icon}
                <span className="text-2xl sm:text-3xl font-display font-black text-white leading-none">
                  {stat.value}
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const statsData = [
  {
    icon: <Award size={20} />,
    value: "500+",
    label: "Projects Served"
  },
  {
    icon: <ShieldCheck size={20} />,
    value: "100%",
    label: "Premium Quality"
  },
  {
    icon: <Clock size={20} />,
    value: "15+ Yrs",
    label: "Industry Trust"
  },
  {
    icon: <Truck size={20} />,
    value: "Fast",
    label: "Direct Site Delivery"
  }
];
