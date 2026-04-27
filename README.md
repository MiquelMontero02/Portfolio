# Portfolio - Miquel Àngel Montero Pazmiño

Portfolio personal con estilo Cyberpunk Arcade desarrollado con Vue 3 y TypeScript.

## 🚀 Tecnologías

| Categoría | Herramienta |
|----------|-------------|
| Framework | Vue 3.5 (Composition API) |
| Lenguaje | TypeScript |
| Build Tool | Vite 7 |
| Router | Vue Router 4 |
| Estilos | SCSS |
| HTTP Client | Axios |

## 📁 Estructura del Proyecto

```
src/
├── assets/
│   └── images/              # Imágenes estáticas
├── components/
│   ├── footer/              # Footer
│   ├── navbar/              # Navegación
│   │   ├── NavBar.vue
│   │   └── NavBarBtn.vue
│   └── sections/
│       ├── cv/              # Secciones del CV
│       │   ├── PersonalInfo.vue
│       │   ├── ContactLinks.vue
│       │   ├── ExperienceSection.vue
│       │   └── SkillsSection.vue
│       └── repositories/    # Repositorios GitHub
│           ├── RepositoryCard.vue
│           └── RepositorySections.vue
├── data/                    # Datos JSON
│   ├── personal.json
│   ├── social.json
│   ├── experience.json
│   └── skills.json
├── router/
│   └── index.ts             # Configuración de rutas
├── services/                # Lógica de negocio
│   ├── axiosConfig.ts
│   └── githubService.ts
├── styles/                  # Estilos globales
│   ├── _variables.scss      # Variables Cyberpunk
│   ├── _arcade-mixins.scss  # Mixins reutilizables
│   └── main.scss
├── types/                   # Tipos TypeScript
│   ├── cv.ts
│   └── github.ts
├── views/                   # Vistas
│   ├── HomeView.vue         # Landing page
│   ├── CvView.vue           # Curriculum Vitae
│   └── ProjectsView.vue     # Proyectos GitHub
├── App.vue
└── main.ts
```

## 🎨 Estilo Visual

- **Tema:** Cyberpunk Arcade
- **Colores neón:** Cyan (#00ffff), Pink (#ff00ff), Yellow (#ffff00), Green (#39ff14)
- **Fondos:** Oscuro (#0a0a0f), Paneles (#1a1a2e)
- **Fuentes:** Press Start 2P (títulos), VT323 (cuerpo)
- **Efectos:** Scanlines CRT, Glow en hovers, Blink animations

## 📄 Secciones

### `/` - Home
Landing page con enlaces a CV y Proyectos.

### `/cv` - Curriculum Vitae
- Información personal
- Enlaces a GitHub y LinkedIn
- Experiencia laboral
- Skills técnicos y blandos

### `/projects` - Proyectos
Lista de repositorios de GitHub.

## 🛠️ Scripts

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Preview producción
npm run preview
```

## 📦 Instalación

```bash
npm install
npm run dev
```

## 🔧 Configuración

### Variables de entorno
Crear `.env` si necesitas personalizar:
```
VITE_GITHUB_USERNAME=MiquelMontero02
```

### GitHub API Token
Para evitar límites de rate, añadir token en `src/services/axiosConfig.ts`.

## 👤 Autor

**Miquel Àngel Montero Pazmiño**  
Ingeniero Informático - UIB