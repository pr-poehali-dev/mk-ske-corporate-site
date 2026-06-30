import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { PRODUCTS, SERVICES, TEAM, Label } from '@/lib/site-data';

type Product = typeof PRODUCTS[0];

interface ProductSectionsProps {
  setModalProduct: (p: Product | null) => void;
}

export default function ProductSections({ setModalProduct }: ProductSectionsProps) {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
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
                <Icon name={s.icon} size={28}
                  className={`transition-colors ${activeService === i ? 'text-neon' : 'text-ivory/40 group-hover:text-neon/70'}`}
                  fallback="Settings" />
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
              { icon: 'Hammer',      title: 'Собственное производство', desc: 'Полный цикл без субподряда — контроль качества на каждом этапе.' },
              { icon: 'Workflow',    title: 'Работа по чертежам',        desc: 'Принимаем ТЗ, КМ, КМД любой сложности. Изготовим по вашей документации.' },
              { icon: 'ShieldCheck', title: 'Двухслойное покрытие',      desc: 'Антикоррозийная защита по ГОСТ. Срок службы без обслуживания — 25+ лет.' },
              { icon: 'Eye',         title: 'Доступ на производство',    desc: 'Открытое производство. Приглашаем клиентов на осмотр и выходной контроль.' },
              { icon: 'Truck',       title: 'Логистика по России',       desc: 'Собственный парк спецтехники. Доставка в любую точку РФ.' },
              { icon: 'Award',       title: 'Допуск Ростехнадзора',      desc: 'Работаем с объектами повышенной опасности. Все допуски и СРО — в наличии.' },
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
                        <a href={`tel:${m.contact.replace(/\D/g, '')}`}
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
    </>
  );
}
