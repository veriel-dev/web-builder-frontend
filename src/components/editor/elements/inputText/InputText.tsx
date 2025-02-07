import { Type } from "lucide-react";

import { useWebBuilderStore } from "../../../../store/store"

import type { ElementBuilder } from "../../../../interfaces"

interface Props {
  label: string
  element: ElementBuilder
  keyValue: keyof ElementBuilder
}
export const InputText = ({ label, element, keyValue }: Props) => {

  const { updateElement } = useWebBuilderStore()
  return (
    <div className="space-y-2">
      <label className="container-element-editor__selector-type">
        <Type className="h-4 w-4" />
        {label}
      </label>
      <input
        className="container-element-editor__selector-select"
        type="text"
        value={element[keyValue] as string || ""}
        onChange={(e) => updateElement(element.id as number, { [keyValue]: e.target.value })}
      />
    </div>
  )
}
