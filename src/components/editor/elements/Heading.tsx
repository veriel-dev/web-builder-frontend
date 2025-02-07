import { ChevronDown, Heading1, Move, Type } from "lucide-react";

import { colorTextOptions } from "../../../const/colors";
import { selectores } from "../../../const/heading";
import { textEditor } from "../../../const/text-editor";

import { ColorPicker } from "./colorPicker";
import { InputText } from "./inputText";
import { Selector } from "./selector";
import { Tabs } from "./tabs";

import type { ElementBuilder } from "../../../interfaces"



type ElementWithText = Extract<ElementBuilder, { text: string }>;

interface Props {
    element: ElementWithText;
}
export const Heading = ({ element }: Props) => {
    return (
        <>
            <Tabs />
            {/* Content */}
            <div className="container-content-editor">
                <div className='container-content-editor-element'>
                    {/* Text */}
                    <InputText element={element} keyValue="text" label="Texto" />

                    {/* Font Size */}
                    <Selector
                        element={element}
                        icon={ChevronDown}
                        iconType={Type}
                        keyValue="fontSize"
                        label={textEditor.fontSize}
                        options={selectores.fontSize}
                    />
                    {/* Font bold */}
                    <Selector
                        element={element}
                        icon={ChevronDown}
                        iconType={Type}
                        keyValue="fontWeight"
                        label={textEditor.fontWeight}
                        options={selectores.fontWeight}
                    />
                    {/* Padding */}
                    <Selector
                        element={element}
                        icon={ChevronDown}
                        iconType={Move}
                        keyValue="padding"
                        label={textEditor.padding}
                        options={selectores.padding}
                    />
                    {/* Margin */}
                    <Selector
                        element={element}
                        icon={ChevronDown}
                        iconType={Move}
                        keyValue="margin"
                        label={textEditor.margin}
                        options={selectores.margin}
                    />

                    {/* Text position */}
                    <Selector
                        element={element}
                        icon={ChevronDown}
                        iconType={Type}
                        keyValue="textPosition"
                        label={textEditor.textPosition}
                        options={selectores.textPosition}
                    />
                </div>
                <div className='container-content-editor-element'>
                    {/* Heading */}
                    <Selector
                        element={element}
                        icon={ChevronDown}
                        iconType={Heading1}
                        keyValue="level"
                        label={textEditor.heading}
                        options={selectores.level}
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
