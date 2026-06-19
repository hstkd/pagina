// Contenido del sitio centralizado para facilitar la edición.

export const BRAND = {
  name: 'Henry Sigchos',
  full: 'Henry Sigchos Taekwondo',
  korean: '태권도',
  tagline: 'Taekwondo · Desde 2020',
  since: 2020,
  phone: '0987465883',
  phoneIntl: '+593987465883',
  email: 'henry21.sigchos@gmail.com',
  instagram: '@taekwondo_hs',
  instagramUrl: 'https://instagram.com/taekwondo_hs',
}

export const LOCATIONS = [
  {
    city: 'Quito',
    address: 'Av. Brasil N46-88 y Lucas Majano',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Av.+Brasil+N46-88+y+Lucas+Majano+Quito',
  },
  {
    city: 'Cumbayá',
    address: 'Francisco de Orellana 362',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Francisco+de+Orellana+362+Cumbaya',
  },
]

export const STATS = [
  { value: 6, suffix: '+', label: 'Años formando taekwondistas' },
  { value: 2, suffix: '', label: 'Sedes: Quito y Cumbayá' },
  { value: 5, suffix: '', label: 'Programas para cada edad' },
  { value: 2, suffix: '', label: 'Equipos de competencia' },
]

// Los cinco principios del Taekwondo
export const TENETS = [
  {
    ko: '예의',
    title: 'Cortesía',
    text: 'Respeto y buenos modales dentro y fuera del tatami. La base de toda relación.',
  },
  {
    ko: '염치',
    title: 'Integridad',
    text: 'Conocer la diferencia entre el bien y el mal, y actuar siempre con honestidad.',
  },
  {
    ko: '인내',
    title: 'Perseverancia',
    text: 'La maestría nace de la repetición paciente y de nunca rendirse ante la dificultad.',
  },
  {
    ko: '극기',
    title: 'Autocontrol',
    text: 'Dominio del cuerpo y de la mente, dentro del combate y de la vida cotidiana.',
  },
  {
    ko: '백절불굴',
    title: 'Espíritu indomable',
    text: 'Mantener el coraje y la firmeza de principios sin importar la adversidad.',
  },
]

export const PROGRAMS = [
  {
    tag: '4–7 años',
    title: 'TaekwonKids',
    text: 'Psicomotricidad, coordinación y valores a través del juego. La iniciación perfecta.',
    points: ['Disciplina lúdica', 'Coordinación motriz', 'Confianza y respeto'],
    accent: 'gold',
  },
  {
    tag: '8–11 años',
    title: 'Infantiles',
    text: 'Técnica formal, formas (poomsae) y combate ligero en un entorno seguro y motivador.',
    points: ['Técnica y poomsae', 'Combate controlado', 'Concentración escolar'],
    accent: 'red',
  },
  {
    tag: '12–16 años',
    title: 'Cadetes',
    text: 'Desarrollo físico y técnico para la etapa clave: velocidad, potencia y estrategia.',
    points: ['Potencia y velocidad', 'Estrategia de combate', 'Trabajo en equipo'],
    accent: 'red',
    featured: true,
  },
  {
    tag: '17+ años',
    title: 'Senior',
    text: 'Ponte en forma, libera estrés y aprende defensa personal real a tu propio ritmo.',
    points: ['Fuerza y flexibilidad', 'Defensa personal', 'Cardio de alto impacto'],
    accent: 'gold',
  },
  {
    tag: 'Alto rendimiento',
    title: 'Élite',
    text: 'Entrenamiento de alto nivel para deportistas que buscan el podio y la excelencia.',
    points: ['Preparación física', 'Mentalidad ganadora', 'Seguimiento individual'],
    accent: 'red',
  },
  {
    tag: 'Competencia',
    title: 'Equipos Kyorugi y Poomsae',
    text: 'Selección de competidores en las dos modalidades olímpicas: combate y formas.',
    points: ['Kyorugi (combate)', 'Poomsae (formas)', 'Calendario de torneos'],
    accent: 'gold',
  },
]

export const BELTS = [
  { name: 'Blanco', color: '#f4f4f6', textDark: true, level: 'Inicio · Pureza' },
  { name: 'Amarillo', color: '#f5c542', textDark: true, level: 'La tierra' },
  { name: 'Verde', color: '#2fae6b', textDark: false, level: 'El crecimiento' },
  { name: 'Azul', color: '#2f6fd8', textDark: false, level: 'El cielo' },
  { name: 'Rojo', color: '#e0142a', textDark: false, level: 'El peligro' },
  { name: 'Negro', color: '#101014', textDark: false, level: 'Maestría · Dan' },
]

// Nota: completa/edita los nombres y datos del cuerpo técnico cuando quieras.
export const INSTRUCTORS = [
  {
    name: 'Henry Sigchos',
    rank: 'Maestro fundador · Director técnico',
    bio: 'Fundador de Henry Sigchos Taekwondo (2020). Forma a alumnos de todas las edades y a competidores con disciplina, técnica y cercanía.',
    initials: 'HS',
  },
  {
    name: 'Cuerpo técnico Kyorugi',
    rank: 'Entrenadores de combate',
    bio: 'Equipo dedicado a la preparación de combate olímpico: táctica, velocidad y acondicionamiento para la competencia.',
    initials: 'KY',
  },
  {
    name: 'Cuerpo técnico Poomsae',
    rank: 'Entrenadores de formas',
    bio: 'Especialistas en poomsae que pulen la precisión, el equilibrio y la expresión técnica de cada movimiento.',
    initials: 'PM',
  },
]

