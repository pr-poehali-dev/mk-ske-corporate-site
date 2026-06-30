import Icon from '@/components/ui/icon';
import { NAV, STATS, PRODUCTS, scrollTo, StatCard, Label } from '@/lib/site-data';

type Product = typeof PRODUCTS[0];

interface HeroHeaderProps {
  scrollY: number;
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  modalProduct: Product | null;
  setModalProduct: (p: Product | null) => void;
}

export default function HeroHeader({
  scrollY,
  activeSection,
  menuOpen,
  setMenuOpen,
  modalProduct,
  setModalProduct,
}: HeroHeaderProps) {
  const headerBg = scrollY > 60
    ? 'bg-[#0A1628]/90 backdrop-blur-2xl shadow-[0_2px_40px_rgba(0,0,0,0.5)]'
    : 'bg-transparent';

  const heroImg = 'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/3165c493-09f8-484b-acea-228394cee739.jpeg';

  return (
    <>
      {/* ── HEADER ── */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${headerBg} border-b border-ivory/5`}>
        <div className="container-pad mx-auto flex h-16 max-w-8xl items-center justify-between md:h-20">

          <button onClick={() => scrollTo('hero')}
            className="relative text-lg font-black uppercase tracking-[0.28em] text-ivory hover:text-neon transition-colors">
            МК&nbsp;<span className="text-neon">СКЭ</span>
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map(n => (
              <button key={n.id} onClick={() => scrollTo(n.id)}
                className={`text-[11px] font-semibold uppercase tracking-[0.2em] transition-all
                  ${activeSection === n.id ? 'text-neon' : 'text-ivory/50 hover:text-ivory'}`}>
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:88001015600"
              className="hidden items-center gap-2 border border-[#FF6B35]/40 bg-[#FF6B35]/8 px-4 py-2 text-sm font-bold text-neon transition-all hover:bg-[#FF6B35] hover:text-white md:flex">
              <Icon name="Phone" size={14} />
              8 800 101-56-00
            </a>
            <button onClick={() => scrollTo('contacts')}
              className="hidden rounded-none btn-neon px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white lg:block">
              Заявка
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-ivory lg:hidden">
              <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="flex flex-col border-t border-ivory/10 bg-[#0A1628] px-6 py-4 lg:hidden">
            {NAV.map(n => (
              <button key={n.id} onClick={() => { scrollTo(n.id); setMenuOpen(false); }}
                className="py-3 text-left text-sm font-semibold uppercase tracking-[0.18em] text-ivory/80 hover:text-neon">
                {n.label}
              </button>
            ))}
            <a href="tel:88001015600" className="py-3 text-base font-bold text-neon">8 800 101-56-00</a>
          </nav>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="hero" className="relative flex h-screen min-h-[700px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})`, transform: `translateY(${scrollY * 0.38}px) scale(1.12)` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/75 via-[#0A1628]/65 to-[#0A1628]" />
        <div className="absolute inset-0 grid-lines" />

        <div className="absolute left-6 top-24 h-20 w-px bg-neon/30 md:left-16" />
        <div className="absolute left-6 top-24 h-px w-20 bg-neon/30 md:left-16" />
        <div className="absolute bottom-20 right-6 h-20 w-px bg-neon/30 md:right-16" />
        <div className="absolute bottom-20 right-6 h-px w-20 bg-neon/30 md:right-16" />

        <div className="container-pad relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
          <div className="animate-fade-up mb-6 flex items-center gap-4" style={{ animationDelay: '0.05s' }}>
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-neon" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neon">
              Металлоконструкции · Оренбург · с 2009
            </span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-neon" />
          </div>

          <h1 className="animate-fade-up font-black uppercase leading-[0.85] tracking-[-0.02em] text-ivory"
            style={{ fontSize: 'clamp(72px, 16vw, 220px)', animationDelay: '0.12s' }}>
            МК&nbsp;<span className="grad-text">СКЭ</span>
          </h1>

          <p className="animate-fade-up mt-6 max-w-2xl text-lg font-light leading-relaxed text-ivory/60 md:text-xl"
            style={{ animationDelay: '0.28s' }}>
            Мы производим металлоконструкции.&nbsp;
            <span className="font-semibold text-ivory">Мы строим опоры.</span>
          </p>

          <div className="animate-fade-up mt-10 flex flex-wrap justify-center gap-4"
            style={{ animationDelay: '0.42s' }}>
            <button onClick={() => scrollTo('products')}
              className="group btn-neon animate-glow-pulse px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white flex items-center gap-2">
              Запросить расчет
              <Icon name="ArrowRight" size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={() => scrollTo('about')}
              className="border border-ivory/25 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-ivory backdrop-blur-sm transition-all hover:bg-white/10">
              О компании
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="h-10 w-px bg-gradient-to-b from-transparent to-neon/60 animate-pulse" />
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-ivory/30">Scroll</span>
        </div>
      </section>

      <div className="glow-line w-full" />

      {/* ── STATS ── */}
      <section className="bg-deep py-0">
        <div className="container-pad mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-px bg-ivory/5 lg:grid-cols-6">
            {STATS.map((s, i) => (
              <StatCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line-gold w-full" />

      {/* ── MODAL ── */}
      {modalProduct && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          onClick={() => setModalProduct(null)}>
          <div className="absolute inset-0 bg-deep/85 backdrop-blur-sm" />
          <div className="relative w-full max-w-2xl glass overflow-hidden"
            onClick={e => e.stopPropagation()}>
            <img src={modalProduct.img} alt={modalProduct.title}
              className="h-56 w-full object-cover" />
            <div className="p-8">
              <div className="mb-1 text-xs font-bold text-neon">{modalProduct.n}</div>
              <h2 className="text-3xl font-black uppercase">{modalProduct.title}</h2>
              <p className="mt-4 text-base font-light leading-relaxed text-ivory/60">{modalProduct.desc}</p>
              <div className="mt-8 flex gap-4">
                <button onClick={() => { setModalProduct(null); scrollTo('contacts'); }}
                  className="btn-neon px-6 py-3 text-sm font-bold uppercase tracking-wider text-white">
                  Запросить расчет
                </button>
                <button onClick={() => setModalProduct(null)}
                  className="border border-ivory/15 px-6 py-3 text-sm font-semibold text-ivory/60 hover:text-ivory transition-colors">
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
