/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";

import { motion } from "framer-motion";

import { cn } from "../../lib/utils";

import type { ContainerGridElement, } from "../../interfaces";

interface Props {
    element: ContainerGridElement;
    children?: React.ReactNode[];
    toggleIsEditing: () => void;
}

const generateCells = (cols: string, rows: string, color: string) => {
    const totalCells = Number(cols.split("-")[2]) * Number(rows.split("-")[2]);
    return Array.from({ length: Math.min(totalCells, 100) }).map((_, index) => (
        <div
            key={index}
            className="bg-transparentflex items-center justify-center h-full"
        >
            <span className={cn(color, "text-3xl font-bold h-full")}>
                <motion.div
                    key={index}
                    animate={{ opacity: 1, y: 0 }}
                    className="group relative overflow-hidden rounded-xl border border-gray-800 bg-blue-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-blue-800/75 hover:shadow-lg hover:shadow-gray-900/50 text-start h-full"
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    <div className="relative flex flex-col justify-center items-center gap-4 h-full">
                        <span className="text-5xl font-bold text-gray-700 dark:text-slate-200 transition-colors group-hover:text-primary">
                            {index}
                        </span>
                    </div>
                </motion.div>
            </span>
        </div>
    ));
}
export const GridContainer = (
    { element, children = [], toggleIsEditing }: Props): JSX.Element => {
    const { cols, gap, padding, backgroundColor, color, rows, fontSize } = element
    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: `repeat(${cols.split("-")[2]}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows.split("-")[2]}, minmax(0, 1fr))`,
        gap: `${Number(gap.split("-")[1]) * 0.25}rem`
    }
    const handleContainerClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) { toggleIsEditing() }
    }
    return (

        children.length > 0 ? (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div className={
                cn(cols, gap, rows, padding, backgroundColor, color, fontSize,
                    "grid w-full h-full rounded-lg cursor-pointer"
                )}
                onClick={handleContainerClick}
            >
                {children}
            </div>
        ) : (
            <button
                className={cn(padding, backgroundColor, color, fontSize, "h-full w-full")}
                style={gridStyles}
                onClick={toggleIsEditing}
            >
                {generateCells(cols, rows, color!!)}
            </button>
        )
    );
};