import { AlignLeft, ChevronDown, Columns, Move, Type } from "lucide-react";

import { bgOptions, colorTextOptions } from "../../../const/colors";
import { selectores } from "../../../const/container";
import { textEditor } from "../../../const/text-editor";
import { Button as ButtonUi } from "../../ui";

import { ColorPicker } from "./colorPicker";
import { Selector } from "./selector";
import { SelectorFlex } from "./selectorFlex/SelectorFlex";
import { SelectorHoverButton } from "./selectorHoverButton";
import { SelectorRadiusButton } from "./selectorRadiusButton";
import { Tabs } from "./tabs";

import type { ElementBuilder } from "../../../interfaces";



interface Props {
  element: ElementBuilder;
}
export const Button = ({ element }: Props) => {
  return (
    <>
      <Tabs title="Estilo del elemento" />
      <div className="container-content-editor">
        <div className='container-content-editor-element'>
          { /* Align */}
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
          {/* Gap */}
          <Selector
            element={element}
            icon={ChevronDown}
            iconType={Move}
            keyValue="padding"
            label={textEditor.padding}
            options={selectores.padding}
          />
          {/* Font Size*/}
          <Selector
            element={element}
            icon={ChevronDown}
            iconType={Type}
            keyValue="fontSize"
            label={textEditor.fontSize}
            options={selectores.fontSize}
          />
          {/* Font Weight */}
          <Selector
            element={element}
            icon={ChevronDown}
            iconType={Type}
            keyValue="fontWeight"
            label={textEditor.fontWeight}
            options={selectores.fontWeight}
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
      <div className="container-content-editor">
        <div className='container-content-editor-element'>
          <SelectorRadiusButton
            element={element}
            keyValue="borderRadius"
            label={textEditor.radius}
          />
        </div>
      </div>
      <Tabs title="Animaciones del elemento" />
      <div className="container-content-editor">
        <div className='container-content-editor-element'>
          <SelectorHoverButton element={element} keyValue="hover" />
        </div>
      </div>
      <Tabs title="Preview del elemento" />
      <ButtonUi {...element} />
    </>
  )
}
