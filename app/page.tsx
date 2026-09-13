import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StoreStatus from "./components/StoreStatus";
import ValueProposition from "./components/ValueProposition";
import ProductCatalog from "./components/ProductCatalog";
import Testimonials from "./components/Testimonials";
import LocationContact from "./components/LocationContact";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StoreStatus />
        <ValueProposition />
        <ProductCatalog />
        <Testimonials />
        <LocationContact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
