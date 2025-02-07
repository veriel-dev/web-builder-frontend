import {
  AlignCenter,
  AlignHorizontalDistributeCenter,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Maximize,
  MoveHorizontal,
} from "lucide-react";

export const selectores = {
  direction: [
    { value: "flex-row", text: "Horizontal", icon: MoveHorizontal },
    {
      value: "flex-col",
      text: "Vertical",
      icon: MoveHorizontal,
      rotate: "rotate-90",
    },
  ],
  align: [
    { value: "items-start", icon: AlignLeft },
    { value: "items-center", icon: AlignLeft, rotate: "rotate-90" },
    { value: "items-end", icon: AlignLeft, rotate: "rotate-90" },
  ],
  justify: [
    { value: "justify-normal", icon: AlignJustify },
    { value: "justify-start", icon: AlignLeft },
    { value: "justify-end", icon: AlignRight },
    { value: "justify-center", icon: AlignCenter },
    { value: "justify-between", icon: AlignHorizontalSpaceBetween },
    { value: "justify-around", icon: AlignHorizontalSpaceAround },
    { value: "justify-evenly", icon: AlignHorizontalDistributeCenter },
    { value: "justify-stretch", icon: Maximize },
  ],
  gap: [
    { value: "gap-2", text: "Mínimo" },
    { value: "gap-4", text: "Medio" },
    { value: "gap-6", text: "Máximo" },
  ],
  padding: [
    { value: "p-2", text: "Pequeño" },
    { value: "p-4", text: "Mediano" },
    { value: "p-6", text: "Grande" },
  ],
  fontSize: [
    { value: "text-xs", text: "Tamaño XS" },
    { value: "text-sm", text: "Tamaño SM" },
    { value: "text-base", text: "Tamaño M" },
    { value: "text-lg", text: "Tamaño LG" },
    { value: "text-xl", text: "Tamaño XL" },
    { value: "text-2xl", text: "Tamaño 2XL" },
    { value: "text-3xl", text: "Tamaño 3XL" },
    { value: "text-4xl", text: "Tamaño 4XL" },
  ],
  fontWeight: [
    { value: "font-thin", text: "Thin" },
    { value: "font-extralight", text: "Extra Light" },
    { value: "font-light", text: "Light" },
    { value: "font-normal", text: "Normal" },
    { value: "font-medium", text: "Medium" },
    { value: "font-semibold", text: "Semi Bold" },
    { value: "font-bold", text: "Bold" },
    { value: "font-extrabold", text: "Extra Bold" },
    { value: "font-black", text: "Black" },
  ]
};
