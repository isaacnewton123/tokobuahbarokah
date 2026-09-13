"use client";

import { useState } from "react";
import ProductCard, { type Product } from "./ProductCard";

const UNSPLASH = "https://images.unsplash.com";

const PRODUCTS: Product[] = [
  { id: "mangga", name: "Mangga", category: "lokal", price: "Rp 25.000 / kg", image: `${UNSPLASH}/photo-1553279768-865429fa0078?w=600&h=450&fit=crop&q=80`, badge: "Stok Segar" },
  { id: "jeruk", name: "Jeruk", category: "lokal", price: "Rp 35.000 / kg", image: `${UNSPLASH}/photo-1582979512210-99b6a53386f9?w=600&h=450&fit=crop&q=80`, badge: "Manis" },
  { id: "pisang", name: "Pisang", category: "lokal", price: "Rp 20.000 / sisir", image: `${UNSPLASH}/photo-1528825871115-3581a5387919?w=600&h=450&fit=crop&q=80`, badge: "Stok Segar" },
  { id: "semangka", name: "Semangka", category: "lokal", price: "Rp 12.000 / kg", image: `${UNSPLASH}/photo-1589984662646-e7b2e4962f18?w=600&h=450&fit=crop&q=80`, badge: "Stok Segar" },
  { id: "pepaya", name: "Pepaya", category: "lokal", price: "Rp 15.000 / buah", image: `${UNSPLASH}/photo-1517282009859-f000ec3b26fe?w=600&h=450&fit=crop&q=80` },
  { id: "melon", name: "Melon", category: "lokal", price: "Rp 25.000 / buah", image: `${UNSPLASH}/photo-1571575173700-afb9492e6a50?w=600&h=450&fit=crop&q=80` },
  { id: "nanas", name: "Nanas", category: "lokal", price: "Rp 10.000 / buah", image: `${UNSPLASH}/photo-1550258987-190a2d41a8ba?w=600&h=450&fit=crop&q=80` },
  { id: "parcel", name: "Parcel Buah", category: "parcel", price: "Mulai Rp 250.000", image: "/products/prcb-79.webp", badge: "Best Seller" },
];

type Category = "semua" | "lokal" | "parcel";

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "semua", label: "Semua" },
  { key: "lokal", label: "Buah Lokal" },
  { key: "parcel", label: "Parcel Buah" },
];

function SectionHeader() {
  return (
    <div className="text-center mb-10">
      <span className="text-caption-bold uppercase tracking-widest mb-3 block" style={{ color: "var(--color-primary)" }}>
        Katalog Kami
      </span>
      <h2 className="text-heading-lg" style={{ color: "var(--color-ink-deep)" }}>Produk Unggulan</h2>
      <p className="text-subtitle-md mt-3 max-w-lg mx-auto" style={{ color: "var(--color-charcoal)" }}>
        Pilihan buah segar berkualitas terbaik untuk Anda dan keluarga
      </p>
    </div>
  );
}

function PriceListCTA() {
  return (
    <div className="text-center mt-10">
      <p className="text-body-sm" style={{ color: "var(--color-steel)" }}>
        Hubungi kami untuk katalog lengkap dan harga terbaru
      </p>
      <a
        href="https://wa.me/6289686089691?text=Halo%2C%20boleh%20minta%20daftar%20harga%20buah%20terbaru%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost mt-4 inline-flex"
      >
        Minta Daftar Harga Lengkap
      </a>
    </div>
  );
}

export default function ProductCatalog() {
  const [active, setActive] = useState<Category>("semua");
  const filtered = active === "semua" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="produk" className="section-padding" style={{ backgroundColor: "var(--color-surface-soft)" }}>
      <div className="section-container">
        <SectionHeader />
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              className={`btn-pill ${active === cat.key ? "active" : ""}`}
              onClick={() => setActive(cat.key)}
              aria-pressed={active === cat.key}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <div key={product.id} className={`animate-fade-in-up delay-${((i % 4) + 1) * 100}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <PriceListCTA />
      </div>
    </section>
  );
}
