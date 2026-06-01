"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gallery } from "../data/data";
import { X, ZoomIn, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";

const categories = ["All", "Plywood", "Laminates", "Doors", "Projects", "Warehouse"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Filtered images list
  const filteredGallery = filter === "All"
    ? gallery
    : gallery.filter((item) => item.category === filter);

  const handleOpenLightbox = (index) => {
    setActiveIndex(index);
    setZoomed(false);
    setIsFullscreen(false);
    document.body.style.overflow = "hidden";
  };

  const handleCloseLightbox = () => {
    setActiveIndex(null);
    setZoomed(false);
    setIsFullscreen(false);
    document.body.style.overflow = "";
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setZoomed(false);
    setActiveIndex((prev) => (prev === 0 ? filteredGallery.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setZoomed(false);
    setActiveIndex((prev) => (prev === filteredGallery.length - 1 ? 0 : prev + 1));
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (!isFullscreen) {
      const element = document.getElementById("lightbox-container");
      if (element?.requestFullscreen) {
        element.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#F8F6F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest text-[#8B6B3E] font-bold block">
            VISUAL INVENTORY & WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight text-[#2B2B2B]">
            PRODUCT & WAREHOUSE GALLERY
          </h2>
          <div className="h-1 w-20 bg-[#8B6B3E] mx-auto" />
          <p className="text-zinc-600 text-sm max-w-xl mx-auto mt-4">
            Browse through our real-world stockpile of premium plyboards, decorative textures, and custom dispatch cargo crates.
          </p>
        </div>

        {/* Filter Navigation Menu */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs font-bold uppercase tracking-wider py-2 px-5 border transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? "bg-[#8B6B3E] text-white border-[#8B6B3E]"
                  : "bg-white text-zinc-600 border-[#8B6B3E]/10 hover:border-[#8B6B3E]/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpenLightbox(idx)}
                className="bg-white border border-[#8B6B3E]/10 group relative overflow-hidden aspect-[4/3] cursor-pointer shadow-sm hover:shadow-md"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-[#2B2B2B]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest bg-[#8B6B3E] px-2 py-0.5">
                      {item.category}
                    </span>
                    <ZoomIn size={16} className="text-[#A67C52]" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-sm font-display font-bold uppercase text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-[10px] leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal Drawer */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 select-none"
            onClick={handleCloseLightbox}
          >
            {/* Top Toolbar panel */}
            <div className="absolute top-4 left-0 w-full px-6 flex items-center justify-between z-50 text-white">
              <span className="text-xs uppercase tracking-widest text-[#A67C52] font-semibold">
                Image {activeIndex + 1} of {filteredGallery.length} • {filteredGallery[activeIndex].category}
              </span>
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleFullscreen}
                  className="p-2 text-zinc-400 hover:text-white transition-colors bg-zinc-900 border border-zinc-800"
                  aria-label="Toggle fullscreen"
                >
                  {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                </button>
                <button
                  onClick={handleCloseLightbox}
                  className="p-2 text-zinc-400 hover:text-white transition-colors bg-zinc-900 border border-zinc-800"
                  aria-label="Close lightbox"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Main Interactive Display Container */}
            <div
              id="lightbox-container"
              className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Action Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-50 p-3 bg-zinc-900/60 border border-zinc-800 text-white hover:bg-zinc-800 transition-all rounded-none"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Current Preview Panel */}
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <img
                  src={filteredGallery[activeIndex].image}
                  alt={filteredGallery[activeIndex].title}
                  onClick={() => setZoomed(!zoomed)}
                  className={`max-w-full max-h-full object-contain transition-all duration-300 cursor-zoom-in ${
                    zoomed ? "scale-130 cursor-zoom-out" : "scale-100"
                  }`}
                />
              </div>

              {/* Right Action Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-50 p-3 bg-zinc-900/60 border border-zinc-800 text-white hover:bg-zinc-800 transition-all rounded-none"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Caption overlay */}
            <div className="absolute bottom-4 left-0 w-full text-center px-6 z-40 text-white">
              <h3 className="text-base font-display font-bold uppercase text-[#A67C52] tracking-wide">
                {filteredGallery[activeIndex].title}
              </h3>
              <p className="text-zinc-400 text-xs mt-1 max-w-xl mx-auto leading-relaxed">
                {filteredGallery[activeIndex].desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
