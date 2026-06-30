import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useReveal, useCountUp } from '@/hooks/use-reveal';

/* ─── Images ─── */
const IMG = {
  hero:    'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/3165c493-09f8-484b-acea-228394cee739.jpeg',
  tower1:  'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/1a58b9ff-503a-4aef-a980-058594bdbcaf.jpeg',
  tower2:  'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/2eac49e5-0763-4ae4-8c8f-4f112e0fff7e.jpeg',
  tower3:  'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/a2e82610-bfdb-43f9-a390-04ce2869652c.jpeg',
  detail:  'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/303d451a-de01-46c0-b01c-800bf6a5d6aa.jpg',
  close:   'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/45ebfdef-b919-498f-b9a7-c5c3de1cd703.jpg',
  cad:     'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/fc231111-ae61-4b69-9ab2-71ff580b5ce7.png',
  blueprint:'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/4377bd96-564f-4c3d-872d-860dc94296a6.jpg',
};

/* ─── Data ─── */
const NAV = [
  { id: 'about',    label: 'О нас' },
  { id: 'products', label: 'Продукция' },
  { id: 'services', label: 'Услуги' },
  { id: 'team',     label: 'Команда' },
  { id: 'clients',  label: 'Клиенты' },
  { id: 'contacts', label: 'Контакты' },
];

const STATS = [
  { value: 220, suffix: '+', unit: 'тонн в месяц' },
  { value: 2600, suffix: '', unit: 'м² цехов' },
  { value: 60, suffix: '+', unit: 'ед. техники' },
  { value: 40, suffix: '+', unit: 'специалистов' },
  { value: 5, suffix: '', unit: 'филиалов РФ' },
  { value: 15, suffix: '+', unit: 'лет на рынке' },
];

const PRODUCTS = [
  { n: '01', title: 'Опоры двойного назначения', desc: 'Антенны, освещение, видеонаблюдение, городская инфраструктура.', img: IMG.tower2, tag: 'Флагман' },
  { n: '02', title: 'Башни сотовой связи', desc: 'Свободностоящие и консольные опоры для операторов связи.', img: IMG.hero, tag: 'Популярное' },
  { n: '03', title: 'Надстройки на СК-26', desc: 'Металлические надстройки для модернизации ЖБ опор.', img: IMG.close, tag: '' },
  { n: '04', title: 'Каркасы БВЗ и модули', desc: 'Быстровозводимые конструкции и модульные здания.', img: IMG.cad, tag: '' },
  { n: '05', title: 'ЗДФ, АК и эстакады', desc: 'Фундаментальные решения для промышленных объектов.', img: IMG.blueprint, tag: '' },
];

const SERVICES = [
  { n: '01', icon: 'PenTool',     title: 'Проектирование', desc: 'CAD/BIM-проектирование, разработка КМ и КМД по чертежам заказчика.' },
  { n: '02', icon: 'Scissors',    title: 'Раскрой металла', desc: 'Автоматизированный раскрой с ЧПУ, минимальный отход материала.' },
  { n: '03', icon: 'Zap',         title: 'Плазменная резка', desc: 'Резка любой сложности: толщина до 120 мм, точность ±0.1 мм.' },
  { n: '04', icon: 'Sparkles',    title: 'Лазерная очистка', desc: 'Бесконтактная экологичная очистка. Идеальная адгезия покрытий.' },
  { n: '05', icon: 'Settings',    title: 'Мехобработка', desc: 'Токарные, фрезерные и сверлильные операции в собственных цехах.' },
  { n: '06', icon: 'Flame',       title: 'Сварка', desc: 'Сертифицированные сварщики, контроль швов ультразвуком.' },
  { n: '07', icon: 'Layers',      title: 'Покраска', desc: 'Двухслойное антикоррозийное покрытие. Срок службы 25+ лет.' },
  { n: '08', icon: 'ShieldCheck', title: 'Контроль качества', desc: 'Входной, производственный, выходной контроль на каждом этапе.' },
];

