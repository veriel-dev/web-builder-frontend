

import { Type, ChevronDown, Move, ArrowLeftRight, Rows2Icon, Columns2 } from 'lucide-react';

import { bgOptions, colorTextOptions } from '../../../const/colors';
import { selectores } from '../../../const/grid-container';
import { textEditor } from '../../../const/text-editor';

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
            <div className="container-content-editor">
                {/* Grid Columns */}
                <div className='container-content-editor-element'>
                    <Selector
                        element={element}
                        icon={ChevronDown}
                        iconType={Columns2}
                        keyValue="cols"
                        label={textEditor.cols}
                        options={selectores.cols}
                    />
                    <Selector
                        element={element}
                        icon={ChevronDown}
                        iconType={Rows2Icon}
                        keyValue="rows"
                        label={textEditor.rows}
                        options={selectores.rows}
                    />
                    {/* Spacing Control */}

                    <Selector
                        element={element}
                        icon={ChevronDown}
                        iconType={Move}
                        keyValue="padding"
                        label={textEditor.padding}
                        options={selectores.padding}
                    />
                    {/* Gap */}
                    <Selector
                        element={element}
                        icon={ChevronDown}
                        iconType={ArrowLeftRight}
                        keyValue="gap"
                        label={textEditor.gap}
                        options={selectores.gap}
                    />

                    {/* Font Size */}
                    <Selector
                        element={element}
                        icon={ChevronDown}
                        iconType={Type}
                        keyValue="fontSize"
                        label={textEditor.fontSize}
                        options={selectores.fontSize}
                    />
                </div>
                <div className='container-content-editor-element'>

                    {/* Color Picker - Background Color */}
                    <ColorPicker
                        colorOptions={bgOptions}
                        element={element}
                        keyValue="backgroundColor"
                        label={textEditor.backgroundColor}
                    />
                    {/* Color Picker - Color */}
                    <ColorPicker
                        colorOptions={colorTextOptions}
                        element={element}
                        keyValue="color"
                        label={textEditor.color}
                    />
                </div>
            </div>

        </>
    );
};