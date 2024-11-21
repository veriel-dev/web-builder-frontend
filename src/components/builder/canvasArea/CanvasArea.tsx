import { Settings, Trash2 } from "lucide-react"
import { deviceWidths } from "../../../const"
import { DeviceType } from "../../../interfaces"
import { ElementEditor } from "../../editor"
import { RenderElement } from "../../RenderElement"
import { GridContainer, Container } from "../../ui"
import { useDragAndDrop, useWebBuilderStore } from "../../../store/store"


interface Props {
    activeDevice: DeviceType
    isPreviewMode?: boolean
}
export const CanvasArea = ({ activeDevice, isPreviewMode = false }: Props) => {

    const {
        elements,
        editingElement,
        removeElement,
        setEditingElement,
        updateElement
    } = useWebBuilderStore();

    const { handleDrop, handleDragOver } = useDragAndDrop();

    const resolution = deviceWidths[activeDevice]
    return (
        <div
            className={`flex-1 p-8 overflow-auto bg-slate-100 ${resolution}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {elements.map((element) => (
                <div
                    key={element.id}
                    className="relative group mb-6 p-6 bg-white rounded-xl shadow-sm border-2 border-transparent hover:border-indigo-200 transition-all duration-200"
                >
                    {
                        !isPreviewMode && (

                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 flex gap-2 transition-opacity duration-200">
                                <button
                                    onClick={() => setEditingElement(editingElement?.id === element.id ? null : element)}
                                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                                >
                                    <Settings className="w-4 h-4 text-gray-600" />
                                </button>
                                <button
                                    onClick={() => removeElement(element.id!)}
                                    className="p-2 bg-red-100 rounded-lg hover:bg-red-200 transition-colors duration-200"
                                >
                                    <Trash2 className="w-4 h-4 text-red-600" />
                                </button>
                            </div>
                        )
                    }
                    {
                        element.type == "container" && (<Container element={element} />)
                    }
                    {
                        element.type == "grid-container" && (<GridContainer element={element} />)
                    }
                    {
                        element.type != "container" && element.type != "grid-container" && (<RenderElement element={element} />)
                    }

                    {editingElement?.id === element.id && <ElementEditor element={element} updateElement={updateElement} />}
                </div>
            ))}
            {elements.length === 0 && (

                <div className="text-center py-16 px-6 bg-white rounded-xl border-2 border-dashed border-gray-300 h-full flex justify-center items-center">
                    <p className="text-gray-500 text-lg">
                        Arrastra elementos aquí para construir tu página
                    </p>
                </div>
            )}
        </div>

    )
}
