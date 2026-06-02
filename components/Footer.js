"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Phone, Mail, MapPin, ArrowUp, Compass } from "lucide-react";

export default function Footer() {
  const directionsUrl = "https://maps.app.goo.gl/NnrnK8ukWUNq6oEv8";
  const pathname = usePathname();
  const router = useRouter();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e, id, isPage = false) => {
    e.preventDefault();
    if (isPage) {
      if (id === "/" && pathname === "/") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        router.push(id);
      }
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <footer className="bg-[#1F1F1F] text-white border-t border-zinc-800 pt-16 pb-8 relative overflow-hidden">
      
      {/* Decorative accent logo watermark */}
      <div className="absolute right-[-100px] bottom-[-50px] w-96 h-96 opacity-[0.02] pointer-events-none select-none">
        <Image
          src="/logo.png"
          alt="RK Traders Footer Watermark"
          width={384}
          height={384}
          className="object-contain filter invert"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Logo & Company bio column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#hero" onClick={handleScrollToTop} className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden bg-white/10 border border-[#8B6B3E]/30 p-1 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="RK Traders Footer Logo"
                  width={36}
                  height={36}
                  className="object-contain filter brightness-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display text-lg tracking-wider font-extrabold leading-none">
                  RK TRADERS
                </span>
                <span className="text-[#A67C52] text-[9px] tracking-widest font-semibold mt-0.5">
                  PLYWOODS • LAMINATES • DOORS
                </span>
              </div>
            </a>
            
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Wholesale supplier & dealer of grade-A plywoods, high-pressure decorative sheets, solid core doors, and heat-treated wooden packing materials. Serving commercial projects across Navi Mumbai since 2011.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#A67C52] font-bold">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              {[
                { id: "/", label: "Home", isPage: true },
                { id: "/about", label: "About Us", isPage: true },
                { id: "/founder", label: "Our Founder", isPage: true },
                { id: "/products", label: "Products", isPage: true },
                { id: "/brands", label: "Brand Partners", isPage: true },
                { id: "why-choose-us", label: "Why Choose Us", isPage: false },
                { id: "/gallery", label: "Photo Gallery", isPage: true },
                { id: "testimonials", label: "Testimonials", isPage: false },
                { id: "/contact", label: "Inquiries", isPage: true }
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={link.isPage ? link.id : `#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id, link.isPage)}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#A67C52] font-bold">
              OUR CATALOGS
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              {[
                { id: "/products?category=Plywood", label: "Commercial & Marine Plywood", isPage: true },
                { id: "/products?category=Laminates", label: "High-Pressure Laminates (HPL)", isPage: true },
                { id: "/products?category=MDF Boards", label: "Medium Density Fiberboard (MDF)", isPage: true },
                { id: "/products?category=Doors", label: "Seasoned Timber Flush Doors", isPage: true },
                { id: "/products?category=Wooden Packaging Materials", label: "Industrial Packaging Pallets", isPage: true }
              ].map((prod, pIdx) => (
                <li key={pIdx}>
                  <a
                    href={prod.id}
                    onClick={(e) => handleLinkClick(e, prod.id, prod.isPage)}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {prod.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#A67C52] font-bold">
              OFFICE & CONTACT
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#8B6B3E] shrink-0 mt-0.5" />
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  Gala No. 02, House No. 604/605, <br />
                  Diva Shil Rd, Shilgaon, <br />
                  Navi Mumbai, Maharashtra 400612
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#8B6B3E]" />
                <a href="tel:+918591044102" className="hover:text-white transition-colors font-semibold">
                  +91 85910 44102
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#8B6B3E]" />
                <a href="mailto:rktraders488@gmail.com" className="hover:text-white transition-colors font-semibold">
                  rktraders488@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#8B6B3E] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <a
                  href="https://instagram.com/rk_traders571"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-semibold"
                >
                  @rk_traders571
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details panel */}
        <div className="mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
          <div className="text-center md:text-left">
            <span>© {new Date().getFullYear()} RK Traders. All Rights Reserved.</span>
            <span className="mx-2 text-[#8B6B3E]">•</span>
            <span>Premium Plywood, Laminates & Doors Supplier</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A67C52] transition-colors flex items-center gap-1"
            >
              <Compass size={12} />
              <span>Google Maps Navigator</span>
            </a>
            <button
              onClick={handleScrollToTop}
              className="hover:text-[#A67C52] transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-0"
              aria-label="Back to top"
            >
              <ArrowUp size={12} />
              <span>Scroll to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
