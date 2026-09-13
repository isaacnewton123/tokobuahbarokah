"use client";

import { BsWhatsapp } from "react-icons/bs";

const WA_LINK =
  "https://wa.me/6289686089691?text=Halo%2C%20saya%20tertarik%20dengan%20buah-buahan%20di%20Toko%20Buah%20Barokah";

function Tooltip() {
  return (
    <span
      className="absolute right-full mr-3 px-3 py-2 text-body-sm-bold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
      style={{
        backgroundColor: "var(--color-ink-deep)",
        color: "var(--color-canvas)",
        borderRadius: "var(--rounded-lg)",
        transition: "opacity var(--transition-fast)",
        boxShadow: "var(--shadow-panel)",
      }}
    >
      Chat WhatsApp
    </span>
  );
}

export default function WhatsAppFAB() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
      aria-label="Hubungi kami via WhatsApp"
      id="whatsapp-fab"
      style={{
        width: "60px",
        height: "60px",
        borderRadius: "var(--rounded-circle)",
        backgroundColor: "var(--color-whatsapp)",
        color: "#ffffff",
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
        transition: "all var(--transition-fast)",
      }}
    >
      <span
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: "var(--color-whatsapp)",
          animation: "pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        }}
      />
      <BsWhatsapp size={28} className="relative z-10" />
      <Tooltip />
    </a>
  );
}
