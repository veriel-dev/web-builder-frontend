
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
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <IconType className="h-4 w-4" />
        {label}
      </label>
      <div className="relative">
        <select
          className="w-full py-2 px-3 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
        <Icon className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
    </div>
  )
}
