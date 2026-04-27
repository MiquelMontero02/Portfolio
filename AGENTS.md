1. Jerarquía de Interfaz (UI Hierarchy)
El modelo debe seguir estrictamente el patrón de descomposición Vista > Sección > Componente:

Vistas (Views): Contenedores de alto nivel asociados a una ruta. No contienen lógica de negocio ni estilos complejos; solo orquestan secciones.

Secciones (Sections): Divisiones lógicas de una vista (ej. HeroSection, FeaturesSection). Son las encargadas de pasar datos a los componentes.

Componentes (Components): La unidad mínima funcional.

Encapsulamiento: Cada componente debe ser autónomo.

Estilos: Cada componente tendrá su propio archivo de estilos (CSS/SCSS Modules) para evitar fugas de estilo (style bleeding).

Lógica: El comportamiento específico de la UI reside aquí.

2. Estructura de Carpetas (Folder Structure)
La estructura de carpetas debe seguir el siguiente patrón:

```
src/
├── assets/
│   └── images/           # Imágenes estáticas
├── components/          # Componentes Vue
│   ├── common/         # Componentes reutilizables (Button, Input, Modal, etc.)
│   ├── footer/        # Componentes de pie de página
│   ├── layout/        # Componentes de layout (Header, Sidebar, etc.)
│   └── navbar/        # Componentes de navegación
│       └── sections/  # Secciones específicas de vistas
│           └── [feature]/
├── composables/         # Lógica reutilizable (Vue 3 Composition API)
├── constants/         # Constantes de la aplicación
├── router/            # Configuración de rutas
├── services/          # Lógica de negocio y llamadas HTTP
├── styles/            # Estilos globales y variables SCSS
│   ├── _variables.scss
│   └── main.scss
├── types/             # Tipos TypeScript
├── utils/             # Funciones helper
└── views/            # Vistas asociadas a rutas
```

Reglas:
- No usar .js para lógica de negocio, usar .ts
- Nombrar archivos en PascalCase (RepositoryCard.vue)
- Componentes en carpetas por contexto (footer/, navbar/, sections/)
- Services en carpeta services/ (no api/)
- Tipos en carpeta types/
- Estilos globales en styles/

3. Capa de Lógica: Filosofía de Servicios
Para garantizar la legibilidad y compatibilidad, se prohíbe el uso de lógica pesada o llamadas directas a red dentro de los componentes:

Separación de Preocupaciones: Toda manipulación de datos, cálculos complejos o peticiones HTTP debe residir en archivos services/.

Inyección: Los componentes consumen los métodos de los servicios. Esto facilita el testing y permite cambiar la lógica interna sin tocar la UI.

3. Gestión de Contenido e Internacionalización (i18n)
Queda estrictamente prohibido el hard-coding de texto en el HTML/JSX:

Fuentes Dinámicas: Todo texto debe provenir de una API o de un archivo JSON local de traducción.

Implementación:

Uso de claves de traducción (ej. t('home.welcome_message')).

La estructura del JSON debe ser modular para facilitar la escalabilidad del i18n.

4. Estados de Carga: Skeleton Loading
Todo contenido que se cargue de una fuente externa (APIs, endpoints, datos asíncronos) debe implementar un estado de carga con skeleton para mejorar la UX.

Componente Reutilizable: Crear componentes <Skeleton/> genéricos o específicos por tipo (texto, imagen, card, etc.).

Timing: Mostrar skeleton después de ~150-300ms de espera para evitar parpadeo.

Accesibilidad: aria-busy="true" y aria-label="Cargando contenido".

Fallback: En caso de error, mostrar mensaje apropiado (no skeleton infinito).

Transiciones: Implementar fade suave entre skeleton y contenido final.

Ejemplo de estructura:

```vue
<template>
  <div v-if="loading" class="skeleton-card">
    <Skeleton variant="image" />
    <Skeleton variant="text" :lines="2" />
  </div>
  <div v-else-if="error">
    <ErrorMessage :message="error" />
  </div>
  <Content v-else :data="data" />
</template>
```

5. Estilo Visual: Cyberpunk Arcade
Todo el proyecto debe seguir un estilo visual Cyberpunk Arcade para mantener coherencia:

Paleta de Colores:
- Neón Cyan (#00ffff) - Color principal
- Neón Pink (#ff00ff) - Color de acento
- Neón Yellow (#ffff00) - Para valores/estadísticas
- Neón Green (#39ff14) - Para texto terminal
- Fondo Oscuro (#0a0a0f) - Background principal
- Panel (#1a1a2e) - Para cards/contenedores

Efectos Obligatorios:
- Scanlines: Efecto de líneas CRT superpuestas (repeating-linear-gradient)
- Border Glow: Bordes con box-shadow neón en hovers
- Text Glow: text-shadow en títulos y enlaces
- Flicker/Blink: Animaciones de parpadeo en elementos clave

Fuentes:
- Títulos: 'Press Start 2P' (Google Fonts) - Estilo pixel
- Cuerpo: 'VT323' (Google Fonts) - Estilo terminal

Mixins Disponibles (en styles/_arcade-mixins.scss):
- @mixin neon-glow($color) - Efecto glow en bordes
- @mixin text-glow($color) - Efecto glow en texto
- @mixin scanline-bg - Fondo con efecto scanlines
- @mixin arcade-grid - Grid de fondo retro
- @mixin blink - Animación de parpadeo
- @mixin flicker - Animación de parpadeo rápido
- @mixin arcade-hover - Hover con glow y transform
- @mixin arcade-button - Botón estilo arcade
- @mixin terminal-text - Texto estilo terminal
- @mixin pixel-border - Borde con efecto glow

Implementación en Componentes:
- Todos los componentes deben usar variables de styles/_variables.scss
- Usar los mixins de styles/_arcade-mixins.scss para efectos coherentes
- Mantener consistencia con la paleta de colores definida