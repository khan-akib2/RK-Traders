"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SmoothScroll from "../../components/SmoothScroll";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ShieldCheck, Award, HeartHandshake, Phone, ArrowRight, Star } from "lucide-react";

export default function FounderPage() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-[#F8F6F2]">
        <Header />

        <main className="flex-1 pt-16">
          {/* Breadcrumb / Page Title */}
          <div className="bg-[#2B2B2B] text-white py-16 border-b border-[#8B6B3E]/20 text-center relative">
            <div className="absolute inset-0 wood-grain-overlay opacity-5 pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 space-y-2"
            >
              <span className="text-[#A67C52] text-xs uppercase tracking-widest font-extrabold">
                OUR FOUNDER
              </span>
              <h1 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-wider">
                SUFIYAN SIDDIQUI
              </h1>
            </motion.div>
          </div>

          {/* Profile & Biography Section */}
          <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Founder Portrait & Credentials Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 flex justify-center"
              >
                {/* Fixed-width vertical container to wrap portrait */}
                <div className="w-full max-w-sm">
                  
                  {/* Portrait container with overflow-hidden for hover effects */}
                  <div className="relative aspect-[9/16] overflow-hidden bg-zinc-800 border border-[#8B6B3E]/20 shadow-2xl">
                    {/* Decorative Industrial Corners */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#8B6B3E] z-10" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#A67C52] z-10" />
                    
                    <Image
                      src="/founder.png"
                      alt="Sufiyan Siddiqui - Founder of RK Traders"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 384px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Portrait Overlay Text - restored back to the image */}
                    <div className="absolute bottom-6 left-6 right-6 text-white z-20">
                      <h2 className="text-xl sm:text-2xl font-display font-black tracking-wide uppercase text-white">
                        Sufiyan Siddiqui
                      </h2>
                      <p className="text-[#A67C52] text-[10px] sm:text-xs uppercase tracking-widest font-bold mt-1">
                        Founder & Managing Director
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* Right Column: Founder's Biography & Editorial Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="lg:col-span-7 space-y-8 lg:pt-2"
              >
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest text-[#8B6B3E] font-bold block">
                    THE VISIONARY BEHIND RK TRADERS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-display font-black text-[#2B2B2B] uppercase tracking-tight">
                    ESTABLISHING TRUST IN EVERY SQUARE FOOT
                  </h2>
                  <div className="h-1 w-20 bg-[#8B6B3E]" />
                </div>

                {/* Premium Editorial Block Quote */}
                <div className="border-l-4 border-[#8B6B3E] bg-[#2B2B2B]/5 p-6 shadow-sm">
                  <p className="text-zinc-700 italic text-base sm:text-lg font-medium leading-relaxed">
                    "At RK Traders, our goal is not merely commercial supply. We build long-term, block-by-block trust. We stand behind the integrity of every sheet, pallet, and door we deliver, ensuring our partners get maximum value with absolute transparency."
                  </p>
                </div>

                <div className="space-y-5 text-zinc-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    In 2011, <strong>Sufiyan Siddiqui</strong> founded RK Traders with a single, clear objective: to streamline the supply of commercial-grade timber and plywood materials in Navi Mumbai. Seeing the challenges faced by local contractors in securing consistent-grade materials, he set out to build direct relationships with premium manufacturing hubs in Southern India and Yamuna Nagar.
                  </p>
                  <p>
                    Under Sufiyan's guidance, the enterprise grew from a modest wood yard into Navi Mumbai's leading wholesale B2B distributor of <strong>Plywood, Laminates, MDF, Flush Doors, and Heavy-Duty Packing Pallets</strong>. His approach of blending strict quality assurance with wholesale direct-mill pricing has earned RK Traders the long-term trust of developers, architects, and industrial clients across Maharashtra.
                  </p>
                  <p>
                    Sufiyan has always operated on a core principle: <em>"A structure is only as strong as its raw materials."</em> By guaranteeing that every sheet of BWP marine plywood or blockboard satisfies certified quality testing against boiling water and termites, he ensures that projects built with RK Traders' materials are engineered to last.
                  </p>
                </div>

                {/* Highlights row */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200">
                  <div>
                    <span className="block text-2xl sm:text-3xl font-display font-black text-[#8B6B3E]">15+ Yrs</span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Industry Experience</span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-display font-black text-[#8B6B3E]">500+</span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Projects Supplied</span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-display font-black text-[#8B6B3E]">100%</span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">QA Certifications</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Key Milestones Section */}
          <section className="py-24 bg-[#2B2B2B] text-white relative overflow-hidden border-t border-[#8B6B3E]/10">
            <div className="absolute inset-0 wood-grain-overlay opacity-5 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              <div className="text-center space-y-3 mb-16">
                <span className="text-xs uppercase tracking-widest text-[#A67C52] font-bold block">
                  JOURNEY & HISTORICAL PROGRESS
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight text-white">
                  GROWTH OF RK TRADERS
                </h2>
                <div className="h-1 w-20 bg-[#8B6B3E] mx-auto" />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {milestones.map((item, idx) => (
                  <div key={idx} className="bg-[#1F1F1F] border border-zinc-800 p-8 relative group">
                    <span className="absolute top-4 right-6 text-5xl font-display font-black text-zinc-800/40 group-hover:text-[#8B6B3E]/20 transition-colors">
                      {item.year}
                    </span>
                    <div className="space-y-4 relative z-10">
                      <span className="inline-block text-[#A67C52] text-xs uppercase tracking-wider font-extrabold">
                        {item.phase}
                      </span>
                      <h3 className="text-lg font-display font-bold uppercase text-white">
                        {item.title}
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* Philosophy Grid */}
          <section className="py-24 bg-[#F8F6F2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-3 mb-16">
                <span className="text-xs uppercase tracking-widest text-[#8B6B3E] font-bold block">
                  FOUNDATION VALUES
                </span>
                <h2 className="text-3xl font-display font-black uppercase tracking-tight text-[#2B2B2B]">
                  THE FOUNDER'S PHILOSOPHY
                </h2>
                <div className="h-1 w-20 bg-[#8B6B3E] mx-auto" />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {philosophies.map((phil, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white border border-[#8B6B3E]/10 p-8 shadow-sm hover:border-[#8B6B3E]/30 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="h-12 w-12 flex items-center justify-center bg-[#8B6B3E]/10 text-[#8B6B3E] border border-[#8B6B3E]/20">
                        {phil.icon}
                      </div>
                      <h3 className="text-lg font-display font-bold uppercase text-[#2B2B2B] tracking-wide">
                        {phil.title}
                      </h3>
                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                        {phil.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Contact Link Banner */}
          <section className="py-20 bg-[#F8F6F2] border-t border-[#8B6B3E]/10">
            <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#8B6B3E] font-bold block">
                DIRECT WHOLESALE ACCESS
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-black uppercase tracking-tight text-[#2B2B2B]">
                WANT TO WORK DIRECTLY WITH OUR TEAM?
              </h2>
              <p className="text-zinc-600 text-sm max-w-xl mx-auto leading-relaxed">
                Connect directly with Sufiyan Siddiqui and Rahim to set up your bulk commercial delivery schedules or customized manufacturing queries.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="tel:+918591044102"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2B2B2B] hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-4 px-8 transition-all duration-300"
                >
                  <Phone size={14} className="text-[#A67C52]" />
                  <span>Call Sufiyan Siddiqui</span>
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8B6B3E] hover:bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wider py-4 px-8 border border-[#8B6B3E] transition-all duration-300"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

const philosophies = [
  {
    icon: <ShieldCheck size={22} />,
    title: "100% Quality Mandate",
    desc: "We enforce zero-tolerance checks on core layers, selecting premium alternate hardwoods and Gurjan blockboards to guarantee zero hollow gaps."
  },
  {
    icon: <Award size={22} />,
    title: "True Wholesale Pricing",
    desc: "By cutting out intermediaries and dealing directly with manufacturers, we pass direct mill savings directly to developers and site contractors."
  },
  {
    icon: <HeartHandshake size={22} />,
    title: "Lifetime Relationships",
    desc: "We focus on building multi-project trust. When we promise BWP Marine 710 or ISPM-15 compliance, that is exactly what arrives on your site."
  }
];

const milestones = [
  {
    year: "2011",
    phase: "Phase 1 - Inception",
    title: "Navi Mumbai Foundation",
    desc: "Established a local wood yard in Shilgaon, supplying seasoned sawn timber blocks and basic packaging runners to local warehouse units."
  },
  {
    year: "2016",
    phase: "Phase 2 - Expansion",
    title: "Plywood & Surface Launch",
    desc: "Expanded into high-integrity commercial plywood, marine blockboards, and decorative laminates to cater directly to builders and contractors."
  },
  {
    year: "2021",
    phase: "Phase 3 - Scale",
    title: "Direct-Mill Partnership",
    desc: "Bypassed intermediaries to source full red-core and alternate sheets from leading Southern Indian & Yamuna Nagar mills, establishing direct bulk supply networks."
  }
];
