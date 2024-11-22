import {
  Clipboard,
  Grid3X3,
  Heading,
  HeartIcon,
  Table2,
  Text,
} from "lucide-react";

const containerElemenst = [
  {
    type: "grid-container",
    label: "Grid",
    cols: "grid-cols-2",
    gap: "gap-4",
    padding: "p-4",
    backgroundColor: "bg-transparent",
    icon: Grid3X3,
  },
  {
    type: "container",
    label: "Flex",
    direction: "flex-row",
    justify: "justify-start",
    align: "items-start",
    gap: "gap-4",
    padding: "p-4",
    backgroundColor: "bg-transparent",
    icon: Table2,
  },
];
const singleElements = [
  {
    type: "heading",
    label: "Heading",
    text: "Título de ejemplo",
    fontSize: "text-3xl",
    color: "text-gray-900",
    backgroundColor: "bg-white",
    icon: Heading,
  },
  {
    type: "paragraph",
    label: "Text",
    text: "Texto de párrafo de ejemplo",
    fontSize: "text-base",
    color: "text-gray-600",
    backgroundColor: "bg-white",
    icon: Text,
  },
  {
    type: "button",
    label: "Botón",
    text: "Botón",
    fontSize: "text-sm",
    color: "text-white",
    backgroundColor: "bg-indigo-600",
    icon: Clipboard,
  },
  {
    type: "hero",
    label: "Hero",
    text: "Título Principal",
    subtitle: "Subtítulo descriptivo",
    fontSize: "text-4xl",
    color: "text-white",
    backgroundColor: "bg-indigo-600",
    icon: HeartIcon,
  },
];

const templates = {
  landing: [
    {
      type: "hero",
      text: "Construye tu futuro hoy",
      subtitle: "La mejor plataforma",
      fontSize: "text-5xl",
      color: "text-white",
      backgroundColor: "bg-indigo-600",
    },
    {
      type: "paragraph",
      text: "Texto de ejemplo para la landing",
      fontSize: "text-lg",
      color: "text-gray-600",
      backgroundColor: "bg-white",
    },
  ],
  about: [
    {
      type: "heading",
      text: "Sobre Nosotros",
      fontSize: "text-4xl",
      color: "text-gray-900",
      backgroundColor: "bg-white",
    },
    {
      type: "paragraph",
      text: "Contenido sobre nosotros...",
      fontSize: "text-lg",
      color: "text-gray-600",
      backgroundColor: "bg-white",
    },
  ],
};

export const deviceWidths = {
  desktop: "w-full",
  tablet: "w-[768px]",
  mobile: "w-[375px]",
} as const;

export const containerClasses =
  "relative min-h-[100px] w-full rounded-lg border-2 transition-colors duration-200 border-dashed border-gray-200";
export { singleElements, containerElemenst, templates };
