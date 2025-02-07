import React from 'react'

import { ElementEditor } from '../editor'

import type { ElementBuilder, UpdatesByType } from '../../interfaces'

interface RecursiveElementEditor {
  elements: ElementBuilder[],
  editingElement: ElementBuilder | null,
  updateElement: (id: number, updates: UpdatesByType[keyof UpdatesByType]) => void
}
const ElementNode = React.memo(({
  element, // El elemento actual que se estás procesando  
  editingElement, // El elemento que está siendo editado (si existe)
  updateElement // Función para actualizar elementos 
}: {
  element: ElementBuilder,
  editingElement: ElementBuilder | null,
  updateElement: (id: number, updates: UpdatesByType[keyof UpdatesByType]) => void
}) => {
  // Caso 1: Si el elemento actual es el que está editando
  if (editingElement?.id === element.id) {
    return (
      <ElementEditor
        key={element.id}
        element={element}
        updateElement={updateElement}
      />
    );
  }

  // Caso 2: Si el elemento tiene hijos 
  if (element.children) {
    if (Array.isArray(element.children)) {
      return (
        <>
          {element.children.map(child => (
            <ElementNode
              key={child.id}
              editingElement={editingElement}
              element={child}
              updateElement={updateElement}
            />
          ))}
        </>
      );
    }
    // Caso 2b: Si es un solo hijo
    return (
      <ElementNode
        editingElement={editingElement}
        element={element.children}
        updateElement={updateElement}
      />
    );
  }
  // Caso 3: Si no hay hijos y no es el elemento en edición
  return null;
}, (prevProps, nextProps) => {
  // Solo re-renderizar si:
  // 1. El elemento actual es el que se está editando
  // 2. El elemento editado está dentro de sus children
  // 3. Ha cambiado el elemento que se está editando

  // Función auxiliar que verifica si un elemento contiene el elemento en edición
  // eslint-disable-next-line max-len
  const isOrHasEditingElement = (element: ElementBuilder, editingId: number | undefined): boolean => {
    // Si no hay ID de edición, no hay elemento editándose
    if (!editingId) { return false; }
    // Si este elemento es el que se está editando
    if (element.id === editingId) { return true; }
    // Si no tiene hijos, no puede contener el elemento en edición
    if (!element.children) { return false; }
    // Si tiene hijos en array, buscar en cada hijo
    if (Array.isArray(element.children)) {
      return element.children.some(child => isOrHasEditingElement(child, editingId));
    }
    // Si tiene un solo hijo, buscar en él
    return isOrHasEditingElement(element.children, editingId);
  };

  const prevEditingId = prevProps.editingElement?.id;
  const nextEditingId = nextProps.editingElement?.id;
  // Determina si este elemento o sus hijos necesitan actualizarse
  // podemos evitar el re-renderizado
  const shouldUpdate =
    isOrHasEditingElement(prevProps.element, prevEditingId) ||
    isOrHasEditingElement(nextProps.element, nextEditingId);
  // Return true significa NO re-renderizar
  // Return false significa SI re-renderizar
  return !shouldUpdate;
});
export const RecursiveElementEditorComponent = ({
  elements,
  editingElement,
  updateElement
}: RecursiveElementEditor) => {
  return (
    <>
      {elements.map(element => (
        <ElementNode
          key={element.id}
          editingElement={editingElement}
          element={element}
          updateElement={updateElement}
        />
      ))}
    </>
  );
};
