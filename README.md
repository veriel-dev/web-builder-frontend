# Constructor Web Moderno

Un constructor de páginas web flexible e intuitivo con funcionalidad de arrastrar y soltar, construido con React, TypeScript y Zustand. Este proyecto permite a los usuarios crear diseños web responsivos utilizando un enfoque moderno basado en componentes, con soporte para contenedores flex y grid.

## Características

- 📱 Vista previa de diseño responsivo (Escritorio, Tablet, Móvil)
- 🎨 Interfaz de arrastrar y soltar
- 📦 Sistema de contenedores flexible
  - Contenedores Flex con dirección y alineación personalizables
  - Contenedores Grid con columnas ajustables
- 🧩 Componentes básicos
  - Encabezados
  - Párrafos
  - Botones
  - Secciones Hero
- 💾 Gestión de estado con Zustand
- 🔄 Funcionalidad de Deshacer/Rehacer
- 👁️ Modo de vista previa en vivo
- 💻 Opción de exportar código

## Stack Tecnológico

- **React**: Framework de frontend
- **TypeScript**: Seguridad de tipos y mejor experiencia de desarrollo
- **Zustand**: Gestión de estado
- **Tailwind CSS**: Estilos y utilidades
- **Lucide React**: Sistema de iconos

## Estructura del Proyecto

```
src/
├── components/
│   └── ui/
│       └── card.tsx
├── interfaces/
│   └── index.ts
├── store/
│   └── index.tsx
└── pages/
    └── ModernBuilder.tsx
```

## Gestión de Estado

El proyecto utiliza Zustand con un patrón de slices para una mejor organización del estado:

- **Slice de Elementos**: Gestiona los elementos de la página y sus modificaciones
- **Slice de Arrastrar y Soltar**: Maneja la funcionalidad de arrastrar y soltar
- **Slice del Editor**: Controla el estado del editor y la configuración de vista previa de dispositivos

## Tipos de Elementos

El constructor soporta varios tipos de elementos:

```typescript
type ElementBuilder =
  | HeadingElement
  | ParagraphElement
  | ButtonElement
  | HeroElement 
  | ContainerElement
  | ContainerGridElement;
```

Cada tipo de elemento tiene sus propias propiedades personalizables:

- **Propiedades Base**
  - id
  - tipo
  - etiqueta
  - tamaño de fuente
  - color
  - color de fondo
  - icono

- **Propiedades específicas de Contenedores**
  - dirección
  - justificación
  - alineación
  - espaciado
  - relleno

## Comenzando

1. Instalar dependencias:
```bash
npm install
# o
yarn install
```

2. Iniciar el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

3. Abrir el navegador y navegar a `http://localhost:3000`

## Uso

1. **Añadir Elementos**
   - Arrastra elementos desde la barra lateral izquierda al lienzo
   - Los elementos pueden soltarse en contenedores o en el lienzo principal

2. **Editar Elementos**
   - Haz clic en el icono de configuración de cualquier elemento para abrir su panel de propiedades
   - Modifica texto, estilos y propiedades de diseño

3. **Gestión de Contenedores**
   - Usa contenedo
