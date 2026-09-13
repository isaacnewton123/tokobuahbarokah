import Link from "next/link";
import { LuCitrus, LuHouse } from "react-icons/lu";

export default function NotFound() {
  return (
    <div
      className="min-h-dvh flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 40%, #fef9ef 100%)",
      }}
    >
      <div className="section-container text-center py-20 animate-fade-in-up">
        <div className="mb-6 flex justify-center animate-float">
          <div
            className="w-24 h-24 flex items-center justify-center"
            style={{ backgroundColor: "rgba(45, 106, 79, 0.08)", borderRadius: "var(--rounded-circle)" }}
          >
            <LuCitrus size={48} color="var(--color-primary)" />
          </div>
        </div>
        <h1 className="text-display-lg mb-4" style={{ color: "var(--color-ink-deep)" }}>
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-subtitle-md mb-8 max-w-md mx-auto" style={{ color: "var(--color-charcoal)" }}>
          Maaf, halaman yang Anda cari tidak tersedia. Mungkin sudah dipindahkan atau tidak pernah ada.
        </p>
        <Link href="/" className="btn-primary text-base!">
          <LuHouse size={18} />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
