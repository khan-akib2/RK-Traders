// RK Traders - Core Data Structures

// Products Data
export const products = [
  {
    id: "plywood",
    category: "Plywood",
    title: "Premium Plywood Solutions",
    shortDesc: "High-grade commercial, marine, and shuttering plywood engineered for extreme durability and load-bearing strength.",
    description: "RK Traders supplies premium plywood that undergoes rigorous treatments to ensure resistance to termites, moisture, and extreme stress. Perfect for both high-end interior cabinetry and heavy-duty structural applications.",
    image: "/plywood.png", // Stacks of high quality wood
    subProducts: [
      {
        name: "Commercial Ply",
        desc: "General-purpose MR (Moisture Resistant) grade plywood suitable for interior home furniture, wardrobes, and paneling.",
        specs: ["Moisture Resistant", "Termite Treated", "Uniform Density"]
      },
      {
        name: "Marine Ply",
        desc: "BWP (Boiling Water Proof) grade plywood. Outstanding performance in high-humidity areas like kitchens, bathrooms, and marine applications.",
        specs: ["72-Hour Boiling Water Proof", "Gurjan/Hardwood Core", "High Tensile Strength"]
      },
      {
        name: "Shuttering Ply",
        desc: "Heavy-duty concrete shuttering plywood. Engineered with a premium film-face layer for multiple repetitions in construction projects.",
        specs: ["120GSM Film Face", "High Density Core", "Excellent Concrete Release"]
      }
    ]
  },
  {
    id: "laminates",
    category: "Laminates",
    title: "Decorative & High Pressure Laminates",
    shortDesc: "Vast collection of premium laminates in wood grains, solid colors, stone finishes, and anti-fingerprint textures.",
    description: "Our laminates combine rich aesthetic appeal with high wear resistance. Sourced from leading brands, they are ideal for surfacing kitchen countertops, office furniture, wall panels, and premium doors.",
    image: "/laminates.png", // Sleek modern kitchen with laminate finishes
    subProducts: [
      {
        name: "Decorative Laminates",
        desc: "Elegant 1.0mm & 0.8mm paper laminates in matte, gloss, and textured finishes for bespoke interior designs.",
        specs: ["Scratch Resistant", "UV Color Fastness", "Rich Texture Detail"]
      },
      {
        name: "High Pressure Laminates (HPL)",
        desc: "Heavy-duty exterior and interior cladding sheets, built to withstand extreme weather conditions and impact.",
        specs: ["Weatherproof", "Fire Retardant", "Anti-Graffiti Surface"]
      }
    ]
  },
  {
    id: "mdf",
    category: "MDF Boards",
    title: "Medium Density Fiberboards",
    shortDesc: "Engineered wood boards providing smooth surfaces and excellent routing capabilities for high-precision furniture crafting.",
    description: "Our MDF boards are manufactured using premium wood fibers and resins under high heat and pressure, offering consistent density and smooth edges suitable for intricate router carving and painting.",
    image: "/mdf.png", // Structured wood samples
    subProducts: [
      {
        name: "Standard MDF",
        desc: "Ideal for wall paneling, display fixtures, interior doors, and dry residential furniture applications.",
        specs: ["Ultra-Smooth Surface", "No Voids/Grain Splits", "Easy to Paint/Laminate"]
      },
      {
        name: "Moisture Resistant MDF (HDF/WR)",
        desc: "Engineered using specialized water-resistant resins for kitchen shutters, humid interior spaces, and door frames.",
        specs: ["Low Swelling Rate", "High Density Fibers", "Fungus Resistant"]
      }
    ]
  },
  {
    id: "doors",
    category: "Doors",
    title: "Industrial & Decorative Doors",
    shortDesc: "Solid core flush doors and decorative veneer doors engineered for exceptional stability, security, and acoustic control.",
    description: "RK Traders' doors are manufactured using seasoned hardwood fillers, high-grade bonding agents, and premium outer veneers, offering solid impact resistance and dimensional stability.",
    image: "/doors.png", // Elegant wooden doors
    subProducts: [
      {
        name: "Flush Doors",
        desc: "Seasoned pine wood filler blockboard core doors finished with hardwood crossbands. Built for extreme structural longevity.",
        specs: ["BWP Grade Core", "Anti-Warping Technology", "Sound Dampening"]
      },
      {
        name: "Decorative Doors",
        desc: "Finished with natural veneers, laminates, or molded skins. Ready-to-install doors combining modern aesthetics with durability.",
        specs: ["Pre-Finished Shell", "Designer Molded Panels", "Scratch Shield Coating"]
      }
    ]
  },
  {
    id: "packaging",
    category: "Wooden Packaging Materials",
    title: "Industrial Wood & Packaging Solutions",
    shortDesc: "Heavy-duty wooden crates, packing pallets, and customized shipping boxes for industrial transport security.",
    description: "We provide high-grade pine and hardwood packaging materials designed for secure machinery shipping, domestic freight, and export-compliant heavy cargo logistics.",
    image: "/packaging.png", // Wooden shipping boxes/pallets
    subProducts: [
      {
        name: "Industrial Packaging",
        desc: "Export-grade pine wood pallets, heavy-duty crates, and customized packaging bases matching specific weight distributions.",
        specs: ["ISPM-15 Heat Treated", "Phytosanitary Certified", "High Weight Capacity"]
      },
      {
        name: "Custom Wooden Solutions",
        desc: "Sawn timber blocks, customized wedges, and structural runners for warehouses and engineering projects.",
        specs: ["Seasoned Hardwoods", "Precision Cut Dimensions", "Anti-Fungal Treated"]
      }
    ]
  }
];

