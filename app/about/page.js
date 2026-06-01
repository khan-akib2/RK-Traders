import SmoothScroll from "../../components/SmoothScroll";
import Header from "../../components/Header";
import AboutUs from "../../components/AboutUs";
import WhyChooseUs from "../../components/WhyChooseUs";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About Us | RK Traders - Plywood, Laminates & Doors Supplier",
  description: "Discover the history, wholesale capabilities, and quality wood standards of RK Traders in Navi Mumbai. Over 15 years of trusted supply.",
};

export default function AboutPage() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-16">
          {/* Breadcrumb / Page Title */}
          <div className="bg-[#2B2B2B] text-white py-12 border-b border-[#8B6B3E]/20 text-center relative">
            <div className="absolute inset-0 wood-grain-overlay opacity-5 pointer-events-none" />
            <h1 className="text-3xl font-display font-black uppercase tracking-wider relative z-10">
              WHO WE ARE
            </h1>
            <p className="text-[#A67C52] text-xs uppercase tracking-widest font-bold mt-2 relative z-10">
              ABOUT RK TRADERS • PLYWOODS • LAMINATES • DOORS
            </p>
          </div>

          <AboutUs />
          <WhyChooseUs />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
