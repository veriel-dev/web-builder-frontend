import { LucideIcon } from "lucide-react";
// Propiedades base comunes para todos los elementos
type CommonProps = {
  id?: number;
  label: string;
  fontSize: string;
  color: string;
  backgroundColor: string;
  icon: LucideIcon;
};

type TextProps = {
  text: string;
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
  direction: string;
  cols: 'grid-cols-2';
  align: string;
  gap: string;
  padding: string;
};

// Elements 

export type HeadingElement = CommonProps & TextProps & {
  type: "heading";
};

export type ParagraphElement = CommonProps & TextProps & {
  type: "paragraph";
};

export type ButtonElement = CommonProps & TextProps & {
  type: "button";
};

export type HeroElement = CommonProps & HeroSpecificProps & {
  type: "hero";
};

export type ContainerElement = CommonProps & ContainerSpecificProps & {
  type: "container";
};

export type ContainerGridElement = CommonProps & GridContainerSpecificProps & {
  type: "grid-container";
};


// Props específicos para cada componente
export type BaseElementProps = Omit<CommonProps, "id" | "label" | "icon">;

export type HeadingProps = BaseElementProps & TextProps;

export type ParagraphProps = BaseElementProps & TextProps;

export type ButtonProps = BaseElementProps & TextProps;

export type HeroProps = BaseElementProps & HeroSpecificProps;


// Tipo unión para todos los elementos
export type ElementBuilder =
  | HeadingElement
  | ParagraphElement
  | ButtonElement
  | HeroElement 
  | ContainerElement
  | ContainerGridElement;
  
// Tipos para actualizaciones
export type UpdatesByType = {
  heading: Partial<Omit<HeadingElement, "id" | "type">>;
  paragraph: Partial<Omit<ParagraphElement, "id" | "type">>;
  button: Partial<Omit<ButtonElement, "id" | "type">>;
  hero: Partial<Omit<HeroElement, "id" | "type">>;
  container: Partial<Omit<ContainerElement, "id" | "type">>;
  "grid-container": Partial<Omit<ContainerGridElement, "id" | "type">>;
};
