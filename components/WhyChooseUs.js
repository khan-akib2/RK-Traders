"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Tag,
  Layers,
  Truck,
  UserCheck,
  HeartHandshake
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Quality Materials",
    desc: "Rigorous sorting of cores (Gurjan/Hardwood) and PF resins guarantees zero delamination and extreme resistance to termites/borers."
  },
  {
    icon: <Tag size={24} />,
    title: "Competitive Pricing",
    desc: "Direct partnership with major manufacturing hubs in South India and Yamuna Nagar allows wholesale pricing on bulk orders."
  },
  {
    icon: <Layers size={24} />,
    title: "Reliable Supply",
    desc: "Our warehouse stays stockpiled with various grades of marine ply, MDF boards, and commercial doors to fulfill any volume demand."
  },
  {
    icon: <Truck size={24} />,
    title: "Fast Delivery",
    desc: "Dedicated logistics partners ensure your materials arrive directly at your construction site in Navi Mumbai or Thane without delays."
  },
  {
    icon: <UserCheck size={24} />,
    title: "Expert Guidance",
    desc: "Our seasoned specialists assist you in selecting the exact thickness and grade to minimize wastage and optimize build budgets."
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Trusted Service",
    desc: "Over 15 years of industry experience servicing key local builders, developers, and packaging operations with high integrity."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-[#2B2B2B] text-white relative">
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 wood-grain-overlay opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#A67C52] font-bold block">
            THE RK TRADERS ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight text-white">
            WHY BUILDERS & DESIGNERS TRUST US
          </h2>
          <div className="h-1 w-20 bg-[#8B6B3E] mx-auto" />
          <p className="text-zinc-400 text-sm max-w-xl mx-auto mt-4">
            We understand the structural requirements of B2B projects, combining commercial-grade quality with wholesale operational support.
          </p>
        </div>

        {/* Features Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#1F1F1F] border border-zinc-800 p-8 hover:border-[#8B6B3E]/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="h-12 w-12 flex items-center justify-center bg-[#8B6B3E]/10 text-[#8B6B3E] border border-[#8B6B3E]/20 transition-all duration-300 group-hover:bg-[#8B6B3E] group-hover:text-white">
                  {feature.icon}
                </div>
                
                <h3 className="text-lg font-display font-bold uppercase text-white tracking-wide group-hover:text-[#A67C52] transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Decorative side accent visible on hover */}
              <div className="w-8 h-[2px] bg-[#8B6B3E] mt-6 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
