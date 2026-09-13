import Image from "next/image";
import { LuLeaf, LuCheck, LuMapPin } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";

const WA_ORDER =
  "https://wa.me/6289686089691?text=Halo%2C%20saya%20ingin%20memesan%20buah%20dari%20Toko%20Buah%20Barokah";
const MAPS_LINK = "https://maps.app.goo.gl/mEjJB71n5kChHEzV7";

const HERO_IMG =
  "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=1200&h=750&fit=crop&q=80";

function TrustBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 mb-6 px-4 py-2"
      style={{
        backgroundColor: "var(--color-surface-soft)",
        borderRadius: "var(--rounded-full)",
        border: "1px solid var(--color-hairline-soft)",
      }}
    >
      <LuLeaf size={14} color="var(--color-success)" />
      <span className="text-caption-bold" style={{ color: "var(--color-success)" }}>
        Segar Setiap Hari
      </span>
    </div>
  );
}

function HeroCTAs() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <a href={WA_ORDER} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base!" id="hero-cta-whatsapp">
        <BsWhatsapp size={20} />
        Pesan via WhatsApp
      </a>
      <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary text-base!" id="hero-cta-visit">
        <LuMapPin size={18} />
        Kunjungi Toko
      </a>
    </div>
  );
}

function TrustSignals() {
  const signals = ["Buah Segar Pilihan", "Harga Terjangkau", "Buka Setiap Hari"];
  return (
    <div className="flex flex-wrap items-center gap-6 mt-8 justify-center lg:justify-start" style={{ color: "var(--color-steel)" }}>
      {signals.map((s) => (
        <div key={s} className="flex items-center gap-2 text-body-sm">
          <LuCheck size={14} style={{ color: "var(--color-success)" }} />
          {s}
        </div>
      ))}
    </div>
  );
}

function HeroImage() {
  return (
    <div className="flex-1 w-full max-w-xl lg:max-w-none animate-fade-in-up delay-200">
      <div className="relative w-full overflow-hidden" style={{ borderRadius: "var(--rounded-xxxl)", aspectRatio: "16 / 10" }}>
        <Image
          src={HERO_IMG}
          alt="Aneka buah segar pilihan tersusun indah di atas meja"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(255,255,255,0.3) 100%)" }} />
      </div>
    </div>
  );
}

function WaveDecoration() {
  return (
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none" style={{ display: "block" }}>
        <path d="M0 30C240 10 480 50 720 30C960 10 1200 50 1440 30V60H0V30Z" fill="white" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative w-full overflow-hidden"
      style={{ paddingTop: "72px", background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 40%, #fef9ef 100%)" }}
    >
      <div className="section-container section-padding">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <TrustBadge />
            <h1 className="text-hero-display mb-6" style={{ color: "var(--color-ink-deep)" }}>
              Kesegaran{" "}
              <span style={{ color: "var(--color-primary)" }}>Buah Pilihan</span>{" "}
              untuk Keluarga Anda
            </h1>
            <p className="text-subtitle-md mb-8 max-w-xl mx-auto lg:mx-0" style={{ color: "var(--color-charcoal)" }}>
              Nikmati aneka buah segar lokal berkualitas langsung dari Toko Buah Barokah, Purwasari — dengan harga terjangkau dan pelayanan ramah setiap hari.
            </p>
            <HeroCTAs />
            <TrustSignals />
          </div>
          <HeroImage />
        </div>
      </div>
      <WaveDecoration />
    </section>
  );
}
