import SmoothScroll from "../../components/SmoothScroll";
import Header from "../../components/Header";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Inventory & Projects Gallery | RK Traders",
  description: "Explore photos of our high-quality plywood stacks, laminates, flush doors, custom wooden packaging crates, and Navi Mumbai warehouse operations.",
};

export default function GalleryPage() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-16">
          {/* Breadcrumb / Page Title */}
          <div className="bg-[#2B2B2B] text-white py-12 border-b border-[#8B6B3E]/20 text-center relative">
            <div className="absolute inset-0 wood-grain-overlay opacity-5 pointer-events-none" />
            <h1 className="text-3xl font-display font-black uppercase tracking-wider relative z-10">
              PHOTO GALLERY
            </h1>
            <p className="text-[#A67C52] text-xs uppercase tracking-widest font-bold mt-2 relative z-10">
              EXPLORE OUR MATERIAL INVENTORY & COMPLETED SITES
            </p>
          </div>

          <Gallery />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
