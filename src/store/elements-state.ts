import { ElementBuilder, UpdatesByType } from "../interfaces";
import { SetState } from "./store";

export interface ElementsState {
    elements: ElementBuilder[];
}

export interface ElementsActions {
    addElement: (element: ElementBuilder) => void;
    updateElement: (id: number, updates: UpdatesByType[keyof UpdatesByType]) => void;
    removeElement: (id: number) => void;
}

export const createElementsSlice = (setState: SetState) => ({
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