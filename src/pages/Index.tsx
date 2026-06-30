import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/files/e28e8bee-8eb8-42f3-90a0-af90a108138d.jpg';

const NAV = [
  { id: 'about', label: 'О компании' },
  { id: 'products', label: 'Продукция' },
  { id: 'advantages', label: 'Услуги' },
  { id: 'clients', label: 'Клиенты' },
  { id: 'contacts', label: 'Контакты' },
];

const STATS = [
  { value: '220+', unit: 'тонн / мес', label: 'металлоконструкций' },
  { value: '2600', unit: 'м²', label: 'производственных цехов' },
  { value: '60+', unit: 'единиц', label: 'автотранспорта и спецтехники' },
  { value: '5', unit: 'филиалов', label: 'по всей России' },
];

const PRODUCTS = [
  {
    icon: 'RadioTower',
    title: 'Опоры двойного назначения',
    desc: 'Для антенн, освещения, видеонаблюдения и городской инфраструктуры.',
  },
  {
    icon: 'Signal',
    title: 'Башни сотовой связи',
    desc: 'Свободностоящие консольные опоры для операторов связи.',
  },
  {
    icon: 'Building2',
    title: 'Надстройки на СК-26',
    desc: 'Металлические надстройки для модернизации ЖБ опор.',
  },
  {
    icon: 'Container',
    title: 'Каркасы БВЗ и модули',
    desc: 'Быстровозводимые конструкции и модульные здания.',
  },
  {
    icon: 'Factory',
    title: 'ЗДФ, АК и эстакады',
    desc: 'Фундаментальные решения для промышленных объектов.',
  },
];

const ADVANTAGES = [
  { icon: 'Hammer', title: 'Собственное производство', desc: 'Работаем без посредников — контроль на каждом этапе.' },
  { icon: 'Workflow', title: 'Полный цикл', desc: 'От чертежа КМ до отгрузки готового изделия.' },
  { icon: 'ShieldCheck', title: 'Двухслойное покрытие', desc: 'Холодный цинк + грунт-эмаль для долговечности.' },
  { icon: 'Eye', title: 'Доступ на производство', desc: 'Заказчик может приехать и проверить процесс.' },
  { icon: 'PenTool', title: 'Чертежи КМ и КМД', desc: 'Разработка КМД в Компас 3D по вашим чертежам.' },
  { icon: 'Truck', title: 'Собственная логистика', desc: 'Доставка по всей территории России.' },
];

