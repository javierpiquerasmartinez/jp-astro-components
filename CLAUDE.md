# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Description

`jp-astro-components` is an Astro component library published to npm.
It provides reusable UI components (typography, layout, content) for Astro projects.

The repository contains two things in one:
1. **The library** (`src/`) — what gets published to npm
2. **The docs site** (`docs/`) — an Astro site that demonstrates all components

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Arranca el servidor de desarrollo del sitio de docs |
| `npm run build:lib` | Compila los tipos TypeScript a `dist/` (tsup) |
| `npm run build:docs` | Construye el sitio de docs en `docs/dist/` |
| `npm run build` | Construye librería + docs |
| `npm run lint` | Linta archivos TypeScript y Astro |
| `npm run lint:fix` | Auto-corrige errores de lint |
| `npm run format` | Formatea todos los archivos con Prettier |
| `npm run format:check` | Comprueba el formato sin escribir |
| `npm run test` | Ejecuta los tests de Vitest una vez |
| `npm run test:watch` | Ejecuta Vitest en modo watch |

## Architecture

### Library (`src/`) — lo que se publica en npm
- `src/index.ts` — barrel file; re-exporta todos los componentes y tipos
- `src/components/<category>/ComponentName.astro` — componente Astro
- `src/components/<category>/ComponentName.types.ts` — interfaz TypeScript de Props

### Docs site (`docs/`) — NO se publica en npm
- `docs/astro.config.mjs` — config de Astro con alias de Vite
- `docs/src/layouts/` — layouts base
- `docs/src/pages/` — una página por componente/categoría

### Cómo funciona el alias durante desarrollo
El sitio de docs importa desde `'jp-astro-components'` (igual que un consumer real).
Durante desarrollo, un alias de Vite en `docs/astro.config.mjs` resuelve ese import
directamente a `../src/index.ts`, sin necesidad de hacer build de la librería.

## Adding a New Component

1. Crear `src/components/<category>/MyComponent.types.ts` con la interfaz Props
2. Crear `src/components/<category>/MyComponent.astro`
3. Añadir los exports a `src/index.ts`
4. Añadir una página demo en `docs/src/pages/`

## Naming Conventions

- Archivos de componente: PascalCase (`Heading.astro`, `Section.astro`)
- Archivos de tipos: PascalCase con sufijo `.types.ts`
- Prefijo CSS: `jp-` (ej. `jp-heading`, `jp-section`, `jp-article`)
- Categorías de componentes: `typography/`, `layout/`, `content/`

## Build & Publishing

### Cómo funciona el build
- Los archivos `.astro` se distribuyen **tal cual** desde `src/` — no se compilan
- Solo `src/index.ts` y los `.types.ts` se compilan a `dist/` (tipos TypeScript)
- El campo `"files"` en `package.json` controla qué va a npm: `src/`, `dist/`, `README.md`

### Workflow de publicación en npm
1. `npm login` (solo la primera vez)
2. `npm whoami` — verificar sesión
3. `npm version patch|minor|major` — bumps la versión y crea un git tag
4. `npm publish --dry-run` — verificar qué archivos se publicarían
5. `npm publish` — publicar (el script `prepublishOnly` hace lint+test+build automáticamente)

### Semver
- `patch` (0.1.0 → 0.1.1): bug fixes
- `minor` (0.1.0 → 0.2.0): nueva funcionalidad, compatible con versiones anteriores
- `major` (0.1.0 → 1.0.0): cambios que rompen la compatibilidad
