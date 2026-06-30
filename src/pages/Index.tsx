import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useReveal, useCountUp } from '@/hooks/use-reveal';

const IMG = {
  tower1: 'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/1a58b9ff-503a-4aef-a980-058594bdbcaf.jpeg',
  tower2: 'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/2eac49e5-0763-4ae4-8c8f-4f112e0fff7e.jpeg',
  detail: 'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/303d451a-de01-46c0-b01c-800bf6a5d6aa.jpg',
};

const NAV = [
  { id: 'about', label: 'О компании' },
  { id: 'products', label: 'Продукция' },
  { id: 'clients', label: 'Клиенты' },
  { id: 'contacts', label: 'Контакты' },
];

const STATS = [
  { value: 220, suffix: '+', unit: 'тонн в месяц' },
  { value: 2600, suffix: '', unit: 'м² цехов' },
  { value: 60, suffix: '+', unit: 'единиц техники' },
  { value: 5, suffix: '', unit: 'филиалов в РФ' },
];

const PRODUCTS = [
  { n: '01', title: 'Опоры двойного назначения', desc: 'Антенны, освещение, видеонаблюдение, городская инфраструктура.', img: IMG.tower2 },
  { n: '02', title: 'Башни сотовой связи', desc: 'Свободностоящие консольные опоры для операторов связи.', img: IMG.tower1 },
  { n: '03', title: 'Надстройки на СК-26', desc: 'Металлические надстройки для модернизации ЖБ опор.', img: IMG.detail },
  { n: '04', title: 'Каркасы БВЗ и модули', desc: 'Быстровозводимые конструкции и модульные здания.', img: IMG.tower2 },
  { n: '05', title: 'ЗДФ, АК и эстакады', desc: 'Фундаментальные решения для промышленных объектов.', img: IMG.tower1 },
];

const ADVANTAGES = [
  { icon: 'Hammer', title: 'Собственное производство' },
  { icon: 'Workflow', title: 'Полный цикл' },
  { icon: 'ShieldCheck', title: 'Двухслойное покрытие' },
  { icon: 'Eye', title: 'Доступ на производство' },
  { icon: 'PenTool', title: 'Работа по чертежам' },
  { icon: 'Truck', title: 'Логистика по РФ' },
];

