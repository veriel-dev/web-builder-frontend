import type { ReactNode } from "react";

import type { deviceWidths } from "../const";
import type { LucideIcon } from "lucide-react";

type CommonProps = {
  id?: number;
  label?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  backgroundColor?: string;
  icon?: LucideIcon;
  children?: ElementBuilder[];
  text?: string;
  subtitle?: string;
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
  padding?: string;
  cols?: string;
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  objectFit?: string;
  textPosition?: string;
  margin?: string;
  rows?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  display?: string;
  borderRadius?: string;
  hover?: string;
  toggleIsEditing?: () => void;
};

type TextProps = {
  text: string;
  fontWeight: string;
};

type HeroSpecificProps = TextProps & {
  subtitle: string;
};

type ContainerSpecificProps = {
  direction: string;
  justify: string;
  align: string;
  gap: string;
  padding: string;
};

type GridContainerSpecificProps = {
  rows: string;
  cols: string;
  gap: string;
  padding: string;
};

type ImgSpecificProps = {
  src: string;
  alt: string;
  width: string;
  height: string;
  objectFit: string;
};
export type HeadingElement = CommonProps &
  TextProps & {
    type: "heading";
    textPosition: string;
    padding: string;
    margin: string;
    fontWeight: string;
    level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };

export type ParagraphElement = CommonProps &
  TextProps & {
    type: "paragraph";
  };

export type ButtonElement = CommonProps &
  TextProps & {
    display?: string,
    borderRadius?: string,
    hover?: string,
    type: "button";
  };

export type HeroElement = CommonProps &
  HeroSpecificProps & {
    type: "hero";
  };

export type ImgElement = CommonProps &
  ImgSpecificProps & {
    type: "img";
  };
export type ContainerElement = CommonProps &
  ContainerSpecificProps & {
    type: "container";
    children?: ElementBuilder[];
  };

export type ContainerGridElement = CommonProps &
  GridContainerSpecificProps & {
    type: "grid-container";
    children?: ElementBuilder[];
  };

// Props específicos para cada componente
export type BaseElementProps = Omit<CommonProps, "id" | "label" | "icon">;

export type HeadingProps = BaseElementProps & TextProps;

export type ParagraphProps = BaseElementProps & TextProps;

export type ButtonProps = BaseElementProps & TextProps;

export type HeroProps = BaseElementProps & HeroSpecificProps;

export type ContainerProps = BaseElementProps & ContainerSpecificProps;

export type ContainerGridProps = BaseElementProps & GridContainerSpecificProps;

export type ImgProps = BaseElementProps & ImgSpecificProps;

// Tipo unión para todos los elementos
export type ElementBuilder =
  | HeadingElement
  | ParagraphElement
  | ButtonElement
  | HeroElement
  | ContainerElement
  | ContainerGridElement
  | ImgElement;

// Tipos para actualizaciones
export type UpdatesByType = {
  heading: Partial<Omit<HeadingElement, "id" | "type">>;
  paragraph: Partial<Omit<ParagraphElement, "id" | "type">>;
  button: Partial<Omit<ButtonElement, "id" | "type">>;
  hero: Partial<Omit<HeroElement, "id" | "type">>;
  container: Partial<Omit<ContainerElement, "id" | "type">>;
  "grid-container": Partial<Omit<ContainerGridElement, "id" | "type">>;
  img: Partial<Omit<ImageBitmap, "id" | "type">>;
};

type SectionItem = {
  icon: ReactNode;
  label: string;
  preview: ReactNode;
  element: ElementBuilder;
};
export type Section = {
  id: "containers" | "elements" | "templates";
  title: string;
  items: SectionItem[];
};

export type Sections = Section[];

export type DeviceType = keyof typeof deviceWidths;
