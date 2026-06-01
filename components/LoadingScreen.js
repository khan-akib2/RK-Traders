"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#2B2B2B] z-[9999] flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Logo container with radial glow effect */}
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-28 h-28 bg-white/10 border border-[#8B6B3E]/30 p-2 flex items-center justify-center shadow-2xl"
            >
              <Image
                src="/logo.png"
                alt="RK Traders Loading Logo"
                width={96}
                height={96}
                className="object-contain filter brightness-110"
                priority
              />
            </motion.div>

            {/* Brand Text */}
            <div className="text-center space-y-1 select-none">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white font-display text-2xl font-black tracking-widest"
              >
                RK TRADERS
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-[#A67C52] text-[10px] tracking-widest uppercase font-bold"
              >
                PLYWOODS • LAMINATES • DOORS
              </motion.p>
            </div>
          </div>

          {/* Loading Accent Bar */}
          <div className="absolute bottom-12 w-48 h-[1px] bg-zinc-800 overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-transparent via-[#8B6B3E] to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
