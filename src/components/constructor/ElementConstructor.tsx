
import { useState } from "react"

import { Grid2X2, Heading1, Heart, Layout, Palette, Square, Type } from "lucide-react"

import { CategorySection } from "./categorySection/CategorySection"

import type { ElementBuilder, Sections } from "../../interfaces"


interface Props {
    handleDragStart: (element: ElementBuilder) => void
}


const sections: Sections = [
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
                    backgroundColor: "bg-transparent",
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
                    backgroundColor: "bg-transparent",
                }
            },
            {
                icon: <Square className="h-5 w-5" />,
                label: "Botón",
                preview: (
                    <div className="bg-indigo-100 h-6 w-24 rounded-md" />
                ),
                element: {
                    type: "button",
                    label: "Botón",
                    text: "Botón",
                    fontSize: "text-sm",
                    color: "text-white",
                    backgroundColor: "bg-indigo-600",
                }
            },
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
                    backgroundColor: "bg-indigo-600",
                }
            }
        ],
    }
]


export const ElementConstructor = ({ handleDragStart }: Props): JSX.Element => {

    type SectionId = 'containers' | 'elements';

    const [activeSection, setActiveSection] = useState<SectionId>('containers');

    const toggleSection = (sectionId: SectionId): void => setActiveSection(sectionId);

    return (
        <div className="w-72 border-r bg-white p-4">
            <div className="flex items-center space-x-2 mb-6">
                <Palette className="h-5 w-5 text-indigo-500" />
                <h2 className="text-lg font-semibold text-gray-700">Constructor</h2>
            </div>

            <div className="space-y-2">
                {sections.map((section) => (
                    <CategorySection
                        key={section.id}
                        handleDragStart={handleDragStart}
                        isOpen={activeSection === section.id}
                        section={section}
                        onToggle={() => toggleSection(section.id)}
                    />
                ))}
            </div>
        </div>
    )
}

