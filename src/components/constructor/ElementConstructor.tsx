
import { useState } from "react"

import { Palette } from "lucide-react"

import { CategorySection } from "./categorySection/CategorySection"
import { sections } from "./sections"

import type { ElementBuilder } from "../../interfaces"


interface Props {
    handleDragStart: (element: ElementBuilder) => void
}



export const ElementConstructor = ({ handleDragStart }: Props): JSX.Element => {

    type SectionId = 'containers' | 'elements' | 'templates';

    const [activeSection, setActiveSection] = useState<SectionId>('containers');

    const toggleSection = (sectionId: SectionId): void => setActiveSection(sectionId);

    return (
        <div className="element-constructor">
            <div className="element-constructor__header">
                <Palette className="element-constructor__header-icon" />
                <h2 className="element-constructor__header-title">Constructor</h2>
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

