
import { cn } from "../../../../lib/utils"
import { useWebBuilderStore } from "../../../../store/store"

import type { ElementBuilder } from "../../../../interfaces"

interface Props {
  label: string
  element: ElementBuilder
  keyValue: keyof ElementBuilder
  colorOptions: { value: string, label: string }[] | { value: string }[]
}

export const ColorPicker = ({ label, element, keyValue, colorOptions }: Props) => {
  const { updateElement } = useWebBuilderStore()
  return (
    <>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="w-full">
        <button className="w-full px-3 py-2 border border-gray-300 rounded-md flex items-center gap-2 mb-2">
          {
            keyValue === "backgroundColor" && (
              <>
                <div className={cn(`${element.backgroundColor}`, "w-6 h-6 rounded-md border border-gray-200")} />
                <p>{element.backgroundColor}</p>
              </>
            )
          }
          {
            keyValue === "color" && (
              <>
                <div className={cn(`bg-${element[keyValue]?.split("text-")[1]}`, "w-6 h-6 rounded-md border border-gray-200")} />
                <p>{element[keyValue]}</p>
              </>
            )
          }
        </button>
        <div className='custom-scrollable-content'>

          {
            keyValue === "backgroundColor" && (
              <>
                {
                  colorOptions.map((item) =>
                    <button
                      key={item.value}
                      className={cn(item.value, "w-6 h-6 rounded-md border border-gray-200")}
                      onClick={() => updateElement(
                        element.id as number, { [keyValue]: item.value })}
                    />)
                }
              </>
            )
          }
          {
            keyValue === "color" && (
              <>
                {

                  colorOptions.map((item) =>
                    <button
                      key={item.value}
                      className={cn(`bg-${item.value?.split("text-")[1]}`, "w-6 h-6 rounded-md border border-gray-200")}
                      onClick={() => updateElement(
                        element.id as number, { [keyValue]: item.value })}
                    />)
                }
              </>
            )
          }
        </div>
      </div></>
  )
}
