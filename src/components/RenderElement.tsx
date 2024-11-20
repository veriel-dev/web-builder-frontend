import { ElementBuilder, HeadingProps, ParagraphProps, ButtonProps, HeroProps, } from "../interfaces";
import { Paragraph, Button, Hero, Heading } from "./ui";


export type ElementTypeToProps = {
    heading: HeadingProps;
    paragraph: ParagraphProps;
    button: ButtonProps;
    hero: HeroProps;
};

// Define los tipos de elementos disponibles
export type ElementType = keyof ElementTypeToProps;

const ELEMENT_COMPONENTS = {
    heading: Heading,
    paragraph: Paragraph,
    button: Button,
    hero: Hero,
} as const;

interface RenderElementProps {
    element: ElementBuilder;
}

export const RenderElement = ({ element }: RenderElementProps) => {
    // Asegurarse de que el tipo es una key válida de ELEMENT_COMPONENTS
    const Component = ELEMENT_COMPONENTS[element.type as ElementType];

    if (!Component) return null;

    // Extraer las props que no queremos pasar al componente
    const { id, type, label, icon, ...elementProps } = element;

    // @ts-expect-error: Las props son tipadas correctamente en tiempo de ejecución
    return <Component {...elementProps} />;
};