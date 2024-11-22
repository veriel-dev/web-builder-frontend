import { useWebBuilderStore } from "../../../../store/store";

import type { ElementBuilder } from "../../../../interfaces"


interface Props {
  label: string;
  element: ElementBuilder
  keyValue: keyof ElementBuilder
  options: {
    value: string
    text: string
  }[]

}
export const Selector = ({ label, element, keyValue, options }: Props) => {
  const { updateElement } = useWebBuilderStore()

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
    </div>
  )
}
