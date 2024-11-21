import { ContainerGridElement, } from "../../interfaces";
import { cn } from "../../lib/utils";


interface Props {
    element: ContainerGridElement;
    children?: React.ReactNode[];
}


export const GridContainer = ({ element, children = []}: Props) => {
    const { cols,  gap, padding, backgroundColor, label} = element
    return (
        <div className={cn(cols, gap, padding, backgroundColor, "grid min-h-[100px] w-full rounded-lg border-2 border-dashed border-gray-200")}>
            {children.length > 0 ? children : (
                <div className="text-gray-400 opacity-30 text-4xl font-bold w-full col-span-2 text-center">
                    {label}
                </div>
            )}
        </div>
    );
};