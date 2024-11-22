

import { useWebBuilderStore } from "../../../../store/store"

import type { ElementBuilder } from "../../../../interfaces"
import type { LucideIcon } from "lucide-react"

interface Props {
  iconType: LucideIcon
  title: string
  element: ElementBuilder
  cols: string
  selector: {
    value: string
    text?: string
    icon: LucideIcon
    rotate?: string
  }[],
  keyValue: keyof ElementBuilder
}
export const SelectorFlex = ({ iconType: IconType, title, element, cols = "grid-cols-2", selector, keyValue }: Props) => {
  const { updateElement } = useWebBuilderStore()

  const getActiveClass = (value: string) => {
    return element[keyValue] === value
      ? "bg-indigo-50 text-indigo-600"
      : "bg-gray-50 text-gray-600"
  }


  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <IconType className="w-4 h-4" />
        {title}
      </label>
      <div key={keyValue} className={`grid ${cols} gap-2`}>
        {
          selector.map(item => (
            <button
              key={`${keyValue}-${item.value}`}
              className={`flex items-center justify-center gap-2 px-3 py-2 ${getActiveClass(item.value)} rounded-md hover:bg-indigo-100 transition-colors`}
              onClick={() => updateElement(
                element.id as number, { [keyValue]: item.value })}
            >
              {
                item.rotate
                  ? (<item.icon className={`w-4 h-4 ${item.rotate}`} />)
                  : (<item.icon className="w-4 h-4" />)
              }
              {
                item.text && (
                  <span className="text-sm">{item.text}</span>
                )
              }
            </button>
          ))
        }

      </div>
    </div>
  )
}
