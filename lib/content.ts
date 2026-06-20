// ============================================================
// NEXORA — CONTENIDO EDITABLE (textos, planes, FAQ, fechas…)
// Toca SOLO este archivo para actualizar la web sin lógica.
// ============================================================
import type { StaticImageData } from "next/image";
import demoAriana from "@/public/demo-ariana.png";
import { SITE, waLink } from "./site";

/* ------------------------------------------------------------
   VIDEO DEL HERO
   ------------------------------------------------------------
   Mientras no exista, se muestra un placeholder elegante.
   Para activarlo, cambia SOLO "kind":
     - "youtube": pon el ID en youtubeId  (recomendado, no listado)
     - "file":    pon la ruta en fileSrc y un poster en /public
   (Si usas YouTube, recuerda habilitarlo también en la CSP de
    next.config.ts — está señalado con comentarios.)
------------------------------------------------------------ */
export const VIDEO = {
  kind: "placeholder" as "placeholder" | "youtube" | "file",
  youtubeId: "", // p.ej. "dQw4w9WgXcQ"
  fileSrc: "", // p.ej. "/hero.mp4"
  poster: "", // p.ej. "/hero-poster.webp"
  label: "Conoce NEXORA en 60 segundos",
};

/* ------------------------------------------------------------ HERO */
export const HERO = {
  eyebrow: "Estudio de diseño web · Tarija, Bolivia",
  titleLead: "Que te tomen en serio",
  titleEm: "desde el primer clic.",
  subtitle:
    "Creamos la página web que hace que un desconocido confíe en ti antes de hablar contigo.",
  ctaPrimary: "Escríbenos por WhatsApp",
  ctaSecondary: "Ver por qué importa",
  chips: ["Pago único", "Lista en ~3 días", "Trato directo con quien la hace"],
};

/* ------------------------------------------------------------ PROBLEMA */
export const PROBLEM = {
  eyebrow: "El punto de partida",
  title: "Antes de elegirte, te buscan en internet. ¿Qué encuentran?",
  points: [
    {
      title: "Un Instagram personal — o nada.",
      text: "Fotos sueltas entre publicaciones personales. Nada que diga con claridad a qué te dedicas ni por qué confiar en ti.",
    },
    {
      title: "Te ves como uno más del montón.",
      text: "Sin un espacio propio y profesional, pareces igual que cualquier otro. La decisión se reduce a quién cobra menos.",
    },
    {
      title: "Dependes del algoritmo y del boca a boca.",
      text: "Respondes todo a mano y solo te encuentran si alguien te recomienda. Las oportunidades que no ves, las pierdes.",
    },
  ],
  closing: "El problema no es tu trabajo. Es que nadie lo ve como lo que es: serio.",
};

/* ------------------------------------------------------------ EL PORQUÉ (corazón) */
export const WHY = {
  eyebrow: "El porqué",
  title: "Por qué una web cambia cómo te perciben",
  intro:
    "No vendemos “una página”. Vendemos la razón por la que alguien te elige a ti y no al de al lado. Aquí están esas razones, una por una.",
  reasons: [
    {
      title: "La gente elige al que parece más confiable, no al mejor.",
      text: "Nadie mide tu talento antes de contratarte; solo lee las señales. Una web propia es la señal de seriedad más fuerte que tú controlas — la diferencia entre una oficina profesional y atender en la mesa de un café.",
    },
    {
      title: "Reúne toda tu prueba en un lugar que es tuyo.",
      text: "Tu trabajo, tu información y tu contacto, juntos y ordenados. No dispersos en publicaciones que se entierran, ni a merced de un algoritmo que decide quién te ve.",
    },
    {
      title: "Trabaja 24/7 y aparece en Google.",
      text: "Te encuentran a las 11 de la noche, en fin de semana y aunque lleves un mes sin publicar. Tu web responde “¿quién es y qué hace?” sin que tú estés presente.",
    },
    {
      title: "Elimina la duda antes de que la pregunten.",
      text: "Información clara, procesos visibles, respuestas a lo de siempre. Cuando todo está resuelto a la vista, la persona llega a escribirte ya decidida, no a interrogarte.",
    },
  ],
  closing: "Eso es lo que construimos. No una página bonita: una razón para que confíen en ti.",
};

/* ------------------------------------------------------------ SOLUCIÓN */
export const SOLUTION = {
  eyebrow: "La solución",
  title: "Presencia Digital: tu primera impresión, hecha bien",
  text: "Una web profesional, rápida y clara, construida alrededor de un solo objetivo: que el visitante entienda quién eres, qué haces y por qué confiar — y que te escriba. A medida de tu negocio, lista en ~3 días hábiles.",
  steps: [
    {
      title: "Nos cuentas lo esencial",
      text: "Una conversación corta por WhatsApp: a qué te dedicas, qué quieres lograr y qué información ya tienes.",
    },
    {
      title: "Diseñamos a medida",
      text: "Construimos tu web alrededor de tu objetivo, no de una plantilla. Tú revisas y ajustamos hasta tu visto bueno.",
    },
    {
      title: "Publicamos y queda tuya",
      text: "La dejamos en línea, lista para compartir. En ~3 días hábiles desde que tenemos todo lo necesario.",
    },
  ],
};

