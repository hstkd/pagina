# Henry Sigchos Taekwondo 태권도

Web de la academia **Henry Sigchos Taekwondo** (Quito y Cumbayá, desde 2020),
construida con **React + Vite**. Diseño moderno y visualmente cuidado: paleta
azul marino y plata tomada del logo, fondo ambiental reactivo, animaciones al
hacer scroll, reserva por WhatsApp y totalmente responsive.

## ✨ Características

- **Hero** inmersivo con animaciones escalonadas (framer-motion) y carácter
  coreano de fondo.
- **Contadores animados** de estadísticas al entrar en pantalla.
- **Los 5 principios** del Taekwondo (cortesía, integridad, perseverancia,
  autocontrol, espíritu indomable).
- **Programas** por edad y nivel: TaekwonKids, Infantiles, Cadetes, Senior,
  Élite y equipos de competencia (Kyorugi y Poomsae).
- **Camino del cinturón** visual, de blanco a negro.
- **Sedes** de Quito y Cumbayá con enlace a Google Maps.
- **Maestros**, **horario semanal**, **testimonios** y **planes**.
- **Formulario** de reserva que abre WhatsApp con el mensaje listo, más botón
  flotante de WhatsApp.
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
