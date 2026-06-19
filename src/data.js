// Contenido del sitio centralizado para facilitar la edición.

export const BRAND = {
  name: 'Dojang Élite',
  korean: '태권도',
  tagline: 'Academia de Taekwondo',
  phone: '+34 600 123 456',
  email: 'hola@dojangelite.es',
  address: 'Calle del Tigre Blanco 7, Madrid',
  instagram: '@dojangelite',
}

export const STATS = [
  { value: 18, suffix: '+', label: 'Años formando campeones' },
  { value: 1200, suffix: '+', label: 'Alumnos graduados' },
  { value: 34, suffix: '', label: 'Medallas nacionales' },
  { value: 6, suffix: '', label: 'Maestros cinturón negro' },
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
    title: 'Pequeños Tigres',
    text: 'Psicomotricidad, coordinación y valores a través del juego. La iniciación perfecta.',
    points: ['Disciplina lúdica', 'Coordinación motriz', 'Confianza y respeto'],
    accent: 'gold',
  },
  {
    tag: '8–14 años',
    title: 'Infantil & Juvenil',
    text: 'Técnica formal, formas (poomsae) y combate ligero en un entorno seguro y motivador.',
    points: ['Técnica y poomsae', 'Combate controlado', 'Concentración escolar'],
    accent: 'red',
    featured: true,
  },
  {
    tag: '+15 años',
    title: 'Adultos',
    text: 'Ponte en forma, libera estrés y aprende defensa personal real a tu propio ritmo.',
    points: ['Fuerza y flexibilidad', 'Defensa personal', 'Cardio de alto impacto'],
    accent: 'gold',
  },
  {
    tag: 'Élite',
    title: 'Equipo de Competición',
    text: 'Entrenamiento de alto rendimiento para deportistas que buscan el podio nacional.',
    points: ['Preparación física', 'Estrategia de combate', 'Calendario de torneos'],
    accent: 'red',
  },
]

export const BELTS = [
  { name: 'Blanco', color: '#f4f4f6', textDark: true, level: 'Inicio · Pureza' },
  { name: 'Amarillo', color: '#f5b14c', textDark: true, level: 'La tierra' },
  { name: 'Verde', color: '#2fae6b', textDark: false, level: 'El crecimiento' },
  { name: 'Azul', color: '#2f6fd8', textDark: false, level: 'El cielo' },
  { name: 'Rojo', color: '#e0142a', textDark: false, level: 'El peligro' },
  { name: 'Negro', color: '#101014', textDark: false, level: 'Maestría · Dan' },
]

export const INSTRUCTORS = [
  {
    name: 'Maestro Daniel Sáenz',
    rank: '6º Dan · Director técnico',
    bio: 'Ex seleccionado nacional. 25 años formando competidores de élite y campeones de carácter.',
    initials: 'DS',
  },
  {
    name: 'Maestra Lucía Romero',
    rank: '4º Dan · Infantil',
    bio: 'Especialista en pedagogía deportiva infantil. Convierte el tatami en un lugar de crecimiento.',
    initials: 'LR',
  },
  {
    name: 'Maestro Kim Jae-won',
    rank: '5º Dan · Combate',
    bio: 'Entrenador de combate olímpico formado en Seúl. Disciplina técnica de raíz coreana.',
    initials: 'KJ',
  },
]

export const SCHEDULE = [
  { day: 'Lunes', slots: ['17:00 Tigres', '18:00 Infantil', '20:00 Adultos'] },
  { day: 'Martes', slots: ['18:00 Juvenil', '20:00 Competición'] },
  { day: 'Miércoles', slots: ['17:00 Tigres', '18:00 Infantil', '20:00 Adultos'] },
  { day: 'Jueves', slots: ['18:00 Juvenil', '20:00 Competición'] },
  { day: 'Viernes', slots: ['18:00 Defensa personal', '20:00 Combate libre'] },
  { day: 'Sábado', slots: ['10:00 Poomsae', '11:30 Entreno abierto'] },
]

export const TESTIMONIALS = [
  {
    text: 'Mi hija llegó tímida y hoy es cinturón verde con una seguridad increíble. El equipo es excepcional.',
    name: 'Marta Giménez',
    role: 'Madre de alumna',
  },
  {
    text: 'Empecé con 38 años sin haber hecho deporte. Un año después estoy en la mejor forma de mi vida.',
    name: 'Carlos Vidal',
    role: 'Alumno adultos',
  },
  {
    text: 'La preparación del equipo de competición es de otro nivel. Conseguí mi primera medalla nacional.',
    name: 'Aitana López',
    role: 'Equipo élite',
  },
]

export const PLANS = [
  {
    name: 'Iniciación',
    price: '39',
    cadence: '/mes',
    desc: 'Para empezar tu camino marcial.',
    features: ['2 clases / semana', 'Acceso a poomsae', 'Cinturón blanco incluido', 'Seguro deportivo'],
    cta: 'Empezar',
    featured: false,
  },
  {
    name: 'Guerrero',
    price: '55',
    cadence: '/mes',
    desc: 'El plan más elegido por nuestros alumnos.',
    features: [
      'Clases ilimitadas',
      'Combate y defensa personal',
      'Exámenes de grado incluidos',
      'Acceso a sala de musculación',
      'Eventos y seminarios',
    ],
    cta: 'Hazte Guerrero',
    featured: true,
  },
  {
    name: 'Élite',
    price: '89',
    cadence: '/mes',
    desc: 'Alto rendimiento y competición.',
    features: [
      'Todo lo del plan Guerrero',
      'Equipo de competición',
      'Preparación física personalizada',
      'Calendario de torneos',
      'Mentoría con el director',
    ],
    cta: 'Aspirar al podio',
    featured: false,
  },
]
