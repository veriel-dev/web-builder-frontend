import { ContainerGridElement, } from "../../interfaces";
import { cn } from "../../lib/utils";
import { RenderElement } from "../RenderElement";


interface Props {
    element: ContainerGridElement;
    onDragOver?: (e: React.DragEvent) => void;
    onDrop?: (e: React.DragEvent) => void;
}


export const GridContainer = ({ element, onDragOver, onDrop }: Props) => {
    const { fontSize,
        color,
        backgroundColor,
        cols,
        align,
        gap,
        padding } = element
    return (
        <div
            className={cn(
                fontSize,
                color,
                backgroundColor,
                cols,
                align,
                gap,
                padding,
                'grid min-h-[100px] w-full rounded-lg border-2 border-dashed border-gray-200'
            )}
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
            {element.children?.map(child => (
                <div key={child.id} className="relative m-2">
                    <RenderElement element={child} />
                </div>
            ))}
        </div>
    );
};