import { AnimatePresence, motion } from 'framer-motion'

import { CategoryHeader } from '../categoryHeader'
import { ElementCard } from '../elementCard'

import type { ElementBuilder, Section } from '../../../interfaces'

interface Props {
    section: Section
    isOpen: boolean
    onToggle: () => void
    handleDragStart: (element: ElementBuilder) => void
}
export const CategorySection = ({
    section,
    isOpen,
    onToggle,
    handleDragStart
}: Props): JSX.Element => {
    return (
        <div className="space-y-2">
            <CategoryHeader
                isOpen={isOpen}
                title={section.title}
                onToggle={onToggle}
            />
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            animate={{
                                height: "auto",
                                opacity: 1,
                                transition: {
                                    height: { duration: 0.3, ease: "easeOut" },
                                    opacity: { duration: 0.3, delay: 0.1 }
                                }
                            }}
                            className="overflow-hidden"
                            exit={{
                                height: 0,
                                opacity: 0,
                                transition: {
                                    height: { duration: 0.3, ease: "easeIn" },
                                    opacity: { duration: 0.2 }
                                }
                            }}
                            initial={{ height: 0, opacity: 0 }}
                        >
                            <div className="space-y-2 pt-1">
                                {section.items.map((item, index) => (
                                    <ElementCard
                                        key={index}
                                        element={item.element}
                                        handleDragStart={handleDragStart}
                                        icon={item.icon}
                                        label={item.label}
                                        preview={item.preview}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}
