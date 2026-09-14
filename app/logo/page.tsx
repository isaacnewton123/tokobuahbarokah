import Image from "next/image";
import Link from "next/link";
import { LuDownload, LuPalette, LuSprout, LuHeartHandshake, LuArrowLeft } from "react-icons/lu";

export const metadata = {
  title: "Branding Logo — Toko Buah Barokah",
  description: "Aset dan panduan branding logo Toko Buah Barokah.",
};

export default function LogoPage() {
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="section-container max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 mb-8 text-body-md-bold transition-colors hover:text-[var(--color-primary)]"
          style={{ color: "var(--color-stone)" }}
        >
          <LuArrowLeft size={20} />
          Kembali ke Beranda
        </Link>
        <div className="text-center mb-12">
          <h1 className="text-heading-lg mb-4" style={{ color: "var(--color-primary)" }}>
            Branding Logo
          </h1>
          <p className="text-body-lg" style={{ color: "var(--color-stone)" }}>
            Identitas visual dan aset branding resmi Toko Buah Barokah.
          </p>
        </div>

        {/* Logo Showcase */}
        <div className="glass-panel p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-2xl overflow-hidden shadow-card" style={{ backgroundColor: "var(--color-canvas)" }}>
              <Image 
                src="/branding/square_BG.webp" 
                alt="Logo Utama Toko Buah Barokah" 
                fill 
                className="object-cover" 
                priority
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-heading-md mb-4" style={{ color: "var(--color-ink)" }}>
              Kesegaran yang Membawa Berkah
            </h2>
            <p className="text-body-md mb-8" style={{ color: "var(--color-stone)" }}>
              Logo Toko Buah Barokah dirancang untuk mencerminkan komitmen kami dalam menyajikan buah-buahan lokal yang segar, sehat, dan berkualitas untuk masyarakat Purwasari. Desain yang bersih dan modern menunjukkan profesionalisme sekaligus keramahan pelayanan kami.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="/branding/logo_no_BG.webp" 
                download
                className="btn-primary"
              >
                <LuDownload size={18} />
                Logo Transparan
              </a>
              <a 
                href="/branding/square_BG.webp" 
                download
                className="btn-secondary"
              >
                <LuDownload size={18} />
                Logo (Background)
              </a>
            </div>
          </div>
        </div>

        {/* Makna Elemen */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-feature border-none bg-white shadow-sm">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "var(--color-primary-soft)", color: "var(--color-canvas)" }}>
              <LuPalette size={24} />
            </div>
            <h3 className="text-subtitle-lg mb-2" style={{ color: "var(--color-ink)" }}>Warna Hijau & Oranye</h3>
            <p className="text-body-sm" style={{ color: "var(--color-stone)" }}>
              Hijau melambangkan alam, pertumbuhan, dan kesegaran daun. Oranye mewakili energi positif, kehangatan, serta kematangan buah yang sempurna dan siap dinikmati.
            </p>
          </div>

          <div className="card-feature border-none bg-white shadow-sm">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "var(--color-accent)", color: "var(--color-canvas)" }}>
              <LuSprout size={24} />
            </div>
            <h3 className="text-subtitle-lg mb-2" style={{ color: "var(--color-ink)" }}>Fokus Buah Lokal</h3>
            <p className="text-body-sm" style={{ color: "var(--color-stone)" }}>
              Bentuk yang organik mengingatkan kita pada hasil bumi nusantara. Kami berkomitmen mendukung petani lokal dengan menghadirkan buah-buahan segar langsung dari kebun.
            </p>
          </div>

          <div className="card-feature border-none bg-white shadow-sm">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "var(--color-success)", color: "var(--color-canvas)" }}>
              <LuHeartHandshake size={24} />
            </div>
            <h3 className="text-subtitle-lg mb-2" style={{ color: "var(--color-ink)" }}>Nilai "Barokah"</h3>
            <p className="text-body-sm" style={{ color: "var(--color-stone)" }}>
              Kata "Barokah" adalah landasan utama bisnis kami. Bukan sekadar berjualan, tapi mencari keberkahan dengan memberikan pelayanan jujur, timbangan yang pas, dan kualitas buah terbaik.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
