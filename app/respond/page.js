"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  Phone, 
  Mail, 
  User, 
  Package, 
  MessageSquare, 
  Check, 
  Clock, 
  X, 
  Send, 
  ArrowLeft, 
  CheckCircle2, 
  Loader2, 
  ExternalLink,
  PhoneCall
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Helper function to generate default message templates
function getMessageTemplate(status, name, product) {
  const cleanName = name || "Customer";
  const cleanProduct = product ? product.toUpperCase() : "materials";

  switch (status) {
    case "confirmed":
      return `Dear ${cleanName},

We are pleased to confirm your B2B quotation inquiry for ${cleanProduct}. 

Our wholesale team has reviewed your specifications and is finalizing the custom pricing. We will contact you shortly to confirm stock availability, delivery schedule, and payment terms.

If you have any urgent changes or additional specifications, please feel free to reply to this email or contact us directly.

Best regards,
Sales Team
RK Traders`;

    case "delayed":
      return `Dear ${cleanName},

Thank you for your B2B inquiry for ${cleanProduct}.

Currently, this material is out of stock in our main warehouse. However, we are placing a replenishment order with our factory shortly and can secure it for you. 

We estimate that the stock will arrive at our warehouse within 7 to 10 working days, after which we will deliver it to you. 

Please let us know if this timeline works for you so we can reserve the stock and finalize your wholesale quotation.

Best regards,
Sales Team
RK Traders`;

    case "declined":
      return `Dear ${cleanName},

Thank you for your interest in RK Traders.

Regarding your B2B inquiry for ${cleanProduct}, we regret to inform you that we are currently unable to fulfill this request due to temporary stock limitations, factory production queues, or service area logistical constraints for your specific requirements.

We apologize for any inconvenience this may cause and hope we can assist you with your future projects.

Best regards,
Sales Team
RK Traders`;

    default:
      return "";
  }
}

function RespondContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Extract query parameters
  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";
  const product = searchParams.get("product") || "Materials";
  const originalMessage = searchParams.get("message") || "";
  const initialStatus = searchParams.get("status") || "confirmed";

  // State management
  const [status, setStatus] = useState(initialStatus);
  const [customMessage, setCustomMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState("");

  // Initialize status and template on page load
  useEffect(() => {
    if (initialStatus) {
      setStatus(initialStatus);
    }
  }, [initialStatus]);

  // Set template message when status, name, or product changes
  useEffect(() => {
    setCustomMessage(getMessageTemplate(status, name, product));
  }, [status, name, product]);

  // Generate WhatsApp message URL
  const getWhatsAppUrl = () => {
    let cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length === 10) {
      cleanPhone = "91" + cleanPhone;
    } else if (cleanPhone.length === 11 && cleanPhone.startsWith("0")) {
      cleanPhone = "91" + cleanPhone.slice(1);
    }

    const encodedMsg = encodeURIComponent(customMessage);
    return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
  };

  // Submit response via Email API
  const handleSendEmail = async () => {
    if (!email) return;

    setIsSending(true);
    setSendError("");
    setSendSuccess(false);

    try {
      const response = await fetch("/api/respond", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName: name,
          clientEmail: email,
          product,
          status,
          customMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send response email.");
      }

      setSendSuccess(true);
    } catch (err) {
      console.error("Error sending response email:", err);
      setSendError(err.message || "An unexpected network error occurred.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1F1F1F] text-zinc-100 flex flex-col font-sans relative">
      {/* Background Watermark & Grid */}
      <div className="absolute inset-0 wood-grain-overlay opacity-3 pointer-events-none z-0" />

      {/* Admin Panel Header */}
      <header className="bg-[#151515] border-b border-[#8B6B3E]/20 py-5 px-6 sm:px-12 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.push("/")}
            className="p-2 border border-zinc-700 hover:border-[#8B6B3E] text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title="Back to Website"
          >
            <ArrowLeft size={16} />
          </button>
          <div>
            <h1 className="text-lg font-display font-black tracking-widest text-white uppercase">
              RK TRADERS
            </h1>
            <span className="text-[9px] uppercase tracking-wider text-[#A67C52] font-semibold block">
              B2B Inquiry Admin Response Console
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#2B2B2B] px-3 py-1.5 border border-[#8B6B3E]/10">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-300">SYSTEM ONLINE</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-8 lg:p-12 relative z-10 grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Client & Inquiry Overview */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-[#151515] border border-zinc-800 p-6 flex flex-col justify-between h-full relative">
            {/* Top Indicator Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#8B6B3E]" />

            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#A67C52] font-bold block">INQUIRY PROFILE</span>
                <h2 className="text-xl font-display font-black uppercase text-white tracking-tight">
                  Client Request Details
                </h2>
              </div>

              {/* Grid Information */}
              <div className="space-y-4 text-sm">
                
                {/* Client Name */}
                <div className="flex items-start gap-3.5 p-3 bg-[#222] border border-zinc-800">
                  <User size={18} className="text-[#A67C52] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Client Name</span>
                    <span className="font-semibold text-zinc-200">{name || "Ramzan Khan"}</span>
                  </div>
                </div>

                {/* Product Required */}
                <div className="flex items-start gap-3.5 p-3 bg-[#222] border border-zinc-800">
                  <Package size={18} className="text-[#A67C52] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Product Required</span>
                    <span className="font-black text-[#8B6B3E] uppercase">{product || "PLYWOOD"}</span>
                  </div>
                </div>

                {/* Contact Phone */}
                <a 
                  href={`tel:${phone}`}
                  className="flex items-center justify-between p-3 bg-[#222] border border-zinc-850 hover:border-[#8B6B3E]/40 transition-colors group"
                >
                  <div className="flex items-start gap-3.5">
                    <Phone size={18} className="text-[#A67C52] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Phone Number</span>
                      <span className="font-bold text-zinc-200 group-hover:text-white transition-colors">{phone || "Not provided"}</span>
                    </div>
                  </div>
                  {phone && <PhoneCall size={14} className="text-zinc-500 group-hover:text-[#8B6B3E] transition-colors" />}
                </a>

                {/* Client Email */}
                {email ? (
                  <a 
                    href={`mailto:${email}`}
                    className="flex items-center justify-between p-3 bg-[#222] border border-zinc-850 hover:border-[#8B6B3E]/40 transition-colors group"
                  >
                    <div className="flex items-start gap-3.5">
                      <Mail size={18} className="text-[#A67C52] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Email Address</span>
                        <span className="font-semibold text-zinc-200 group-hover:text-white transition-colors">{email}</span>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-zinc-500 group-hover:text-[#8B6B3E] transition-colors" />
                  </a>
                ) : (
                  <div className="flex items-start gap-3.5 p-3 bg-red-950/20 border border-red-900/20">
                    <Mail size={18} className="text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[9px] text-red-400 uppercase font-bold tracking-wider">Email Address</span>
                      <span className="font-semibold text-red-400">Not provided by client</span>
                    </div>
                  </div>
                )}

                {/* Original Specifications / Message */}
                <div className="space-y-1.5 pt-2">
                  <span className="block text-[9px] text-zinc-500 uppercase font-bold tracking-wider">
                    Client's Original Specifications
                  </span>
                  <div className="bg-[#1C1C1C] border border-zinc-850 p-4 max-h-[160px] overflow-y-auto text-xs text-zinc-400 leading-relaxed font-mono whitespace-pre-wrap">
                    {originalMessage || "No additional specs provided."}
                  </div>
                </div>

              </div>
            </div>

            {/* Back button */}
            <button
              onClick={() => router.push("/")}
              className="mt-8 w-full border border-zinc-800 hover:border-zinc-700 bg-transparent text-zinc-400 hover:text-white py-3 text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer"
            >
              Exit Response Console
            </button>
          </div>
        </div>

        {/* Right Column: Response Builder & Actions */}
        <div className="lg:col-span-7">
          <div className="bg-[#151515] border border-zinc-850 p-6 sm:p-8 h-full flex flex-col justify-between relative">
            <div className="space-y-6">
              
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#A67C52] font-bold block">NOTIFICATION CENTER</span>
                <h2 className="text-xl font-display font-black uppercase text-white tracking-tight">
                  Draft & Dispatch Message
                </h2>
              </div>

              {/* Status Selector Tabs */}
              <div className="space-y-2">
                <label className="block text-[9px] uppercase font-bold tracking-wider text-zinc-400">
                  Select Action Status
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {/* Confirm Tab */}
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("confirmed");
                      setSendSuccess(false);
                    }}
                    className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-2 border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      status === "confirmed"
                        ? "bg-[#8B6B3E] border-[#8B6B3E] text-white"
                        : "bg-transparent border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                    }`}
                  >
                    <Check size={14} />
                    <span>Confirm</span>
                  </button>

                  {/* Stock Delayed Tab */}
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("delayed");
                      setSendSuccess(false);
                    }}
                    className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-2 border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      status === "delayed"
                        ? "bg-[#A67C52] border-[#A67C52] text-white"
                        : "bg-transparent border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                    }`}
                  >
                    <Clock size={14} />
                    <span>Delayed</span>
                  </button>

                  {/* Decline Tab */}
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("declined");
                      setSendSuccess(false);
                    }}
                    className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-2 border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      status === "declined"
                        ? "bg-zinc-800 border-zinc-700 text-white"
                        : "bg-transparent border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                    }`}
                  >
                    <X size={14} />
                    <span>Decline</span>
                  </button>
                </div>
              </div>

              {/* Message writing Area */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="customMessage" className="block text-[9px] uppercase font-bold tracking-wider text-zinc-400">
                    Text Writing Area (Personalized Client Message)
                  </label>
                  <span className="text-[9px] text-[#A67C52] uppercase font-semibold">
                    Live Template Auto-fill
                  </span>
                </div>
                
                <textarea
                  id="customMessage"
                  name="customMessage"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  rows={10}
                  className="w-full bg-[#1C1C1C] border border-zinc-800 focus:border-[#8B6B3E] px-4 py-3.5 text-sm text-zinc-200 focus:outline-none resize-none font-sans leading-relaxed transition-colors"
                  placeholder="Draft your message to the client here..."
                />
              </div>

              {/* Status Feedbacks */}
              <AnimatePresence mode="wait">
                {sendSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-emerald-950/20 border border-emerald-800/40 text-emerald-400 flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-emerald-400" />
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wider">EMAIL DISPATCHED SUCCESSFULLY</h4>
                      <p className="text-[11px] text-zinc-400 mt-1">
                        A beautifully formatted {status} message has been sent to <strong>{email}</strong> via Brevo SMTP server.
                      </p>
                    </div>
                  </motion.div>
                )}

                {sendError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-red-950/20 border border-red-800/40 text-red-400 flex items-start gap-3"
                  >
                    <X size={18} className="shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wider">DISPATCH FAILURE</h4>
                      <p className="text-[11px] text-zinc-400 mt-1">{sendError}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Response Dispatch Channels */}
            <div className="mt-8 pt-6 border-t border-zinc-800 space-y-3">
              <span className="block text-[9px] uppercase font-bold tracking-wider text-zinc-500">
                DISPATCH CHANNELS
              </span>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {/* Email Channel */}
                <button
                  onClick={handleSendEmail}
                  disabled={isSending || !email}
                  className="w-full bg-[#8B6B3E] hover:bg-[#A67C52] disabled:bg-zinc-800 disabled:text-zinc-600 disabled:border-zinc-850 hover:border-[#A67C52] text-white text-xs font-bold uppercase tracking-wider py-4 border border-[#8B6B3E] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSending ? (
                    <>
                      <Loader2 size={14} className="animate-spin text-white" />
                      <span>DISPATCHING...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Professional Email</span>
                    </>
                  )}
                </button>

                {/* WhatsApp Channel */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] hover:text-[#25D366] text-xs font-bold uppercase tracking-wider py-4 transition-all flex items-center justify-center gap-2 text-center"
                >
                  <MessageSquare size={14} />
                  <span>Send via WhatsApp</span>
                </a>
              </div>

              {!email && (
                <p className="text-[10px] text-amber-500 leading-normal text-center pt-1">
                  ⚠️ Note: Email delivery is disabled because the customer did not provide an email address. Please use the WhatsApp dispatch channel.
                </p>
              )}
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}

// Wrapper with Suspense
export default function RespondPage() {
  return (
    <Suspense fallback={<RespondLoading />}>
      <RespondContent />
    </Suspense>
  );
}

// Loading state skeleton
function RespondLoading() {
  return (
    <div className="min-h-screen bg-[#1F1F1F] text-zinc-100 flex flex-col font-sans items-center justify-center space-y-4">
      <Loader2 size={36} className="animate-spin text-[#8B6B3E]" />
      <p className="text-xs uppercase tracking-widest text-[#A67C52] font-bold">
        Loading Admin Response Console...
      </p>
    </div>
  );
}
