import Image from "next/image";
import { 
  FaGithub, 
  FaFacebook, 
  FaInstagram, 
  FaXTwitter, 
  FaLinkedin 
} from "react-icons/fa6";

export const metadata = {
  title: "Profil Pemilik — Toko Buah Barokah",
  description: "Kenali lebih dekat pendiri dan pemilik Toko Buah Barokah.",
};

const FOUNDER_PHOTO = "https://pbs.twimg.com/media/HF_bFBMaoAAh8xH?format=jpg&name=small";

const FOUNDER_SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/isaacnewton123', icon: <FaGithub size={20} /> },
  { label: 'Facebook', href: 'https://www.facebook.com/hanif.maulana.108/', icon: <FaFacebook size={20} /> },
  { label: 'Instagram', href: 'https://www.instagram.com/hanifmaulana2/', icon: <FaInstagram size={20} /> },
  { label: 'X (Twitter)', href: 'https://x.com/isaac_newton252', icon: <FaXTwitter size={20} /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hanif-maulana-210b4721b/', icon: <FaLinkedin size={20} /> },
];

export default function PemilikPage() {
  return (
    <main className="pt-32 pb-16 min-h-screen">
      <div className="section-container max-w-3xl">
        <div className="glass-panel p-8 md:p-12 rounded-[2rem] text-center">
          <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-card">
            <Image 
              src={FOUNDER_PHOTO}
              alt="Foto Profil Hanif Maulana"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <h1 className="text-heading-md mb-2" style={{ color: "var(--color-primary-deep)" }}>
            Hanif Maulana
          </h1>
          <p className="text-body-lg mb-8 font-medium" style={{ color: "var(--color-stone)" }}>
            Pemilik & Pendiri Toko Buah Barokah
          </p>
          
          <p className="text-body-md mb-10 max-w-2xl mx-auto" style={{ color: "var(--color-charcoal)" }}>
            Berawal dari keinginan untuk menyediakan buah-buahan lokal berkualitas dengan harga yang jujur, Toko Buah Barokah didirikan. Kami selalu mengutamakan kepercayaan pelanggan di wilayah Purwasari dan sekitarnya. Terima kasih telah mendukung usaha lokal kami!
          </p>

          <h3 className="text-body-sm-bold uppercase tracking-wider mb-6" style={{ color: "var(--color-stone)" }}>
            Terhubung Dengan Saya
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {FOUNDER_SOCIALS.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all bg-[var(--color-surface-soft)] text-[var(--color-charcoal)] hover:bg-[var(--color-primary)] hover:text-white hover:-translate-y-1 shadow-subtle hover:shadow-card"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
