"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight, ChevronDown } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/founder", label: "Founder" },
  { path: "/products", label: "Products", hasDropdown: true },
  { path: "/brands", label: "Brands" },
  { path: "/gallery", label: "Gallery" }
];

const productCategories = [
  { name: "Plywood", href: "/products?category=Plywood" },
  { name: "Laminates", href: "/products?category=Laminates" },
  { name: "MDF Boards", href: "/products?category=MDF Boards" },
  { name: "Doors", href: "/products?category=Doors" },
  { name: "Wooden Packaging", href: "/products?category=Wooden Packaging Materials" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path changes
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileAccordionOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || pathname !== "/"
          ? "bg-[#2B2B2B]/95 backdrop-blur-md border-b border-[#8B6B3E]/20 py-3 shadow-lg"
          : "bg-gradient-to-b from-[#2B2B2B]/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand area */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden bg-white/10 border border-[#8B6B3E]/30 p-1 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="RK Traders Logo"
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.path}
                    className="relative py-1 group"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={link.path}
                      className={`text-sm font-medium tracking-wide uppercase transition-colors flex items-center gap-1 ${
                        pathname.startsWith(link.path) && pathname !== "/"
                          ? "text-[#A67C52] font-semibold"
                          : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu Overlay */}
                    <div
                      className={`absolute left-0 top-[28px] w-52 bg-[#1F1F1F] border border-zinc-800 shadow-2xl py-2 transition-all duration-300 z-50 ${
                        dropdownOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"
                      }`}
                    >
                      {productCategories.map((cat, catIdx) => (
                        <Link
                          key={catIdx}
                          href={cat.href}
                          className="block px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors relative py-1 ${
                    isActive ? "text-[#A67C52] font-semibold" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8B6B3E]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact & CTA Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+918591044102"
              className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors text-sm font-medium"
            >
              <Phone size={16} className="text-[#A67C52]" />
              <span>+91 85910 44102</span>
            </a>
            <Link
              href="/contact"
              className="bg-[#8B6B3E] hover:bg-[#A67C52] text-white text-xs font-semibold uppercase tracking-wider py-2.5 px-5 border border-[#8B6B3E] hover:border-[#A67C52] transition-all duration-300 flex items-center gap-2"
            >
              <span>Get Quote</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Burger Trigger */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href="tel:+918591044102"
              className="p-2 text-zinc-300 hover:text-white"
              aria-label="Call Now"
            >
              <Phone size={20} className="text-[#A67C52]" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Menu Content */}
      <div
        className={`fixed top-[60px] right-0 w-72 h-[calc(100vh-60px)] z-40 bg-[#2B2B2B] border-l border-[#8B6B3E]/20 shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6 overflow-y-auto">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.path} className="flex flex-col border-b border-zinc-800 pb-2">
                    <button
                      onClick={() => setMobileAccordionOpen(!mobileAccordionOpen)}
                      className="text-left text-sm font-semibold tracking-wider uppercase py-2 flex items-center justify-between text-zinc-300 hover:text-white"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${mobileAccordionOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Mobile Dropdown Category Links */}
                    <div
                      className={`flex flex-col pl-4 gap-2.5 overflow-hidden transition-all duration-300 ${
                        mobileAccordionOpen ? "max-h-60 mt-2 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {productCategories.map((cat, catIdx) => (
                        <Link
                          key={catIdx}
                          href={cat.href}
                          className="text-xs font-semibold text-zinc-400 hover:text-white uppercase tracking-wider py-1.5"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-semibold tracking-wider uppercase py-2 border-b border-zinc-800 transition-colors ${
                    isActive ? "text-[#A67C52] border-b border-[#8B6B3E]" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-4 mt-8 border-t border-zinc-800 pt-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                Support & Inquiries
              </span>
              <a
                href="tel:+918591044102"
                className="text-white text-base font-semibold flex items-center gap-2 hover:text-[#A67C52] transition-colors"
              >
                <Phone size={16} className="text-[#A67C52]" />
                <span>+91 85910 44102</span>
              </a>
            </div>

            <Link
              href="/contact"
              className="w-full text-center bg-[#8B6B3E] hover:bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wider py-3 border border-[#8B6B3E] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
