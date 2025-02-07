


import { motion, AnimatePresence } from "framer-motion"
import { Palette } from "lucide-react"

import { useWebBuilderStore } from "../../store/store";
import { RecursiveElementEditorComponent } from "../constructor/RecursiveElementEditorComponent";

export const ContainerEditor = () => {
  const {
    elements,
    editingElement,
    updateElement
  } = useWebBuilderStore();
  return (
    editingElement && (
      <AnimatePresence>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="container-editor"
          exit={{ opacity: 0, scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container-editor__header">
            <Palette className="container-editor__header-icon" />
            <h2 className="container-editor__header-title">Editor</h2>
          </div>
          <div className="space-y-2">

            {elements.length > 0 && (
              <RecursiveElementEditorComponent
                editingElement={editingElement}
                elements={elements}
                updateElement={updateElement}
              />

            )
            }
          </div>
        </motion.div >
      </AnimatePresence>
    )

  )
}
