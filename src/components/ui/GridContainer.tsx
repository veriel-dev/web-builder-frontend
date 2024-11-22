import { cn } from "../../lib/utils";

import type { ContainerGridElement, } from "../../interfaces";


interface Props {
    element: ContainerGridElement;
    children?: React.ReactNode[];
}


export const GridContainer = ({ element, children = [] }: Props): JSX.Element => {
    const { cols, gap, padding, backgroundColor, label, color, fontSize } = element
    return (
        <div className={cn(cols, gap, padding, backgroundColor, color, fontSize, "grid min-h-[100px] w-full rounded-lg border-2 border-dashed border-gray-200")}>
            {children.length > 0 ? children : (
                <span className="font-bold text-start">
                    {label}
                </span>
            )}
        </div>
    );
};