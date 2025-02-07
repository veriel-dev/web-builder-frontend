
import { motion } from 'framer-motion';

import { cn } from '../../lib/utils'

import type { ContainerElement } from "../../interfaces"

interface Props {
    element: ContainerElement;
    children?: React.ReactNode[];
    toggleIsEditing: () => void
}

export const Container = ({ element, children = [], toggleIsEditing }: Props): JSX.Element => {

    const { direction, justify, align, gap, padding, backgroundColor, fontSize, color } = element

    return (
        children.length > 0 ? (
            <div className={cn(
                direction, justify, align, gap, padding, backgroundColor, fontSize, color,
                'flex flex-wrap h-full w-full rounded-lg border-2 border-dashed border-gray-200')}
            >
                {children}
            </div>
        ) : (
            <button
                className={cn(
                    direction, justify, align, gap, padding, backgroundColor, fontSize, color,
                    'flex flex-wrap h-full w-full cursor-pointer')}
                onClick={toggleIsEditing}
            >
                <div className="bg-transparentflex items-center justify-center w-[50%] h-[50%]">
                    <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        className="group relative overflow-hidden rounded-xl border border-gray-800 bg-blue-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-blue-800/75 hover:shadow-lg hover:shadow-gray-900/50 text-start h-full w-full"
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: 1 * 0.1 }}
                    >
                        <div className="relative flex flex-col justify-center items-center gap-4 h-full">
                            <span className="text-5xl font-bold text-gray-700 dark:text-slate-200 transition-colors group-hover:text-primary">
                                1
                            </span>
                        </div>
                    </motion.div>
                </div>
            </button>
        )

    );
}
