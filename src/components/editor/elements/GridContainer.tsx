

import { Type, Grid, ChevronDown, Move, ArrowLeftRight } from 'lucide-react';

import { bgOptions, colorTextOptions } from '../../../const/colors';
import { selectores } from '../../../const/grid-container';

import { ColorPicker } from './colorPicker';
import { Selector } from './selector';
import { Tabs } from './tabs';

import type { ContainerGridElement, ElementBuilder } from '../../../interfaces';


interface Props {
    element: Extract<ElementBuilder, ContainerGridElement>;
}

export const GridContainer = ({ element }: Props): JSX.Element => {
    return (
        <>
            {/* Tabs */}
            <Tabs />
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