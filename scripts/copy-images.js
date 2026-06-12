const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'public', 'images');

const copies = [
  // Hero Slider
  { src: 'WhatsApp Image 2026-06-08 at 12.33.04 AM (2).jpeg', dest: 'hero-warehouse.jpg' },
  { src: 'WhatsApp Image 2026-06-08 at 12.33.19 AM (3).jpeg', dest: 'hero-plywood.jpg' },
  { src: 'WhatsApp Image 2026-06-08 at 12.33.16 AM.jpeg', dest: 'hero-laminates.jpg' },

  // Products
  { src: 'WhatsApp Image 2026-06-08 at 12.33.04 AM.jpeg', dest: 'product-plywood.jpg' },
  { src: 'WhatsApp Image 2026-06-08 at 12.33.16 AM.jpeg', dest: 'product-laminates.jpg' },
  { src: 'WhatsApp Image 2026-06-08 at 12.33.19 AM (1).jpeg', dest: 'product-mdf.jpg' },
  { src: 'WhatsApp Image 2026-06-08 at 12.33.02 AM.jpeg', dest: 'product-doors.jpg' },
  { src: 'WhatsApp Image 2026-06-08 at 12.33.03 AM.jpeg', dest: 'product-packaging.jpg' },

  // About/Founder
  { src: 'WhatsApp Image 2026-06-08 at 12.33.04 AM (1).jpeg', dest: 'about-warehouse-staff.jpg' },
  { src: 'WhatsApp Image 2026-06-08 at 12.33.18 AM (3).jpeg', dest: 'founder-portrait.jpg' },

  // Gallery
  { src: 'WhatsApp Image 2026-06-08 at 12.33.18 AM (1).jpeg', dest: 'gallery-plywood-stamp.jpg' },
  { src: 'WhatsApp Image 2026-06-08 at 12.33.03 AM (1).jpeg', dest: 'gallery-laminate-gloss.jpg' },
  { src: 'WhatsApp Image 2026-06-08 at 12.33.05 AM (1).jpeg', dest: 'gallery-doors-stack.jpg' },
  { src: 'WhatsApp Image 2026-06-08 at 12.33.06 AM (2).jpeg', dest: 'gallery-plywood-edge.jpg' },
  { src: 'WhatsApp Image 2026-06-08 at 12.33.02 AM (1).jpeg', dest: 'gallery-laminate-stands.jpg' },
  { src: 'WhatsApp Image 2026-06-08 at 12.33.03 AM (2).jpeg', dest: 'gallery-shuttering-ply.jpg' },
  { src: 'WhatsApp Image 2026-06-08 at 12.33.16 AM.jpeg', dest: 'gallery-laminates-rack.jpg' },
  { src: 'WhatsApp Image 2026-06-08 at 12.33.03 AM (3).jpeg', dest: 'gallery-logistics-truck.jpg' }
];

console.log('Starting image copy and rename operations...');

copies.forEach(({ src, dest }) => {
  const srcPath = path.join(baseDir, src);
  const destPath = path.join(baseDir, dest);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`[Copied] ${src} -> ${dest}`);
  } else {
    console.error(`[Error] Source not found: ${srcPath}`);
  }
});

console.log('All image operations completed.');