const CLIENTS = [
  'ООО «Антарес»', 'АО «ПБК»', 'ООО «МИГ»', 'АО «КВАНТ-ТЕЛЕКОМ»', 'ООО «Медиа-Ас»',
  'ООО «СТАЛЬТЕХ»', 'ООО «Связьразвитие»', 'ООО «ТКСС»', 'ООО «Лидер»', 'ООО «СвязьИнком»',
];

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Index() {
  const { toast } = useToast();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  useReveal();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Заявка отправлена', description: 'Мы свяжемся с вами в ближайшее время.' });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-charcoal font-sans text-ivory antialiased selection:bg-terracotta selection:text-white">
      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full border-b border-ivory/10 bg-charcoal/70 backdrop-blur-xl">
        <div className="container-pad mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
          <button onClick={() => scrollTo('hero')} className="text-base font-black uppercase tracking-[0.3em] text-ivory">
            МК&nbsp;СКЭ
          </button>
          <nav className="hidden items-center gap-10 lg:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-xs font-medium uppercase tracking-[0.18em] text-ivory/60 transition-colors hover:text-terracotta"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="tel:88001015600"
              className="hidden items-center gap-2 rounded-none border border-terracotta/40 bg-terracotta/10 px-4 py-2 text-sm font-bold tracking-wide text-terracotta transition-colors hover:bg-terracotta hover:text-white md:flex"
            >
              <Icon name="Phone" size={14} />
              8 800 101-56-00
            </a>
            <button
              onClick={() => scrollTo('contacts')}
              className="hidden rounded-none bg-terracotta px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-terracotta/90 lg:block"
            >
              Заявка
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-ivory lg:hidden">
              <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="flex flex-col border-t border-ivory/10 bg-charcoal px-6 py-4 lg:hidden">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => { scrollTo(n.id); setMenuOpen(false); }}
                className="py-3 text-left text-sm font-medium uppercase tracking-[0.18em] text-ivory/80"
              >
                {n.label}
              </button>
            ))}
            <a href="tel:88001015600" className="py-3 text-sm font-semibold text-terracotta">8 800 101-56-00</a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative flex h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.tower1})`, transform: `translateY(${scrollY * 0.4}px) scale(1.1)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal" />
        <div className="absolute inset-0 grid-lines" />

        <div className="container-pad relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
          <div className="mb-8 flex items-center gap-3 animate-fade-up">
            <span className="h-px w-10 bg-terracotta" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-terracotta">
              Металлоконструкции · Оренбург
            </span>
            <span className="h-px w-10 bg-terracotta" />
          </div>

          <h1
            className="animate-fade-up text-[22vw] font-black uppercase leading-[0.82] tracking-tight text-ivory sm:text-[18vw] lg:text-[15vw]"
            style={{ animationDelay: '0.1s' }}
          >
            МК&nbsp;СКЭ
          </h1>

          <p
            className="animate-fade-up mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/70 sm:text-lg"
            style={{ animationDelay: '0.3s' }}
          >
            Мы производим металлоконструкции.<br />Мы строим опоры.
          </p>

          <div className="animate-fade-up mt-10 flex flex-wrap justify-center gap-4" style={{ animationDelay: '0.45s' }}>
            <Button
              onClick={() => scrollTo('products')}
              size="lg"
              className="group rounded-none bg-terracotta px-8 py-6 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-terracotta/90 hover:px-10"
            >
              Перейти к продукции
              <Icon name="ArrowRight" size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => scrollTo('contacts')}
              size="lg"
              variant="outline"
              className="rounded-none border-ivory/25 bg-transparent px-8 py-6 text-sm font-bold uppercase tracking-[0.15em] text-ivory hover:bg-ivory/10 hover:text-ivory"
            >
              Оставить заявку
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-ivory/40">
          <Icon name="ChevronDown" size={24} />
        </div>
      </section>

      {/* Glowing divider */}
      <div className="glow-line w-full" />

      {/* STATS */}
      <section className="border-y border-ivory/10 bg-charcoal">
        <div className="container-pad mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Stat key={i} {...s} last={i === STATS.length - 1} even={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pad">
        <div className="container-pad mx-auto max-w-5xl text-center">
          <div className="reveal">
            <SectionLabel center>О компании</SectionLabel>
            <p className="mt-8 text-2xl font-light leading-relaxed text-ivory sm:text-3xl lg:text-4xl">
              <span className="font-bold">ООО «МК СКЭ»</span> — высокотехнологичное производство
              полного цикла в Оренбурге. Проектируем, изготавливаем и монтируем металлоконструкции
              для объектов сотовой связи <span className="text-terracotta">по всей России</span>.
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-ivory/50">
              Работаем без посредников. В составе группы — строительно-монтажная компания ООО «СКЭ»
              и транспортно-логистическая компания ООО «К2».
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="border-t border-ivory/10 bg-charcoal section-pad">
        <div className="container-pad mx-auto max-w-7xl">
          <div className="reveal mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>О компании · видео</SectionLabel>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">Наше производство</h2>
            </div>
            <p className="max-w-xs text-sm font-light leading-relaxed text-ivory/50">
              Взгляните изнутри — цеха, оборудование, команда и готовые конструкции
            </p>
          </div>

          <div className="reveal grid gap-6 lg:grid-cols-5">
            {/* Main video embed */}
            <div className="relative overflow-hidden lg:col-span-3">
              <div className="relative aspect-video w-full overflow-hidden bg-anthracite">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&color=white"
                  title="ООО МК СКЭ — производство металлоконструкций"
                  className="absolute inset-0 h-full w-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-3 text-xs text-ivory/30 tracking-wide">
                * Замените ссылку на ваше видео о производстве
              </div>
            </div>

            {/* Side info */}
            <div className="flex flex-col justify-between gap-6 lg:col-span-2">
              <div className="border-l-2 border-terracotta pl-6">
                <p className="text-lg font-light leading-relaxed text-ivory/80">
                  Более 15 лет мы строим инфраструктуру связи по всей России — от чертежа до готового объекта.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { n: '220+', t: 'тонн металла ежемесячно' },
                  { n: '5', t: 'филиалов в России' },
                  { n: '60+', t: 'единиц техники' },
                ].map((item) => (
                  <div key={item.n} className="flex items-center gap-4 border-b border-ivory/10 pb-4 last:border-0">
                    <span className="min-w-[60px] text-2xl font-black text-terracotta">{item.n}</span>
                    <span className="text-sm text-ivory/60">{item.t}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => scrollTo('contacts')}
                className="w-full rounded-none bg-terracotta py-6 text-sm font-bold uppercase tracking-[0.15em] text-white hover:bg-terracotta/90"
              >
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="section-pad border-t border-ivory/10">
        <div className="container-pad mx-auto max-w-7xl">
          <div className="reveal mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>Продукция</SectionLabel>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">Что мы производим</h2>
            </div>
            <span className="text-sm font-light text-ivory/40">05 направлений</span>
          </div>

          <div className="space-y-px">
            {PRODUCTS.map((p) => (
              <div
                key={p.n}
                className="reveal group relative flex flex-col gap-4 overflow-hidden border-t border-ivory/10 py-8 transition-colors last:border-b sm:flex-row sm:items-center sm:gap-10 sm:py-10"
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
                <span className="relative font-mono text-sm text-terracotta sm:w-16">{p.n}</span>
                <h3 className="relative text-2xl font-bold uppercase transition-transform duration-500 group-hover:translate-x-2 sm:w-80 sm:text-3xl">
                  {p.title}
                </h3>
                <p className="relative flex-1 text-sm font-light leading-relaxed text-ivory/50">{p.desc}</p>
                <Icon
                  name="ArrowUpRight"
                  size={28}
                  className="relative text-ivory/30 transition-all duration-500 group-hover:rotate-45 group-hover:text-terracotta"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="section-pad border-t border-ivory/10 bg-anthracite">
        <div className="container-pad mx-auto max-w-7xl">
          <SectionLabel>Преимущества</SectionLabel>
          <div className="mt-12 grid gap-px border border-ivory/10 bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="reveal group flex items-center gap-5 bg-anthracite p-8 transition-colors hover:bg-charcoal">
                <Icon name={a.icon} size={26} className="shrink-0 text-terracotta" fallback="Check" />
                <span className="text-lg font-semibold">{a.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="section-pad border-t border-ivory/10">
        <div className="container-pad mx-auto max-w-7xl">
          <div className="reveal mb-12">
            <SectionLabel>Клиенты</SectionLabel>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">Нам доверяют</h2>
          </div>
          <div className="reveal flex flex-wrap gap-x-3 gap-y-4 text-lg font-light text-ivory/60 sm:text-2xl lg:text-3xl">
            {CLIENTS.map((c, i) => (
              <span key={c} className="transition-colors hover:text-ivory">
                {c}
                {i < CLIENTS.length - 1 && <span className="ml-3 text-terracotta">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Marquee ticker */}
        <div className="mt-16 overflow-hidden border-t border-ivory/10 py-5">
          <div className="marquee-track flex gap-10 whitespace-nowrap">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} className="text-sm font-semibold uppercase tracking-[0.2em] text-ivory/30">
                {c} <span className="mx-4 text-terracotta">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="border-t border-ivory/10 bg-anthracite pt-20 md:pt-28">
        <div className="container-pad mx-auto max-w-7xl">
          {/* Phone hero */}
          <div className="reveal mb-14 border-b border-ivory/10 pb-10">
            <SectionLabel>Контакты</SectionLabel>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <a
                href="tel:88001015600"
                className="text-5xl font-black tracking-tight text-ivory transition-colors hover:text-terracotta sm:text-7xl lg:text-8xl"
              >
                8 800 101-56-00
              </a>
              <span className="text-sm font-light text-ivory/40">Звонок бесплатный по России</span>
            </div>
          </div>

          {/* Two columns: info + form */}
          <div className="grid gap-16 pb-0 lg:grid-cols-2 lg:gap-20">
            <div className="reveal space-y-5 text-base font-light">
              <Row icon="Mail"><a href="mailto:mkske@mkske.ru" className="hover:text-terracotta">mkske@mkske.ru</a></Row>
              <Row icon="Globe"><a href="https://ooo-ske.ru" target="_blank" rel="noreferrer" className="hover:text-terracotta">ooo-ske.ru</a></Row>
              <Row icon="MapPin">Оренбург, ул. Донгузская, 68</Row>
              <Row icon="User">Директор производства: Кужамбетов Марат Олегович · +7 987 876 70 37</Row>
              <Row icon="FileText">Тендерный отдел: Баимова Анна · +7 922 557 40 15</Row>
              <div className="mt-4 flex gap-3 pt-2">
                <a href="https://wa.me/79878767037" target="_blank" rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center border border-ivory/15 transition-colors hover:border-terracotta hover:bg-terracotta">
                  <Icon name="MessageCircle" size={18} />
                </a>
                <a href="https://t.me/" target="_blank" rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center border border-ivory/15 transition-colors hover:border-terracotta hover:bg-terracotta">
                  <Icon name="Send" size={18} />
                </a>
              </div>
            </div>

            <div className="reveal">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-black uppercase">Оставить заявку</h3>
                <Input required placeholder="Ваше имя" className="h-14 rounded-none border-0 border-b border-ivory/20 bg-transparent px-0 text-ivory placeholder:text-ivory/40 focus-visible:border-terracotta focus-visible:ring-0" />
                <Input required type="tel" placeholder="Телефон" className="h-14 rounded-none border-0 border-b border-ivory/20 bg-transparent px-0 text-ivory placeholder:text-ivory/40 focus-visible:border-terracotta focus-visible:ring-0" />
                <Input type="email" placeholder="Email" className="h-14 rounded-none border-0 border-b border-ivory/20 bg-transparent px-0 text-ivory placeholder:text-ivory/40 focus-visible:border-terracotta focus-visible:ring-0" />
                <label className="flex cursor-pointer items-center gap-3 border border-dashed border-ivory/25 px-4 py-4 text-sm text-ivory/60 transition-colors hover:border-terracotta">
                  <Icon name="Paperclip" size={18} className="text-terracotta" />
                  Прикрепить чертёж / ТЗ
                  <input type="file" className="hidden" />
                </label>
                <Button type="submit" className="w-full rounded-none bg-terracotta py-7 text-sm font-bold uppercase tracking-[0.15em] text-white hover:bg-terracotta/90">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map — full width */}
        <div className="mt-16 overflow-hidden border-t border-ivory/10">
          <iframe
            title="Карта проезда"
            src="https://yandex.ru/map-widget/v1/?text=Оренбург%2C%20улица%20Донгузская%2C%2068&z=16&theme=light"
            className="h-[420px] w-full"
            frameBorder="0"
            style={{ filter: 'saturate(1.4) contrast(1.1)' }}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ivory/10 bg-charcoal">
        <div className="container-pad mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 py-10 sm:flex-row">
          <div className="text-3xl font-black uppercase tracking-[0.2em]">МК&nbsp;СКЭ</div>
          <div className="text-center text-xs text-ivory/40 sm:text-right">
            © {new Date().getFullYear()} ООО «МК СКЭ». Все права защищены.<br />
            <span className="text-terracotta">Мы производим металлоконструкции. Мы строим опоры.</span>
          </div>
        </div>
      </footer>

      <a
        href="tel:88001015600"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta shadow-lg shadow-terracotta/40 sm:hidden"
      >
        <Icon name="Phone" size={24} className="text-white" />
      </a>
    </div>
  );
}

function Stat({ value, suffix, unit, last, even }: { value: number; suffix: string; unit: string; last: boolean; even: boolean }) {
  const { value: v, ref } = useCountUp(value);
  return (
    <div
      ref={ref}
      className={`border-b border-ivory/10 px-2 py-12 text-center sm:py-16 lg:border-b-0 ${!last ? 'lg:border-r' : ''} ${!even ? 'border-r border-ivory/10' : ''}`}
    >
      <div className="text-5xl font-black tracking-tight text-terracotta sm:text-6xl lg:text-7xl">
        {v.toLocaleString('ru-RU')}{suffix}
      </div>
      <div className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-ivory/50">{unit}</div>
    </div>
  );
}

function SectionLabel({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
      <span className="h-px w-8 bg-terracotta" />
      <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-terracotta">{children}</span>
    </div>
  );
}

function Row({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-ivory/80">
      <Icon name={icon} size={20} className="text-terracotta" fallback="Info" />
      {children}
    </div>
  );
}