const CLIENTS = ['МТС', 'билайн', 'УГМК-Телеком', 'КВАНТ-ТЕЛЕКОМ', 'Talacom Synergy'];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Index() {
  const { toast } = useToast();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-ivory font-sans text-charcoal antialiased">
      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full bg-charcoal/95 backdrop-blur-md border-b border-white/10">
        <div className="container-pad mx-auto flex h-20 max-w-7xl items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 items-center justify-center bg-terracotta">
              <Icon name="Anchor" size={22} className="text-charcoal" fallback="Box" />
            </div>
            <div className="leading-none">
              <div className="text-lg font-black tracking-tight text-ivory">МК СКЭ</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-terracotta">металлоконструкции</div>
            </div>
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm font-medium uppercase tracking-wide text-ivory/70 transition-colors hover:text-terracotta"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:88001015600"
              className="hidden items-center gap-2 text-sm font-semibold text-ivory md:flex"
            >
              <Icon name="Phone" size={16} className="text-terracotta" />
              8 (800) 101-56-00
            </a>
            <Button
              onClick={() => scrollTo('contacts')}
              className="hidden bg-terracotta text-white hover:bg-terracotta/90 sm:inline-flex rounded-none font-semibold"
            >
              Оставить заявку
            </Button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-ivory lg:hidden">
              <Icon name={menuOpen ? 'X' : 'Menu'} size={28} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-1 border-t border-white/10 bg-charcoal px-6 py-4 lg:hidden">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => {
                  scrollTo(n.id);
                  setMenuOpen(false);
                }}
                className="py-2 text-left text-sm font-medium uppercase tracking-wide text-ivory/80"
              >
                {n.label}
              </button>
            ))}
            <a href="tel:88001015600" className="py-2 text-sm font-semibold text-terracotta">
              8 (800) 101-56-00
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-charcoal pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/40" />
        <div className="container-pad relative z-10 mx-auto max-w-7xl py-20">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 border border-terracotta/40 px-4 py-1.5">
              <span className="h-2 w-2 bg-terracotta" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                Производство полного цикла · Оренбург
              </span>
            </div>
            <h1 className="text-4xl font-black uppercase leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              Мы производим <br />
              <span className="text-terracotta">металлоконструкции.</span>
              <br />
              Мы строим опоры.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/70">
              Проектирование, изготовление металлоконструкций и монтаж объектов сотовой связи.
              Собственное производство, логистика и строительно-монтажный комплекс.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo('contacts')}
                size="lg"
                className="rounded-none bg-terracotta px-8 text-base font-bold uppercase tracking-wide text-white hover:bg-terracotta/90"
              >
                Оставить заявку
                <Icon name="ArrowRight" size={18} className="ml-1" />
              </Button>
              <Button
                onClick={() => scrollTo('products')}
                size="lg"
                variant="outline"
                className="rounded-none border-ivory/30 bg-transparent px-8 text-base font-bold uppercase tracking-wide text-ivory hover:bg-ivory/10 hover:text-ivory"
              >
                Продукция
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-anthracite">
        <div className="container-pad mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="border-b border-white/10 px-2 py-10 text-center sm:py-14 lg:border-b-0 lg:border-r [&:nth-child(even)]:border-r-0 lg:[&:nth-child(even)]:border-r lg:[&:last-child]:border-r-0"
            >
              <div className="text-4xl font-black text-terracotta sm:text-5xl lg:text-6xl">{s.value}</div>
              <div className="mt-1 text-sm font-bold uppercase tracking-wide text-ivory">{s.unit}</div>
              <div className="mt-2 text-xs text-ivory/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pad grid-texture">
        <div className="container-pad mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionLabel>О компании</SectionLabel>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
                Производственная компания полного цикла
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-anthracite/80">
                ООО «МК СКЭ» занимается проектированием, изготовлением металлоконструкций
                и монтажом объектов сотовой связи в Оренбурге.
              </p>
              <p className="mt-4 leading-relaxed text-anthracite/70">
                В составе группы — строительно-монтажная компания ООО «СКЭ»
                и транспортно-логистическая компания ООО «К2». Это позволяет нам закрывать
                полный цикл: от чертежа до отгрузки и монтажа на объекте.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['ООО «МК СКЭ»', 'ООО «СКЭ»', 'ООО «К2»'].map((c) => (
                  <span
                    key={c}
                    className="border border-charcoal/15 bg-white px-4 py-2 text-sm font-semibold"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                className="h-full min-h-[320px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${HERO_IMG})` }}
              />
              <div className="absolute -bottom-6 -left-6 hidden bg-terracotta px-8 py-6 sm:block">
                <div className="text-3xl font-black text-white">15+ лет</div>
                <div className="text-xs uppercase tracking-wide text-white/80">на рынке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="section-pad bg-charcoal">
        <div className="container-pad mx-auto max-w-7xl">
          <SectionLabel light>Продукция</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase leading-tight text-ivory sm:text-4xl">
            Что мы производим
          </h2>
          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <div
                key={i}
                className="group flex flex-col bg-charcoal p-8 transition-colors hover:bg-anthracite"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center bg-terracotta/15 transition-colors group-hover:bg-terracotta">
                  <Icon name={p.icon} size={28} className="text-terracotta transition-colors group-hover:text-white" fallback="Box" />
                </div>
                <h3 className="text-xl font-bold text-ivory">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory/60">{p.desc}</p>
                <button
                  onClick={() => scrollTo('contacts')}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-terracotta"
                >
                  Подробнее <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            ))}
            <div className="flex flex-col items-start justify-center bg-terracotta p-8">
              <h3 className="text-xl font-black uppercase text-white">Нужна консультация?</h3>
              <p className="mt-3 text-sm text-white/80">Подберём решение под ваш проект и рассчитаем стоимость.</p>
              <Button
                onClick={() => scrollTo('contacts')}
                className="mt-6 rounded-none bg-white text-charcoal hover:bg-ivory font-bold uppercase"
              >
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES / SERVICES */}
      <section id="advantages" className="section-pad">
        <div className="container-pad mx-auto max-w-7xl">
          <SectionLabel>Преимущества и услуги</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase leading-tight sm:text-4xl">
            Почему выбирают нас
          </h2>
          <div className="mt-12 grid gap-px bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="bg-ivory p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-charcoal">
                    <Icon name={a.icon} size={22} className="text-terracotta" fallback="Check" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-anthracite/70">{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="section-pad bg-anthracite">
        <div className="container-pad mx-auto max-w-7xl text-center">
          <SectionLabel light>Клиенты и проекты</SectionLabel>
          <h2 className="mt-4 text-3xl font-black uppercase text-ivory sm:text-4xl">Нам доверяют</h2>
          <div className="mt-12 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
            {CLIENTS.map((c) => (
              <div
                key={c}
                className="flex h-28 items-center justify-center bg-anthracite px-4 text-lg font-bold text-ivory/80 transition-colors hover:text-terracotta"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="section-pad bg-charcoal">
        <div className="container-pad mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionLabel light>Контакты</SectionLabel>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-ivory sm:text-4xl">
                Оставьте заявку
              </h2>
              <p className="mt-4 text-ivory/60">
                Заполните форму — мы свяжемся с вами и подготовим коммерческое предложение.
              </p>

              <div className="mt-10 space-y-5">
                <ContactRow icon="MapPin" title="Адрес">
                  г. Оренбург, ул. Донгузская, д. 68
                </ContactRow>
                <ContactRow icon="Phone" title="Телефон">
                  <a href="tel:88001015600" className="hover:text-terracotta">8 (800) 101-56-00</a>
                </ContactRow>
                <ContactRow icon="Mail" title="Email">
                  <a href="mailto:mkske@mkske.ru" className="hover:text-terracotta">mkske@mkske.ru</a>
                </ContactRow>
                <ContactRow icon="User" title="Директор производства">
                  Кужамбетов Марат Олегович · +7 987 876 70 37
                </ContactRow>
                <ContactRow icon="FileText" title="Тендерно-договорной отдел">
                  Баимова Анна · +7 922 557 40 15
                </ContactRow>
              </div>

              <div className="mt-8 flex gap-3">
                <SocialBtn icon="MessageCircle" href="https://wa.me/79878767037" label="WhatsApp" />
                <SocialBtn icon="Send" href="https://t.me/" label="Telegram" />
                <SocialBtn icon="Phone" href="tel:88001015600" label="Позвонить" />
              </div>
            </div>

            <div className="bg-ivory p-8 sm:p-10">
              <h3 className="text-xl font-black uppercase">Форма обратной связи</h3>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <Input required placeholder="Ваше имя" className="rounded-none border-charcoal/20 bg-white" />
                <Input required type="tel" placeholder="Телефон" className="rounded-none border-charcoal/20 bg-white" />
                <Input type="email" placeholder="Email" className="rounded-none border-charcoal/20 bg-white" />
                <Textarea placeholder="Сообщение" rows={4} className="rounded-none border-charcoal/20 bg-white" />
                <label className="flex cursor-pointer items-center gap-3 border border-dashed border-charcoal/30 bg-white px-4 py-3 text-sm text-anthracite/70">
                  <Icon name="Paperclip" size={18} className="text-terracotta" />
                  Прикрепить файл (чертёж, ТЗ)
                  <input type="file" className="hidden" />
                </label>
                <Button
                  type="submit"
                  className="w-full rounded-none bg-terracotta py-6 text-base font-bold uppercase tracking-wide text-white hover:bg-terracotta/90"
                >
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>

          {/* MAP */}
          <div className="mt-12 overflow-hidden border border-white/10">
            <iframe
              title="Карта проезда"
              src="https://yandex.ru/map-widget/v1/?text=Оренбург%2C%20улица%20Донгузская%2C%2068&z=16"
              className="h-[360px] w-full"
              frameBorder="0"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal border-t border-white/10">
        <div className="container-pad mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-8 text-sm text-ivory/50 sm:flex-row">
          <div>© {new Date().getFullYear()} ООО «МК СКЭ». Все права защищены.</div>
          <div className="font-semibold text-terracotta">Мы производим металлоконструкции. Мы строим опоры.</div>
        </div>
      </footer>

      {/* MOBILE CALL FAB */}
      <a
        href="tel:88001015600"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta shadow-lg shadow-terracotta/40 sm:hidden"
      >
        <Icon name="Phone" size={24} className="text-white" />
      </a>
    </div>
  );
}

function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-px w-8 bg-terracotta" />
      <span className={`text-xs font-bold uppercase tracking-[0.25em] text-terracotta ${light ? '' : ''}`}>
        {children}
      </span>
    </div>
  );
}

function ContactRow({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/5">
        <Icon name={icon} size={18} className="text-terracotta" fallback="Info" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wide text-ivory/40">{title}</div>
        <div className="mt-0.5 font-medium text-ivory">{children}</div>
      </div>
    </div>
  );
}

function SocialBtn({ icon, href, label }: { icon: string; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center border border-white/15 text-ivory transition-colors hover:border-terracotta hover:bg-terracotta hover:text-white"
    >
      <Icon name={icon} size={20} fallback="Link" />
    </a>
  );
}
