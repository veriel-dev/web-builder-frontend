
import { Paintbrush } from "lucide-react"

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
    <div className="space-y-2">
      <label className="color-picker__icon">
        <Paintbrush className="w-4 h-4" />
        {label}
      </label>
      <div className="relative">
        <button className="color-picker__text">
          {
            keyValue === "backgroundColor" && (
              <>
                <div className={cn(`${element.backgroundColor}`, "color-picker__button")} />
                <p className="color-picker__button-text">{element.backgroundColor}</p>
              </>
            )
          }
          {
            keyValue === "color" && (
              <>
                <div className={cn(`bg-${element[keyValue]?.split("text-")[1]}`, "color-picker__button")} />
                <p className="color-picker__button-text">{element[keyValue]}</p>
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
      </div>
    </div>
  )
}
