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
    { value: "gap-0", text: "Gap-0 (0px)" },
    { value: "gap-2", text: "Gap-2 (8px)" },
    { value: "gap-4", text: "Gap-4 (16px)" },
    { value: "gap-6", text: "Gap-6 (24px)" },
  ],
  padding: [
    { value: "p-0", text: "Padding-0 (0px)" },
    { value: "p-2", text: "Padding-2 (8px)" },
    { value: "p-4", text: "Padding-4 (16px)" },
    { value: "p-6", text: "Padding-6 (24px)" },
  ],
  fontSize: [
    { value: "text-xs", text: "text-xs (12px)" },
    { value: "text-sm", text: "text-sm (14px)" },
    { value: "text-base", text: "text-base (16px)" },
    { value: "text-lg", text: "text-lg (18px)" },
    { value: "text-xl", text: "text-xl (20px)" },
    { value: "text-2xl", text: "text-2xl (24px)" },
    { value: "text-3xl", text: "text-3xl (30px)" },
    { value: "text-4xl", text: "text-4xl (36px)" },
  ],
};
