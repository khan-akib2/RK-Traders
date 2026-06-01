import Link from "next/link";
import LoadingScreen from "../components/LoadingScreen";
import SmoothScroll from "../components/SmoothScroll";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Location from "../components/Location";
import Footer from "../components/Footer";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Premium Loading Screen Overlay */}
      <LoadingScreen />

      {/* Lenis Smooth Scroll Container */}
      <SmoothScroll>
        <div className="flex flex-col min-h-screen">
          {/* Main sticky navigation header */}
          <Header />

          {/* Home Page Content */}
          <main className="flex-1">
            <Hero />

            {/* About Us Teaser Section */}
            <section className="py-24 bg-[#F8F6F2] relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5 h-[360px] relative border border-[#8B6B3E]/20 bg-zinc-300">
                    <img
                      src="/about-image.png"
                      alt="RK Traders loading premium plywood sheets"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#2B2B2B]/15" />
                  </div>
                  
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-xs uppercase tracking-widest text-[#8B6B3E] font-bold block">
                      WHO WE ARE
                    </span>
                    <h2 className="text-3xl font-display font-black text-[#2B2B2B] uppercase tracking-tight">
                      ESTABLISHED PLYWOOD & LAMINATE DEALERS IN NAVI MUMBAI
                    </h2>
                    <div className="h-1 w-16 bg-[#8B6B3E]" />
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                      Since 2011, RK Traders has been a trusted wholesale supplier and dealer of premium commercial plywood, BWP marine boards, decorative sheets, MDF, flush doors, and heavy wooden packaging pallets. We supply contractors, builders, and developers across Maharashtra.
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/about"
                        className="inline-flex items-center gap-2 bg-[#8B6B3E] hover:bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 border border-[#8B6B3E] transition-all duration-300"
                      >
                        <span>Read Our Story</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Products Teaser Section */}
            <section className="py-24 bg-[#2B2B2B] text-white relative">
              <div className="absolute inset-0 wood-grain-overlay opacity-5 pointer-events-none" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center space-y-3 mb-16">
                  <span className="text-xs uppercase tracking-widest text-[#A67C52] font-bold block">
                    OUR CORE CATEGORIES
                  </span>
                  <h2 className="text-3xl font-display font-black uppercase tracking-tight text-white">
                    FEATURED WOOD PRODUCTS
                  </h2>
                  <div className="h-1 w-16 bg-[#8B6B3E] mx-auto" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {featuredTeasers.map((prod, idx) => (
                    <div
                      key={idx}
                      className="bg-[#1F1F1F] border border-zinc-800 flex flex-col group relative overflow-hidden"
                    >
                      <div className="relative h-56 bg-zinc-800 overflow-hidden">
                        <img
                          src={prod.image}
                          alt={prod.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#2B2B2B]/20" />
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-display font-bold uppercase text-white group-hover:text-[#A67C52] transition-colors">
                            {prod.title}
                          </h3>
                          <p className="text-zinc-400 text-xs leading-relaxed">
                            {prod.desc}
                          </p>
                        </div>
                        
                        <Link
                          href={`/products?category=${encodeURIComponent(prod.title)}`}
                          className="text-[#A67C52] hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 mt-4 transition-colors"
                        >
                          <span>View Grades</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 text-white text-xs font-bold uppercase tracking-wider py-4 px-8 border border-white/20 hover:border-white transition-all duration-300"
                  >
                    <span>Explore Full Catalog</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

              </div>
            </section>

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Testimonials Review Grid */}
            <Testimonials />

            {/* Premium CTA Banner */}
            <section className="py-20 bg-[#F8F6F2] relative border-t border-b border-[#8B6B3E]/10">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
                <span className="text-xs uppercase tracking-widest text-[#8B6B3E] font-bold block">
                  B2B COMMERCIAL CONTRACTS
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight text-[#2B2B2B] leading-none">
                  NEED A CUSTOM BULK ESTIMATE FOR YOUR SITES?
                </h2>
                <p className="text-zinc-600 text-sm max-w-xl mx-auto leading-relaxed">
                  We supply custom sizing, export-grade packaging treatments (ISPM-15), and special alternate/marine density sheets on contract orders.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="bg-[#8B6B3E] hover:bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wider py-4 px-8 border border-[#8B6B3E] transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </section>

            {/* Embedded Google Maps yard location */}
            <Location />
          </main>

          {/* Footer site map & contacts */}
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}

const featuredTeasers = [
  {
    title: "Plywood",
    image: "/plywood.png",
    desc: "BWP Marine Ply, Alternate Hardwood core sheets, and high repetition Film Faced shuttering plywood."
  },
  {
    title: "Laminates",
    image: "/laminates.png",
    desc: "1.0mm decorative sheets in wood grain, solid color matte, gloss, and exterior HPL cladding."
  },
  {
    title: "Doors",
    image: "/doors.png",
    desc: "Seasoned pinewood core Flush Doors and elegant designer veneer finishes ready for installation."
  }
];
