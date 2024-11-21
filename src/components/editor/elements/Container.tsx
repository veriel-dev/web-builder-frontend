
import type { ContainerElement, ElementBuilder, UpdatesByType } from '../../../interfaces'

interface Props {
    element: Extract<ElementBuilder, ContainerElement>;
    updateElement: (id: number, updates: UpdatesByType[keyof UpdatesByType]) => void;
}
export const Container = ({ element, updateElement }: Props): JSX.Element => {
    return (
        <div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dirección
                </label>
                <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={element.direction}
                    onChange={(e) => updateElement(
                        element.id as number, { direction: e.target.value })}
                >
                    <option value="row">Horizontal</option>
                    <option value="column">Vertical</option>
                </select>
            </div>

            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alineación
                </label>
                <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={element.align}
                    onChange={(e) => updateElement(element.id as number, { align: e.target.value })}
                >
                    <option value="start">Inicio</option>
                    <option value="center">Centro</option>
                    <option value="end">Fin</option>
                </select>
            </div>

            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Justificación
                </label>
                <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={element.justify}
                    onChange={(e) => updateElement(
                        element.id as number, { justify: e.target.value })}
                >
                    <option value="start">Inicio</option>
                    <option value="center">Centro</option>
                    <option value="end">Fin</option>
                    <option value="between">Entre elementos</option>
                </select>
            </div>

            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Espacio entre elementos
                </label>
                <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={element.gap}
                    onChange={(e) => updateElement(element.id as number, { gap: e.target.value })}
                >
                    <option value="gap-0">Sin espacio</option>
                    <option value="gap-2">Pequeño</option>
                    <option value="gap-4">Medio</option>
                    <option value="gap-6">Grande</option>
                </select>
            </div>

            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Padding
                </label>
                <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={element.padding}
                    onChange={(e) => updateElement(
                        element.id as number, { padding: e.target.value })}
                >
                    <option value="p-0">Sin padding</option>
                    <option value="p-2">Pequeño</option>
                    <option value="p-4">Medio</option>
                    <option value="p-6">Grande</option>
                </select>
            </div>
        </div>
    )
}
