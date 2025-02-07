import { useCallback, useEffect, useState } from "react";

import { useWebBuilderStore } from '../../../../store/store';

import type { ElementBuilder } from "../../../../interfaces";

interface Props {
  element: ElementBuilder
  keyValue: keyof ElementBuilder
}
const durationMap: { [key: number]: string } = {
  0: "duration-0",
  75: "duration-75",
  100: "duration-100",
  150: "duration-150",
  200: "duration-200",
  300: "duration-300",
  500: "duration-500",
  700: "duration-700",
  1000: "duration-1000"
}
const scaleMap: { [key: number]: string } = {
  0: "scale-0",
  50: "scale-50",
  75: "scale-75",
  90: "scale-90",
  95: "scale-95",
  100: "scale-100",
  105: "scale-105",
  110: "scale-110",
  125: "scale-125",
  150: "scale-150",
}
const translateYMap: { [key: number]: string } = {
  0: "-translate-y-0", /* 0x */
  1: "-translate-y-1", /* 4px */
  2: "-translate-y-2", /* 8px */
  3: "-translate-y-3", /* 12px*/
  4: "-translate-y-4", /* 16px */
  5: "-translate-y-5", /* 20px */
  6: "-translate-y-6", /* 24px */
}
const rotateMap: { [key: number]: string } = {
  0: "rotate-0",
  1: "rotate-1",
  2: "rotate-2",
  3: "rotate-3",
  6: "rotate-6",
  12: "rotate-12",
  45: "rotate-45",
  90: "rotate-90",
  180: "rotate-180"

}
type TransformType = "scale" | "translateY" | "rotate";

export const SelectorHoverButton = ({ element, keyValue }: Props) => {
  const { updateElement } = useWebBuilderStore()
  const [duration, setDuration] = useState<number>(300);
  const [translateY, setTranslateY] = useState<number>(4);
  const [rotate, setRotate] = useState<number>(0);

  const [transformType, setTransformType] = useState<TransformType>('scale');
  const [scaleValue, setScaleValue] = useState<number>(125);

  const transformOptions = [
    { value: 'scale', label: 'Scale' },
    { value: 'translateY', label: 'Translate Y' },
    { value: 'rotate', label: 'Rotate' }
  ];
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<number>>,
    keyValueMap: {
      [key: number]: string;
    }
  ) => {
    const newValue = Number(e.target.value);
    const closestValue = Object.keys(keyValueMap).reduce((prev, curr) =>
      Math.abs(Number(curr) - newValue) < Math.abs(Number(prev) - newValue) ? curr : prev
    );
    setState(Number(closestValue));
  }
  const generateAnimationClasses = useCallback(() => {
    const durationClass = durationMap[duration];
    /* Validación para considerar el tipo de animación */
    const scaleClass = `hover:${scaleMap[scaleValue]}`
    const translateClass = `hover:${translateYMap[translateY]}`
    const rotateClass = `hover:${rotateMap[rotate]}`
    return `transform transition-all ${durationClass} ${scaleClass} ${translateClass} ${rotateClass}`
  }, [duration, scaleValue, rotate, translateY])

  useEffect(() => {
    const animationClass = generateAnimationClasses()
    updateElement(element.id as number, { [keyValue]: animationClass });
  }, [
    duration,
    scaleValue, translateY, rotate, element.id, keyValue, updateElement, generateAnimationClasses])

  return (
    <div className="selector-animation">
      {/* Panel de control */}
      <div className="space-y-4 mt-2 mb-2">
        {/* Control de transición */}
        <div className="space-y-2">
          <label className="selector-radius-button__label">
            <span>Duración de la transición</span>
            <span className="text-slate-400">{duration}ms</span>
          </label>
          <input
            className="selector-radius-button__input"
            max="1000"
            min="0"
            type="range"
            value={duration}
            onChange={(e) => handleChange(e, setDuration, durationMap)}
          />
        </div>
        {/* Control de transform */}
        <div className="space-y-2">
          <label className="selector-radius-button__label">Tipo de transform</label>
          <div className="grid grid-cols-3 gap-2">
            {transformOptions.map((option) => (
              <button
                key={option.value}
                className={`px-3 py-2 text-sm rounded-lg ${transformType === option.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-neutral-800 text-slate-300'
                  }`}
                onClick={() => setTransformType(option.value as TransformType)}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between" style={{ marginTop: "20px" }}>
            {
              transformType === "scale" && (
                <>
                  <input
                    className="selector-radius-button__input"
                    max={150}
                    min={0}
                    type="range"
                    value={scaleValue}
                    onChange={(e) => handleChange(e, setScaleValue, scaleMap)}
                  />
                  <span className="ml-3 text-slate-400 text-sm">
                    {`${scaleValue}%`}
                  </span>
                </>
              )
            }
            {
              transformType === "translateY" && (
                <>
                  <input
                    className="selector-radius-button__input"
                    max={6}
                    min={0}
                    type="range"
                    value={translateY}
                    onChange={(e) => setTranslateY(Number(e.target.value))
                    }
                  />
                  <span className="ml-3 text-slate-400 text-sm">
                    {`${translateY * 4}px`}
                  </span>
                </>
              )
            }
            {
              transformType === "rotate" && (
                <>
                  <input
                    className="selector-radius-button__input"
                    max={180}
                    min={0}
                    type="range"
                    value={rotate}
                    onChange={(e) => handleChange(e, setRotate, rotateMap)}
                  />
                  <span className="ml-3 text-slate-400 text-sm">
                    {`${rotate}º`}
                  </span>
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}


