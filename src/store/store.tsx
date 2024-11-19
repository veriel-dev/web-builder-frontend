import { ElementBuilder, UpdatesByType } from "../interfaces"
import { create } from "zustand";


interface WebBuilderState {
    elements: ElementBuilder[];
    draggedElement: ElementBuilder | null;
    editingElement: ElementBuilder | null;
    addElement: (element: ElementBuilder) => void;
    updateElement: (
        id: number,
        updates: UpdatesByType[keyof UpdatesByType]
    ) => void;
    removeElement: (id: number) => void;
    setDraggedElement: (element: ElementBuilder | null) => void;
    setEditingElement: (element: ElementBuilder | null) => void;
}

export const useWebBuilderStore = create<WebBuilderState>((set) => ({
    elements: [],
    draggedElement: null,
    editingElement: null,

    addElement: (element) =>
        set((state) => ({
            elements: [...state.elements, element]
        })),
    updateElement: (id, updates) =>
        set((state) => ({
            elements: state.elements.map((element) => element.id === id
                ? { ...element, ...updates }
                : element)
        })),
    removeElement: (id) =>
        set((state) => ({
            elements: state.elements.filter((element) => element.id !== id),
            editingElement: state.editingElement?.id === id ? null : state.editingElement,
        })),
    setDraggedElement: (element) =>
        set({ draggedElement: element }),
    setEditingElement: (element) =>
        set({ editingElement: element }),
}));

export const useDragAndDrop = () => {
    const { draggedElement, setDraggedElement, addElement } = useWebBuilderStore();

    const handleDragStart = (element: ElementBuilder) => {
        const { id, ...elementWithoutId } = element;
        setDraggedElement(elementWithoutId);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (draggedElement) {
            const newElement = {
                ...draggedElement,
                id: Date.now()
            };
            addElement(newElement);
            setDraggedElement(null);
        }
    };
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };
    return {
        draggedElement,
        handleDragStart,
        handleDrop,
        handleDragOver
    };

}