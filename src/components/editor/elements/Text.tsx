import type { ElementBuilder, UpdatesByType } from "../../../interfaces"



type ElementWithText = Extract<ElementBuilder, { text: string }>;

interface Props {
    element: ElementWithText;
    updateElement: (id: number, updates: UpdatesByType[keyof UpdatesByType]) => void;
}
export const Text = ({ element, updateElement }: Props): JSX.Element => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Texto</label>

            <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                type="text"
                value={element.text || ''}
                onChange={(e) => updateElement(element.id as number, { text: e.target.value })}
            />
        </div>
    )
}
