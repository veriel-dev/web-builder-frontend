import { Type, MoveHorizontal, AlignLeft, Columns, ChevronDown, ArrowLeftRight, Move } from 'lucide-react';

import { bgOptions, colorTextOptions } from '../../../const/colors';
import { selectores } from '../../../const/container';

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
            <div className=" flex gap-6">
                <div className='flex-1 space-y-4'>
                    {/* Direction */}
                    <SelectorFlex
                        cols="grid-cols-2"
                        element={element}
                        iconType={MoveHorizontal}
                        keyValue='direction'
                        selector={selectores.direction}
                        title="Dirección"
                    />
                    {/* Align */}
                    <SelectorFlex
                        cols="grid-cols-3"
                        element={element}
                        iconType={AlignLeft}
                        keyValue="align"
                        selector={selectores.align}
                        title="Alineación"
                    />
                    {/* Justify */}
                    <SelectorFlex
                        cols="grid-cols-3"
                        element={element}
                        iconType={Columns}
                        keyValue="justify"
                        selector={selectores.justify}
                        title="Justificación"
                    />
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
                    <Selector
                        element={element}
                        icon={ChevronDown}
                        iconType={Type}
                        keyValue="fontSize"
                        label="Tamaño de Letra"
                        options={selectores.fontSize}
                    />
                </div>
                <div className='flex-1 space-y-4' >
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
            </div>
        </>
    )
}
