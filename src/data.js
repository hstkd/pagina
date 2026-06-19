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

// sede: 'quito' = solo disponible en la sede de Quito.
// El resto de horarios (tarde) son iguales en Quito y Cumbayá.
const MORNING = { time: '07:00', name: 'Todas las edades', sede: 'quito' }

export const SCHEDULE = [
  { day: 'Lunes', slots: [MORNING, { time: '17:00', name: 'TaekwonKids' }, { time: '18:00', name: 'Infantiles' }, { time: '20:00', name: 'Senior' }] },
  { day: 'Martes', slots: [MORNING, { time: '18:00', name: 'Cadetes' }, { time: '20:00', name: 'Élite' }] },
  { day: 'Miércoles', slots: [MORNING, { time: '17:00', name: 'TaekwonKids' }, { time: '18:00', name: 'Infantiles' }, { time: '20:00', name: 'Senior' }] },
  { day: 'Jueves', slots: [MORNING, { time: '18:00', name: 'Cadetes' }, { time: '20:00', name: 'Élite' }] },
  { day: 'Viernes', slots: [MORNING, { time: '18:00', name: 'Kyorugi' }, { time: '20:00', name: 'Poomsae' }] },
  { day: 'Sábado', slots: [{ time: '10:00', name: 'Equipos' }, { time: '11:30', name: 'Entreno abierto' }] },
]

export const TESTIMONIALS = [
  {
    text: 'Mi hija llegó tímida y hoy entrena con una seguridad increíble. El profe Henry es excepcional con los niños.',
    name: 'Marta Giménez',
    role: 'Madre de alumna',
  },
  {
    text: 'Empecé de adulto sin haber hecho deporte y un año después estoy en la mejor forma de mi vida.',
    name: 'Carlos Vidal',
    role: 'Programa Senior',
  },
  {
    text: 'La preparación del equipo de competencia es de otro nivel. Conseguí mi primera medalla.',
    name: 'Aitana López',
    role: 'Equipo Kyorugi',
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