/* ------------------------------------------------------------ PRUEBA / DEMOS */
export type Demo = {
  name: string;
  category: string;
  desc: string;
  url: string;
  image: StaticImageData | null; // null → placeholder elegante
  previewHeadline?: string; // se usa en el placeholder cuando no hay imagen
};

export const DEMOS: Demo[] = [
  {
    name: "Ariana Fisioterapia",
    category: "Fisioterapeuta · Tarija",
    desc: "Una web clara que transmite cercanía y profesionalismo, con reserva directa por WhatsApp.",
    url: SITE.demos.ariana,
    image: demoAriana, // captura real del demo en vivo
  },
  {
    name: "Lic. Camilo",
    category: "Psicólogo · Sucre",
    desc: "Un espacio sobrio y de confianza para que un paciente dé el primer paso sin miedo.",
    url: SITE.demos.camilo,
    image: null, // 👉 para una captura real: deja /public/demo-camilo.png y reemplaza esto por su import
    previewHeadline: "Un lugar seguro para empezar a sentirte mejor.",
  },
];

/* ------------------------------------------------------------ TESTIMONIOS
   Vacío por ahora. Cuando cierres tu primer caso, agrega un objeto:
   { quote: "…", name: "Nombre", role: "Rubro · Ciudad" }
   La sección se oculta sola mientras el array esté vacío.
------------------------------------------------------------ */
export type Testimonial = { quote: string; name: string; role: string };
export const TESTIMONIALS: Testimonial[] = [];

/* ------------------------------------------------------------ FUNDADOR
   Humaniza la marca ("trato directo con quien hace tu web").
   Pon show:true, tu nombre, una foto en /public y una frase.
------------------------------------------------------------ */
export const FOUNDER = {
  show: false,
  name: "", // p.ej. "Ernesto P."
  role: "Fundador de NEXORA",
  photo: "", // p.ej. "/fundador.webp"
  quote:
    "Trabajas directo conmigo, de principio a fin. No hay intermediarios: la persona que diseña tu web es la que te responde el WhatsApp.",
};

/* ------------------------------------------------------------ PLANES */
export type Plan = {
  id: string;
  tag: string;
  name: string;
  desc: string;
  price: string;
  oldPrice?: string;
  status: "available" | "soon";
  badge: string;
  features: string[];
  valueLine?: string;
  chips?: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "presencia",
    tag: "Plan 1",
    name: "Presencia Digital",
    desc: "Tu primera impresión profesional. Todo lo necesario para que te tomen en serio y te escriban.",
    price: "150",
    oldPrice: "300",
    status: "available",
    badge: "Disponible ahora",
    featured: true,
    features: [
      "Web profesional a medida — diseñada alrededor de tu objetivo, no una plantilla.",
      "Se ve perfecta en el celular — que es donde de verdad te ven tus clientes.",
      "Información clara y ordenada — responde “¿esto es serio?” antes de que lo pregunten.",
      "WhatsApp integrado — el cliente te escribe de un toque, sin fricción.",
      "Formulario de contacto — recibes consultas aunque no estés conectado.",
      "Carga rápida y lista en ~3 días hábiles — sin esperas eternas.",
    ],
    valueLine: "Lo que otros cobran por 900+ Bs, tu lanzamiento hoy a 150 Bs.",
    chips: [
      "Pago único",
      "Sin mensualidades",
      "Garantía de satisfacción",
      "Entrega ~3 días hábiles",
      "Trato directo con el fundador",
    ],
    ctaLabel: "Quiero mi Presencia Digital",
    ctaHref: waLink(
      "Hola NEXORA 👋, quiero el plan Presencia Digital (lanzamiento 150 Bs). ¿Cómo empezamos?"
    ),
    ctaExternal: true,
  },
  {
    id: "crecimiento",
    tag: "Plan 2",
    name: "Crecimiento",
    desc: "Para cuando ya no quieres solo estar, sino atraer y convertir.",
    price: "1.050",
    status: "soon",
    badge: "Próximamente",
    features: [
      "Todo lo de Presencia Digital",
      "Copywriting estratégico que vende",
      "Estructura optimizada para convertir",
      "Más diseño premium y animaciones",
    ],
    ctaLabel: "Ver adelanto",
    ctaHref: "/proximamente/crecimiento",
  },
  {
    id: "autoridad-ia",
    tag: "Plan 3",
    name: "Autoridad IA",
    desc: "Un sistema que trabaja por ti: automatiza, capta y hace seguimiento.",
    price: "2.650",
    status: "soon",
    badge: "Próximamente",
    features: [
      "Todo lo de Crecimiento",
      "Automatizaciones y flujos de WhatsApp",
      "Email marketing automatizado",
      "Captación y gestión de leads con IA",
    ],
    ctaLabel: "Ver adelanto",
    ctaHref: "/proximamente/autoridad-ia",
  },
];

