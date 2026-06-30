import { useState, useEffect } from 'react';
import { useReveal } from '@/hooks/use-reveal';
import { PRODUCTS } from '@/lib/site-data';
import HeroHeader from '@/components/sections/HeroHeader';
import AboutSections from '@/components/sections/AboutSections';
import ProductSections from '@/components/sections/ProductSections';
import ClientsContacts from '@/components/sections/ClientsContacts';

type Product = typeof PRODUCTS[0];

export default function Index() {
  const [menuOpen, setMenuOpen]           = useState(false);
  const [scrollY, setScrollY]             = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [modalProduct, setModalProduct]   = useState<Product | null>(null);
  useReveal();

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['hero', 'about', 'products', 'services', 'team', 'clients', 'contacts'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) { setActiveSection(s); break; }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-deep font-sans text-ivory antialiased selection:bg-neon selection:text-white">
      <HeroHeader
        scrollY={scrollY}
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        modalProduct={modalProduct}
        setModalProduct={setModalProduct}
      />
      <AboutSections />
      <ProductSections setModalProduct={setModalProduct} />
      <ClientsContacts />
    </div>
  );
}
