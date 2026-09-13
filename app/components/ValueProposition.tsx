import { LuCitrus, LuCoins, LuGift, LuSmile } from "react-icons/lu";

const FEATURES = [
  {
    icon: LuCitrus,
    title: "100% Buah Segar Pilihan",
    desc: "Setiap buah kami pilih langsung dari kebun dan supplier terpercaya untuk menjamin kualitas terbaik.",
    color: "#2D6A4F",
  },
  {
    icon: LuCoins,
    title: "Harga Terjangkau",
    desc: "Nikmati buah segar berkualitas tanpa harus menguras kantong. Harga bersaing untuk semua kalangan.",
    color: "#F77F00",
  },
  {
    icon: LuGift,
    title: "Melayani Parcel & Grosir",
    desc: "Tersedia parcel buah cantik untuk hadiah dan melayani pembelian grosir untuk acara atau usaha Anda.",
    color: "#E41E3F",
  },
  {
    icon: LuSmile,
    title: "Pelayanan Ramah",
    desc: "Tim kami siap membantu dengan senyum. Kepuasan pelanggan adalah prioritas utama kami.",
    color: "#0077B6",
  },
];

function FeatureCard({
  feat,
  index,
}: {
  feat: (typeof FEATURES)[number];
  index: number;
}) {
  const Icon = feat.icon;
  return (
    <div
      className={`card-icon-feature text-center animate-fade-in-up delay-${(index + 1) * 100}`}
    >
      <div
        className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
        style={{
          backgroundColor: `${feat.color}10`,
          borderRadius: "var(--rounded-circle)",
        }}
      >
        <Icon size={28} color={feat.color} />
      </div>
      <h3
        className="text-subtitle-lg mb-2"
        style={{ color: "var(--color-ink-deep)" }}
      >
        {feat.title}
      </h3>
      <p className="text-body-sm" style={{ color: "var(--color-steel)" }}>
        {feat.desc}
      </p>
    </div>
  );
}

export default function ValueProposition() {
  return (
    <section id="keunggulan" className="section-container section-padding">
      <div className="text-center mb-12">
        <span
          className="text-caption-bold uppercase tracking-widest mb-3 block"
          style={{ color: "var(--color-primary)" }}
        >
          Mengapa Memilih Kami
        </span>
        <h2
          className="text-heading-lg"
          style={{ color: "var(--color-ink-deep)" }}
        >
          Keunggulan Toko Buah Barokah
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((feat, i) => (
          <FeatureCard key={feat.title} feat={feat} index={i} />
        ))}
      </div>
    </section>
  );
}
