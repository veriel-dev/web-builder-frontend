
import { ElementBuilder, HeroElement, UpdatesByType } from '../../../interfaces';
import { Text } from './Text';
interface Props {
    element: Extract<ElementBuilder, HeroElement>;
    updateElement: (id: number, updates: UpdatesByType[keyof UpdatesByType]) => void
}

export const Hero = ({ element, updateElement }: Props) => {
    return (
        <>
            <Text
                element={element}
                updateElement={updateElement}
            />

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subtítulo</label>
                <input
                    type="text"
                    value={element.subtitle || ''}
                    onChange={(e) => updateElement(element.id!, { subtitle: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>
        </>
    )
}
