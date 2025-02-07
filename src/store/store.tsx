import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createDragDropSlice } from "./drop-state";
import { createEditorSlice } from "./editor-state";
import { createElementsSlice } from "./elements-state";

import type { DragDropState, DragDropActions } from "./drop-state";
import type { EditorActions, EditorState } from "./editor-state";
import type { ElementsState, ElementsActions } from "./elements-state";

export type SetState = {
    (
        partial:
            WebBuilderStore | Partial<WebBuilderStore>
            | ((state: WebBuilderStore) => WebBuilderStore | Partial<WebBuilderStore>),
        replace?: false
    ): void;
    (state: WebBuilderStore | ((state: WebBuilderStore) => WebBuilderStore), replace: true): void;
};

export type GetState = () => WebBuilderStore;


type WebBuilderState = ElementsState & DragDropState & EditorState;
type WebBuilderActions = ElementsActions & DragDropActions & EditorActions;
type WebBuilderStore = WebBuilderState & WebBuilderActions;

export const useWebBuilderStore = create<WebBuilderStore>()(
    devtools(
        (set, get) => ({
            ...createElementsSlice(set),
            ...createDragDropSlice(set, get),
            ...createEditorSlice(set)
        }),
        {
            name: 'WebBuilder Store', // Nombre que aparecerá en las DevTools
            enabled: process.env.NODE_ENV === 'development',
            // Opcionalmente puedes agregar más opciones de configuración
            serialize: {
                options: true  // Esto permite una mejor serialización de los datos
            }
        }
    )
);