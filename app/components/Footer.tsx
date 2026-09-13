"use client";

import Image from "next/image";
import Link from "next/link";
import { LuStar } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { GiOrangeSlice } from "react-icons/gi";

const QUICK_LINKS = [
  { label: "Beranda", href: "/#beranda" },
  { label: "Produk Unggulan", href: "/#produk" },
  { label: "Keunggulan", href: "/#keunggulan" },
  { label: "Lokasi", href: "/#lokasi" },
  { label: "Kontak", href: "/#kontak" },
  { label: "Legalitas", href: "/legalitas" },
  { label: "Branding Logo", href: "/logo" },
  { label: "Profil Pemilik", href: "/pemilik" },
];

const WA_LINK =
  "https://wa.me/6289686089691?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20produk%20di%20Toko%20Buah%20Barokah";

function BrandColumn() {
  return (
    <div className="lg:col-span-2">
      <div className="flex items-center gap-3 mb-4">
        <Image src="/branding/logo_no_BG.webp" alt="Logo Toko Buah Barokah" width={48} height={48} className="rounded-lg" />
        <span className="text-heading-sm" style={{ color: "var(--color-canvas)" }}>Toko Buah Barokah</span>
      </div>
      <p className="text-body-sm max-w-sm mb-6" style={{ color: "var(--color-stone)" }}>
        Menyediakan aneka buah segar lokal berkualitas terbaik dengan harga terjangkau. Melayani eceran, grosir, dan parcel buah di Purwasari dan sekitarnya.
      </p>
      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <LuStar key={i} size={16} fill="#F77F00" color="#F77F00" />
        ))}
      </div>
      <p className="text-caption" style={{ color: "var(--color-stone)" }}>Dipercaya pelanggan di Purwasari</p>
    </div>
  );
}

function LinksColumn() {
  return (
    <div>
      <h3 className="text-body-sm-bold mb-4 uppercase tracking-wider" style={{ color: "var(--color-canvas)" }}>Menu</h3>
      <ul className="flex flex-col gap-2">
        {QUICK_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-body-sm transition-colors"
              style={{ color: "var(--color-stone)" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--color-canvas)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--color-stone)"; }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactColumn() {
  return (
    <div>
      <h3 className="text-body-sm-bold mb-4 uppercase tracking-wider" style={{ color: "var(--color-canvas)" }}>Hubungi Kami</h3>
      <ul className="flex flex-col gap-3">
        <li>
          <p className="text-caption" style={{ color: "var(--color-stone)" }}>Alamat</p>
          <p className="text-body-sm" style={{ color: "var(--color-hairline)" }}>
            Karangsari, Kec. Purwasari,<br />Kab. Karawang, Jawa Barat 41373
          </p>
        </li>
        <li>
          <p className="text-caption" style={{ color: "var(--color-stone)" }}>WhatsApp</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-body-sm inline-flex items-center gap-1.5 transition-colors" style={{ color: "var(--color-whatsapp)" }}>
            <BsWhatsapp size={14} /> 0896-8608-9691
          </a>
        </li>
        <li>
          <p className="text-caption" style={{ color: "var(--color-stone)" }}>Jam Buka</p>
          <p className="text-body-sm" style={{ color: "var(--color-hairline)" }}>Setiap Hari<br />09:00 – 17:00 WIB</p>
        </li>
      </ul>
    </div>
  );
}

function BottomBar() {
  const year = new Date().getFullYear();
  return (
    <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <p className="text-caption" style={{ color: "var(--color-stone)" }}>
        &copy; {year} Toko Buah Barokah. Hak Cipta Dilindungi.
      </p>
      <p className="text-caption inline-flex items-center gap-1.5" style={{ color: "var(--color-stone)" }}>
        Buah Segar untuk Keluarga Indonesia <GiOrangeSlice size={14} color="#F77F00" />
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-ink-deep)", color: "var(--color-canvas)" }}>
      <div className="section-container" style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-xxl)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <BrandColumn />
          <LinksColumn />
          <ContactColumn />
        </div>
        <BottomBar />
      </div>
    </footer>
  );
}
