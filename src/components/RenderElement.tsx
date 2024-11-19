/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ElementBuilder, HeadingProps, ParagraphProps, ButtonProps, HeroProps } from "../interfaces";
import { Paragraph, Button, Hero, Heading } from "./ui";

type ElementType = ElementBuilder['type'];

type ElementTypeToProps = {
    heading: HeadingProps;
    paragraph: ParagraphProps;
    button: ButtonProps;
    hero: HeroProps;
};


const ELEMENT_COMPONENTS: {
    [K in ElementType]: React.ComponentType<ElementTypeToProps[K]>
} = {
    heading: Heading,
    paragraph: Paragraph,
    button: Button,
    hero: Hero
};
export const RenderElement = (element: ElementBuilder) => {
    const Component = ELEMENT_COMPONENTS[element.type];
    if (!Component) return null;
    
    const { type, ...elementProps } = element;
    //@ts-expect-error
    return <Component {...elementProps} />;
};