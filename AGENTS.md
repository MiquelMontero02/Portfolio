1. Jerarquía de Interfaz (UI Hierarchy)
El modelo debe seguir estrictamente el patrón de descomposición Vista > Sección > Componente:

Vistas (Views): Contenedores de alto nivel asociados a una ruta. No contienen lógica de negocio ni estilos complejos; solo orquestan secciones.

Secciones (Sections): Divisiones lógicas de una vista (ej. HeroSection, FeaturesSection). Son las encargadas de pasar datos a los componentes.

Componentes (Components): La unidad mínima funcional.

Encapsulamiento: Cada componente debe ser autónomo.

Estilos: Cada componente tendrá su propio archivo de estilos (CSS/SCSS Modules) para evitar fugas de estilo (style bleeding).

Lógica: El comportamiento específico de la UI reside aquí.

2. Capa de Lógica: Filosofía de Services
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