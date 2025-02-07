
import { Text } from './Text';

import type { ElementBuilder, HeroElement, UpdatesByType } from '../../../interfaces';


interface Props {
    element: Extract<ElementBuilder, HeroElement>;
    updateElement: (id: number, updates: UpdatesByType[keyof UpdatesByType]) => void
}

export const Hero = ({ element, updateElement }: Props): JSX.Element => {
    return (
        <>
            <Text
                element={element}
                //@ts-ignore
                updateElement={updateElement}
            />

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subtítulo</label>
                <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    type="text"
                    value={element.subtitle || ''}
                    onChange={(e) => updateElement(
                        element.id as number, { subtitle: e.target.value })}
                />
            </div>
        </>
    )
}
