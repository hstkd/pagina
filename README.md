# Dojang Élite — Academia de Taekwondo 태권도

Web premium para una academia de Taekwondo, construida con **React + Vite**.
Diseño moderno y visualmente cuidado: estética marcial en negro profundo con
acentos carmesí y oro, fondo ambiental reactivo, animaciones al hacer scroll y
totalmente responsive.

## ✨ Características

- **Hero** inmersivo con animaciones escalonadas (framer-motion) y carácter
  coreano de fondo.
- **Contadores animados** de estadísticas al entrar en pantalla.
- **Los 5 principios** del Taekwondo (cortesía, integridad, perseverancia,
  autocontrol, espíritu indomable).
- **Programas** por edad y nivel: Pequeños Tigres, Infantil & Juvenil, Adultos
  y Equipo de Competición.
- **Camino del cinturón** visual, de blanco a negro.
- **Maestros**, **horario semanal**, **testimonios** y **planes de precios**.
- **Formulario** de reserva de clase de prueba con estado de confirmación.
- Fondo con malla de gradientes reactiva al ratón, rejilla y grano.
- Accesible: respeta `prefers-reduced-motion`, navegación por teclado y
  semántica HTML.

## 🚀 Puesta en marcha

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
```

## 🗂️ Estructura

```
src/
├── App.jsx              # composición de secciones
├── App.css             # estilos de los componentes
├── index.css           # sistema de diseño (variables, utilidades)
├── data.js             # todo el contenido editable en un solo sitio
├── hooks/useReveal.js  # animaciones de revelado al hacer scroll
└── components/         # Navbar, Hero, Stats, Tenets, Programs, Belts,
                        # Instructors, Schedule, Testimonials, Pricing,
                        # CTA, Footer, Background
```

## ✏️ Personalización

Casi todo el contenido (nombre, contacto, programas, precios, maestros,
horarios, testimonios) vive en [`src/data.js`](src/data.js). Los colores y la
tipografía se controlan con las variables CSS de [`src/index.css`](src/index.css).
