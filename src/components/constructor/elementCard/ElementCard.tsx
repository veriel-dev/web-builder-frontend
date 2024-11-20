import { motion } from 'framer-motion'
import React from 'react'
import { ElementBuilder } from '../../../interfaces'

interface Props {
    icon: React.ReactNode
    label: string
    preview: React.ReactNode
    element: ElementBuilder
    handleDragStart: (element: ElementBuilder) => void
}
export const ElementCard = ({ icon, label, preview, element, handleDragStart }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onDragStart={() => handleDragStart(element as ElementBuilder)}
            draggable
        >
            <button
                className="w-full p-3 h-auto bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-300 ease-in-out group"
            >
                <div className="flex items-start gap-3 w-full">
                    <div className="text-gray-600 pt-1">
                        {icon}
                    </div>
                    <div className="flex-1 space-y-2">
                        <span className="text-sm font-medium text-gray-600 block text-left">
                            {label}
                        </span>
                        <motion.div
                            className="w-full min-h-[40px] flex items-center justify-center p-2 bg-white rounded border border-gray-100 group-hover:border-gray-200 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            {preview}
                        </motion.div>
                    </div>
                </div>
            </button>
        </motion.div>
    )
}
