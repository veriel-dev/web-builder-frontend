import { create } from "zustand";
import { ElementBuilder, UpdatesByType } from "../interfaces";

type SetState = {
    (
        partial: WebBuilderStore | Partial<WebBuilderStore> | ((state: WebBuilderStore) => WebBuilderStore | Partial<WebBuilderStore>),
        replace?: false
    ): void;
    (state: WebBuilderStore | ((state: WebBuilderStore) => WebBuilderStore), replace: true): void;
};

type GetState = () => WebBuilderStore;

interface ElementsState {
    elements: ElementBuilder[];
}

interface ElementsActions {
    addElement: (element: ElementBuilder) => void;
    updateElement: (id: number, updates: UpdatesByType[keyof UpdatesByType]) => void;
    removeElement: (id: number) => void;
}

interface DragDropState {
    draggedElement: ElementBuilder | null;
}

interface DragDropActions {
    setDraggedElement: (element: ElementBuilder | null) => void;
    handleDragStart: (element: ElementBuilder) => void;
    handleDrop: (e: React.DragEvent) => void;
    handleDragOver: (e: React.DragEvent) => void;
}

interface EditorState {
    editingElement: ElementBuilder | null;
    selectedDevice: 'desktop' | 'tablet' | 'mobile';
}

interface EditorActions {
    setEditingElement: (element: ElementBuilder | null) => void;
    setSelectedDevice: (device: 'desktop' | 'tablet' | 'mobile') => void;
}

type WebBuilderState = ElementsState & DragDropState & EditorState;
type WebBuilderActions = ElementsActions & DragDropActions & EditorActions;
type WebBuilderStore = WebBuilderState & WebBuilderActions;

const createElementsSlice = (setState: SetState) => ({
    elements: [],
    addElement: (element: ElementBuilder) =>
        setState((state) => ({ elements: [...state.elements, element] })),
    updateElement: (id: number, updates: UpdatesByType[keyof UpdatesByType]) =>
        setState((state) => ({
            elements: state.elements.map((element) =>
                element.id === id ? { ...element, ...updates } : element
            )
        })),
    removeElement: (id: number) =>
        setState((state) => ({
            elements: state.elements.filter((element) => element.id !== id),
        }))
});

const createDragDropSlice = (setState: SetState, getState: GetState) => ({
    draggedElement: null,
    setDraggedElement: (element: ElementBuilder | null) =>
        setState({ draggedElement: element }),
    handleDragStart: (element: ElementBuilder) => {
        const { id, ...elementWithoutId } = element;
        setState({ draggedElement: elementWithoutId });
    },
    handleDrop: (e: React.DragEvent) => {
        e.preventDefault();
        const state = getState();
        if (state.draggedElement) {
            const newElement = {
                ...state.draggedElement,
                id: Date.now()
            };
            state.addElement(newElement);
            setState({ draggedElement: null });
        }
    },
    handleDragOver: (e: React.DragEvent) => {
        e.preventDefault();
    }
});

const createEditorSlice = (setState: SetState) => ({
    editingElement: null,
    selectedDevice: 'desktop' as const,
    setEditingElement: (element: ElementBuilder | null) =>
        setState({ editingElement: element }),
    setSelectedDevice: (device: 'desktop' | 'tablet' | 'mobile') =>
        setState({ selectedDevice: device })
});

export const useWebBuilderStore = create<WebBuilderStore>()((set, get) => ({
    ...createElementsSlice(set),
    ...createDragDropSlice(set, get),
    ...createEditorSlice(set)
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