// Brands Showcase Data (Regional and Certified Brands)
export const brands = [
  {
    region: "South Region",
    description: "Finest semi-hardwood and alternate core panels manufactured in advanced South Indian mills.",
    items: [
      {
        name: "Diamond Gold",
        type: "MR Semi Hardwood",
        core: "Premium Semi Hardwood Core",
        use: "Commercial grade furniture, panels, and custom partitions."
      },
      {
        name: "Gurjan Club",
        type: "MR Alternate",
        core: "Alternate Gurjan/Hardwood Core",
        use: "Living room cabinets, premium closets, and moisture-prone interior work."
      }
    ]
  },
  {
    region: "Yamuna Nagar",
    description: "Renowned Northern manufacturing hub delivering heavy-density marine and full red-core plywoods.",
    items: [
      {
        name: "Kohinoor Super 303",
        type: "Full Red Core (MR)",
        core: "100% Selected Red Hardwood Core",
        use: "Long-span furniture, shop fittings, and office partitions."
      },
      {
        name: "Kohinoor Super 710",
        type: "Full Marine (BWP / Full PF)",
        core: "100% Marine Grade PF Resin Bonded Core",
        use: "Bathroom wardrobes, modular kitchens, structural concrete shuttering, and exterior doors."
      }
    ]
  }
];

// Gallery Data with Categories
export const gallery = [
  {
    id: 1,
    category: "Plywood",
    title: "Heavy-Duty Marine Grade Plywood",
    desc: "BWP Grade hardwood core sheets ready for kitchen carpentry.",
    image: "/plywood.png"
  },
  {
    id: 2,
    category: "Laminates",
    title: "Premium Wood Grain Laminates",
    desc: "Collection of natural oak and walnut textured laminates.",
    image: "/laminates.png"
  },
  {
    id: 3,
    category: "Doors",
    title: "Seasoned Flush Doors Stacks",
    desc: "Solid wood block fillers ready for industrial supply.",
    image: "/doors.png"
  },
  {
    id: 4,
    category: "Warehouse",
    title: "RK Traders Shilgaon Warehouse",
    desc: "Stockpiled high-density MDF and shuttering ply sheets.",
    image: "/warehouse.png"
  },
  {
    id: 5,
    category: "Projects",
    title: "Commercial Office Fit-Out",
    desc: "Premium walnut laminates installed on bespoke workspace desks.",
    image: "/office-project.png"
  },
  {
    id: 6,
    category: "Plywood",
    title: "High-Gloss Film Faced Shuttering Ply",
    desc: "120GSM phenolic film coated ply for concrete molding repetitions.",
    image: "/shuttering-ply.png"
  },
  {
    id: 7,
    category: "Laminates",
    title: "Premium Matte Acrylic Surfaces",
    desc: "Anti-fingerprint dark charcoal laminates for luxury kitchens.",
    image: "/kitchen-laminates.png"
  },
  {
    id: 8,
    category: "Warehouse",
    title: "Logistics and Shipping Yard",
    desc: "Wooden pallets loaded with decorative laminates ready for transport.",
    image: "/packaging.png"
  }
];

// Testimonials Data representing Real B2B Customers
export const testimonials = [
  {
    name: "Vikram R. Deshmukh",
    role: "Senior Project Manager",
    company: "Vardhman Infraprojects",
    quote: "We've sourced shuttering plywood and BWP marine ply from RK Traders for several premium projects in Navi Mumbai. Their quality is always consistent, pricing is highly competitive, and deliveries are punctual. Highly recommended B2B partner.",
    location: "Navi Mumbai"
  },
  {
    name: "Sneha Kapur",
    role: "Principal Interior Architect",
    company: "Studio Craft & Contours",
    quote: "RK Traders has a phenomenal catalog of decorative laminates and high-pressure sheets. The natural oak walnut wood grain samples they supplied fit our client's residential design perfectly. Sufiyan and Rahim provide exemplary support.",
    location: "Mumbai"
  },
  {
    name: "Rajesh K. Yadav",
    role: "Proprietor & Contractor",
    company: "Yadav Woodcrafts",
    quote: "We have been buying commercial blockboards, MDF, and solid flush doors from RK Traders for over 4 years. Their Diamond Gold and Kohinoor brands offer outstanding strength and stability against wrapping. Unmatched support in the Thane district.",
    location: "Thane"
  },
  {
    name: "Anand Shah",
    role: "Chief Procurement Officer",
    company: "Apex Warehousing & Logistics",
    quote: "For heavy-duty wooden crates and heat-treated pallets, RK Traders is our go-to supplier in Maharashtra. Their custom timber blocks match our exact specifications. Excellent ISPM-15 export-compliant quality.",
    location: "Navi Mumbai"
  }
];
