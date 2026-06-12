"use client";

import React from "react";

const imagesList = [
  "WhatsApp Image 2026-06-08 at 12.33.02 AM (1).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.02 AM (2).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.02 AM.jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.03 AM (1).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.03 AM (2).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.03 AM (3).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.03 AM.jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.04 AM (1).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.04 AM (2).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.04 AM.jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.05 AM (1).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.05 AM (2).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.05 AM (3).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.05 AM.jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.06 AM (1).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.06 AM (2).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.06 AM (3).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.06 AM.jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.16 AM (1).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.16 AM.jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.17 AM (1).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.17 AM (2).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.17 AM.jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.18 AM (1).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.18 AM (2).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.18 AM (3).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.18 AM.jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.19 AM (1).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.19 AM (2).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.19 AM (3).jpeg",
  "WhatsApp Image 2026-06-08 at 12.33.19 AM.jpeg"
];

export default function ImageHelper() {
  return (
    <div style={{ padding: "40px", backgroundColor: "#fff", color: "#000" }}>
      <h1>WhatsApp Images Gallery</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
        {imagesList.map((imgName, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
            <p style={{ wordBreak: "break-all", fontWeight: "bold" }}>{imgName}</p>
            <img
              src={`/images/${imgName}`}
              alt={imgName}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
