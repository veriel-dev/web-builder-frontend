

import { Button, Container, GridContainer } from "./elements";
import { Heading } from "./elements/Heading";
import { Hero } from "./elements/Hero";
import { Text } from "./elements/Text";

import type { ElementBuilder, UpdatesByType } from "../../interfaces";

interface Props {
    element: ElementBuilder,
    updateElement: (id: number, updates: UpdatesByType[keyof UpdatesByType]) => void
}
export const ElementEditor = (
    { element, updateElement }: Props): JSX.Element => {
    return (
        <div className="container-element-editor">
            <div className="space-y-4">
                {
                    element.type === "button" && (
                        <Button
                            element={element}
                        />
                    )
                }
                {
                    element.type === "paragraph" && (
                        <Text
                            element={element}
                        />
                    )
                }
                {
                    element.type === "heading" && (
                        <Heading
                            element={element}
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
                    element.type === "container" && (
                        <Container
                            element={element}
                        />
                    )
                }
                {
                    element.type === "grid-container" && (
                        <GridContainer
                            element={element}
                        />
                    )
                }
            </div>
        </div>
    );
}
