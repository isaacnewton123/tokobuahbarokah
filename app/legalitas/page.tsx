import { LuFileText, LuDownload, LuClock } from "react-icons/lu";

export const metadata = {
  title: "Legalitas & Branding — Toko Buah Barokah",
  description: "Informasi legalitas usaha (NIB, SKU, SPPL) dan aset branding Toko Buah Barokah.",
};

export default function LegalitasPage() {
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="section-container max-w-4xl">
        <h1 className="text-heading-lg mb-4 text-center" style={{ color: "var(--color-primary)" }}>
          Legalitas & Branding
        </h1>
        <p className="text-body-lg text-center mb-12" style={{ color: "var(--color-stone)" }}>
          Informasi resmi mengenai identitas dan legalitas usaha Toko Buah Barokah.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* NIB Section */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-primary)]/10 text-[var(--color-primary)] shrink-0">
                <LuFileText size={24} />
              </div>
              <div>
                <h2 className="text-heading-sm" style={{ color: "var(--color-text)" }}>NIB</h2>
                <p className="text-body-sm" style={{ color: "var(--color-stone)" }}>Nomor Induk Berusaha</p>
              </div>
            </div>
            <p className="mb-8 flex-1" style={{ color: "var(--color-stone)" }}>
              Dokumen resmi Nomor Induk Berusaha (NIB) Toko Buah Barokah yang terdaftar pada sistem OSS.
            </p>
            <a 
              href="/branding/NIB.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 justify-center"
            >
              <LuDownload size={20} />
              Lihat Dokumen
            </a>
          </div>

          {/* SPPL Section */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-success)]/10 text-[var(--color-success)] shrink-0">
                <LuFileText size={24} />
              </div>
              <div>
                <h2 className="text-heading-sm" style={{ color: "var(--color-text)" }}>SPPL</h2>
                <p className="text-body-sm" style={{ color: "var(--color-stone)" }}>Surat Pernyataan Pengelolaan Lingkungan</p>
              </div>
            </div>
            <p className="mb-8 flex-1" style={{ color: "var(--color-stone)" }}>
              Kesanggupan kami dalam menjaga dan mengelola lingkungan hidup di sekitar lokasi usaha.
            </p>
            <a 
              href="/branding/SPPL.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 justify-center"
              style={{ backgroundColor: "var(--color-success)" }}
            >
              <LuDownload size={20} />
              Lihat Dokumen
            </a>
          </div>

          {/* Pernyataan Mandiri Section */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-accent)]/10 text-[var(--color-accent-deep)] shrink-0">
                <LuFileText size={24} />
              </div>
              <div>
                <h2 className="text-heading-sm" style={{ color: "var(--color-text)" }}>Skala Mikro</h2>
                <p className="text-body-sm" style={{ color: "var(--color-stone)" }}>Pernyataan Mandiri K3L</p>
              </div>
            </div>
            <p className="mb-8 flex-1" style={{ color: "var(--color-stone)" }}>
              Pernyataan mandiri bahwa Toko Buah Barokah memenuhi standar keamanan, keselamatan, dan kesehatan.
            </p>
            <a 
              href="/branding/Pernyataan_Mandiri_Skala_Mikro.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 justify-center"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              <LuDownload size={20} />
              Lihat Dokumen
            </a>
          </div>

          {/* SKU Section */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden border border-dashed border-[var(--color-stone)]/30 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-stone)]/10 text-[var(--color-stone)] shrink-0">
                <LuFileText size={24} />
              </div>
              <div>
                <h2 className="text-heading-sm" style={{ color: "var(--color-text)" }}>SKU</h2>
                <p className="text-body-sm" style={{ color: "var(--color-stone)" }}>Surat Keterangan Usaha</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 text-center py-4">
              <LuClock size={32} className="mb-3 text-[var(--color-primary)]/50" />
              <p className="text-body-md font-medium" style={{ color: "var(--color-stone)" }}>
                Coming Soon
              </p>
              <p className="text-body-sm mt-1" style={{ color: "var(--color-stone)" }}>
                Dokumen sedang dalam proses *scan*.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
