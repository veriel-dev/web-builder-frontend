
import { ContainerElement, ElementBuilder, UpdatesByType } from '../../../interfaces'
interface Props {
    element: Extract<ElementBuilder, ContainerElement>;
    updateElement: (id: number, updates: UpdatesByType[keyof UpdatesByType]) => void;
}
export const Container = ({ element, updateElement }: Props) => {
    return (
        <>
            <div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dirección
                </label>
                <select
                    value={element.direction}
                    onChange={(e) => updateElement(element.id!, { direction: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
                    value={element.align}
                    onChange={(e) => updateElement(element.id!, { align: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
                    value={element.justify}
                    onChange={(e) => updateElement(element.id!, { justify: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
                    value={element.gap}
                    onChange={(e) => updateElement(element.id!, { gap: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
                    value={element.padding}
                    onChange={(e) => updateElement(element.id!, { padding: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                    <option value="p-0">Sin padding</option>
                    <option value="p-2">Pequeño</option>
                    <option value="p-4">Medio</option>
                    <option value="p-6">Grande</option>
                </select>
            </div>
        </div>
        </>
    )
}
