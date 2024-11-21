import React from "react";
import { ElementBuilder } from "../interfaces";
import { SetState, GetState } from "./store";

export interface DragDropState {
    draggedElement: ElementBuilder | null;
    isDraggingOver: number | null;
}

export interface DragDropActions {
    setDraggedElement: (element: ElementBuilder | null) => void;
    setIsDraggingOver: (id: number | null) => void;
    handleDragStart: (element: ElementBuilder) => void;
    handleDrop: (e: React.DragEvent<HTMLDivElement>, containerId?: number | null) => void;
    handleDragOver: (e: React.DragEvent<HTMLDivElement>, containerId?: number | null) => void;
    handleDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
}

export const createDragDropSlice = (
    setState: SetState,
    getState: GetState
): DragDropState & DragDropActions => ({
    // Initial state
    draggedElement: null,
    isDraggingOver: null,

    // Actions
    setDraggedElement: (element: ElementBuilder | null) => 
        setState({ draggedElement: element }),

    setIsDraggingOver: (id: number | null) => 
        setState({ isDraggingOver: id }),

    handleDragStart: (element: ElementBuilder) => {
        setState({ draggedElement: element });
    },

    handleDrop: (
        e: React.DragEvent<HTMLDivElement>,
        containerId: number | null = null
    ) => {
        e.preventDefault();
        e.stopPropagation();

        const state = getState();
        setState({ isDraggingOver: null });

        if (!state.draggedElement) return;

        const newElement: ElementBuilder = {
            ...state.draggedElement,
            id: Date.now(),
            children: (
                state.draggedElement.type.includes("container") ||
                state.draggedElement.type.includes("grid-container")
            )
                ? []
                : undefined,
        };

        if (containerId) {
            setState((state) => ({
                elements: state.elements.map((element) => {
                    if (element.id === containerId) {
                        return {
                            ...element,
                            children: [...(element.children || []), newElement],
                        };
                    }

                    if (element.children) {
                        return {
                            ...element,
                            children: element.children.map((child) =>
                                child.id === containerId
                                    ? {
                                        ...child,
                                        children: [...(child.children || []), newElement],
                                    }
                                    : child
                            ),
                        };
                    }

                    return element;
                }),
            }));
        } else {
            state.addElement(newElement);
        }

        setState({ draggedElement: null });
    },

    handleDragOver: (
        e: React.DragEvent<HTMLDivElement>,
        containerId: number | null = null
    ) => {
        e.preventDefault();
        e.stopPropagation();
        setState({ isDraggingOver: containerId });
    },

    handleDragLeave: (
        e: React.DragEvent<HTMLDivElement>
    ) => {
        e.preventDefault();
        e.stopPropagation();
        setState({ isDraggingOver: null });
    },
});