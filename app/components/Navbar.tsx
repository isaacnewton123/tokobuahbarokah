"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Produk Unggulan", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "Kontak", href: "#kontak" },
];

const WHATSAPP_LINK =
  "https://wa.me/6289686089691?text=Halo%2C%20saya%20tertarik%20dengan%20buah-buahan%20di%20Toko%20Buah%20Barokah";

function HamburgerButton({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <button
      className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg"
      onClick={onToggle}
      aria-label={isOpen ? "Tutup menu" : "Buka menu"}
      aria-expanded={isOpen}
    >
      <span className="block w-5 h-0.5 rounded-full transition-all duration-300" style={{ backgroundColor: "var(--color-ink)", transform: isOpen ? "rotate(45deg) translateY(4px)" : "none" }} />
      <span className="block w-5 h-0.5 rounded-full transition-all duration-300" style={{ backgroundColor: "var(--color-ink)", opacity: isOpen ? 0 : 1 }} />
      <span className="block w-5 h-0.5 rounded-full transition-all duration-300" style={{ backgroundColor: "var(--color-ink)", transform: isOpen ? "rotate(-45deg) translateY(-4px)" : "none" }} />
    </button>
  );
}

function DesktopNav() {
  return (
    <div className="hidden md:flex items-center gap-1">
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-body-sm-bold px-3 py-2 rounded-full transition-colors"
          style={{ color: "var(--color-charcoal)" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-primary)"; e.currentTarget.style.backgroundColor = "var(--color-surface-soft)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-charcoal)"; e.currentTarget.style.backgroundColor = "transparent"; }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  return (
    <div className="md:hidden animate-slide-down" style={{ backgroundColor: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)", borderTop: "1px solid var(--color-hairline-soft)" }}>
      <div className="section-container py-4 flex flex-col gap-1">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="text-body-md-bold py-3 px-4 rounded-xl transition-colors" style={{ color: "var(--color-ink)" }} onClick={onClose}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--color-surface-soft)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
          >
            {link.label}
          </a>
        ))}
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-2 text-center" onClick={onClose}>
          <BsWhatsapp size={18} /> Hubungi via WhatsApp
        </a>
      </div>
    </div>
  );
}

function NavBarContent({ isMobileOpen, onToggle }: { isMobileOpen: boolean; onToggle: () => void }) {
  return (
    <div className="section-container flex items-center justify-between h-16 md:h-[72px]">
      <a href="#beranda" className="flex items-center gap-2 shrink-0" aria-label="Toko Buah Barokah — Beranda">
        <Image src="/logo_no_BG.webp" alt="Logo Toko Buah Barokah" width={44} height={44} className="rounded-lg" priority />
        <span className="hidden sm:block font-bold text-lg" style={{ color: "var(--color-primary)" }}>Toko Buah Barokah</span>
      </a>
      <DesktopNav />
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex btn-whatsapp text-sm! py-2.5! px-5!" aria-label="Hubungi kami via WhatsApp">
        <BsWhatsapp size={18} /> WhatsApp
      </a>
      <HamburgerButton isOpen={isMobileOpen} onToggle={onToggle} />
    </div>
  );
}

function useScrollState() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const h = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return isScrolled;
}

export default function Navbar() {
  const isScrolled = useScrollState();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => { if (window.innerWidth >= 768) setIsMobileOpen(false); };
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all"
      style={{
        backgroundColor: isScrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.7)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: isScrolled ? "1px solid var(--color-hairline-soft)" : "1px solid transparent",
        boxShadow: isScrolled ? "0 1px 8px rgba(0,0,0,0.04)" : "none",
      }}
    >
      <NavBarContent isMobileOpen={isMobileOpen} onToggle={() => setIsMobileOpen(!isMobileOpen)} />
      {isMobileOpen && <MobileDrawer onClose={() => setIsMobileOpen(false)} />}
    </nav>
  );
}
