"use client";

import { useState } from "react";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { LuImageOff } from "react-icons/lu";

export interface Product {
  id: string;
  name: string;
  category: "lokal" | "parcel";
  price: string;
  image: string;
  badge?: string;
}

function FruitPlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "var(--color-surface-soft)" }}>
      <LuImageOff size={48} color="var(--color-stone)" />
    </div>
  );
}

function CategoryLabel({ category }: { category: Product["category"] }) {
  const labels = { lokal: "Buah Lokal", parcel: "Parcel Buah" };
  return (
    <span className="text-caption uppercase tracking-wider" style={{ color: "var(--color-stone)" }}>
      {labels[category]}
    </span>
  );
}

function OrderButton({ name }: { name: string }) {
  const waText = encodeURIComponent(`Halo, saya ingin memesan ${name} dari Toko Buah Barokah. Apakah tersedia?`);
  return (
    <a
      href={`https://wa.me/6289686089691?text=${waText}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary mt-2 text-center w-full text-sm!"
      aria-label={`Pesan ${name} via WhatsApp`}
    >
      <BsWhatsapp size={16} />
      Pesan Sekarang
    </a>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="card-feature flex flex-col overflow-hidden group" style={{ padding: 0 }}>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4 / 3", borderRadius: "var(--rounded-xxxl) var(--rounded-xxxl) 0 0" }}>
        {imgError ? (
          <FruitPlaceholder />
        ) : (
          <Image
            src={product.image}
            alt={`Buah ${product.name} segar berkualitas`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="badge badge-success">{product.badge}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-5" style={{ gap: "var(--space-xs)" }}>
        <CategoryLabel category={product.category} />
        <h3 className="text-subtitle-lg" style={{ color: "var(--color-ink-deep)" }}>{product.name}</h3>
        <p className="text-body-md-bold" style={{ color: "var(--color-primary)" }}>{product.price}</p>
        <OrderButton name={product.name} />
      </div>
    </div>
  );
}
