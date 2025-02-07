
import { useWebBuilderStore } from "../../../../store/store";

import type { ElementBuilder } from "../../../../interfaces"
import type { LucideIcon } from "lucide-react";


interface Props {
  label: string;
  element: ElementBuilder
  keyValue: keyof ElementBuilder
  iconType: LucideIcon
  icon: LucideIcon
  options: {
    value: string
    text: string
  }[],


}
export const Selector = ({
  label,
  element,
  keyValue,
  options,
  iconType: IconType,
  icon: Icon
}: Props) => {
  const { updateElement } = useWebBuilderStore()

  return (
    <div className="space-y-2">
      <label className="container-element-editor__selector-type">
        <IconType className="h-4 w-4" />
        {label}
      </label>
      <div className="relative">
        <select
          className="container-element-editor__selector-select"
          value={element[keyValue] as string}
          onChange={(e) => updateElement(
            element.id as number, { [keyValue]: e.target.value })}
        >
          {
            options.map(({ value, text }) => (
              <option key={value} value={value}>{text}</option>
            ))
          }
        </select>
        <Icon className="container-element-editor__selector-icon" />
      </div>
    </div>
  )
}
