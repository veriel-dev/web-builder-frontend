import { ElementBuilder } from "../interfaces";
import { SetState } from "./store";

export interface EditorState {
    editingElement: ElementBuilder | null;
    selectedDevice: 'desktop' | 'tablet' | 'mobile';
    isPreviewMode: boolean
}

export interface EditorActions {
    setEditingElement: (element: ElementBuilder | null) => void;
    setSelectedDevice: (device: 'desktop' | 'tablet' | 'mobile') => void;
    setIsPreviewMode: () => void
}

export const createEditorSlice = (setState: SetState) => ({
    editingElement: null,
    selectedDevice: 'desktop' as const,
    isPreviewMode: false,
    setEditingElement: (element: ElementBuilder | null) =>
        setState({ editingElement: element }),
    setSelectedDevice: (device: 'desktop' | 'tablet' | 'mobile') =>
        setState({ selectedDevice: device }),
    setIsPreviewMode: () => setState((state) => ({ isPreviewMode: !state.isPreviewMode }))
});