/* ------------------------------------------------------------ ESCASEZ / CIERRE */
export const SCARCITY = {
  remaining: 3,
  normalPrice: "300",
  launchPrice: "150",
};

export const FINAL_CTA = {
  eyebrow: "Empieza hoy",
  title: "¿Listo para que te tomen en serio?",
  subtitle: "Todo empieza con una conversación por WhatsApp. Sin compromiso.",
  scarcity:
    "Precio de lanzamiento solo para los primeros 3 proyectos. Después, 300 Bs.",
  ctaLabel: "Escríbenos por WhatsApp",
};

/* ------------------------------------------------------------ FAQ */
export type Faq = { q: string; a: string };
export const FAQS: Faq[] = [
  {
    q: "¿Cuánto tiempo tarda el desarrollo?",
    a: "La mayoría de proyectos del plan Presencia Digital se entregan en aproximadamente 3 días hábiles desde que se recibe toda la información necesaria para comenzar.",
  },
  {
    q: "¿Para qué quiero una web si ya tengo Instagram?",
    a: "Instagram te da presencia, pero es prestada: no controlas el alcance ni el orden, y compites con fotos personales. Tu web es tuya, aparece en Google y reúne todo en un solo lugar profesional. Lo ideal es que tu Instagram lleve a tu web.",
  },
  {
    q: "¿Mi web va a aparecer en Google?",
    a: "Sí. La entregamos lista para que Google la indexe, con la estructura y los textos correctos para que te encuentren por tu nombre y tu rubro. (Posicionar palabras muy competidas es un trabajo aparte que se puede sumar después.)",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Lo básico: a qué te dedicas, tus datos de contacto y, si tienes, fotos o tu logo. Si te falta algo, te guiamos. Arrancamos con una conversación por WhatsApp.",
  },
  {
    q: "¿Puedo pedir cambios?",
    a: "Sí. Durante el desarrollo revisas y ajustamos hasta que quede bien. Es trato directo con quien hace tu web, sin intermediarios.",
  },
  {
    q: "¿Qué pasa después de publicar?",
    a: "Queda en línea y es tuya. Te explicamos cómo compartirla. Si más adelante quieres crecer con automatizaciones o seguimiento, eso vive en los planes Crecimiento y Autoridad IA (próximamente).",
  },
  {
    q: "¿Las automatizaciones y la IA vienen en este plan?",
    a: "No. Presencia Digital es tu web profesional, completa y suficiente para empezar. La automatización de WhatsApp, el email marketing y la IA son parte de Crecimiento y Autoridad IA, que estamos por lanzar. Hoy empiezas con tu presencia; cuando crezcas, escalas.",
  },
];

/* ------------------------------------------------------------ PÁGINAS "PRÓXIMAMENTE"
   Edita fecha (YYYY-MM-DD) y tiempo de desarrollo aquí.
   Si la fecha ya pasó, el contador muestra "Muy pronto".
------------------------------------------------------------ */
export type ComingSoonPlan = {
  slug: string;
  tag: string;
  name: string;
  price: string;
  tagline: string;
  launchDate: string; // YYYY-MM-DD
  devTime: string;
  includes: string[];
  waMessage: string;
};

export const COMING_SOON: Record<"crecimiento" | "autoridadIa", ComingSoonPlan> =
  {
    crecimiento: {
      slug: "crecimiento",
      tag: "Plan 2",
      name: "Crecimiento",
      price: "1.050",
      tagline:
        "Cuando ya no quieres solo estar en internet, sino atraer y convertir.",
      launchDate: "2026-07-18",
      devTime: "3 semanas",
      includes: [
        "Todo lo del plan Presencia Digital",
        "Copywriting estratégico orientado a vender",
        "Estructura optimizada para convertir visitas en clientes",
        "Diseño más premium y animaciones a medida",
        "Llamados a la acción estratégicos",
        "Optimización de velocidad y experiencia",
      ],
      waMessage:
        "Hola NEXORA 👋, quiero que me avisen cuando lancen el plan Crecimiento.",
    },
    autoridadIa: {
      slug: "autoridad-ia",
      tag: "Plan 3",
      name: "Autoridad IA",
      price: "2.650",
      tagline: "Un sistema completo que automatiza procesos y trabaja por ti.",
      launchDate: "2026-07-31",
      devTime: "1 mes y 4 días",
      includes: [
        "Todo lo del plan Crecimiento",
        "Automatizaciones y flujos de WhatsApp",
        "Email marketing automatizado",
        "Captación y gestión de leads",
        "IA aplicada a tu negocio",
        "Seguimiento automático de clientes",
      ],
      waMessage:
        "Hola NEXORA 👋, quiero que me avisen cuando lancen el plan Autoridad IA.",
    },
  };
