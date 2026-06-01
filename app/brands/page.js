import SmoothScroll from "../../components/SmoothScroll";
import Header from "../../components/Header";
import Brands from "../../components/Brands";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Brand Partners | RK Traders - Gurjan Club, Diamond Gold, Kohinoor",
  description: "Browse the authorized brands distributed by RK Traders, sourced from premium South Region and Yamuna Nagar mills.",
};

export default function BrandsPage() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-16">
          {/* Breadcrumb / Page Title */}
          <div className="bg-[#2B2B2B] text-white py-12 border-b border-[#8B6B3E]/20 text-center relative">
            <div className="absolute inset-0 wood-grain-overlay opacity-5 pointer-events-none" />
            <h1 className="text-3xl font-display font-black uppercase tracking-wider relative z-10">
              MILL NETWORKS
            </h1>
            <p className="text-[#A67C52] text-xs uppercase tracking-widest font-bold mt-2 relative z-10">
              AUTHORISED BRAND PARTNERS & QUALITY SPECIFICATIONS
            </p>
          </div>

          <Brands />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
