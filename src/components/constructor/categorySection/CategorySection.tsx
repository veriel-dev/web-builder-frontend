import { CategoryHeader } from '../categoryHeader'
import { AnimatePresence, motion } from 'framer-motion'
import { ElementCard } from '../elementCard'
import { ElementBuilder, Section } from '../../../interfaces'

interface Props {
    section: Section
    isOpen: boolean
    onToggle: () => void
    handleDragStart: (element: ElementBuilder) => void
}
export const CategorySection = ({ section, isOpen, onToggle, handleDragStart }: Props) => {
    return (
        <div className="space-y-2">
            <CategoryHeader
                title={section.title}
                isOpen={isOpen}
                onToggle={onToggle}
            />
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: "auto",
                                opacity: 1,
                                transition: {
                                    height: { duration: 0.3, ease: "easeOut" },
                                    opacity: { duration: 0.3, delay: 0.1 }
                                }
                            }}
                            exit={{
                                height: 0,
                                opacity: 0,
                                transition: {
                                    height: { duration: 0.3, ease: "easeIn" },
                                    opacity: { duration: 0.2 }
                                }
                            }}
                            className="overflow-hidden"
                        >
                            <div className="space-y-2 pt-1">
                                {section.items.map((item, index) => (
                                    <ElementCard
                                        key={index}
                                        icon={item.icon}
                                        label={item.label}
                                        preview={item.preview}
                                        element={item.element}
                                        handleDragStart={handleDragStart}
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
