
import { motion, AnimatePresence } from "framer-motion"
import { Settings, Trash2 } from "lucide-react"

import { deviceWidths } from "../../../const"
import { cn } from "../../../lib/utils"
import { useWebBuilderStore } from "../../../store/store"
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
        handleDrop,
        handleDragOver,
        handleDragLeave,
        editingElementId,
        setEditingElementId
    } = useWebBuilderStore();
    const resolution = deviceWidths[selectedDevice]

    const toggleIsEditing = (elementId: number) => {
        console.log
            ({ elementId })
        setEditingElementId(editingElementId === elementId ? null : elementId)
    }


    const renderElementWithWrapper = (element: ElementBuilder): JSX.Element => {
        const isContainer = element.type === "container" || element.type === "grid-container";
        const isEditing = editingElementId === element.id
        return (
            <div
                key={element.id}
                className={cn(
                    "relative group",
                    isContainer ? "h-full w-full" : "w-auto"
                )}
                role="contentinfo"
                onDragLeave={handleDragLeave}
                onDragOver={(e) => handleDragOver(e, element.id || null)}
                onDrop={(e) => handleDrop(e, element.id || null)}

            >
                {!isPreviewMode && (
                    <AnimatePresence>
                        {
                            isEditing && (
                                <motion.div
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="canvas-area"
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="absolute -left-1 -top-2 h-4 w-4 rounded-full bg-yellow-500" />
                                    <div className="absolute -right-1 -top-2 h-4 w-4 rounded-full bg-yellow-500" />
                                    <div className="absolute -left-1 -bottom-2 h-4 w-4 rounded-full bg-yellow-500" />
                                    <div className="absolute -right-1 -bottom-2 h-4 w-4 rounded-full bg-yellow-500" />
                                    <button
                                        className="canvas-area__buttons-settings"
                                        onClick={() =>
                                            setEditingElement(editingElement?.id === element.id
                                                ? null : element)}
                                    >
                                        <Settings className="w-4 h-4 text-gray-600 dark:text-slate-100" />
                                    </button>
                                    <button
                                        className="canvas-area__buttons-trash"
                                        onClick={() => {
                                            removeElement(element.id as number),
                                                setEditingElement(null)
                                        }}
                                    >
                                        <Trash2 className="canvas-area__buttons-trash-icon" />
                                    </button>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                )}

                {element.type === "container" && (
                    <Container
                        element={element}
                        toggleIsEditing={() => toggleIsEditing(element.id as number)}
                    >
                        {element.children?.map(child => renderElementWithWrapper(child))}
                    </Container>
                )}
                {element.type === "grid-container" && (
                    <GridContainer
                        element={element}
                        toggleIsEditing={() => toggleIsEditing(element.id as number)}
                    >
                        {element.children?.map(child => renderElementWithWrapper(child))}
                    </GridContainer>
                )}
                {element.type !== "container" && element.type !== "grid-container" && (
                    <RenderElement
                        element={element}

                        toggleIsEditing={() => toggleIsEditing(element.id as number)}
                    />
                )}
            </div>
        );
    };
    return (
        <div
            className={`flex-1 p-8 overflow-auto bg-slate-100 dark:bg-slate-800 ${resolution}`}
            role="contentinfo"
            onDragLeave={handleDragLeave}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e)}
        >
            {elements.length > 0 ? (
                elements.map(element => renderElementWithWrapper(element))
            ) : (
                <div className="text-center py-16 px-6 bg-white dark:bg-slate-900 rounded-xl border-2 border-dashed border-gray-300 h-full flex justify-center items-center">
                    <p className="text-gray-500 text-lg">
                        Arrastra elementos aquí para construir tu página
                    </p>
                </div>
            )}
        </div>
    );
}
