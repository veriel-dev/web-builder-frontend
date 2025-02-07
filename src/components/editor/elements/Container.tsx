import { Type, MoveHorizontal, AlignLeft, Columns, ChevronDown, ArrowLeftRight, Move } from 'lucide-react';

import { bgOptions, colorTextOptions } from '../../../const/colors';
import { selectores } from '../../../const/container';
import { textEditor } from '../../../const/text-editor';

import { ColorPicker } from './colorPicker';
import { Selector } from './selector/Selector';
import { SelectorFlex } from './selectorFlex/SelectorFlex';
import { Tabs } from './tabs';

import type { ContainerElement, ElementBuilder } from '../../../interfaces'

interface Props {
    element: Extract<ElementBuilder, ContainerElement>;
}
export const Container = ({ element }: Props): JSX.Element => {
    return (
        <>
            {/* Tabs */}
            <Tabs />
            {/* Content */}
            <div className="container-content-editor">
                <div className='container-content-editor-element'>
                    {/* Direction */}
                    <SelectorFlex
                        cols="grid-cols-2"
                        element={element}
                        iconType={MoveHorizontal}
                        keyValue='direction'
                        selector={selectores.direction}
                        title={textEditor.direction}
                    />
                    {/* Align */}
                    <SelectorFlex
                        cols="grid-cols-3"
                        element={element}
                        iconType={AlignLeft}
                        keyValue="align"
                        selector={selectores.align}
                        title={textEditor.align}
                    />
                    {/* Justify */}
                    <SelectorFlex
                        cols="grid-cols-3"
                        element={element}
                        iconType={Columns}
                        keyValue="justify"
                        selector={selectores.justify}
                        title={textEditor.justify}
                    />
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
                    <Selector
                        element={element}
                        icon={ChevronDown}
                        iconType={Type}
                        keyValue="fontSize"
                        label={textEditor.fontSize}
                        options={selectores.fontSize}
                    />
                </div>
                <div className='container-content-editor-element' >
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
    )
}
