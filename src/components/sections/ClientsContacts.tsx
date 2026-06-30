import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { IMG, NAV, CLIENTS_ACTIVE, CLIENTS_DONE, ALL_CLIENTS, scrollTo, Label, ContactRow } from '@/lib/site-data';

export default function ClientsContacts() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: '✓ Заявка отправлена', description: 'Мы свяжемся с вами в течение 30 минут.' });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
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
                  { icon: 'Send',          label: 'Telegram',  href: 'https://t.me/' },
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
    </>
  );
}
