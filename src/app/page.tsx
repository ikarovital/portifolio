import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PHOTOS } from "@/lib/photos";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Gallery photos={PHOTOS} />
        <About />
        <ContactForm />
      </main>
      <Footer />

      <WhatsAppFloat
        phoneE164="5511999999999"
        message="Olá! Vi seu portfólio e gostaria de um orçamento."
      />
    </div>
  );
}
