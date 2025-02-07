import { Grid2X2, Layout, Heading1, Type, Heart, Image, Code } from "lucide-react";

import type { Sections } from "../../interfaces";

export const sections: Sections = [
  {
    id: 'containers',
    title: "Contenedores",
    items: [
      {
        icon: <Grid2X2 className="h-5 w-5" />,
        label: "Grid",
        preview: (
          <div className="grid grid-cols-2 gap-1 w-full">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-indigo-100 h-3 rounded" />
            ))}
          </div>
        ),
        element: {
          type: 'grid-container',
          label: 'Grid',
          cols: 'grid-cols-1',
          rows: "grid-rows-1",
          gap: 'gap-4',
          padding: 'p-4',
          backgroundColor: 'bg-transparent',
          color: "text-gray-400",
          fontSize: "tex-base",
          children: []
        }
      },
      {
        icon: <Layout className="h-5 w-5" />,
        label: "Flex",
        preview: (
          <div className="flex gap-1 w-full">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex-1 bg-indigo-100 h-3 rounded" />
            ))}
          </div>
        ),
        element: {
          type: 'container',
          label: 'Flex',
          direction: 'flex-row',
          justify: 'justify-start',
          align: 'items-start',
          gap: 'gap-4',
          padding: 'p-4',
          backgroundColor: 'bg-transparent',
          children: []
        }
      }
    ],
  },
  {
    id: 'elements',
    title: "Elementos Simples",
    items: [
      {
        icon: <Heading1 className="h-5 w-5" />,
        label: "Heading",
        preview: (
          <div className="space-y-1 w-full">
            <div className="bg-indigo-100 h-4 w-3/4 rounded" />
            <div className="bg-gray-100 h-2 w-1/2 rounded" />
          </div>
        ),
        element: {
          type: "heading",
          label: "Heading",
          text: "Título de ejemplo",
          fontSize: "text-3xl",
          color: "text-gray-900",
          fontWeight: "font-normal",
          backgroundColor: "bg-transparent",
          textPosition: "text-center",
          padding: "p-4",
          margin: "m-0",
          level: "h1"
        }
      },
      {
        icon: <Type className="h-5 w-5" />,
        label: "Text",
        preview: (
          <div className="space-y-1 w-full">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-gray-100 h-2 w-full rounded" />
            ))}
          </div>
        ),
        element: {
          type: "paragraph",
          label: "Text",
          text: "Texto de párrafo de ejemplo",
          fontSize: "text-base",
          color: "text-gray-600",
          fontWeight: "font-normal",
          backgroundColor: "bg-transparent",
        }
      },
      {
        icon: <Code className="h-5 w-5" />,
        label: "Button",
        preview: (
          <div className="bg-indigo-100 h-6 w-24 rounded-md" />
        ),
        element: {
          type: "button",
          display: "flex",
          align: "items-center",
          gap: "gap-2",
          justify: 'justify-center',
          label: "Button",
          text: "Button",
          fontSize: "text-sm",
          color: "text-white",
          backgroundColor: "bg-blue-500",
          fontWeight: "font-normal",
          padding: "px-4 py-2",
          borderRadius: "rounded",
          hover: "hover:scale-125 transform transition-all duration-700 "
        }
      },
      {
        icon: <Image className="h-5 w-5" />,
        label: "Img",
        preview: (
          <div className="w-full h-16 bg-indigo-100 rounded-md flex items-center justify-center">
            <Image className="w-6 h-6 text-indigo-400" />
          </div>
        ),
        element: {
          type: "img",
          label: "Imagen",
          src: "/api/placeholder/400/300",
          alt: "Imagen de ejemplo",
          width: "w-full",
          height: "h-48",
          objectFit: "cover",
          backgroundColor: "bg-transparent",
        }
      }
    ],
  },
  {
    id: "templates",
    title: "Elementos Pre-Definidos",
    items: [
      {
        icon: <Heart className="h-5 w-5" />,
        label: "Hero",
        preview: (
          <div className="space-y-1 w-full">
            <div className="bg-indigo-100 h-4 w-3/4 rounded" />
            <div className="bg-gray-100 h-2 w-full rounded" />
            <div className="bg-gray-100 h-2 w-2/3 rounded" />
          </div>
        ),
        element: {
          type: "hero",
          label: "Hero",
          text: "Título Principal",
          subtitle: "Subtítulo descriptivo",
          fontSize: "text-4xl",
          color: "text-white",
          fontWeight: "font-normal",
          backgroundColor: "bg-indigo-600",
        }
      },
    ]
  }
]
