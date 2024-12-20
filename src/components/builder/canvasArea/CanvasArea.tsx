import { Settings, Trash2 } from "lucide-react"

import { deviceWidths } from "../../../const"
import { useWebBuilderStore } from "../../../store/store"
import { ElementEditor } from "../../editor"
import { RenderElement } from "../../RenderElement"
import { GridContainer, Container } from "../../ui"

import type { DeviceType, ElementBuilder } from "../../../interfaces"


interface Props {
    selectedDevice: DeviceType
    isPreviewMode?: boolean
}
export const CanvasArea = ({ selectedDevice, isPreviewMode = false }: Props): JSX.Element => {

    const {
        elements,
        editingElement,
        removeElement,
        setEditingElement,
        updateElement,
        handleDrop,
        handleDragOver,
        handleDragLeave,
        isDraggingOver
    } = useWebBuilderStore();
    const resolution = deviceWidths[selectedDevice]

    const renderElementWithWrapper = (element: ElementBuilder): JSX.Element => {
        const isContainer = element.type === "container" || element.type === "grid-container";
        const isDraggingOverThis = isDraggingOver === element.id;

        const wrapperClasses = `
            relative group mb-6 p-6 bg-white rounded-xl shadow-sm
            border-2 transition-all duration-200
            ${isDraggingOverThis ? 'border-indigo-500 bg-indigo-50' : 'border-transparent hover:border-indigo-200'}
            ${isContainer ? 'min-h-[100px]' : ''}
        `;

        return (
            <div
                key={element.id}
                className={wrapperClasses}
                role="contentinfo"
                onDragLeave={handleDragLeave}
                onDragOver={(e) => handleDragOver(e, element.id || null)}
                onDrop={(e) => handleDrop(e, element.id || null)}
            >
                {!isPreviewMode && (
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 flex gap-2 transition-opacity duration-200">
                        <button
                            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                            onClick={() => setEditingElement(editingElement?.id === element.id
                                ? null : element)}
                        >
                            <Settings className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                            className="p-2 bg-red-100 rounded-lg hover:bg-red-200 transition-colors duration-200"
                            onClick={() => removeElement(element.id as number)}
                        >
                            <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                    </div>
                )}

                {element.type === "container" && (
                    <Container element={element}>
                        {element.children?.map(child => renderElementWithWrapper(child))}
                    </Container>
                )}
                {element.type === "grid-container" && (
                    <GridContainer element={element}>
                        {element.children?.map(child => renderElementWithWrapper(child))}
                    </GridContainer>
                )}
                {element.type !== "container" && element.type !== "grid-container" && (
                    <RenderElement element={element} />
                )}

                {editingElement?.id === element.id && (
                    <ElementEditor
                        element={element}
                        updateElement={updateElement}
                    />
                )}
            </div>
        );
    };
    return (
        <div
            className={`flex-1 p-8 overflow-auto bg-slate-100 ${resolution}`}
            role="contentinfo"
            onDragLeave={handleDragLeave}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e)}
        >
            {elements.length > 0 ? (
                elements.map(element => renderElementWithWrapper(element))
            ) : (
                <div className="text-center py-16 px-6 bg-white rounded-xl border-2 border-dashed border-gray-300 h-full flex justify-center items-center">
                    <p className="text-gray-500 text-lg">
                        Arrastra elementos aquí para construir tu página
                    </p>
                </div>
            )}
        </div>
    );
}
