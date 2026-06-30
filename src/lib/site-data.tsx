import Icon from '@/components/ui/icon';
import { useCountUp } from '@/hooks/use-reveal';

/* ─── Images ─── */
export const IMG = {
  hero:      'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/3165c493-09f8-484b-acea-228394cee739.jpeg',
  tower1:    'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/1a58b9ff-503a-4aef-a980-058594bdbcaf.jpeg',
  tower2:    'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/2eac49e5-0763-4ae4-8c8f-4f112e0fff7e.jpeg',
  tower3:    'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/a2e82610-bfdb-43f9-a390-04ce2869652c.jpeg',
  detail:    'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/303d451a-de01-46c0-b01c-800bf6a5d6aa.jpg',
  close:     'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/45ebfdef-b919-498f-b9a7-c5c3de1cd703.jpg',
  cad:       'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/fc231111-ae61-4b69-9ab2-71ff580b5ce7.png',
  blueprint: 'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/4377bd96-564f-4c3d-872d-860dc94296a6.jpg',
  welder:    'https://cdn.poehali.dev/projects/a2934bf5-8e81-4cb0-9b6c-5d872f34bf3c/bucket/48a0e6c2-68d8-4d02-93f2-976aa492f426.jpg',
};

/* ─── Nav ─── */
export const NAV = [
  { id: 'about',    label: 'О нас' },
  { id: 'products', label: 'Продукция' },
  { id: 'services', label: 'Услуги' },
  { id: 'team',     label: 'Команда' },
  { id: 'clients',  label: 'Клиенты' },
  { id: 'contacts', label: 'Контакты' },
];

/* ─── Stats ─── */
export const STATS = [
  { value: 220,  suffix: '+', unit: 'тонн в месяц' },
  { value: 2600, suffix: '',  unit: 'м² цехов' },
  { value: 60,   suffix: '+', unit: 'ед. техники' },
  { value: 40,   suffix: '+', unit: 'специалистов' },
  { value: 2000, suffix: '+', unit: 'изделий в год' },
  { value: 15,   suffix: '+', unit: 'лет на рынке' },
];

/* ─── Products ─── */
export const PRODUCTS = [
  { n: '01', title: 'Опоры двойного назначения', desc: 'Антенны, освещение, видеонаблюдение, городская инфраструктура.', img: IMG.tower2,   tag: 'Флагман' },
  { n: '02', title: 'Башни сотовой связи',       desc: 'Свободностоящие и консольные опоры для операторов связи.',      img: IMG.hero,      tag: 'Популярное' },
  { n: '03', title: 'Надстройки на СК-26',       desc: 'Металлические надстройки для модернизации ЖБ опор.',            img: IMG.close,     tag: '' },
  { n: '04', title: 'Каркасы БВЗ и модули',      desc: 'Быстровозводимые конструкции и модульные здания.',             img: IMG.cad,       tag: '' },
  { n: '05', title: 'ЗДФ, АК и эстакады',        desc: 'Фундаментальные решения для промышленных объектов.',           img: IMG.blueprint, tag: '' },
];

/* ─── Services ─── */
export const SERVICES = [
  { n: '01', icon: 'PenTool',     title: 'Проектирование',    desc: 'CAD/BIM-проектирование, разработка КМ и КМД по чертежам заказчика.' },
  { n: '02', icon: 'Scissors',    title: 'Раскрой металла',   desc: 'Автоматизированный раскрой с ЧПУ, минимальный отход материала.' },
  { n: '03', icon: 'Zap',         title: 'Плазменная резка',  desc: 'Резка любой сложности: толщина до 120 мм, точность ±0.1 мм.' },
  { n: '04', icon: 'Sparkles',    title: 'Лазерная очистка',  desc: 'Бесконтактная экологичная очистка. Идеальная адгезия покрытий.' },
  { n: '05', icon: 'Settings',    title: 'Мехобработка',      desc: 'Токарные, фрезерные и сверлильные операции в собственных цехах.' },
  { n: '06', icon: 'Flame',       title: 'Сварка',            desc: 'Сертифицированные сварщики, контроль швов ультразвуком.' },
  { n: '07', icon: 'Layers',      title: 'Покраска',          desc: 'Двухслойное антикоррозийное покрытие. Срок службы 25+ лет.' },
  { n: '08', icon: 'ShieldCheck', title: 'Контроль качества', desc: 'Входной, производственный, выходной контроль на каждом этапе.' },
];

/* ─── Team ─── */
export const TEAM = [
  { name: 'Трофимов Евгений Павлович', role: 'Генеральный директор',             quote: '«Качество — это не случайность. Это результат высоких намерений, искренних усилий и умелого исполнения.»', initial: 'Т' },
  { name: 'Кужамбетов Марат Олегович', role: 'Директор производства',            quote: '«Каждая конструкция — это наш след в инфраструктуре страны.»', initial: 'К' },
  { name: 'Баимов Азат Салаватович',   role: 'Инженер по развитию производства', quote: '«Инновации в производстве — путь к превосходству над конкурентами.»', initial: 'Б' },
  { name: 'Хаметов Марсель',           role: 'Коммерческий директор',            quote: '«Наши клиенты получают не просто металл — они получают уверенность.»', initial: 'Х' },
];

/* ─── Clients ─── */
export const CLIENTS_ACTIVE = ['ООО «Антарес»', 'АО «ПБК»', 'ООО «МИГ»', 'ООО «Медиа-Ас»', 'ООО «СТАЛЬТЕХ»', 'ООО «Связьразвитие»'];
export const CLIENTS_DONE   = ['АО «КВАНТ-ТЕЛЕКОМ»', 'ООО «МАКСКОМПЛЕКТ»', 'ООО «Лидер»', 'ООО «СвязьИнком»', 'ООО «ТКСС»'];
export const ALL_CLIENTS    = [...CLIENTS_ACTIVE, ...CLIENTS_DONE];

/* ─── Scroll util ─── */
export const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/* ─── Shared UI primitives ─── */

export function Label({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
      <span className="h-px w-8 bg-neon" />
      <span className="text-[10px] font-black uppercase tracking-[0.35em] text-neon">{children}</span>
    </div>
  );
}

export function StatCard({ value, suffix, unit }: { value: number; suffix: string; unit: string }) {
  const { value: v, ref } = useCountUp(value);
  return (
    <div ref={ref}
      className="group relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-cosmic px-4 py-12 text-center transition-all duration-300 hover:bg-surface">
      <div className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-[var(--neon-terra)] to-[var(--gold)] transition-all duration-500 group-hover:w-full" />
      <div className="text-4xl font-black leading-none text-[var(--accent-hot)] lg:text-5xl xl:text-6xl">
        {v.toLocaleString('ru-RU')}{suffix}
      </div>
      <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-ivory/30">{unit}</div>
    </div>
  );
}

export function ContactRow({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 text-base font-light text-ivory/60">
      <Icon name={icon} size={18} className="mt-0.5 shrink-0 text-neon" fallback="Info" />
      <div>{children}</div>
    </div>
  );
}