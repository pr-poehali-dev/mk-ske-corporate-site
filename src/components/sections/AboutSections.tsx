import { IMG, scrollTo, Label } from '@/lib/site-data';

export default function AboutSections() {
  return (
    <>
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
                {['Допуск Ростехнадзора', 'Сертификация ISO', 'Работа с ГАЗПРОМ', 'Работа с РОСНЕФТЬ'].map(t => (
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
              {['Идея', 'Проект', 'Чертежи', 'Раскрой', 'Сварка', 'Покраска', 'Контроль', 'Отгрузка'].map((s, i) => (
                <div key={s} className="bg-cosmic flex flex-col items-center gap-2 p-5 text-center transition-colors hover:bg-[#25354A]">
                  <span className="text-xs font-bold text-neon/50">{String(i + 1).padStart(2, '0')}</span>
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
                {[
                  { n: '220+', t: 'тонн металла ежемесячно' },
                  { n: '2600', t: 'м² производственных цехов' },
                  { n: '100%', t: 'контроль на каждом этапе' },
                ].map(item => (
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
    </>
  );
}
