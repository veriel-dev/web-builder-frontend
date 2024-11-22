import { useState } from 'react';

import { Type, Layout, Grid, ChevronDown, Move, ArrowLeftRight } from 'lucide-react';

import { bgOptions, colorTextOptions } from '../../../const/colors';
import { selectores } from '../../../const/grid-container';

import { ColorPicker } from './colorPicker';
import { Selector } from './selector';

import type { ContainerGridElement, ElementBuilder } from '../../../interfaces';


interface Props {
    element: Extract<ElementBuilder, ContainerGridElement>;
}

export const GridContainer = ({ element }: Props): JSX.Element => {
    const [activeTab, setActiveTab] = useState<'style' | 'layout'>('style');
    return (
        <>
            {/* Tabs */}
            <div className="border-b border-gray-100">
                <nav className="flex">
                    <button
                        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'style'
                            ? 'text-gray-900 border-b-2 border-indigo-500'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                        onClick={() => setActiveTab('style')}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <Type className="w-4 h-4" />
                            <span>Estilo</span>
                        </div>
                    </button>
                    <button
                        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'layout'
                            ? 'text-gray-900 border-b-2 border-indigo-500'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                        onClick={() => setActiveTab('layout')}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <Layout className="w-4 h-4" />
                            <span>Layout</span>
                        </div>
                    </button>
                </nav>
            </div>
            {/* Content */}
            <div className="space-y-4">
                {/* Grid Columns */}
                <Selector
                    element={element}
                    icon={ChevronDown}
                    iconType={Grid}
                    keyValue="cols"
                    label="Columnas"
                    options={selectores.cols}
                />
                {/* Spacing Control */}

                <Selector
                    element={element}
                    icon={ChevronDown}
                    iconType={Move}
                    keyValue="padding"
                    label='Padding'
                    options={selectores.padding}
                />
                {/* Gap */}
                <Selector
                    element={element}
                    icon={ChevronDown}
                    iconType={ArrowLeftRight}
                    keyValue="gap"
                    label='Espacio entre elementos'
                    options={selectores.gap}
                />

                {/* Font Size */}
                <Selector
                    element={element}
                    icon={ChevronDown}
                    iconType={Type}
                    keyValue="fontSize"
                    label="Tamaño de Letra"
                    options={selectores.fontSize}
                />
                {/* Color Picker - Background Color */}
                <ColorPicker
                    colorOptions={bgOptions}
                    element={element}
                    keyValue="backgroundColor"
                    label="Color de fondo"
                />
                {/* Color Picker - Color */}
                <ColorPicker
                    colorOptions={colorTextOptions}
                    element={element}
                    keyValue="color"
                    label="Color de texto"
                />
            </div>

        </>
    );
};