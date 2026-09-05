# Mi Portafolio

Portafolio personal construido con React, TypeScript y Vite. Muestra proyectos mediante componentes reutilizables y prepara la futura integración de Yavi, un asistente de IA para navegar el sitio.

## Tecnologías

- React 19
- TypeScript
- Vite
- Oxlint

## Requisitos

- Node.js 20 o superior
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

La aplicación estará disponible en la dirección mostrada por Vite, normalmente `http://localhost:5173`.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Comprueba TypeScript y genera la versión de producción. |
| `npm run lint` | Ejecuta el análisis estático con Oxlint. |
| `npm run preview` | Sirve localmente la compilación de producción. |

## Estructura

```text
src/
  components/  Componentes de interfaz
  data/        Datos estáticos de los proyectos
  hooks/       Hooks de React
  services/    Servicios e integraciones externas
```

## Yavi y seguridad

Yavi está planificado como un asistente de IA. La conexión con el proveedor se implementará mediante un backend intermediario; no hay una integración de API activa todavía.

- Las claves del proveedor de IA deben existir solo en variables de entorno del servidor.
- Nunca subas archivos `.env`, claves, tokens, contraseñas ni historiales de sesión a GitHub.
- Cuando se implemente, cada acción solicitada por Yavi se validará contra una lista cerrada antes de ejecutarse.

La configuración de desarrollo del agente se encuentra en `.opencode/agents/backend-conexion.md`. Es documentación de trabajo y no se ejecuta en el sitio publicado.
