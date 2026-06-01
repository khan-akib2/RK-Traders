"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { products } from "../data/data";
import { ArrowRight, ShieldCheck, X, CheckSquare } from "lucide-react";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleOpenDrawer = (product) => {
    setSelectedProduct(product);
    // Disable main body scroll when drawer is open
    document.body.style.overflow = "hidden";
  };

  const handleCloseDrawer = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      const matched = products.find(
        (p) =>
          p.category.toLowerCase() === cat.toLowerCase() ||
          p.id.toLowerCase() === cat.toLowerCase()
      );
      if (matched) {
        const timer = setTimeout(() => {
          handleOpenDrawer(matched);
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [searchParams]);

  const handleInquiryRedirect = (categoryName) => {
    handleCloseDrawer();
    router.push(`/contact?product=${encodeURIComponent(categoryName)}`);
  };

  return (
    <section id="products" className="py-24 bg-[#F8F6F2] text-[#2B2B2B] relative">
      {/* Wood Grain Overlay Background */}
      <div className="absolute inset-0 wood-grain-overlay opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8B6B3E] font-bold block">
            OUR PRODUCT PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight text-[#2B2B2B]">
            INDUSTRIAL & COMMERCIAL WOOD PRODUCTS
          </h2>
          <div className="h-1 w-20 bg-[#8B6B3E] mx-auto" />
          <p className="text-zinc-600 text-sm max-w-xl mx-auto mt-4">
            Explore our curated inventory of heavy-duty building materials, laminations, and security doors engineered for commercial projects.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-[#8B6B3E]/15 flex flex-col group relative overflow-hidden shadow-xs"
            >
              {/* Product Category Accent Strip */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#8B6B3E] transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left z-20" />

              {/* Product Image Panel */}
              <div className="relative h-60 w-full overflow-hidden bg-zinc-800">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
                <span className="absolute top-4 left-4 bg-[#8B6B3E] text-white text-[10px] font-extrabold uppercase tracking-widest py-1 px-3">
                  {product.category}
                </span>
              </div>

              {/* Product Text Area */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl font-display font-bold uppercase text-[#2B2B2B] group-hover:text-[#A67C52] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {product.shortDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#8B6B3E]/15 mt-6 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenDrawer(product)}
                    className="text-[#A67C52] group-hover:text-[#2B2B2B] font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Side Slide-in Spec Sheet Drawer */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50 pointer-events-auto"
              onClick={handleCloseDrawer}
            />

            {/* Spec Sheet Content Card */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 w-full max-w-lg h-screen bg-white z-50 shadow-2xl border-l border-[#8B6B3E]/15 overflow-y-auto flex flex-col pointer-events-auto"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-[#8B6B3E]/15 flex items-center justify-between bg-[#F8F6F2]">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[#A67C52] font-bold">
                    SPECIFICATIONS SHEET
                  </span>
                  <h3 className="text-lg font-display font-black uppercase text-[#2B2B2B]">
                    {selectedProduct.category}
                  </h3>
                </div>
                <button
                  onClick={handleCloseDrawer}
                  className="p-2 text-zinc-600 hover:text-[#2B2B2B] border border-zinc-200 hover:border-zinc-300 bg-white transition-colors cursor-pointer"
                  aria-label="Close panel"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="p-6 flex-1 space-y-8 text-[#2B2B2B]">
                {/* Description Paragraph */}
                <div className="space-y-3">
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {selectedProduct.description}
                  </p>
                  <div className="h-[1px] w-full bg-zinc-200" />
                </div>

                {/* Sub Products List */}
                <div className="space-y-6">
                  <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-extrabold">
                    AVAILABLE OPTIONS & GRADES
                  </h4>

                  <div className="space-y-6">
                    {selectedProduct.subProducts.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-[#F8F6F2] border border-[#8B6B3E]/10 p-5 rounded-none space-y-3"
                      >
                        <h5 className="text-sm font-bold text-[#2B2B2B] uppercase tracking-wide flex items-center gap-2">
                          <CheckSquare size={14} className="text-[#8B6B3E]" />
                          <span>{sub.name}</span>
                        </h5>
                        <p className="text-zinc-500 text-xs leading-relaxed">
                          {sub.desc}
                        </p>
                        {/* Specs Grid */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {sub.specs.map((spec, specIdx) => (
                            <span
                              key={specIdx}
                              className="text-[9px] font-bold uppercase tracking-wider bg-white text-[#A67C52] border border-[#8B6B3E]/15 px-2 py-0.5"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Drawer Footer CTA */}
              <div className="p-6 border-t border-[#8B6B3E]/15 bg-[#F8F6F2] flex flex-col gap-4">
                <button
                  onClick={() => handleInquiryRedirect(selectedProduct.category)}
                  className="w-full bg-[#8B6B3E] hover:bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wider py-4 border border-[#8B6B3E] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Quote for {selectedProduct.category}</span>
                  <ArrowRight size={14} />
                </button>
                <button
                  onClick={handleCloseDrawer}
                  className="w-full bg-transparent hover:bg-white text-zinc-500 hover:text-[#2B2B2B] text-xs font-bold uppercase tracking-wider py-3 border border-zinc-200 transition-all duration-300 cursor-pointer"
                >
                  Close Specification Panel
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