const TEAM = [
  { name: 'Трофимов Евгений Павлович', role: 'Генеральный директор', quote: '«Качество — это не случайность. Это результат высоких намерений, искренних усилий и умелого исполнения.»', initial: 'Т' },
  { name: 'Кужамбетов Марат Олегович', role: 'Директор производства', contact: '+7 987 876 70 37', quote: '«Каждая конструкция — это наш след в инфраструктуре страны.»', initial: 'К' },
  { name: 'Баимов Азат Салаватович', role: 'Инженер по развитию производства', quote: '«Инновации в производстве — путь к превосходству над конкурентами.»', initial: 'Б' },
  { name: 'Хаметов Марсель', role: 'Коммерческий директор', contact: '+7 922 557 40 15', quote: '«Наши клиенты получают не просто металл — они получают уверенность.»', initial: 'Х' },
];

const CLIENTS_ACTIVE = ['ООО «Антарес»', 'АО «ПБК»', 'ООО «МИГ»', 'ООО «Медиа-Ас»', 'ООО «СТАЛЬТЕХ»', 'ООО «Связьразвитие»'];
const CLIENTS_DONE   = ['АО «КВАНТ-ТЕЛЕКОМ»', 'ООО «МАКСКОМПЛЕКТ»', 'ООО «Лидер»', 'ООО «СвязьИнком»', 'ООО «ТКСС»'];
const ALL_CLIENTS    = [...CLIENTS_ACTIVE, ...CLIENTS_DONE];

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/* ─── Component ─── */
export default function Index() {
  const { toast } = useToast();
  const [menuOpen, setMenuOpen]       = useState(false);
  const [scrollY, setScrollY]         = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [modalProduct, setModalProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [activeService, setActiveService] = useState(0);
  useReveal();

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['hero','about','products','services','team','clients','contacts'];
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: '✓ Заявка отправлена', description: 'Мы свяжемся с вами в течение 30 минут.' });
    (e.target as HTMLFormElement).reset();
  };

  const headerBg = scrollY > 60
    ? 'bg-[#0A1628]/90 backdrop-blur-2xl shadow-[0_2px_40px_rgba(0,0,0,0.5)]'
    : 'bg-transparent';

  return (
    <div className="min-h-screen bg-deep font-sans text-ivory antialiased selection:bg-neon selection:text-white">

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
        {/* Parallax bg */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${IMG.hero})`, transform: `translateY(${scrollY * 0.38}px) scale(1.12)` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/75 via-[#0A1628]/65 to-[#0A1628]" />
        <div className="absolute inset-0 grid-lines" />

        {/* Decorative corner lines */}
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

        {/* Scroll indicator */}
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

      {/* ── ABOUT ── */}
      <section id="about" className="section-pad relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="container-pad relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

            <div className="reveal-left">
              <Label>О компании</Label>
              <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-5xl xl:text-6xl">
                Полный цикл<br /><span className="grad-text">производства</span>
              </h2>
              <p className="mt-7 text-lg font-light leading-relaxed text-ivory/60">
                <span className="font-semibold text-ivory">ООО «МК СКЭ»</span> — высокотехнологичное
                предприятие полного цикла в Оренбурге. Проектируем, изготавливаем и монтируем
                металлоконструкции для объектов связи <span className="text-neon font-semibold">по всей России</span>.
                Без посредников. С гарантией качества на каждом этапе.
              </p>
              <p className="mt-4 text-base font-light text-ivory/50">
                В составе группы — строительно-монтажная компания ООО «СКЭ»
                и транспортно-логистическая ООО «К2».
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {['Допуск Ростехнадзора','Сертификация ISO','Работа с ГАЗПРОМ','Работа с РОСНЕФТЬ'].map(t => (
                  <span key={t} className="border border-neon/30 bg-neon/8 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neon">{t}</span>
                ))}
              </div>
            </div>

            <div className="reveal-right grid grid-cols-2 gap-4">
              <img src={IMG.tower2} alt="Башня связи" className="h-56 w-full object-cover object-top" />
              <img src={IMG.close} alt="Детали конструкции" className="h-56 w-full object-cover" style={{ marginTop: '2rem' }} />
              <img src={IMG.blueprint} alt="Чертёж" className="col-span-2 h-48 w-full object-cover" />
            </div>
          </div>

          {/* Cycle */}
          <div className="reveal mt-20">
            <div className="mb-8 text-center">
              <Label>Наш цикл</Label>
              <h3 className="mt-3 text-2xl font-black uppercase">От идеи до объекта</h3>
            </div>
            <div className="grid grid-cols-2 gap-px bg-ivory/5 md:grid-cols-4 lg:grid-cols-8">
              {['Идея','Проект','Чертежи','Раскрой','Сварка','Покраска','Контроль','Отгрузка'].map((s, i) => (
                <div key={s} className="bg-cosmic flex flex-col items-center gap-2 p-5 text-center transition-colors hover:bg-[#25354A]">
                  <span className="text-xs font-bold text-neon/50">{String(i + 1).padStart(2,'0')}</span>
                  <span className="text-sm font-semibold">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="border-y border-ivory/8 bg-cosmic section-pad">
        <div className="container-pad mx-auto max-w-7xl">
          <div className="reveal mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Label>Видео о компании</Label>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none md:text-5xl">
                Наше <span className="grad-text">производство</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm font-light leading-relaxed text-ivory/40">
              Цеха, оборудование, команда и готовые конструкции
            </p>
          </div>

          <div className="reveal grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3 relative overflow-hidden">
              <div className="relative aspect-video w-full bg-[#0d1f33]">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&color=white"
                  title="МК СКЭ — производство"
                  className="absolute inset-0 h-full w-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-2 text-[10px] text-ivory/25 tracking-wide">
                * Вставьте ссылку на ваше видео с YouTube или ВКонтакте
              </p>
            </div>

            <div className="flex flex-col justify-between gap-5 lg:col-span-2">
              <blockquote className="border-l-2 border-neon pl-5 text-lg font-light italic leading-relaxed text-ivory/75">
                «Мы не просто производим металл. Мы создаём инфраструктуру, по которой работает связь всей страны.»
              </blockquote>
              <div className="space-y-4">
                {[{ n: '220+', t: 'тонн металла ежемесячно' },{ n: '2600', t: 'м² производственных цехов' },{ n: '100%', t: 'контроль на каждом этапе' }]
                  .map(item => (
                  <div key={item.n} className="flex items-center gap-4 border-b border-ivory/8 pb-4 last:border-0">
                    <span className="min-w-[70px] text-2xl font-black text-neon">{item.n}</span>
                    <span className="text-sm text-ivory/55">{item.t}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => scrollTo('contacts')}
                className="w-full btn-neon py-4 text-sm font-bold uppercase tracking-[0.15em] text-white">
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="section-pad">
        <div className="container-pad mx-auto max-w-7xl">
          <div className="reveal mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Label>Продукция</Label>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none md:text-5xl">Что мы производим</h2>
            </div>
            <span className="text-sm font-light text-ivory/30">05 направлений</span>
          </div>

          <div className="space-y-px">
            {PRODUCTS.map(p => (
              <button key={p.n} onClick={() => setModalProduct(p)}
                className="reveal group relative flex w-full flex-col gap-4 overflow-hidden border-t border-ivory/8 py-8 text-left transition-all last:border-b hover:bg-cosmic/50 sm:flex-row sm:items-center sm:gap-10 sm:py-10">
                <div className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-700 group-hover:opacity-15"
                  style={{ backgroundImage: `url(${p.img})` }} />
                <span className="relative font-mono text-sm font-bold text-neon sm:w-16">{p.n}</span>
                {p.tag && (
                  <span className="relative border border-gold/50 bg-gold/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-gold sm:w-24 text-center">
                    {p.tag}
                  </span>
                )}
                <h3 className="relative flex-1 text-2xl font-black uppercase tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                  {p.title}
                </h3>
                <p className="relative max-w-sm text-sm font-light leading-relaxed text-ivory/45">{p.desc}</p>
                <Icon name="ArrowUpRight" size={30}
                  className="relative shrink-0 text-ivory/25 transition-all duration-500 group-hover:rotate-45 group-hover:text-neon" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section-pad bg-cosmic relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-30" />
        <div className="container-pad relative mx-auto max-w-7xl">
          <div className="reveal mb-14">
            <Label>Услуги</Label>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none md:text-5xl">
              Полный цикл<br /><span className="grad-text">производства</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <button key={i} onClick={() => setActiveService(i)}
                className={`reveal group relative flex flex-col gap-4 border p-6 text-left transition-all duration-300
                  ${activeService === i
                    ? 'border-neon bg-neon/10 shadow-[0_0_30px_rgba(255,107,53,0.2)]'
                    : 'border-ivory/8 bg-[#0A1628]/50 hover:border-neon/40 hover:bg-neon/5'}`}>
                <span className="text-[10px] font-bold text-neon/50">{s.n}</span>
                <Icon name={s.icon} size={28} className={`transition-colors ${activeService === i ? 'text-neon' : 'text-ivory/40 group-hover:text-neon/70'}`} fallback="Settings" />
                <h3 className="text-lg font-black uppercase">{s.title}</h3>
                <p className="text-sm font-light leading-relaxed text-ivory/50">{s.desc}</p>
                {activeService === i && (
                  <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-neon to-gold" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section className="section-pad border-t border-ivory/8">
        <div className="container-pad mx-auto max-w-7xl">
          <div className="reveal mb-14 text-center">
            <Label center>Преимущества</Label>
            <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">Почему выбирают нас</h2>
          </div>
          <div className="grid gap-px bg-ivory/5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon:'Hammer',      title:'Собственное производство', desc:'Полный цикл без субподряда — контроль качества на каждом этапе.' },
              { icon:'Workflow',    title:'Работа по чертежам',        desc:'Принимаем ТЗ, КМ, КМД любой сложности. Изготовим по вашей документации.' },
              { icon:'ShieldCheck', title:'Двухслойное покрытие',      desc:'Антикоррозийная защита по ГОСТ. Срок службы без обслуживания — 25+ лет.' },
              { icon:'Eye',         title:'Доступ на производство',    desc:'Открытое производство. Приглашаем клиентов на осмотр и выходной контроль.' },
              { icon:'Truck',       title:'Логистика по России',       desc:'Собственный парк спецтехники. Доставка в любую точку РФ.' },
              { icon:'Award',       title:'Допуск Ростехнадзора',      desc:'Работаем с объектами повышенной опасности. Все допуски и СРО — в наличии.' },
            ].map((a, i) => (
              <div key={i} className="reveal group flex flex-col gap-4 bg-deep p-8 transition-all duration-300 hover:bg-cosmic hover:shadow-[inset_0_0_30px_rgba(255,107,53,0.05)]">
                <Icon name={a.icon} size={28} className="text-neon" fallback="Check" />
                <h3 className="text-lg font-black uppercase">{a.title}</h3>
                <p className="text-sm font-light leading-relaxed text-ivory/45">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="section-pad bg-cosmic">
        <div className="container-pad mx-auto max-w-7xl">
          <div className="reveal mb-14">
            <Label>Команда</Label>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none md:text-5xl">
              Наше <span className="grad-text">руководство</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <div key={i} className="reveal card-flip h-72">
                <div className="card-flip-inner">
                  {/* Front */}
                  <div className="card-front glass flex flex-col justify-between p-6">
                    <div className="flex h-16 w-16 items-center justify-center bg-gradient-to-br from-neon to-gold text-2xl font-black text-white">
                      {m.initial}
                    </div>
                    <div>
                      <div className="mb-1 text-xs font-bold uppercase tracking-widest text-neon/70">{m.role}</div>
                      <div className="text-lg font-bold leading-snug">{m.name}</div>
                      {m.contact && (
                        <a href={`tel:${m.contact.replace(/\D/g,'')}`}
                          className="mt-2 block text-xs text-ivory/40 hover:text-neon transition-colors">{m.contact}</a>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-semibold text-ivory/25 uppercase tracking-widest">
                      <span>Наведи чтобы узнать больше</span>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="card-back glass flex flex-col justify-center gap-4 border border-neon/20 p-6">
                    <Icon name="Quote" size={24} className="text-neon/50" />
                    <p className="text-base font-light italic leading-relaxed text-ivory/80">{m.quote}</p>
                    <div className="text-xs font-bold uppercase tracking-widest text-neon">{m.name.split(' ')[0]}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section id="clients" className="section-pad border-t border-ivory/8">
        <div className="container-pad mx-auto max-w-7xl">
          <div className="reveal mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Label>Клиенты</Label>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none md:text-5xl">Нам доверяют</h2>
            </div>
          </div>

          <div className="reveal mb-10">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-neon">Активные партнёры</div>
            <div className="flex flex-wrap gap-3">
              {CLIENTS_ACTIVE.map(c => (
                <span key={c} className="border border-neon/25 bg-neon/5 px-4 py-2 text-sm font-semibold text-ivory hover:bg-neon/10 transition-colors">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-gold">Реализованные проекты</div>
            <div className="flex flex-wrap gap-3">
              {CLIENTS_DONE.map(c => (
                <span key={c} className="border border-gold/20 bg-gold/5 px-4 py-2 text-sm font-light text-ivory/60">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden border-t border-ivory/8 py-5">
          <div className="marquee-track flex gap-12 whitespace-nowrap">
            {[...ALL_CLIENTS, ...ALL_CLIENTS].map((c, i) => (
              <span key={i} className="text-sm font-bold uppercase tracking-[0.2em] text-ivory/20">
                {c} <span className="mx-4 text-neon/50">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="section-pad bg-cosmic border-t border-ivory/8">
        <div className="container-pad mx-auto max-w-7xl">
          <div className="reveal mb-12">
            <Label>Галерея</Label>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none md:text-5xl">
              Наши <span className="grad-text">объекты</span>
            </h2>
          </div>
          <div className="reveal grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {[IMG.hero, IMG.tower1, IMG.tower2, IMG.tower3, IMG.close, IMG.detail, IMG.cad, IMG.blueprint].map((src, i) => (
              <div key={i} className={`group relative overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                <img src={src} alt={`Объект ${i + 1}`}
                  className="h-full min-h-[180px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ height: i === 0 ? '380px' : '180px' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-neon">Объект {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section id="contacts" className="border-t border-ivory/8 bg-deep pt-24 md:pt-32">
        <div className="container-pad mx-auto max-w-7xl">
          {/* Phone hero row */}
          <div className="reveal mb-12 border-b border-ivory/8 pb-10">
            <Label>Контакты</Label>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <a href="tel:88001015600"
                className="text-5xl font-black tracking-tight text-ivory transition-colors hover:text-neon sm:text-7xl lg:text-8xl">
                8 800 101-56-00
              </a>
              <span className="text-sm font-light text-ivory/30">Бесплатно по России</span>
            </div>
          </div>

          <div className="grid gap-16 pb-0 lg:grid-cols-2 lg:gap-24">
            {/* Info column */}
            <div className="reveal space-y-6">
              <ContactRow icon="Mail">
                <a href="mailto:mkske@mkske.ru" className="hover:text-neon transition-colors">mkske@mkske.ru</a>
              </ContactRow>
              <ContactRow icon="Globe">
                <a href="https://ooo-ske.ru" target="_blank" rel="noreferrer" className="hover:text-neon transition-colors">ooo-ske.ru</a>
              </ContactRow>
              <ContactRow icon="MapPin">Оренбург, ул. Донгузская, 68</ContactRow>
              <ContactRow icon="User">
                <span>Директор производства: <span className="text-ivory">Кужамбетов М.О.</span></span>
              </ContactRow>
              <ContactRow icon="Phone">
                <a href="tel:79878767037" className="hover:text-neon transition-colors">+7 987 876 70 37</a>
              </ContactRow>

              {/* Messengers */}
              <div className="flex gap-3 pt-2">
                {[
                  { icon: 'MessageCircle', label: 'WhatsApp', href: 'https://wa.me/79878767037' },
                  { icon: 'Send', label: 'Telegram', href: 'https://t.me/' },
                ].map(m => (
                  <a key={m.label} href={m.href} target="_blank" rel="noreferrer"
                    className="group flex items-center gap-2 border border-ivory/12 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-ivory/50 transition-all hover:border-neon hover:bg-neon hover:text-white">
                    <Icon name={m.icon} size={14} />
                    {m.label}
                  </a>
                ))}
              </div>

              {/* Requisites */}
              <div className="mt-6 border-t border-ivory/8 pt-6 text-xs text-ivory/25 space-y-1">
                <div>ООО «МК СКЭ» · ИНН 5612175382 · ОГРН 1185658025497</div>
                <div>460051, Оренбург, ул. Донгузская, 68</div>
              </div>
            </div>

            {/* Form */}
            <div className="reveal">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-black uppercase">Оставить заявку</h3>
                <p className="text-sm text-ivory/40">Ответим в течение 30 минут в рабочее время</p>
                <Input required placeholder="Ваше имя"
                  className="h-13 rounded-none border-0 border-b border-ivory/15 bg-transparent px-0 text-ivory placeholder:text-ivory/30 focus-visible:border-neon focus-visible:ring-0" />
                <Input required type="tel" placeholder="Телефон"
                  className="h-13 rounded-none border-0 border-b border-ivory/15 bg-transparent px-0 text-ivory placeholder:text-ivory/30 focus-visible:border-neon focus-visible:ring-0" />
                <Input type="email" placeholder="Email (необязательно)"
                  className="h-13 rounded-none border-0 border-b border-ivory/15 bg-transparent px-0 text-ivory placeholder:text-ivory/30 focus-visible:border-neon focus-visible:ring-0" />
                <label className="flex cursor-pointer items-center gap-3 border border-dashed border-ivory/15 px-4 py-4 text-sm text-ivory/40 transition-all hover:border-neon hover:bg-neon/5">
                  <Icon name="Paperclip" size={18} className="text-neon" />
                  Прикрепить чертёж / ТЗ
                  <input type="file" className="hidden" />
                </label>
                <button type="submit"
                  className="w-full btn-neon py-5 text-sm font-bold uppercase tracking-[0.15em] text-white">
                  Отправить заявку →
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Full-width map */}
        <div className="mt-16 overflow-hidden border-t border-ivory/8">
          <iframe
            title="Карта"
            src="https://yandex.ru/map-widget/v1/?text=Оренбург%2C%20улица%20Донгузская%2C%2068&z=16"
            className="h-[440px] w-full"
            frameBorder="0"
            style={{ filter: 'saturate(1.5) contrast(1.1) hue-rotate(-5deg)' }}
          />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-ivory/8 bg-[#060e1a]">
        <div className="container-pad mx-auto max-w-7xl py-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-3xl font-black uppercase tracking-[0.2em]">
                МК&nbsp;<span className="text-neon">СКЭ</span>
              </div>
              <p className="mt-2 text-xs font-light text-ivory/30">Мы производим металлоконструкции. Мы строим опоры.</p>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              {NAV.map(n => (
                <button key={n.id} onClick={() => scrollTo(n.id)}
                  className="text-xs font-medium uppercase tracking-wider text-ivory/30 hover:text-neon transition-colors">
                  {n.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="glow-line my-8 w-full" />
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <span className="text-xs text-ivory/25">© {new Date().getFullYear()} ООО «МК СКЭ». Все права защищены. Сделано в России.</span>
            <span className="text-xs text-ivory/20">ИНН 5612175382 · ОГРН 1185658025497</span>
          </div>
        </div>
      </footer>

      {/* Phone FAB */}
      <a href="tel:88001015600"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center animate-glow-pulse sm:hidden"
        style={{ background: 'var(--neon-terra)' }}>
        <Icon name="Phone" size={24} className="text-white" />
      </a>

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
    </div>
  );
}

/* ─── Sub-components ─── */

function StatCard({ value, suffix, unit }: { value: number; suffix: string; unit: string }) {
  const { value: v, ref } = useCountUp(value);
  return (
    <div ref={ref} className="bg-deep flex flex-col items-center justify-center gap-1 py-10 px-4 text-center">
      <div className="text-4xl font-black leading-none text-neon lg:text-5xl">
        {v.toLocaleString('ru-RU')}{suffix}
      </div>
      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-ivory/35">{unit}</div>
    </div>
  );
}

function Label({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
      <span className="h-px w-8 bg-neon" />
      <span className="text-[10px] font-black uppercase tracking-[0.35em] text-neon">{children}</span>
    </div>
  );
}

function ContactRow({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 text-base font-light text-ivory/60">
      <Icon name={icon} size={18} className="mt-0.5 shrink-0 text-neon" fallback="Info" />
      <div>{children}</div>
    </div>
  );
}
