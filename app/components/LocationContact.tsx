import { LuMapPin, LuPhone, LuClock, LuNavigation } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";

const MAPS_LINK = "https://maps.app.goo.gl/mEjJB71n5kChHEzV7";
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d991.3263361981193!2d107.4216037!3d-6.3545045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e697141d7f6de4b%3A0xbd9e3b6757a42bbf!2sToko%20Buah%20Barokah!5e0!3m2!1sid!2sid!4v1789312881738!5m2!1sid!2sid";
const WA_LINK =
  "https://wa.me/6289686089691?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20produk%20di%20Toko%20Buah%20Barokah";

function InfoIcon({ children, bgColor }: { children: React.ReactNode; bgColor: string }) {
  return (
    <div className="w-12 h-12 flex items-center justify-center shrink-0" style={{ backgroundColor: bgColor, borderRadius: "var(--rounded-xl)" }}>
      {children}
    </div>
  );
}

function AddressCard() {
  return (
    <div className="card-icon-feature flex items-start gap-4" id="kontak">
      <InfoIcon bgColor="rgba(45, 106, 79, 0.08)">
        <LuMapPin size={24} color="var(--color-primary)" />
      </InfoIcon>
      <div>
        <h3 className="text-subtitle-lg mb-1" style={{ color: "var(--color-ink-deep)" }}>Alamat Toko</h3>
        <p className="text-body-md" style={{ color: "var(--color-charcoal)" }}>
          Karangsari, Kec. Purwasari,<br />Kab. Karawang, Jawa Barat 41373
        </p>
      </div>
    </div>
  );
}

function PhoneCard() {
  return (
    <div className="card-icon-feature flex items-start gap-4">
      <InfoIcon bgColor="rgba(37, 211, 102, 0.08)">
        <LuPhone size={24} color="var(--color-whatsapp-deep)" />
      </InfoIcon>
      <div>
        <h3 className="text-subtitle-lg mb-1" style={{ color: "var(--color-ink-deep)" }}>WhatsApp / Telepon</h3>
        <p className="text-body-md" style={{ color: "var(--color-charcoal)" }}>0896-8608-9691</p>
      </div>
    </div>
  );
}

function HoursCard() {
  return (
    <div className="card-icon-feature flex items-start gap-4">
      <InfoIcon bgColor="rgba(247, 127, 0, 0.08)">
        <LuClock size={24} color="var(--color-accent)" />
      </InfoIcon>
      <div>
        <h3 className="text-subtitle-lg mb-1" style={{ color: "var(--color-ink-deep)" }}>Jam Operasional</h3>
        <p className="text-body-md" style={{ color: "var(--color-charcoal)" }}>Setiap Hari, 09:00 – 17:00 WIB</p>
      </div>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-2">
      <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" id="location-cta-maps">
        <LuNavigation size={18} />
        Petunjuk Arah
      </a>
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" id="location-cta-wa">
        <BsWhatsapp size={18} />
        Chat Langsung
      </a>
    </div>
  );
}

function MapEmbed() {
  return (
    <div className="w-full overflow-hidden" style={{ borderRadius: "var(--rounded-xxxl)", border: "1px solid var(--color-hairline-soft)", aspectRatio: "4 / 3", minHeight: "320px" }}>
      <iframe src={MAPS_EMBED} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokasi Toko Buah Barokah di Google Maps" />
    </div>
  );
}

export default function LocationContact() {
  return (
    <section id="lokasi" className="section-padding" style={{ backgroundColor: "var(--color-surface-soft)" }}>
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-caption-bold uppercase tracking-widest mb-3 block" style={{ color: "var(--color-primary)" }}>Temukan Kami</span>
          <h2 className="text-heading-lg" style={{ color: "var(--color-ink-deep)" }}>Lokasi &amp; Kontak</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-6">
            <AddressCard />
            <PhoneCard />
            <HoursCard />
            <ActionButtons />
          </div>
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