// Horario de lunes a viernes (mismo todos los días).
// quito / cumbaya: indica en qué sede está disponible cada turno.
export const SCHEDULE_WEEK = [
  { time: '07:00 – 08:00', clase: 'Todas las edades', quito: true, cumbaya: false },
  { time: '16:00 – 17:00', clase: 'TaekwonKids', quito: true, cumbaya: true },
  { time: '17:00 – 18:00', clase: 'Infantiles', quito: true, cumbaya: true },
  { time: '18:00 – 19:00', clase: 'Cadetes', quito: true, cumbaya: true },
  { time: '19:00 – 20:00', clase: 'Senior', quito: true, cumbaya: true },
]

export const SCHEDULE_SATURDAY = {
  time: '08:00 – 13:00',
  clase: 'Escuelas de Competencia',
}

// Galería. Para usar fotos reales, coloca las imágenes en /public/gallery/
// y añade "src: '/gallery/archivo.jpg'" a cada elemento.
export const GALLERY = [
  { caption: 'Nuestro dojang', tag: 'Instalaciones', span: 'wide', src: '' },
  { caption: 'Clase TaekwonKids', tag: 'Infantil', span: '', src: '' },
  { caption: 'Entrenamiento de combate', tag: 'Kyorugi', span: '', src: '' },
  { caption: 'Poomsae', tag: 'Formas', span: '', src: '' },
  { caption: 'Equipo de competencia', tag: 'Élite', span: 'tall', src: '' },
  { caption: 'Examen de grado', tag: 'Cinturones', span: '', src: '' },
  { caption: 'Defensa personal', tag: 'Senior', span: '', src: '' },
]

export const FAQS = [
  {
    q: '¿Desde qué edad se puede empezar?',
    a: 'Desde los 4 años con el programa TaekwonKids. Tenemos grupos para todas las edades: infantiles, cadetes y senior. Nunca es tarde para empezar.',
  },
  {
    q: '¿Necesito experiencia previa?',
    a: 'Para nada. La gran mayoría de nuestros alumnos empieza desde cero. Te acompañamos paso a paso desde el cinturón blanco.',
  },
  {
    q: '¿Ofrecen clase de prueba?',
    a: 'Sí, tu primera clase de prueba es gratuita y sin compromiso. Resérvala por WhatsApp eligiendo la sede de Quito o Cumbayá.',
  },
  {
    q: '¿Qué necesito para mi primera clase?',
    a: 'Solo ropa cómoda y muchas ganas. El dobok (uniforme oficial) lo puedes adquirir más adelante, cuando decidas continuar.',
  },
  {
    q: '¿Cuánto cuestan las clases?',
    a: 'Tenemos planes desde $60 al mes. El valor exacto depende de la edad y la sede; escríbenos por WhatsApp y te damos toda la información.',
  },
  {
    q: '¿Dónde están ubicados?',
    a: 'En dos sedes: Quito (Av. Brasil N46-88 y Lucas Majano) y Cumbayá (Francisco de Orellana 362). Entrena en la que mejor te quede.',
  },
  {
    q: '¿Puedo competir?',
    a: 'Claro. Contamos con escuelas y equipos de competencia en las dos modalidades olímpicas: Kyorugi (combate) y Poomsae (formas).',
  },
  {
    q: '¿El Taekwondo es seguro para los niños?',
    a: 'Sí. Trabajamos en un ambiente seguro y motivador, con técnica progresiva y un fuerte enfoque en valores como el respeto, la disciplina y la confianza.',
  },
]

// Reseñas reales publicadas en Google.
export const REVIEWS_URL = 'https://maps.app.goo.gl/VDM2kH2hRHSEkM3m8'

export const TESTIMONIALS = [
  {
    text: 'Sin duda una de las mejores academias de taekwondo en Ecuador, enseña con el ejemplo.',
    name: 'Fredy Hidalgo',
    stars: 5,
  },
  {
    text: 'Excelente dojang tanto para principiantes como para competidores avanzados. Recomiendo mucho la academia por la calidad de enseñanza que brindan sus profesores así como por los valores que se transmiten a diario.',
    name: 'Paula Poveda',
    stars: 5,
  },
  {
    text: 'La instalación muy amplia, los profes, excelentes profesionales, y sobre todo practican el compañerismo, el trabajo en equipo y amor a las artes marciales.',
    name: 'Laura Imba',
    stars: 5,
  },
  {
    text: 'Recomiendo totalmente la academia Henry Sigchos Taekwondo. Es un lugar donde no solo aprendes técnica, disciplina y constancia, sino que también te sientes motivada, fuerte y acompañada en todo el proceso. ¡Las clases tienen una energía increíble y los Profes son lo máximo! 💪🔥',
    name: 'Emi Betancourt',
    stars: 5,
  },
]

export const PLANS = [
  {
    name: 'Iniciación',
    price: '',
    cadence: 'Mensual',
    desc: 'Para empezar tu camino en el Taekwondo.',
    features: ['2 clases / semana', 'Acceso a poomsae', 'Cinturón blanco incluido', 'Una sede a elegir'],
    cta: 'Quiero empezar',
    featured: false,
  },
  {
    name: 'Guerrero',
    price: '',
    cadence: 'Mensual',
    desc: 'El plan más completo para avanzar de grado.',
    features: [
      'Clases ilimitadas',
      'Combate y defensa personal',
      'Exámenes de grado',
      'Acceso a ambas sedes',
      'Eventos y seminarios',
    ],
    cta: 'Más información',
    featured: true,
  },
  {
    name: 'Élite',
    price: '',
    cadence: 'Mensual',
    desc: 'Alto rendimiento y competencia.',
    features: [
      'Todo lo del plan Guerrero',
      'Equipos Kyorugi y Poomsae',
      'Preparación física personalizada',
      'Calendario de torneos',
      'Mentoría con el maestro',
    ],
    cta: 'Aspirar al podio',
    featured: false,
  },
]
