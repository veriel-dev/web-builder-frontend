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
    updateElement: (id: number, updates: UpdatesByType[keyof UpdatesByType]) => {
        setState((state) => {
            const updateElementsRecursively = (elements: ElementBuilder[]): ElementBuilder[] => {
                return elements.map((element: ElementBuilder): ElementBuilder => {
                    if (element.id === id) {
                        return { ...element, ...updates };
                    }
                    if (
                        (element.type === 'container' || element.type === 'grid-container') &&
                        Array.isArray(element.children)
                    ) {
                        return {
                            ...element,
                            children: updateElementsRecursively(element.children)
                        } as ElementBuilder;
                    }
    
                    return element;
                });
            };
            const updatedElements = updateElementsRecursively(state.elements);
            return { elements: updatedElements };
        });
    },
    removeElement: (id: number) => {
        setState((state) => {
            const filterElementsRecursively = (elements: ElementBuilder[]): ElementBuilder[] => {
                return elements.map((element: ElementBuilder): ElementBuilder | false => {
                    if (
                        (element.type === 'container' || element.type === 'grid-container') &&
                        Array.isArray(element.children)
                    ) {
                        const filteredChildren = filterElementsRecursively(element.children);
                        
                        if (element.id === id) return false;
                        
                        return {
                            ...element,
                            children: filteredChildren
                        } as ElementBuilder;
                    }
                    if (element.id === id) {
                        return false;
                    }
                    
                    return element;
                }).filter((element): element is ElementBuilder => element !== false);
            };
    
            const newElements = filterElementsRecursively(state.elements);
            return { elements: newElements };
        });
    }
});