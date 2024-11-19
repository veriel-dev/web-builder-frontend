
import { ElementBuilder, UpdatesByType } from "../../interfaces";
import { Container, GridContainer } from "./elements";
import { Hero } from "./elements/Hero";
import { Text } from "./elements/Text";

export const ElementEditor = ({ element, updateElement }: { element: ElementBuilder, updateElement: (id: number, updates: UpdatesByType[keyof UpdatesByType]) => void }) => {
    const isContainer = element.type === 'container' || element.type === 'grid-container';
    console.log({isContainer})
    return (
        <div className="absolute top-full left-0 mt-2 p-4 bg-white rounded-lg shadow-xl border border-gray-200 z-10 w-72">
            <div className="space-y-4">
                {
                    element.type === "paragraph" && (
                        <Text
                            element={element}
                            updateElement={updateElement}
                        />
                    )
                }
                {
                    element.type === "heading" && (
                        <Text
                            element={element}
                            updateElement={updateElement}
                        />
                    )
                }
                {element.type === 'hero' && (
                    <Hero
                        element={element}
                        updateElement={updateElement}
                    />
                )}
                {
                    element.type == "container" && (
                        <Container 
                            element={element} 
                            updateElement={updateElement} />
                    )
                }
                {
                    element.type == "grid-container" && (
                        <GridContainer 
                            element={element} 
                            updateElement={updateElement} 
                        />
                    )
                }
            </div>
        </div>
    );
}
