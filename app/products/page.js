import { Suspense } from "react";
import SmoothScroll from "../../components/SmoothScroll";
import Header from "../../components/Header";
import Products from "../../components/Products";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Plywood, Laminates & Doors Catalog | RK Traders",
  description: "Browse RK Traders' premium product range including Commercial & Marine Plywood, HPL Laminates, MDF Boards, solid core Flush Doors, and Custom Packaging.",
};

export default function ProductsPage() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-16">
          {/* Breadcrumb / Page Title */}
          <div className="bg-[#2B2B2B] text-white py-12 border-b border-[#8B6B3E]/20 text-center relative">
            <div className="absolute inset-0 wood-grain-overlay opacity-5 pointer-events-none" />
            <h1 className="text-3xl font-display font-black uppercase tracking-wider relative z-10">
              PRODUCT SPECIFICATIONS
            </h1>
            <p className="text-[#A67C52] text-xs uppercase tracking-widest font-bold mt-2 relative z-10">
              EXPLORE OUR GRADES, THICKNESS & APPLICATIONS
            </p>
          </div>

          <Suspense fallback={
            <div className="py-24 bg-[#2B2B2B] text-center text-zinc-400 text-sm font-semibold uppercase tracking-wider">
              Loading Product Specifications...
            </div>
          }>
            <Products />
          </Suspense>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
