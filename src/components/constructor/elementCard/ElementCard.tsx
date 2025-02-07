import React from 'react'

import { motion } from 'framer-motion'

import type { ElementBuilder } from '../../../interfaces'

interface Props {
    icon: React.ReactNode
    label: string
    preview: React.ReactNode
    element: ElementBuilder
    handleDragStart: (element: ElementBuilder) => void
}
export const ElementCard = ({
    icon,
    label,
    preview,
    element,
    handleDragStart
}: Props): JSX.Element => {
    return (
        <motion.div
            draggable
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onDragStart={() => handleDragStart(element as ElementBuilder)}
        >
            <button
                className="element-card group"
            >
                <div className="flex items-start gap-3 w-full">
                    <div className="element-card__icon">
                        {icon}
                    </div>
                    <div className="flex-1 space-y-2">
                        <span className="element-card__label">
                            {label}
                        </span>
                        <motion.div
                            className="element-card__preview group-hover:border-gray-200 dark:group-hover:border-slate-800"
                            transition={{ duration: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {preview}
                        </motion.div>
                    </div>
                </div>
            </button>
        </motion.div>
    )
}
