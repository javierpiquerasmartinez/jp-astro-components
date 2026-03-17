# jp-astro-components

Una librería de componentes Astro reutilizables: typography, layout y content.

## Instalación

```bash
npm install jp-astro-components
```

> Requiere `astro >= 4.0.0` como peer dependency.

## Uso

```astro
---
import { Heading, Section, Article } from 'jp-astro-components';
---

<Section label="Mi sección">
  <Heading level={1}>Hola mundo</Heading>
  <Article>
    <p>Contenido del artículo...</p>
  </Article>
</Section>
```

## Componentes

### `<Heading>`

Renderiza un heading semántico (`h1`–`h6`) configurable.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` | Nivel del heading |
| `class` | `string` | — | Clase CSS adicional |

```astro
<Heading level={2}>Subtítulo</Heading>
```

### `<Section>`

Wrapper semántico `<section>` con soporte de `aria-label`.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `label` | `string` | — | Valor del `aria-label` |

```astro
<Section label="Sobre nosotros">
  <p>Contenido...</p>
</Section>
```

### `<Article>`

Wrapper semántico `<article>` con soporte de `aria-label`.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `label` | `string` | — | Valor del `aria-label` |

```astro
<Article label="Entrada del blog">
  <p>Contenido...</p>
</Article>
```

## Desarrollo

```bash
# Clonar y arrancar el servidor de docs
npm install
npm run dev
```

## Licencia

MIT
