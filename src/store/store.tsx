import { create } from "zustand";
import { ElementsState, ElementsActions, createElementsSlice } from "./elements-state";
import { DragDropState, DragDropActions, createDragDropSlice } from "./drop-state";
import { createEditorSlice, EditorActions, EditorState } from "./editor-state";

export type SetState = {
    (
        partial: WebBuilderStore | Partial<WebBuilderStore> | ((state: WebBuilderStore) => WebBuilderStore | Partial<WebBuilderStore>),
        replace?: false
    ): void;
    (state: WebBuilderStore | ((state: WebBuilderStore) => WebBuilderStore), replace: true): void;
};

export type GetState = () => WebBuilderStore;


type WebBuilderState = ElementsState & DragDropState & EditorState;
type WebBuilderActions = ElementsActions & DragDropActions & EditorActions;
type WebBuilderStore = WebBuilderState & WebBuilderActions;

export const useWebBuilderStore = create<WebBuilderStore>()((set, get) => ({
    ...createElementsSlice(set),
    ...createDragDropSlice(set, get),
    ...createEditorSlice(set)
}));