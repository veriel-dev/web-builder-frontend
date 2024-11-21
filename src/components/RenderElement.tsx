import { Paragraph, Button, Hero, Heading } from "./ui";

import type { ElementBuilder, HeadingProps, ParagraphProps, ButtonProps, HeroProps, } from "../interfaces";



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

export const RenderElement = ({ element }: RenderElementProps): JSX.Element | null => {
    const Component = ELEMENT_COMPONENTS[element.type as ElementType];

    if (!Component) { return null; }

    const { id: _id, type: _type, label: _label, icon: _icon, ...elementProps } = element;
    //@ts-expect-error
    return <Component {...elementProps} />;
};