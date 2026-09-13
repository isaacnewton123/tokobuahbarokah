import { LuStar } from "react-icons/lu";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Ibu Siti",
    location: "Karangsari",
    rating: 5,
    text: "Alhamdulillah buahnya selalu segar dan manis. Harga juga bersahabat. langganan beli buah di sini untuk acara keluarga.",
    avatar: "S",
  },
  {
    id: 2,
    name: "Bapak Budi",
    location: "Purwasari",
    rating: 5,
    text: "Pesan parcel buah untuk jenguk teman, hasilnya bagus dan rapi banget. Pengiriman juga cepat. Terima kasih Toko Buah Barokah!",
    avatar: "B",
  },
  {
    id: 3,
    name: "Rina Amelia",
    location: "Purwasari",
    rating: 5,
    text: "Toko buah terlengkap di Purwasari! Buah lokalnya lengkap dan segar semua. Anakku suka banget melon dari sini.",
    avatar: "R",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rating ${count} dari 5 bintang`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <LuStar
          key={i}
          size={16}
          fill={i < count ? "#F77F00" : "#DEE3E9"}
          color={i < count ? "#F77F00" : "#DEE3E9"}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
}) {
  return (
    <div className={`card-testimonial flex flex-col gap-4 animate-fade-in-up delay-${(index + 1) * 100}`}>
      <StarRating count={testimonial.rating} />
      <p className="text-body-md flex-1" style={{ color: "var(--color-charcoal)" }}>
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-2" style={{ borderTop: "1px solid var(--color-hairline-soft)" }}>
        <div
          className="w-10 h-10 flex items-center justify-center rounded-full text-body-sm-bold shrink-0"
          style={{ backgroundColor: "var(--color-primary)", color: "var(--color-on-primary)" }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-body-sm-bold" style={{ color: "var(--color-ink)" }}>{testimonial.name}</p>
          <p className="text-caption" style={{ color: "var(--color-stone)" }}>{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-container section-padding">
      <div className="text-center mb-12">
        <span className="text-caption-bold uppercase tracking-widest mb-3 block" style={{ color: "var(--color-primary)" }}>
          Testimoni Pelanggan
        </span>
        <h2 className="text-heading-lg" style={{ color: "var(--color-ink-deep)" }}>
          Apa Kata Mereka?
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.name} testimonial={t} index={i} />
        ))}
      </div>
    </section>
  );
}
