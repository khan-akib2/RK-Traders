"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MessageSquare, Send, CheckCircle2, ChevronDown } from "lucide-react";
import Image from "next/image";

const categories = [
  "Plywood",
  "Laminates",
  "MDF Boards",
  "Doors",
  "Wooden Packaging Materials",
  "Other"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    productRequirement: "Plywood",
    message: ""
  });

  const [formState, setFormState] = useState({
    submitting: false,
    success: false,
    error: ""
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const searchParams = useSearchParams();

  // Auto-fill form values from URL search queries
  useEffect(() => {
    const prod = searchParams.get("product");
    if (prod) {
      // Find matching categories or default to what was requested
      const matchedCat = categories.find(
        (c) => c.toLowerCase() === prod.toLowerCase() || prod.toLowerCase().includes(c.toLowerCase())
      ) || "Plywood";

      setFormData((prev) => ({
        ...prev,
        productRequirement: matchedCat,
        message: `Hello RK Traders, I am interested in getting a quote for ${prod}. Please send details.`
      }));
    }
  }, [searchParams]);

  // Click outside to close custom dropdown
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownOpen && !e.target.closest("#custom-dropdown-container")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [dropdownOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validations
    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormState((prev) => ({
        ...prev,
        error: "Please fill in both your Name and Contact Phone Number."
      }));
      return;
    }

    setFormState({ submitting: true, success: false, error: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        setFormState({
          submitting: false,
          success: false,
          error: data.error || "Failed to submit quotation inquiry. Please check your credentials and try again."
        });
        return;
      }

      setFormState({ submitting: false, success: true, error: "" });
      
      // Reset Form fields
      setFormData({
        name: "",
        phone: "",
        email: "",
        productRequirement: "Plywood",
        message: ""
      });
    } catch (err) {
      console.error("API submission error:", err);
      setFormState({
        submitting: false,
        success: false,
        error: "A network error occurred. Please check your internet connection and try again."
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F8F6F2] text-[#2B2B2B] relative">
      <div className="absolute inset-0 wood-grain-overlay opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8B6B3E] font-bold block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight text-[#2B2B2B]">
            REQUEST A B2B QUOTATION
          </h2>
          <div className="h-1 w-20 bg-[#8B6B3E] mx-auto" />
          <p className="text-zinc-600 text-sm max-w-xl mx-auto mt-4">
            Send us your project blueprint or material checklist. Our sales team will get back to you with custom wholesale quotes.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact details & QR Scanner */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white border border-[#8B6B3E]/15 p-5 sm:p-8 flex flex-col justify-between shadow-xs"
          >
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#A67C52] font-bold block">
                  Quick Contacts
                </span>
                <h3 className="text-xl font-display font-black uppercase text-[#2B2B2B]">
                  DIRECT LINE SUPPORT
                </h3>
              </div>

              {/* Direct channels */}
              <div className="space-y-6 text-sm text-zinc-700">
                <a
                  href="tel:+918591044102"
                  className="flex items-center gap-4 hover:text-[#A67C52] transition-colors p-3 bg-[#F8F6F2] border border-[#8B6B3E]/10 hover:border-[#8B6B3E]/30"
                >
                  <Phone size={18} className="text-[#8B6B3E]" />
                  <div>
                    <span className="block text-[9px] text-zinc-500 uppercase font-bold tracking-widest">
                      Call / WhatsApp
                    </span>
                    <span className="font-semibold text-[#2B2B2B]">+91 85910 44102</span>
                  </div>
                </a>

                <a
                  href="mailto:rktraders488@gmail.com"
                  className="flex items-center gap-4 hover:text-[#A67C52] transition-colors p-3 bg-[#F8F6F2] border border-[#8B6B3E]/10 hover:border-[#8B6B3E]/30"
                >
                  <Mail size={18} className="text-[#8B6B3E]" />
                  <div>
                    <span className="block text-[9px] text-zinc-500 uppercase font-bold tracking-widest">
                      Email Inquiries
                    </span>
                    <span className="font-semibold text-[#2B2B2B]">rktraders488@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://instagram.com/rk_traders571"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-[#A67C52] transition-colors p-3 bg-[#F8F6F2] border border-[#8B6B3E]/10 hover:border-[#8B6B3E]/30"
                >
                  <svg className="w-[18px] h-[18px] text-[#8B6B3E] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <div>
                    <span className="block text-[9px] text-zinc-500 uppercase font-bold tracking-widest">
                      Instagram DM
                    </span>
                    <span className="font-semibold text-[#2B2B2B]">@rk_traders571</span>
                  </div>
                </a>
              </div>
            </div>

            {/* QR Scanner for easy mobile connections */}
            <div className="mt-8 pt-8 border-t border-[#8B6B3E]/15 flex items-center gap-5">
              <div className="relative w-24 h-24 bg-white p-1.5 shrink-0 border border-zinc-100">
                <Image
                  src="/qr-code.png"
                  alt="RK Traders Contact QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-[#2B2B2B] uppercase tracking-wider">
                  SCAN FOR CONTACT
                </h4>
                <p className="text-[10px] text-zinc-500 leading-normal">
                  Point your mobile camera at this QR code to quickly mail or connect on Instagram.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-white border border-[#8B6B3E]/15 p-5 sm:p-8 flex flex-col justify-between shadow-xs"
          >
            <AnimatePresence mode="wait">
              {!formState.success ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  {formState.error && (
                    <div className="bg-red-900/10 border border-red-800/30 text-red-800 p-3 text-xs uppercase font-bold tracking-wider">
                      {formState.error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        suppressHydrationWarning={true}
                        className="w-full bg-[#F8F6F2] border border-[#8B6B3E]/15 focus:border-[#8B6B3E] px-4 py-3 text-sm text-[#2B2B2B] focus:bg-white focus:outline-none transition-colors"
                        placeholder="e.g. Anand Shah"
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                        Contact Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        suppressHydrationWarning={true}
                        className="w-full bg-[#F8F6F2] border border-[#8B6B3E]/15 focus:border-[#8B6B3E] px-4 py-3 text-sm text-[#2B2B2B] focus:bg-white focus:outline-none transition-colors"
                        placeholder="e.g. +91 98330 XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Email Field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        suppressHydrationWarning={true}
                        className="w-full bg-[#F8F6F2] border border-[#8B6B3E]/15 focus:border-[#8B6B3E] px-4 py-3 text-sm text-[#2B2B2B] focus:bg-white focus:outline-none transition-colors"
                        placeholder="e.g. customer@domain.com"
                      />
                    </div>

                    {/* Custom Product Category Dropdown (No default select box) */}
                    <div className="space-y-2 relative" id="custom-dropdown-container">
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                        Product Category
                      </label>
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full bg-[#F8F6F2] border border-[#8B6B3E]/15 hover:border-[#8B6B3E]/50 focus:border-[#8B6B3E] px-4 py-3 text-sm text-[#2B2B2B] focus:outline-none flex items-center justify-between cursor-pointer text-left transition-colors"
                      >
                        <span>{formData.productRequirement}</span>
                        <ChevronDown
                          size={16}
                          className={`text-[#A67C52] transition-transform duration-300 ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 mt-1 w-full bg-white border border-[#8B6B3E]/20 shadow-2xl z-50 overflow-hidden"
                          >
                            {categories.map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => {
                                  setFormData((prev) => ({ ...prev, productRequirement: option }));
                                  setDropdownOpen(false);
                                }}
                                className={`w-full text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors block cursor-pointer ${
                                  formData.productRequirement === option
                                    ? "bg-[#8B6B3E] text-white"
                                    : "text-zinc-700 hover:text-[#2B2B2B] hover:bg-[#F8F6F2]"
                                }`}
                              >
                                {option}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                      Product Requirement & Specifications
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      suppressHydrationWarning={true}
                      className="w-full bg-[#F8F6F2] border border-[#8B6B3E]/15 focus:border-[#8B6B3E] px-4 py-3 text-sm text-[#2B2B2B] focus:bg-white focus:outline-none resize-none transition-colors"
                      placeholder="Specify sizes, thickness (e.g., 18mm Marine Ply, 1mm Walnut Laminates), quantities, and shipping address..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState.submitting}
                    className="w-full bg-[#8B6B3E] hover:bg-[#A67C52] disabled:bg-zinc-300 text-white text-xs font-bold uppercase tracking-wider py-4 border border-[#8B6B3E] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {formState.submitting ? (
                      <span>TRANSMITTING INQUIRY...</span>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Submit Quotation Inquiry</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 space-y-6"
                >
                  <div className="h-16 w-16 bg-[#8B6B3E]/10 border border-[#8B6B3E]/30 rounded-none flex items-center justify-center text-[#8B6B3E]">
                    <CheckCircle2 size={36} className="animate-bounce" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-black uppercase text-[#2B2B2B] tracking-tight">
                      INQUIRY SENT SUCCESSFULLY
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting RK Traders. Our wholesale team has received your material list and will contact you via Phone/Email with prices shortly.
                    </p>
                  </div>

                  <button
                    onClick={() => setFormState({ submitting: false, success: false, error: "" })}
                    className="bg-transparent hover:bg-[#F8F6F2] text-zinc-600 hover:text-[#2B2B2B] border border-zinc-300 hover:border-[#8B6B3E] py-2.5 px-6 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
