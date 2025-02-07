import { useState } from "react";

import { useWebBuilderStore } from "../../../../store/store";

import type { ElementBuilder } from "../../../../interfaces";

interface Props {
  label: string;
  element: ElementBuilder
  keyValue: keyof ElementBuilder
}

const borderRadiusValues = [
  { label: "rounded-none", value: 0 },
  { label: "rounded-sm", value: 2 },
  { label: "rounded", value: 4 },
  { label: "rounded-md", value: 6 },
  { label: "rounded-lg", value: 8 },
  { label: "rounded-xl", value: 12 },
  { label: "rounded-2xl", value: 16 },
  { label: "rounded-3xl", value: 24 },
];

export const SelectorRadiusButton = ({ label, element, keyValue }: Props) => {
  const { updateElement } = useWebBuilderStore()
  const [valueRadius, setValueRadius] = useState(
    borderRadiusValues.find((item) => item.label === element[keyValue] as string)?.value || 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setValueRadius(newValue)
    const newLabel = borderRadiusValues.find((item) => item.value === newValue)?.label || "rounded-none";
    updateElement(element.id as number, { [keyValue]: newLabel });
  }

  return (
    <div className="selector-radius-button">
      <div className="space-y-2">
        <label className="selector-radius-button__label">
          {label}
        </label>
        <div className="flex items-center space-x-3">
          <input
            className="selector-radius-button__input"
            max={24}
            min={0}
            step={valueRadius!! >= 16 ? 8 : valueRadius! >= 8 ? 4 : 2}
            type="range"
            value={valueRadius}
            onChange={handleChange}
          />
          <div
            className="selector-radius-button__input-value"
          >
            {valueRadius} px
          </div>
        </div>
      </div>
    </div>
  )
}
