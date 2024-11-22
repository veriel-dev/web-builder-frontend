import { bgOptions, colorTextOptions } from '../../../const/colors';
import { selectores } from '../../../const/grid-container';

import { ColorPicker } from './colorPicker';
import { Selector } from './selector';

import type { ContainerGridElement, ElementBuilder } from '../../../interfaces';


interface Props {
    element: Extract<ElementBuilder, ContainerGridElement>;
}

export const GridContainer = ({ element }: Props): JSX.Element => {
    return (
        <div>
            <div className="mt-4">
                <Selector
                    element={element}
                    keyValue="cols"
                    label="Columnas"
                    options={selectores.cols}
                />
            </div>
            <div className="mt-4">
                <Selector
                    element={element}
                    keyValue="gap"
                    label="Espacio entre elementos"
                    options={selectores.gap}
                />
            </div>

            <div className="mt-4">
                <Selector
                    element={element}
                    keyValue="padding"
                    label="Padding"
                    options={selectores.padding}
                />
            </div>
            <div className="mt-4">

                <Selector
                    element={element}
                    keyValue="fontSize"
                    label="Tamaño de letra"
                    options={selectores.fontSize}
                />
            </div>

            <div className="mt-4">
                <ColorPicker
                    colorOptions={bgOptions}
                    element={element}
                    keyValue="backgroundColor"
                    label="Color de fondo"
                />
            </div>
            <div className="mt-4">
                <ColorPicker
                    colorOptions={colorTextOptions}
                    element={element}
                    keyValue="color"
                    label="Color"
                />
            </div>
        </div >
    );
};